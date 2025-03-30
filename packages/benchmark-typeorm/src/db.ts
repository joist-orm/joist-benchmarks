import "reflect-metadata";
import { DataSource } from "typeorm";
import { Author, Book, BookReview, Tag, BookTag } from "./entities";
import { DB_CONFIG } from "seed-data";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  synchronize: false,
  logging: false,
  entities: [Author, Book, BookReview, Tag, BookTag],
});
