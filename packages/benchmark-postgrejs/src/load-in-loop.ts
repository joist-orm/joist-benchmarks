import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, PostgrejsOperation } from "./index.ts";

export const loadInLoop: PostgrejsOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ pool }) {
    const authors = await pool.query("SELECT * FROM author");

    await Promise.all(
      authors.rows!.map(async (author: any) => {
        // Load author with their books using parameterized query
        const result = await pool.query(
          `SELECT a.*, b.id as book_id, b.title, b.published, b.pages
           FROM author a
           LEFT JOIN book b ON b.author_id = a.id
           WHERE a.id = $1`,
          { params: [author.id] },
        );
        return result.rows;
      }),
    );
  },
};
