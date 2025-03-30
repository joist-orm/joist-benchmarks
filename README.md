# Joist ORM Benchmarks

This project benchmarks the performance of various TypeScript ORMs:

- Prisma
- TypeORM
- MikroORM

## Project Structure

The repository is set up as a Yarn v4 workspace with the following projects:

- `packages/shared-utils`: Common utilities and database schema definitions
- `packages/benchmark-prisma`: Prisma benchmark implementation
- `packages/benchmark-typeorm`: TypeORM benchmark implementation
- `packages/benchmark-mikroorm`: MikroORM benchmark implementation

## Database Schema

The benchmark uses a simple schema with four entities:

- `Author`: Authors of books
- `Book`: Books written by authors
- `BookReview`: Reviews of books
- `Tag`: Tags that can be applied to books

## Benchmarks

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

## Running Benchmarks

```bash
# Start the database
docker compose up -d

# Run all benchmarks
yarn bench:all

# Run specific benchmark
yarn prisma:bench
yarn typeorm:bench
yarn mikroorm:bench
```
