import { AllOperations, Context, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";
import { Pool } from "postgrejs";

export type PostgrejsContext = Context & { pool: Pool };
export type PostgrejsOperation = Operation<PostgrejsContext>;

export function getOperations(): AllOperations<PostgrejsContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function getContext(): Promise<Pick<PostgrejsContext, "pool" | "shutdown">> {
  const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "benchmark",
    applicationName: "postgrejs",
    min: 1,
    max: 10,
  });
  return { pool, shutdown: () => pool.close() };
}

export async function cleanDatabase(ctx: PostgrejsContext): Promise<void> {
  await ctx.pool.query("DELETE FROM book_tag");
  await ctx.pool.query("DELETE FROM book_review");
  await ctx.pool.query("DELETE FROM book");
  await ctx.pool.query("DELETE FROM author");
  await ctx.pool.query("DELETE FROM tag");
}
