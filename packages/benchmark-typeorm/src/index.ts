import { AllOperations, Context, Operation } from "seed-data";
import { DataSource } from "typeorm";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { simpleCreate } from "./simple-create.ts";
import { AppDataSource } from "./db.ts";

export type TypeOrmContext = Context & { dataSource: DataSource };
export type TypeOrmOperation = Operation<TypeOrmContext>;

export async function getContext(): Promise<Pick<TypeOrmContext, "dataSource" | "shutdown">> {
  const dataSource = AppDataSource;
  await AppDataSource.initialize();
  return { dataSource, shutdown: () => dataSource.destroy() };
}

export function getOperations(): AllOperations<TypeOrmContext> {
  return {
    bulkCreate,
    bulkLoad,
    simpleCreate,
  };
}

export async function cleanDatabase(dataSource: DataSource): Promise<void> {
  await dataSource.query("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
}
