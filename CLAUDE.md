# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is a benchmark suite for TypeScript ORMs, comparing the performance of various ORM libraries:

- Prisma
- TypeORM
- MikroORM
- Joist v1
- Joist v2
- Drizzle

The benchmarks measure performance across different operations (bulkCreate, bulkLoad, simpleCreate) with varying data sizes (1, 10, 100, 1000 entries).

## Common Commands

### Setup and Installation

```bash
# Install dependencies
yarn install

# Start PostgreSQL database with Docker
yarn db:up

# Generate seed data for benchmarks
yarn generate-seed-data

# Generate Prisma client (required for Prisma benchmarks)
yarn workspace benchmark-prisma generate
```

### Running Benchmarks

```bash
# Run all benchmarks
yarn benchmark

# Run specific benchmarks & size
yarn benchmark --op bulkCreate --size 1
```

### Testing

Claude should only run a single benchmark with a single size at a time, otherwise it will take too long.

## Architecture

The project is structured as a Yarn v4 workspace with multiple packages:

- `packages/seed-data`: Common utilities, database schema definitions, and seed data
- `packages/benchmark`: Main benchmark runner and reporting
- `packages/benchmark-*`: Individual ORM implementations (prisma, typeorm, mikroorm, joist-v1, joist-v2, drizzle)

### Key Components

1. **Database Schema**: A simple schema with four entities:
   - `Author`: Authors of books
   - `Book`: Books written by authors
   - `BookReview`: Reviews of books
   - `Tag`: Tags that can be applied to books

2. **Benchmark Operations**:
   - `bulkCreate`: Creates multiple authors with associated books, reviews, and tags
   - `bulkLoad`: Loads multiple authors with their associated data
   - `simpleCreate`: Creates authors without relationships

3. **ToxiProxy Integration**:
   - The benchmark uses ToxiProxy to simulate network latency for more realistic tests
   - This helps measure ORMs under consistent network conditions

4. **Result Reporting**:
   - Results are displayed in a formatted table showing execution time and query count
   - The fastest ORM for each operation is highlighted

## Workflow

The typical workflow for benchmarking:

1. Start the PostgreSQL database with Docker Compose
2. Generate seed data if needed
3. Run a single benchmark with the `--op` and `--size` flags
4. Analyze results in the console output

Each benchmark test:
1. Sets up the necessary data
2. Resets PostgreSQL statement statistics
3. Runs the operation and measures execution time
4. Counts the number of SQL queries performed
5. Saves the queries to a file for analysis
