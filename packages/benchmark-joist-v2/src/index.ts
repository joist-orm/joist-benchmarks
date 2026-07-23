import { PostgresDriver } from "joist-orm/pg";
import pg from "pg";
import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { findInLoop } from "./find-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";

const { Pool } = pg;

export type JoistContext = Context & { pool: pg.Pool; driver: PostgresDriver; preload: boolean };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "pool" | "preload">> {
  const pool = new Pool({ connectionString: getDatabaseUrl("joist_v2") });
  const driver = new PostgresDriver(pool);
  return { pool, driver, shutdown: () => pool.end(), preload: false };
}

export async function getContextPreload(): Promise<Pick<JoistContext, "driver" | "shutdown" | "pool" | "preload">> {
  const pool = new Pool({ connectionString: getDatabaseUrl("joist_v2") });
  const driver = new PostgresDriver(pool);
  return { pool, driver, shutdown: () => pool.end(), preload: true };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.pool.query(`TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE`);
}
