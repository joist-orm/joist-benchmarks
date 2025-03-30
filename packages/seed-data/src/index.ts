import fs from "fs";
import { resolve } from "path";
import { Author, Book, BookReview, Tag } from "./interfaces";

export * from "./interfaces";

export const DB_CONFIG = {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "benchmark",
};

type SeedData = {
  authors: Author[];
  books: Book[];
  reviews: BookReview[];
  tags: Tag[];
  bookTags: { bookId: number; tagId: number }[];
};

export function getData(size: number): SeedData {
  const seedFile = resolve(__dirname, `./seed-${size}.json`);
  return JSON.parse(fs.readFileSync(seedFile, "utf8"));
}

export const measure = async (fn: () => Promise<void>): Promise<number> => {
  const start = Date.now();
  await fn();
  return Date.now() - start;
};

export async function benchmark(
  name: string,
  sizesToRun: number[],
  fn: (size: number) => Promise<number>,
): Promise<void> {
  console.log(`\n--- ${name} ---`);
  console.log("Size\tDuration (ms)");

  for (const size of sizesToRun) {
    const duration = await fn(size);
    console.log(`${size}\t${duration}ms`);
  }
}
