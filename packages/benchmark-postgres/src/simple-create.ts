import { cleanDatabase, PostgresOperation } from "./index.ts";

export const simpleCreate: PostgresOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run({ sql, seedData }) {
    await sql.begin(async (sql) => {
      // Map to snake_case column names
      const authors = seedData.authors.map((a) => ({
        id: a.id,
        first_name: a.firstName,
        last_name: a.lastName,
        email: a.email,
      }));
      await sql`INSERT INTO author ${sql(authors, "id", "first_name", "last_name", "email")}`;
    });
  },
};
