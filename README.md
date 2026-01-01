# Joist ORM Benchmarks

## Current Results

![Current benchmark results](./2026-01-01-results.png)

This project benchmarks the performance of various TypeScript ORMs:

- Prisma
- TypeORM
- MikroORM
- Joist (v1/v2)

## Focus

The current focus is not on load (many concurrent requests), but just single-request latency for common operations, i.e.:

- Inserting into 1 table w/variety of row sizes (simpleCreate)
- Inserting into multiple tables with variety of row sizes (bulkCreate)
- Loading a tree of data with various sizes, i.e. for creating a JSON response (bulkLoad)
- etc.

Where we look for:

- How long the operation takes (latency)
- How many queries the ORM used to perform the operation

(Currently we run each benchmark operation 10 times, and discard the two slowest, to reduce noise from outliers.)

### Latency Injection

Since we're measuring latency, and the affect of fewer raw queries or statement pipelining (both features that Joist v2 leverages), the latency between the application (Node process) & database (postgres) is an important factor.

Specifically, we _don't_ want it to be zero, b/c that would not match production, and so would under-measure the affect of these optimizations.

To solve this, we use Shopify's [toxiproxy](https://github.com/Shopify/toxiproxy/) to inject a configurable amount of latency (defaults to 2ms) between the application and database. This can be configured with the `--latency` flag.

### Recorded Queries

Because we're interested in the physical SQL queries each ORM generates (to reason about how they affect performance), we use the `pg_stat_statements` extension to record all queries executed during the benchmark runs.

After each run, queries can be examined in the `./queries/` directory.

### Joist's Performance Pitch

Joist is a "high-level", [entity-based](https://joist-orm.io/modeling/why-entities/) ORM.

Conventional thinking asserts that Joist's higher-level abstractions should defacto come at a performance cost, and always loose out to hand-crafted SQL from a raw SQL statement, or a lower-level query-based ORM.

But these benchmarks show that Joist's separation between "your logical entity updates" and "the physical SQL statements" allows Joist to generate highly-optimized, Postgres-specific SQL that outperforms the `UPDATE`s & `INSERT`s most users, or most ORMs, would write by hand.

In particular, we use:

* Data CTEs and the `unnest` keyword to perform bulk inserts/updates with a fixed number of parameters ([see TigerData's post](https://www.tigerdata.com/blog/boosting-postgres-insert-performance))
* Prepared statements (via the postgres.js driver), which have a higher hit-rate with the fixed param sizes
* Statement pipelining during `em.flush` to remove blocking on multiple `INSERT`s/`UPDATE`s
* Automatic batching for `SELECT`s-in-a-loop via [dataloader](https://github.com/graphql/dataloader)

None of these techniques are unique to Joist, i.e. hand-crafted SQL can obviously use the `unnest`, prepared statements, and pipelining techniques as well--but Joist is currently the only ORM where you get all of these optimizations for free.

## Project Structure

The repository is set up as a Yarn v4 workspace with the following projects:

- `packages/seed-data`: Common utilities and database schema definitions
- `packages/benchmark-prisma`: Prisma benchmark implementation
- `packages/benchmark-typeorm`: TypeORM benchmark implementation
- `packages/benchmark-mikroorm`: MikroORM benchmark implementation
- ...etc...

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

## Pipeline Benchmarks

There is an additional pipelining-specific benchmark:

```bash
yarn pipeline
```

## Misc SQL

Enabling statement logging:

```sql
ALTER SYSTEM SET log_statement = 'all';
SELECT pg_reload_conf();
```
