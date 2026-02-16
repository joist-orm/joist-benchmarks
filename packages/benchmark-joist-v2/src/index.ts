import { PostgresDriver } from "joist-orm/pg";
import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { findInLoop } from "./find-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import knex, { type Knex } from "knex";

export type JoistContext = Context & { conn: Knex; driver: PostgresDriver; preload: boolean };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "conn" | "preload">> {
  const conn = knex({ client: "pg", connection: getDatabaseUrl("joist_v2") });
  const driver = new PostgresDriver(conn);
  return { conn, driver, shutdown: () => conn.destroy(), preload: false };
}

export async function getContextPreload(): Promise<Pick<JoistContext, "driver" | "shutdown" | "conn" | "preload">> {
  const conn = knex({ client: "pg", connection: getDatabaseUrl("joist_v2") });
  const driver = new PostgresDriver(conn);
  return { conn, driver, shutdown: () => conn.destroy(), preload: true };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.conn.raw(`TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE`);
}
