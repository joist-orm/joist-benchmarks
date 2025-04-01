import Table from "cli-table3";
import colors from "colors";
import * as mikro from "benchmark-mikroorm";
import { Context, getData, operations } from "seed-data";

const orms = {
  mikro: {
    getContext: mikro.getContext,
    getOperations: mikro.getOperations,
  },
};

// I want a table of
// opOne_1    mikro | joist | etc. | fastest
// opOne_10   ...
// opTwo_1    ...
// opTwo_10   ...
type BenchmarkResult = {
  operation: string;
  size: number;
  orms: Record<string, number[]>;
};

// Track the connection pools to shutdown
const contexts: Map<string, Context> = new Map();

const samples = Array(5);

async function runBenchmark(): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = [];
  for (const [op, sizes] of Object.entries(operations)) {
    for (const size of sizes) {
      const row: Record<string, number[]> = {};
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
            for (const _ of samples) {
              await o.beforeEach(runCtx);
              const startTime = performance.now();
              await o.run(runCtx);
              const endTime = performance.now();
              durations.push(endTime - startTime);
            }
            row[name] = durations;
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
    head: ["Operation", "Size", ...ormNames.map((orm) => colors.cyan(orm))],
    colAligns: ["left", "right", ...ormNames.map(() => "right" as const)],
  });
  for (const result of results) {
    const row = [result.operation, result.size];
    for (const ormName of ormNames) {
      const times = result.orms[ormName];
      row.push(times ? averageMilliseconds(times) : "N/A");
    }
    table.push(row);
  }
  console.log(table.toString());
}

async function runAllBenchmarks(): Promise<void> {
  console.log(colors.green("\n=== ORM BENCHMARKS ===\n"));
  const results = await runBenchmark();
  displayResults(results);
  for (const [, ctx] of contexts.entries()) {
    if (ctx.shutdown) await ctx.shutdown();
  }
}

function averageMilliseconds(durations: number[]): string {
  if (durations.length === 0) {
    return "0.00";
  }
  const sum = durations.reduce((total, duration) => total + duration, 0);
  const average = sum / durations.length;
  return average.toFixed(2);
}

runAllBenchmarks().catch(console.error);
