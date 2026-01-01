import { cleanDatabase, PostgresOperation } from "./index.ts";

export const bulkCreate: PostgresOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run({ sql, seedData }) {
    await sql.begin(async (sql) => {
      // Insert authors - map to snake_case column names
      const authors = seedData.authors.map((a) => ({
        id: a.id,
        first_name: a.firstName,
        last_name: a.lastName,
        email: a.email,
      }));
      const ap = sql`INSERT INTO author ${sql(authors, "id", "first_name", "last_name", "email")}`;

      // Insert books - map to snake_case column names
      const books = seedData.books.map((b) => ({
        id: b.id,
        title: b.title,
        author_id: b.authorId,
        published: b.published ? new Date(b.published) : null,
        pages: b.pages,
      }));
      const bp = sql`INSERT INTO book ${sql(books, "id", "title", "author_id", "published", "pages")}`;

      // Insert reviews - map to snake_case column names
      const reviews = seedData.reviews.map((r) => ({
        id: r.id,
        book_id: r.bookId,
        rating: r.rating,
        text: r.text,
      }));
      const rp = sql`INSERT INTO book_review ${sql(reviews, "id", "book_id", "rating", "text")}`;

      // Insert tags
      const tags = seedData.tags.map((t) => ({
        id: t.id,
        name: t.name,
      }));
      const tp = sql`INSERT INTO tag ${sql(tags, "id", "name")}`;

      // Insert book_tags - map to snake_case column names
      const bookTags = seedData.bookTags.map((bt) => ({
        book_id: bt.bookId,
        tag_id: bt.tagId,
      }));
      const btp = sql`INSERT INTO book_tag ${sql(bookTags, "book_id", "tag_id")}`;

      // Pipeline
      return Promise.all([ap, bp, rp, tp, btp]);
    });
  },
};
