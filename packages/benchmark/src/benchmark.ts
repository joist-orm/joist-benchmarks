import { parseCliArguments, enumArrayArgument, numberArgument, numberArrayArgument } from "@cloud-copilot/cli";
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

async function runBenchmark(ormKeys: string[], ops: string[], _sizes: number[] | undefined): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = [];
  for (const op of ops) {
    // Use the configured size, otherwise each operation has a default set of sizes
    const sizes = _sizes || (operations as any)[op].sizes;
    for (const size of sizes) {
      const row: Record<string, { durations: number[]; queries: number }> = {};
      for (const [name, config] of Object.entries(orms)) {
        if (!ormKeys.includes(name)) continue;
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
                select sum(calls) as calls, query from pg_stat_statements
                where query not like '%pg_stat%' and query not like '%pg_catalog%'
                group by query
              `;
              durations.push(endTime - startTime);
              queries += Number(stats.map((s) => Number(s.calls)).reduce((a, b) => a + b));
              await fs.writeFile(
                `./queries/${name}-${op}-${size}.sql`,
                stats.map((s) => `num=${s.calls} sql=${s.query}`).join("\n"),
              );
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

function displayResults(ormNames: string[], results: BenchmarkResult[]): void {
  // Sort ormNames by total duration across all results (fastest first)
  const totalDurations = new Map<string, number>();
  for (const ormName of ormNames) {
    let total = 0;
    for (const result of results) {
      const mine = result.orms[ormName];
      if (mine) {
        total += averageMilliseconds(mine.durations);
      }
    }
    totalDurations.set(ormName, total);
  }
  const sortedOrmNames = [...ormNames].sort((a, b) => totalDurations.get(a)! - totalDurations.get(b)!);

  const table = new Table({
    head: ["Operation", "Size", "Description", ...sortedOrmNames.map((orm) => colors.cyan(orm))],
    colAligns: ["left", "right", "left", ...sortedOrmNames.map(() => "center" as const)],
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

    // Find the slowest time for the bar chart
    const slowestTime = sorted.length > 0 ? averageMilliseconds(sorted[sorted.length - 1][1].durations) : 0;

    // Then all the ORM results
    for (const ormName of sortedOrmNames) {
      const mine = result.orms[ormName];
      const place = sorted.findIndex(([name]) => name === ormName) + 1;
      const colorFn = place === 1 ? colors.bold.green : place === 2 ? colors.green : (s: string) => s;
      if (mine) {
        const avg = averageMilliseconds(mine.durations);
        const barLength = slowestTime > 0 ? Math.round((avg / slowestTime) * 10) : 0;
        const bar = "█".repeat(barLength) + "░".repeat(10 - barLength);
        row.push([colorFn(`#${place} ${avg.toFixed(1)}ms`), bar, `#q=${mine.queries}`].join("\n"));
      } else {
        row.push("N/A");
      }
    }
    table.push(row);
  }

  console.log(table.toString());
}

async function runAllBenchmarks(): Promise<void> {
  const cli = await parseCliArguments(
    "benchmark",
    {},
    {
      orm: enumArrayArgument({
        description: `orms to run (${Object.keys(orms).join(", ")})`,
        validValues: Object.keys(orms),
        defaultValue: Object.keys(orms),
      }),
      op: enumArrayArgument({
        description: "operations to run (" + Object.keys(operations).join(", ") + ")",
        validValues: Object.keys(operations),
        defaultValue: Object.keys(operations),
      }),
      size: numberArrayArgument({ description: "sizes to invoke each operation with" }),
      latency: numberArgument({  description: "latency of SQL operation in millis", defaultValue: 2 }),
    },
    { expectOperands: false },
  );

  const ormNames = cli.args.orm && cli.args.orm.length > 0 ? cli.args.orm : Object.keys(orms);
  const ops = cli.args.op && cli.args.op.length > 0 ? cli.args.op : Object.keys(operations);
  // cli.args.size is `number[]` but I expected `number[] | undefined` b/c it doesn't have a default
  const sizes = cli.args.size && cli.args.size.length > 0 ? cli.args.size : undefined;
  // cli.args.latency is `number | undefined`, but I expected `number` b/c it has a default
  const latency = cli.args.latency ?? 2;

  console.log(colors.green("=== ORM BENCHMARKS ==="));
  console.log(colors.green("orms=") + ormNames);
  console.log(colors.green("ops=") + ops);
  console.log(colors.green("sizes=") + (sizes ?? "defaults"));
  console.log(colors.green("latency=") + latency);
  console.log("");
  await setToxiproxyLatency(latency);
  const results = await runBenchmark(ormNames, ops, sizes);
  displayResults(ormNames, results);
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
