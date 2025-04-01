import { bulkCreate, bulkLoad } from "./benchmark";
import { dbKnex } from "./db";

async function runBenchmarks() {
  const sizes = [1, 10, 100, 1000];
  const iterations = 5;

  console.log("Running Joist benchmarks...");

  for (const size of sizes) {
    console.log(`\nRunning benchmarks for size ${size}:`);
    
    // Bulk Load
    let totalLoadTime = 0;
    for (let i = 0; i < iterations; i++) {
      const loadTime = await bulkLoad(size);
      totalLoadTime += loadTime;
      console.log(`  Load iteration ${i + 1}: ${loadTime.toFixed(2)} ms`);
    }
    const avgLoadTime = totalLoadTime / iterations;
    console.log(`  Average Load time: ${avgLoadTime.toFixed(2)} ms`);
    
    // Bulk Create
    let totalCreateTime = 0;
    for (let i = 0; i < iterations; i++) {
      const createTime = await bulkCreate(size);
      totalCreateTime += createTime;
      console.log(`  Create iteration ${i + 1}: ${createTime.toFixed(2)} ms`);
    }
    const avgCreateTime = totalCreateTime / iterations;
    console.log(`  Average Create time: ${avgCreateTime.toFixed(2)} ms`);
  }

  // Close the database connection
  await dbKnex.destroy();
}

runBenchmarks().catch(console.error);