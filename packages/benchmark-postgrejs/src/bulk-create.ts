import { cleanDatabase, PostgrejsOperation } from "./index.ts";

export const bulkCreate: PostgrejsOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run({ pool, seedData }) {
    const conn = await pool.acquire();

    try {
      await conn.query("BEGIN");

      // Insert authors
      if (seedData.authors.length > 0) {
        const authorValues: any[] = [];
        const authorPlaceholders: string[] = [];
        seedData.authors.forEach((author, i) => {
          const offset = i * 4;
          authorPlaceholders.push(`($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`);
          authorValues.push(author.id, author.firstName, author.lastName, author.email);
        });
        await conn.query(
          `INSERT INTO author (id, first_name, last_name, email) VALUES ${authorPlaceholders.join(", ")}`,
          { params: authorValues },
        );
      }

      // Insert books
      if (seedData.books.length > 0) {
        const bookValues: any[] = [];
        const bookPlaceholders: string[] = [];
        seedData.books.forEach((book, i) => {
          const offset = i * 5;
          bookPlaceholders.push(`($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5})`);
          bookValues.push(
            book.id,
            book.title,
            book.authorId,
            book.published ? new Date(book.published) : null,
            book.pages,
          );
        });
        await conn.query(
          `INSERT INTO book (id, title, author_id, published, pages) VALUES ${bookPlaceholders.join(", ")}`,
          { params: bookValues },
        );
      }

      // Insert reviews
      if (seedData.reviews.length > 0) {
        const reviewValues: any[] = [];
        const reviewPlaceholders: string[] = [];
        seedData.reviews.forEach((review, i) => {
          const offset = i * 4;
          reviewPlaceholders.push(`($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`);
          reviewValues.push(review.id, review.bookId, review.rating, review.text);
        });
        await conn.query(
          `INSERT INTO book_review (id, book_id, rating, text) VALUES ${reviewPlaceholders.join(", ")}`,
          { params: reviewValues },
        );
      }

      // Insert tags
      if (seedData.tags.length > 0) {
        const tagValues: any[] = [];
        const tagPlaceholders: string[] = [];
        seedData.tags.forEach((tag, i) => {
          const offset = i * 2;
          tagPlaceholders.push(`($${offset + 1}, $${offset + 2})`);
          tagValues.push(tag.id, tag.name);
        });
        await conn.query(`INSERT INTO tag (id, name) VALUES ${tagPlaceholders.join(", ")}`, { params: tagValues });
      }

      // Insert book_tags
      if (seedData.bookTags.length > 0) {
        const bookTagValues: any[] = [];
        const bookTagPlaceholders: string[] = [];
        seedData.bookTags.forEach((bt, i) => {
          const offset = i * 2;
          bookTagPlaceholders.push(`($${offset + 1}, $${offset + 2})`);
          bookTagValues.push(bt.bookId, bt.tagId);
        });
        await conn.query(`INSERT INTO book_tag (book_id, tag_id) VALUES ${bookTagPlaceholders.join(", ")}`, {
          params: bookTagValues,
        });
      }

      await conn.query("COMMIT");
    } catch (e) {
      await conn.query("ROLLBACK");
      throw e;
    } finally {
      await pool.release(conn);
    }
  },
};
