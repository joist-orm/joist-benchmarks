import { PostgresDriver } from "joist-orm";
import knex, { type Knex } from "knex";
import { AllOperations, Context, getDatabaseUrl, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";

export type JoistContext = Context & { knex: Knex; driver: PostgresDriver };
export type JoistOperation = Operation<JoistContext>;

export async function getContext(): Promise<Pick<JoistContext, "driver" | "shutdown" | "knex">> {
  const conn = knex({
    client: "pg",
    connection: getDatabaseUrl("joist_v1"),
  });
  const driver = new PostgresDriver(conn);
  return { knex: conn, driver, shutdown: () => conn.destroy() };
}

export function getOperations(): AllOperations<JoistContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function cleanDatabase(ctx: JoistContext): Promise<void> {
  await ctx.knex.raw("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
}
