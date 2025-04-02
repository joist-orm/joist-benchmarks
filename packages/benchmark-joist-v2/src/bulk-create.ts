import { Author, Book, BookReview, EntityManager, Tag } from "./entities/index.ts";
import { cleanDatabase, JoistOperation } from "./index.ts";

export const bulkCreate: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run(ctx) {
    const { driver, seedData } = ctx;
    const em = new EntityManager({}, { driver });

    for (const row of seedData.authors) {
      em.create(Author, {
        id: `a:${row.id}`,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
      });
    }

    for (const row of seedData.books) {
      em.create(Book, {
        id: `b:${row.id}`,
        title: row.title,
        author: em.getEntity(`a:${row.authorId}`) as Author,
        published: new Date(row.published),
        pages: row.pages,
      });
    }

    for (const row of seedData.reviews) {
      em.create(BookReview, {
        id: `br:${row.id}`,
        book: em.getEntity(`b:${row.bookId}`) as Book,
        rating: row.rating,
        text: row.text,
      });
    }

    for (const row of seedData.tags) {
      em.create(Tag, { id: `t:${row.id}`, name: row.name });
    }

    for (const { bookId, tagId } of seedData.bookTags) {
      const book = em.getEntity(`b:${bookId}`) as Book;
      const tag = em.getEntity(`t:${tagId}`) as Tag;
      book.tags.add(tag);
    }

    await em.flush();
  },
};
