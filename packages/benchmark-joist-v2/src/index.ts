import { PostgresDriver } from "joist-orm";
import knex, { type Knex } from "knex";
import { AllOperations, Context, DB_CONFIG, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";

export type JoistContext = Context & { knex: Knex; driver: PostgresDriver };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "knex">> {
  const conn = knex({
    client: "pg",
    connection: {
      host: DB_CONFIG.host,
      port: DB_CONFIG.port,
      user: DB_CONFIG.username,
      password: DB_CONFIG.password,
      database: DB_CONFIG.database,
    },
  });
  const driver = new PostgresDriver(conn);
  return { knex: conn, driver, shutdown: () => conn.destroy() };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.knex.raw("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
}
