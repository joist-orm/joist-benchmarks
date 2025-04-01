import { cleanDatabase, PrismaOperation } from "./index.ts";

export const bulkCreate: PrismaOperation = {
  async beforeEach() {
    await cleanDatabase();
  },

  async run({ prisma, seedData }) {
    await prisma.$transaction(async (tx) => {
      for (const authorData of seedData.authors) {
        const { id, firstName, lastName, email } = authorData;
        await tx.author.create({ data: { id, firstName, lastName, email } });
      }
      for (const bookData of seedData.books) {
        const { id, title, authorId, published, pages } = bookData;
        await tx.book.create({ data: { id, title, authorId, published, pages } });
      }
      for (const reviewData of seedData.reviews) {
        const { id, bookId, rating, text } = reviewData;
        await tx.bookReview.create({ data: { id, bookId, rating, text } });
      }
      for (const tagData of seedData.tags) {
        const { id, name } = tagData;
        await tx.tag.create({ data: { id, name } });
      }
      for (const { bookId, tagId } of seedData.bookTags) {
        await tx.bookTag.create({ data: { bookId, tagId } });
      }
    });
  },
};
