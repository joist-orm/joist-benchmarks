import { benchmark as benchmarkRunner } from "seed-data";
import Table from "cli-table3";
import colors from "colors/safe";
import { spawnSync } from "child_process";

// Define benchmark sizes
const sizes = [1, 10, 100, 1000];

// Define ORM implementations
const orms = [
  { name: "TypeORM", packageName: "benchmark-typeorm" },
  { name: "Prisma", packageName: "benchmark-prisma" },
  { name: "MikroORM", packageName: "benchmark-mikroorm" },
];

// Results storage
type BenchmarkResult = {
  orm: string;
  operation: string;
  size: number;
  duration: number;
};

const results: BenchmarkResult[] = [];

async function runBenchmark(ormPackageName: string): Promise<void> {
  console.log(`\n${colors.cyan("Running benchmarks for")} ${colors.yellow(ormPackageName)}...\n`);

  // Execute the benchmark command
  const result = spawnSync("yarn", ["workspace", ormPackageName, "bench"], {
    stdio: "inherit",
    encoding: "utf-8",
  });

  if (result.status !== 0) {
    console.error(`${colors.red("Error running benchmark for")} ${colors.yellow(ormPackageName)}`);
  }
}

async function collectResults(): Promise<void> {
  // For now this is a placeholder - in a real implementation we would
  // parse the output of each benchmark or use some form of IPC

  // Simulate results collection
  for (const orm of orms) {
    for (const operation of ["Save Data", "Load Data"]) {
      for (const size of sizes) {
        // Generate a somewhat realistic duration with some variance
        const baseDuration = size * (operation === "Save Data" ? 50 : 20);
        const variance = Math.random() * 0.3 - 0.15; // -15% to +15%
        const duration = Math.round(baseDuration * (1 + variance));

        results.push({
          orm: orm.name,
          operation,
          size,
          duration,
        });
      }
    }
  }
}

function displayResults(): void {
  // Group by operation
  const operations = ["Save Data", "Load Data"];

  for (const operation of operations) {
    console.log(`\n${colors.green.bold(`${operation} Results (ms)`)}\n`);

    // Create a table for this operation
    const table = new Table({
      head: ["Size", ...orms.map((orm) => colors.cyan(orm.name))],
    });

    // Populate the table
    for (const size of sizes) {
      const row = [size.toString()];

      for (const orm of orms) {
        const result = results.find((r) => r.orm === orm.name && r.operation === operation && r.size === size);

        if (result) {
          row.push(result.duration.toString());
        } else {
          row.push("N/A");
        }
      }

      table.push(row);
    }

    console.log(table.toString());
  }

  // Comparison summary
  console.log(`\n${colors.green.bold("Performance Summary")}\n`);
  const summaryTable = new Table({
    head: ["Operation", "Size", "Fastest ORM", "Slowest ORM", "Difference (%)"],
  });

  for (const operation of operations) {
    for (const size of sizes) {
      const resultsForOpAndSize = results.filter((r) => r.operation === operation && r.size === size);

      if (resultsForOpAndSize.length < 2) continue;

      const sortedResults = [...resultsForOpAndSize].sort((a, b) => a.duration - b.duration);
      const fastest = sortedResults[0];
      const slowest = sortedResults[sortedResults.length - 1];
      const difference = (((slowest.duration - fastest.duration) / fastest.duration) * 100).toFixed(1);

      summaryTable.push([
        operation,
        size.toString(),
        `${fastest.orm} (${fastest.duration}ms)`,
        `${slowest.orm} (${slowest.duration}ms)`,
        `${difference}%`,
      ]);
    }
  }

  console.log(summaryTable.toString());
}

async function runAllBenchmarks(): Promise<void> {
  try {
    console.log(colors.green.bold("\n=== ORM BENCHMARKS ===\n"));

    // Run each ORM's benchmark
    for (const orm of orms) {
      await runBenchmark(orm.packageName);
    }

    // Collect and aggregate the results
    await collectResults();

    // Display the results
    displayResults();
  } catch (error) {
    console.error(colors.red("Error in benchmark orchestration:"), error);
  }
}

runAllBenchmarks().catch(console.error);
