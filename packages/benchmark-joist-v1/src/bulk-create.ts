import { bulkCreate } from "./benchmark";

// Get the size from command line arguments
const size = parseInt(process.argv[2] || "100", 10);

// Run the benchmark
bulkCreate(size)
  .then((time) => {
    console.log(`Bulk create time: ${time.toFixed(2)} ms`);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });