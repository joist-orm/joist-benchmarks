import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, NodePgOperation } from "./index.ts";

export const loadInLoop: NodePgOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ pool }) {
    const authors = await pool.query("SELECT * FROM author");

    await Promise.all(
      authors.rows.map(async (author) => {
        // Load author with their books using prepared statement
        const result = await pool.query({
          name: "load-author-with-books",
          text: `SELECT a.*, b.id as book_id, b.title, b.published, b.pages
                 FROM author a
                 LEFT JOIN book b ON b.author_id = a.id
                 WHERE a.id = $1`,
          values: [author.id],
        });
        return result.rows;
      }),
    );
  },
};
