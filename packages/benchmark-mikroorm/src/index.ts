import { MikroORM } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { AllOperations, Context, DB_CONFIG, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { Author, Book, BookReview, Tag } from "./entities.ts";

export type MikroContext = Context & { orm: MikroORM };
export type MikroOperation = Operation<MikroContext>;

export async function getContext(): Promise<any> {
  try {
    const config = defineConfig({
      entities: [Author, Book, BookReview, Tag],
      discovery: {
        disableDynamicFileAccess: true,
        warnWhenNoEntities: false,
      },
      dbName: DB_CONFIG.database,
      host: DB_CONFIG.host,
      port: DB_CONFIG.port,
      user: DB_CONFIG.username,
      password: DB_CONFIG.password,
      driver: PostgreSqlDriver,
      metadataProvider: TsMorphMetadataProvider,
      debug: true,
    });

    const orm: MikroORM = await MikroORM.init(config);
    const shutdown = () => orm.close();
    return { orm, shutdown };
  } catch (error) {
    console.error("Failed to initialize MikroORM:", error);
    throw error;
  }
}

export function getOperations(): AllOperations<MikroContext> {
  return {
    bulkCreate,
    bulkLoad,
  };
}

export async function cleanDatabase(orm: MikroORM): Promise<void> {
  await orm.em.getConnection().execute("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
  console.log("Database cleaned");
}
