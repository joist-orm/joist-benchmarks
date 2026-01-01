import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";
import pg from "pg";

const { Pool } = pg;

export type NodePgContext = Context & { pool: pg.Pool };
export type NodePgOperation = Operation<NodePgContext>;

export function getOperations(): AllOperations<NodePgContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function getContext(): Promise<Pick<NodePgContext, "pool" | "shutdown">> {
  const pool = new Pool({ connectionString: getDatabaseUrl("node_pg") });
  return { pool, shutdown: () => pool.end() };
}

export async function cleanDatabase(ctx: NodePgContext): Promise<void> {
  await ctx.pool.query("DELETE FROM book_tag");
  await ctx.pool.query("DELETE FROM book_review");
  await ctx.pool.query("DELETE FROM book");
  await ctx.pool.query("DELETE FROM author");
  await ctx.pool.query("DELETE FROM tag");
}
