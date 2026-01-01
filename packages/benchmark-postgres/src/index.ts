import { AllOperations, Context, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";
import postgres from "postgres";

export type PostgresContext = Context & { sql: ReturnType<typeof postgres> };
export type PostgresOperation = Operation<PostgresContext>;

export function getOperations(): AllOperations<PostgresContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function getContext(): Promise<Pick<PostgresContext, "sql" | "shutdown">> {
  const sql = postgres({
    host: "localhost",
    port: 5432,
    database: "benchmark",
    username: "postgres",
    password: "postgres",
    connection: { application_name: "postgres_js" },
  });
  return { sql, shutdown: () => sql.end() };
}

export async function cleanDatabase(ctx: PostgresContext): Promise<void> {
  await ctx.sql`DELETE FROM book_tag`;
  await ctx.sql`DELETE FROM book_review`;
  await ctx.sql`DELETE FROM book`;
  await ctx.sql`DELETE FROM author`;
  await ctx.sql`DELETE FROM tag`;
}
