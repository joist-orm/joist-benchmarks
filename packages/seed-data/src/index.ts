import fs from "fs";
import { resolve } from "path";
import { Author, Book, BookReview, Tag } from "./interfaces.ts";

export * from "./interfaces.ts";
export * from "./operations.ts";

export const DB_CONFIG = {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "benchmark",
};

export type SeedData = {
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
