import { AllOperations, Context, Operation } from "seed-data";
import { bulkCreate } from "./bulk-create.ts";
import { bulkLoad } from "./bulk-load.ts";
import { loadInLoop } from "./load-in-loop.ts";
import { simpleCreate } from "./simple-create.ts";
import { PrismaClient } from "./prisma-client/index.js";

export type PrismaContext = Context & { prisma: PrismaClient };
export type PrismaOperation = Operation<PrismaContext>;

const prisma = new PrismaClient();

export function getOperations(): AllOperations<PrismaContext> {
  return { bulkCreate, bulkLoad, simpleCreate, loadInLoop };
}

export async function getContext(): Promise<any> {
  return { prisma, shutdown: () => prisma.$disconnect() };
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
