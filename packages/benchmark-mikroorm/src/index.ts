import { MikroORM } from "@mikro-orm/core";
import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { AllOperations, Context, Operation } from "benchmark";
import { DB_CONFIG } from "seed-data";
import { bulkCreate } from "./bulk-create";
import { bulkLoad } from "./bulk-load";
import { Author, Book, BookReview, Tag } from "./entities";

export type MikroContext = Context & { orm: MikroORM };
export type MikroOperation = Operation<MikroContext>;

export async function getOperations(): Promise<AllOperations<MikroContext>> {
  const config = defineConfig({
    entities: [Author, Book, BookReview, Tag],
    dbName: DB_CONFIG.database,
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    user: DB_CONFIG.username,
    password: DB_CONFIG.password,
    driver: PostgreSqlDriver,
    debug: false,
  });

  const orm: MikroORM = await MikroORM.init(config);

  return {
    bulkCreate,
    bulkLoad,
    shutdown: () => orm.close(),
  };
}

export async function cleanDatabase(orm: MikroORM): Promise<void> {
  await orm.em.getConnection().execute("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
  console.log("Database cleaned");
}
