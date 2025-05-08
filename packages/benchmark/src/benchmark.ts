import { parseCliArguments } from "@cloud-copilot/cli";
import * as drizzle from "benchmark-drizzle";
import * as joist_v1 from "benchmark-joist-v1";
import * as joist_v2 from "benchmark-joist-v2";
import * as mikro from "benchmark-mikroorm";
import * as prisma from "benchmark-prisma";
import * as typeorm from "benchmark-typeorm";
import Table from "cli-table3";
import colors from "colors";
import fs from "fs/promises";
import postgres from "postgres";
import { Context, getDatabaseUrl, getData, operations } from "seed-data";
import { setToxiproxyLatency } from "./toxi-init.ts";

const orms = {
  typeorm: { getContext: typeorm.getContext, getOperations: typeorm.getOperations },
  mikro: { getContext: mikro.getContext, getOperations: mikro.getOperations },
  prisma: { getContext: prisma.getContext, getOperations: prisma.getOperations },
  drizzle: { getContext: drizzle.getContext, getOperations: drizzle.getOperations },
  joist_v1: { getContext: joist_v1.getContext, getOperations: joist_v1.getOperations },
  joist_v2: { getContext: joist_v2.getContext, getOperations: joist_v2.getOperations },
  joist_v2_pre: { getContext: joist_v2.getContextPreload, getOperations: joist_v2.getOperations },
};

const sql = postgres(getDatabaseUrl("driver"));

// I want a table of
// opOne_1    mikro | joist | etc. | fastest
// opOne_10   ...
// opTwo_1    ...
// opTwo_10   ...
type BenchmarkResult = {
  operation: string;
  size: number;
  orms: Record<string, { durations: number[]; queries: number }>;
};

// Track the connection pools to shutdown
const contexts: Map<string, Context> = new Map();

// How many times to run each operation; we'll take the average
const samples = Array(10);

async function runBenchmark(ops: string[], _sizes: number[] | undefined): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = [];
  for (const op of ops) {
    const sizes = _sizes || (operations as any)[op].sizes;
    for (const size of sizes) {
      const row: Record<string, { durations: number[]; queries: number }> = {};
      for (const [name, config] of Object.entries(orms)) {
        try {
          const ctx = contexts.get(name) ?? (await config.getContext());
          contexts.set(name, ctx);
          const o = config.getOperations()[op as keyof typeof operations];
          if (o) {
            console.log(`Running ${op} x ${name} x ${size}`);
            const seedData = getData(size);
            const runCtx = { ...ctx, size, seedData };
            // Loop to get some samples
            const durations: number[] = [];
            let queries = 0;
            for (const _ of samples) {
              await o.beforeEach(runCtx);
              await sql`SELECT pg_stat_statements_reset()`;

              // Run the operation and measure the time taken
              const startTime = performance.now();
              await o.run(runCtx);
              const endTime = performance.now();

              // Get the number of queries issued
              const stats = await sql`
                select sum(calls) as calls from pg_stat_statements
                where query not like '%pg_stat%' and query not like '%pg_catalog%'
              `;
              durations.push(endTime - startTime);
              queries += Number(stats[0].calls);

              // Save the queries issued to a file
              const debug = await sql`
                select query from pg_stat_statements
                where query not like '%pg_stat%' and query not like '%pg_catalog%'
              `;
              await fs.writeFile(`./queries/${name}-${op}-${size}.sql`, debug.map((d) => d.query).join("\n"));
            }
            row[name] = { durations, queries: Math.round(queries / samples.length) };
          }
        } catch (error) {
          console.error(`Error running benchmark for ${name} (${op}, size ${size}):`, error);
          console.log(`Skipping ${name} for this operation...`);
        }
      }
      results.push({ operation: op, size, orms: row });
    }
  }
  return results;
}

function displayResults(results: BenchmarkResult[]): void {
  const ormNames = Object.keys(orms);
  const table = new Table({
    head: ["Operation", "Size", "Description", ...ormNames.map((orm) => colors.cyan(orm))],
    colAligns: ["left", "right", "left", ...ormNames.map(() => "right" as const)],
  });
  for (const result of results) {
    // Start the table row with `op x size x description`
    const row = [result.operation, result.size, (operations as any)[result.operation].description(result.size)];

    // stats sorted by time
    const sorted = Object.entries(result.orms).sort((a, b) => {
      const aAvg = averageMilliseconds(a[1].durations);
      const bAvg = averageMilliseconds(b[1].durations);
      return aAvg - bAvg;
    });

    // Then all the ORM results
    for (const ormName of ormNames) {
      const mine = result.orms[ormName];
      const place = sorted.findIndex(([name]) => name === ormName) + 1;
      const colorFn = place === 1 ? colors.bold.green : place === 2 ? colors.green : (s: string) => s;
      row.push(
        mine
          ? colorFn(`#${place} ${averageMilliseconds(mine.durations).toFixed(1)}ms`) + ` (q=${mine.queries})`
          : "N/A",
      );
    }
    table.push(row);
  }

  console.log(table.toString());
}

async function runAllBenchmarks(): Promise<void> {
  const cli = parseCliArguments(
    "benchmark",
    {},
    {
      op: {
        type: "string",
        values: "multiple",
        description: "operations to run",
        validValues: Object.keys(operations),
        default: Object.keys(operations),
      },
      size: { type: "number", values: "multiple", description: "sizes to invoke each operation with" },
      latency: { type: "number", values: "single", description: "latency of SQL operation in millis", default: 2 },
    },
  );

  console.log(colors.green("\n=== ORM BENCHMARKS ===\n"));
  const ops = cli.args.op ?? Object.keys(operations);
  // cli.args.size is `number[]` but I expected `number[] | undefined` b/c it doesn't have a default
  const sizes = cli.args.size ?? undefined;
  // cli.args.latency is `number | undefined`, but I expected `number` b/c it has a default
  await setToxiproxyLatency(cli.args.latency ?? 2);
  const results = await runBenchmark(ops, sizes);
  displayResults(results);
  for (const [, ctx] of contexts.entries()) {
    if (ctx.shutdown) await ctx.shutdown();
  }
}

/** Given the durations (based on the number of samples), return the average in milliseconds. */
function averageMilliseconds(durations: number[]): number {
  if (durations.length === 0) {
    return 0;
  }
  // Sort and remove the two highest & two lowest values
  const copy = [...durations].sort().slice(2, -2);
  const sum = copy.reduce((total, duration) => total + duration, 0);
  const average = sum / copy.length;
  return average;
}

runAllBenchmarks()
  .catch(console.error)
  .finally(() => sql.end());
