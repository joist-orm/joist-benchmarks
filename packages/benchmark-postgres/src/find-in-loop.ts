import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, PostgresOperation } from "./index.ts";

export const findInLoop: PostgresOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ sql }) {
    // Load all authors
    const authors = await sql`SELECT * FROM author ORDER BY id`;

    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        // Find reviews for books by this author with the specific rating
        await sql`
          SELECT br.*
          FROM book_review br
          JOIN book b ON b.id = br.book_id
          WHERE br.rating = ${rating} AND b.author_id = ${author.id}
        `;
      }),
    );
  },
};
