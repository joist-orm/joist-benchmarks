import { PrismaOperation, cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";

export const loadInLoop: PrismaOperation = {
  async beforeEach(ctx) {
    await cleanDatabase();
    await bulkCreate.run(ctx);
  },

  async run({ prisma }) {
    const authors = await prisma.author.findMany();

    await Promise.all(
      authors.map(async (author) => {
        await prisma.author.findUnique({
          where: { id: author.id },
          include: { books: true },
        });
      })
    );
  },
};
