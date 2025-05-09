import { PostgresDriver } from "joist-orm";
import postgres, { type Sql } from "postgres";
import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { findInLoop } from "./find-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";

export type JoistContext = Context & { sql: Sql; driver: PostgresDriver; preload: boolean };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "sql" | "preload">> {
  const sql = postgres(getDatabaseUrl("joist_v2"));
  const driver = new PostgresDriver(sql);
  return { sql, driver, shutdown: () => sql.end(), preload: false };
}

export async function getContextPreload(): Promise<Pick<JoistContext, "driver" | "shutdown" | "sql" | "preload">> {
  const sql = postgres(getDatabaseUrl("joist_v2_pre"));
  const driver = new PostgresDriver(sql);
  return { sql, driver, shutdown: () => sql.end(), preload: true };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.sql`TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE`;
}
