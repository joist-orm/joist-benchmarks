import Table from "cli-table3";
import colors from "colors";
import * as mikro from "benchmark-mikroorm";
import { Context, getData, operations } from "seed-data";

// Define benchmark sizes
const sizes = [1, 10, 100, 1000];

const orms = {
  mikro: {
    getContext: mikro.getContext,
    getOperations: mikro.getOperations,
  },
};

// I want a table of
// opOne_1    mikro | joist | etc. | fastest
// opOne_10
// opTwo_1
// opTwo_10
type BenchmarkResult = {
  operation: string;
  size: number;
  orms: Record<string, number>;
};

const contexts: Map<string, Context> = new Map();

async function runBenchmark(): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = [];
  for (const [op, sizes] of Object.entries(operations)) {
    for (const size of sizes) {
      const row: Record<string, number> = {};
      for (const [name, config] of Object.entries(orms)) {
        try {
          const ctx = contexts.get(name) ?? (await config.getContext());
          contexts.set(name, ctx);
          const o = config.getOperations()[op as keyof typeof operations];
          if (o) {
            console.log(`Running ${op} x ${name} x ${size}`);
            const seedData = getData(size);
            const runCtx = { ...ctx, size, seedData };
            await o.beforeEach(runCtx);
            // Ideally we'd loop to get samples
            const startTime = performance.now();
            await o.run(runCtx);
            const endTime = performance.now();
            row[name] = endTime - startTime;
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
  });
  for (const result of results) {
    const row = [result.operation, result.size];
    for (const ormName of ormNames) {
      const time = result.orms[ormName];
      row.push(time ? time.toString() : "N/A");
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

runAllBenchmarks().catch(console.error);
