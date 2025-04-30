import { booksPerAuthor, reviewsPerBook, tagsPerBook } from "./generator.ts";
import { SeedData } from "./index.ts";

/**
 * A base cross-run/per-ORM context with stats/info that will
 * be passed to each operation.
 *
 * Each ORM can extend this base context with its own extra information,
 * i.e. it's ORM-specific connection pool, or ORM-specific configuration
 * settings.
 */
export type Context = {
  /** The size (i.e. number of authors) for this run. */
  size: number;
  /** The seed data that matches `size`. */
  seedData: SeedData;
  shutdown?: () => Promise<void>;
};

/**
 * A specific operation that will be benchmarked, i.e. `bulkLoad` or `bulkCreate`.
 *
 * Ideally operations are written to be configurable based on `size`, so we
 * can benchmark "bulk loading 1 author", "bulk loading 10 authors", etc.
 *
 * Each ORM should implement each operation, i.e. Joist would have a bulkCreate
 * implementation, and a bulkLoad implementation, and Prisma would have its own
 * two implementations, etc.
 */
export type Operation<C extends Context> = {
  beforeEach(ctx: C): Promise<void>;
  run(ctx: C): Promise<void>;
};

/**
 * A map of all operations that each ORM should implement.
 */
export type AllOperations<C extends Context> = {
  bulkCreate: Operation<C> | undefined;
  bulkLoad: Operation<C> | undefined;
  simpleCreate: Operation<C> | undefined;
};

export const operations = {
  bulkCreate: {
    sizes: [1, 10, 100],
    description: (n: number) =>
      `Creates ${n} authors, ${n * booksPerAuthor} books, ${n * booksPerAuthor * reviewsPerBook} reviews, ${n * booksPerAuthor * tagsPerBook} tags`,
  },
  bulkLoad: {
    sizes: [1, 10, 100],
    description: (n: number) =>
      `Loads ${n} authors, ${n * booksPerAuthor} books, ${n * booksPerAuthor * reviewsPerBook} reviews, ${n * booksPerAuthor * tagsPerBook} tags`,
  },
  simpleCreate: {
    sizes: [1, 10, 100, 1000],
    description: (n: number) => `Creates ${n} authors`,
  },
};
