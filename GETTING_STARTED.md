# Getting Started with Joist Benchmarks

This document will help you get up and running with the benchmarks.

## Prerequisites

- Node.js (v16+)
- Yarn (v2+)
- Docker and Docker Compose

## Initial Setup

1. Install dependencies:

```bash
yarn install
```

2. Start PostgreSQL database:

```bash
docker-compose up -d
```

3. Generate seed data for benchmarks:

```bash
yarn gen:seed-data
```

4. Generate Prisma client:

```bash
yarn workspace benchmark-prisma generate
```

## Running Benchmarks

You can run all benchmarks at once:

```bash
yarn bench:all
```

Or run them individually:

```bash
# Run Prisma benchmarks
yarn prisma:bench

# Run TypeORM benchmarks
yarn typeorm:bench

# Run MikroORM benchmarks
yarn mikroorm:bench
```

## Project Structure

- `packages/shared-utils`: Common utilities and interfaces
- `packages/benchmark-prisma`: Prisma implementation
- `packages/benchmark-typeorm`: TypeORM implementation
- `packages/benchmark-mikroorm`: MikroORM implementation
- `data/`: Generated seed data
- `sql/`: Database initialization scripts

## Additional Commands

```bash
# Clean node_modules
yarn clean
```