import { cleanDatabase, PrismaOperation } from "./index.ts";

export const simpleCreate: PrismaOperation = {
  async beforeEach() {
    await cleanDatabase();
  },

  async run({ prisma, seedData }) {
    await prisma.$transaction(async (tx) => {
      // Only insert authors (1, 10, or 100)
      await tx.author.createMany({ data: seedData.authors });
    });
  },
};
