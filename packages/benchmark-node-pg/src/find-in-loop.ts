import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, NodePgOperation } from "./index.ts";

export const findInLoop: NodePgOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ pool }) {
    // Load all authors
    const authors = await pool.query("SELECT * FROM author ORDER BY id");

    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.rows.map(async (author, i) => {
        const rating = i + 1;
        // Find reviews for books by this author with the specific rating
        await pool.query({
          name: "find-reviews-by-author-rating",
          text: `SELECT br.* FROM book_review br
                 JOIN book b ON b.id = br.book_id
                 WHERE br.rating = $1 AND b.author_id = $2`,
          values: [rating, author.id],
        });
      }),
    );
  },
};
