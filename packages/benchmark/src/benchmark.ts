import Table from "cli-table3";
import colors from "colors";
import * as mikro from "benchmark-mikroorm";
import * as prisma from "benchmark-prisma";
import * as joist_v1 from "benchmark-joist-v1";
import * as joist_v2 from "benchmark-joist-v2";
import postgres from "postgres";
import { Context, getData, operations, DB_CONFIG } from "seed-data";
import fs from "fs/promises";
import { setToxiproxyLatency } from "./toxi-init.ts";

const orms = {
  mikro: { getContext: mikro.getContext, getOperations: mikro.getOperations },
  prisma: { getContext: prisma.getContext, getOperations: prisma.getOperations },
  joist_v1: { getContext: joist_v1.getContext, getOperations: joist_v1.getOperations },
  joist_v2: { getContext: joist_v2.getContext, getOperations: joist_v2.getOperations },
  joist_v2_pre: { getContext: joist_v2.getContextPreload, getOperations: joist_v2.getOperations },
};

const sql = postgres(DB_CONFIG.url);

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

async function runBenchmark(): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = [];
  for (const [op, { sizes }] of Object.entries(operations)) {
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
    // Then all the ORM results
    for (const ormName of ormNames) {
      const stats = result.orms[ormName];
      row.push(stats ? `${averageMilliseconds(stats.durations)}ms (${stats.queries})` : "N/A");
    }
    table.push(row);
  }
  console.log(table.toString());
}

async function runAllBenchmarks(): Promise<void> {
  console.log(colors.green("\n=== ORM BENCHMARKS ===\n"));
  await setToxiproxyLatency(2);
  const results = await runBenchmark();
  displayResults(results);
  for (const [, ctx] of contexts.entries()) {
    if (ctx.shutdown) await ctx.shutdown();
  }
}

/** Given the durations (based on the number of samples), return the average in milliseconds. */
function averageMilliseconds(durations: number[]): string {
  if (durations.length === 0) {
    return "0.00";
  }
  // Sort and remove the two highest & two lowest values
  const copy = [...durations].sort().slice(2, -2);
  const sum = copy.reduce((total, duration) => total + duration, 0);
  const average = sum / copy.length;
  return average.toFixed(2);
}

runAllBenchmarks()
  .catch(console.error)
  .finally(() => sql.end());
