import { cleanDatabase, PrismaOperation } from "./index.ts";

export const bulkCreate: PrismaOperation = {
  async beforeEach() {
    await cleanDatabase();
  },

  async run({ prisma, seedData }) {
    await prisma.$transaction(async (tx) => {
      await tx.author.createMany({ data: seedData.authors });
      await tx.book.createMany({ data: seedData.books });
      await tx.bookReview.createMany({ data: seedData.reviews });
      await tx.tag.createMany({ data: seedData.tags });
      await tx.bookTag.createMany({ data: seedData.bookTags });
    });
  },
};
