import { Author, Book, BookReview, Tag } from "./entities.ts";
import { cleanDatabase, MikroOperation } from "./index.ts";

export const bulkCreate: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
  },

  async run(ctx) {
    const { orm, seedData } = ctx;
    // Start a transaction
    const em = orm.em.fork();
    await em.begin();

    try {
      // Create authors
      for (const authorData of seedData.authors) {
        em.create(Author, {
          id: authorData.id,
          firstName: authorData.firstName,
          lastName: authorData.lastName,
          email: authorData.email,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const bookData of seedData.books) {
        const author = em.getReference(Author, bookData.authorId);
        em.create(Book, {
          id: bookData.id,
          title: bookData.title,
          author: author,
          published: new Date(bookData.published),
          pages: bookData.pages,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const reviewData of seedData.reviews) {
        const book = em.getReference(Book, reviewData.bookId);
        em.create(BookReview, {
          id: reviewData.id,
          book: book,
          rating: reviewData.rating,
          text: reviewData.text,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const tagData of seedData.tags) {
        em.create(Tag, {
          id: tagData.id,
          name: tagData.name,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const { bookId, tagId } of seedData.bookTags) {
        const book = em.getReference(Book, bookId);
        const tag = em.getReference(Tag, tagId);
        book.tags.add(tag);
      }

      // Commit the transaction
      await em.commit();
    } catch (error) {
      await em.rollback();
      throw error;
    }
  },
};
