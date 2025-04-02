import { PostgresDriver } from "joist-orm";
import postgres, { type Sql } from "postgres";
import { AllOperations, Context, DB_CONFIG, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";

export type JoistContext = Context & { sql: Sql; driver: PostgresDriver };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "sql">> {
  const sql = postgres(DB_CONFIG.url);
  const driver = new PostgresDriver(sql);
  return { sql, driver, shutdown: () => sql.end() };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.sql`TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE`;
}
