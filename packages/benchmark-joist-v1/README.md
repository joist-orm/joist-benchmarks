# Joist ORM Benchmark

This package contains benchmarks for the [joist-orm](https://joist-orm.io/) library.

## Running the benchmark

First, ensure the database is running and initialized:

```bash
docker-compose up -d
```

Generate the Joist entity code:

```bash
yarn generate
```

Then run the benchmark:

```bash
yarn bench
```

## Tests

The benchmark runs two tests:

1. `bulkLoad`: Tests how quickly Joist can load a set of entities with relationships
2. `bulkCreate`: Tests how quickly Joist can create a set of entities with relationships

Each test is run with different dataset sizes (1, 10, 100, 1000) and averaged over multiple iterations.