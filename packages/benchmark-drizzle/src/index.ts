import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.ts";

export type DrizzleOrmContext = Context & { db: ReturnType<typeof drizzle<typeof schema>> };
export type DrizzleOperation = Operation<DrizzleOrmContext>;

export function getOperations(): AllOperations<DrizzleOrmContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function getContext(): Promise<Pick<DrizzleOrmContext, "db" | "shutdown">> {
  const sql = postgres(getDatabaseUrl("drizzle"));
  const db = drizzle(sql, { schema });
  return { db, shutdown: () => sql.end() };
}

export async function cleanDatabase(ctx: DrizzleOrmContext): Promise<void> {
  await ctx.db.delete(schema.bookTags);
  await ctx.db.delete(schema.bookReviews);
  await ctx.db.delete(schema.books);
  await ctx.db.delete(schema.authors);
  await ctx.db.delete(schema.tags);
}
