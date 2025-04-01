import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
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
  // Get the directory name of the current module in ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const seedFile = path.resolve(__dirname, `../seed-${size}.json`);
  return JSON.parse(fs.readFileSync(seedFile, "utf8"));
}
