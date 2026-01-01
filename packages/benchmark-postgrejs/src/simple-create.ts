import { cleanDatabase, PostgrejsOperation } from "./index.ts";

export const simpleCreate: PostgrejsOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run({ pool, seedData }) {
    const conn = await pool.acquire();
    try {
      await conn.query("BEGIN");
      // Only insert authors (1, 10, or 100)
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
      await conn.query("COMMIT");
    } catch (e) {
      await pool.query("ROLLBACK");
      throw e;
    } finally {
      await pool.release(conn);
    }
  },
};
