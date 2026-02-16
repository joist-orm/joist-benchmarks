import { AllOperations, Context, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { findInLoop } from "./find-in-loop.ts";
import { PrismaClient } from "./prisma-client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

export type PrismaContext = Context & { prisma: PrismaClient };
export type PrismaOperation = Operation<PrismaContext>;

// Create connection pool and adapter
const adapter = new PrismaPg({
  connectionString: "postgresql://postgres:postgres@localhost:5432/benchmark?application_name=prisma_v7",
});
const prisma = new PrismaClient({ adapter });

export function getOperations(): AllOperations<PrismaContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop, findInLoop };
}

export async function getContext(): Promise<any> {
  return {
    prisma,
    shutdown: async () => {
      await prisma.$disconnect();
    },
  };
}

export async function cleanDatabase(): Promise<void> {
  await prisma.$transaction([
    prisma.bookTag.deleteMany(),
    prisma.bookReview.deleteMany(),
    prisma.book.deleteMany(),
    prisma.author.deleteMany(),
    prisma.tag.deleteMany(),
  ]);
}
