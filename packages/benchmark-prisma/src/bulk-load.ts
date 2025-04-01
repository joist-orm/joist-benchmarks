import { PrismaOperation, cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";

export const bulkLoad: PrismaOperation = {
  async beforeEach(ctx) {
    await cleanDatabase();
    await bulkCreate.run(ctx);
  },

  async run({ prisma, size }) {
    await prisma.author.findMany({
      include: { books: { include: { reviews: true, tags: { include: { tag: true } } } } },
    });
  },
};
