import "reflect-metadata";
import { DataSource } from "typeorm";
import { Author, Book, BookReview, Tag, BookTag } from "./entities.ts";
import { getDatabaseUrl } from "seed-data";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: getDatabaseUrl("typeorm"),
  synchronize: false,
  logging: false,
  entities: [Author, Book, BookReview, Tag, BookTag],
});
