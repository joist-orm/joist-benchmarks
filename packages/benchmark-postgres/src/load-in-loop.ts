import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, PostgresOperation } from "./index.ts";

export const loadInLoop: PostgresOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ sql }) {
    const authors = await sql`SELECT * FROM author`;

    await Promise.all(
      authors.map(async (author) => {
        // Load author with their books using tagged template literal
        const result = await sql`
          SELECT a.*, b.id as book_id, b.title, b.published, b.pages
          FROM author a
          LEFT JOIN book b ON b.author_id = a.id
          WHERE a.id = ${author.id}
        `;
        return result;
      }),
    );
  },
};
