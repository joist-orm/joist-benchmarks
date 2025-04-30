import { MikroORM } from "@mikro-orm/core";
import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { AllOperations, Context, DB_CONFIG, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { simpleCreate } from "./simple-create.ts";
import { AuthorSchema, BookReviewSchema, BookSchema, TagSchema } from "./entities.ts";

export type MikroContext = Context & { orm: MikroORM };
export type MikroOperation = Operation<MikroContext>;

export async function getContext(): Promise<Pick<MikroContext, "orm" | "shutdown">> {
  const config = defineConfig({
    entities: [AuthorSchema, BookSchema, BookReviewSchema, TagSchema],
    dbName: DB_CONFIG.database,
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    user: DB_CONFIG.username,
    password: DB_CONFIG.password,
    driver: PostgreSqlDriver,
    // debug: true,
  });
  const orm: MikroORM = await MikroORM.init(config);
  return { orm, shutdown: () => orm.close() };
}

export function getOperations(): AllOperations<MikroContext> {
  return {
    bulkCreate,
    bulkLoad,
    simpleCreate,
  };
}

export async function cleanDatabase(orm: MikroORM): Promise<void> {
  await orm.em.getConnection().execute("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
}
