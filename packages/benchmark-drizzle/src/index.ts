import { AllOperations, Context, DB_CONFIG, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { simpleCreate } from "./simple-create.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.ts";

export type DrizzleOrmContext = Context & { db: ReturnType<typeof drizzle<typeof schema>> };
export type DrizzleOperation = Operation<DrizzleOrmContext>;

export function getOperations(): AllOperations<DrizzleOrmContext> {
  return { bulkCreate, bulkLoad, simpleCreate };
}

export async function getContext(): Promise<Pick<DrizzleOrmContext, "db" | "shutdown">> {
  const sql = postgres(DB_CONFIG.url);
  const db = drizzle(sql, { schema });
  return {
    db,
    shutdown: () => sql.end(),
  };
}

export async function cleanDatabase(): Promise<void> {
  const ctx = await getContext();
  await ctx.db.delete(schema.bookTags);
  await ctx.db.delete(schema.bookReviews);
  await ctx.db.delete(schema.books);
  await ctx.db.delete(schema.authors);
  await ctx.db.delete(schema.tags);
}
