import { PrismaOperation, cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";

export const findInLoop: PrismaOperation = {
  async beforeEach(ctx) {
    await cleanDatabase();
    await bulkCreate.run(ctx);
  },

  async run({ prisma, size }) {
    const authors = await prisma.author.findMany();
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        await prisma.bookReview.findMany({
          where: { rating, book: { authorId: author.id } },
        });
      }),
    );
  },
};
