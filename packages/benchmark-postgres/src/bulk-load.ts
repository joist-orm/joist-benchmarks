import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, PostgresOperation } from "./index.ts";

export const bulkLoad: PostgresOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ sql }) {
    // Fetch all authors + books + reviews / tags
    // Using multiple queries and stitching together like most ORMs do
    const authors = await sql`SELECT * FROM author ORDER BY id`;
    const books = await sql`SELECT * FROM book ORDER BY id`;
    const reviews = await sql`SELECT * FROM book_review ORDER BY id`;
    const tags = await sql`SELECT * FROM tag ORDER BY id`;
    const bookTags = await sql`
      SELECT bt.book_id, bt.tag_id, t.id, t.name
      FROM book_tag bt
      JOIN tag t ON t.id = bt.tag_id
      ORDER BY bt.book_id, bt.tag_id
    `;

    // Build the nested structure (simulating what ORMs do when hydrating)
    const tagMap = new Map(tags.map((t) => [t.id, t]));
    const reviewsByBookId = new Map<number, any[]>();
    for (const review of reviews) {
      const arr = reviewsByBookId.get(review.book_id) || [];
      arr.push(review);
      reviewsByBookId.set(review.book_id, arr);
    }
    const bookTagsByBookId = new Map<number, any[]>();
    for (const bt of bookTags) {
      const arr = bookTagsByBookId.get(bt.book_id) || [];
      arr.push({ tag: tagMap.get(bt.tag_id) });
      bookTagsByBookId.set(bt.book_id, arr);
    }
    const booksByAuthorId = new Map<number, any[]>();
    for (const book of books) {
      const bookWithRelations = {
        ...book,
        reviews: reviewsByBookId.get(book.id) || [],
        tags: bookTagsByBookId.get(book.id) || [],
      };
      const arr = booksByAuthorId.get(book.author_id) || [];
      arr.push(bookWithRelations);
      booksByAuthorId.set(book.author_id, arr);
    }

    // Build authors with nested books/reviews/tags (result not returned, but constructed to match ORM behavior)
    authors.map((author) => ({
      ...author,
      books: booksByAuthorId.get(author.id) || [],
    }));
  },
};
