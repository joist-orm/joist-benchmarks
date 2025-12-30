# Joist ORM Benchmarks

This project benchmarks the performance of various TypeScript ORMs:

- Prisma
- TypeORM
- MikroORM
- Joist (v1/v2)

## Project Structure

The repository is set up as a Yarn v4 workspace with the following projects:

- `packages/seed-data`: Common utilities and database schema definitions
- `packages/benchmark-prisma`: Prisma benchmark implementation
- `packages/benchmark-typeorm`: TypeORM benchmark implementation
- `packages/benchmark-mikroorm`: MikroORM benchmark implementation

## Database Schema

The benchmark uses a simple schema with four entities:

- `Author`: Authors of books
- `Book`: Books written by authors
- `BookReview`: Reviews of books
- `Tag`: Tags that can be applied to books

## Primary Benchmarks

```bash
# Start the database
docker compose up -d

# Generate json files with seed data (one time)
yarn generate-seed-data

# Run all benchmarks
yarn benchmark

# Or run individual orms/operations
yarn benchmark --orm joist joist_v2 --op bulkCreate
```

### Benchmark Operations

Each benchmark suite tests:

1. Loading data:

- Single author with associated books and reviews
- 10 authors with associated books and reviews
- 100 authors with associated books and reviews
- 1000 authors with associated books and reviews

2. Saving data:
- Single new author with associated book and review
- 10 new authors with associated books and reviews
- 100 new authors with associated books and reviews
- 1000 new authors with associated books and reviews

## Pipeline Benchmarks

There is an additional pipelining-specific benchmark:

```bash
yarn pipeline
```

---

Test x sizes:

- bulk-create (1, 10, 100, 1000)
  - Setup: Clean database, load seed data `n` into memory
  - Test: Insert the `n` rows
- bulk-update (1, 10, 100, 1000)
  - Setup: Clean database, save the seed `n`
  - Test: Load all `n` rows, and update each one
- bulk-load (1, 10, 100, 1000)
  - Setup: Clean database, save the seed `n`
  - Test: Load the seed data `n` tree of data
- loop-load (1, 10, 100, 1000)
  - Setup: Clean database, save the seed `n`
  - Test: Load the seed data `n` in a loop
- dup-some (1, 10, 100, 1000)
  - Setup: Clean database, save the seed `n`
  - Test: Load max(rand(1%-5%, 1)) of the data
