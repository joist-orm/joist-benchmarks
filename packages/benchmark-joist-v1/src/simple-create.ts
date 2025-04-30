import { Author, EntityManager } from "./entities/index.ts";
import { cleanDatabase, JoistOperation } from "./index.ts";

export const simpleCreate: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run(ctx) {
    const { driver, seedData } = ctx;
    const em = new EntityManager({}, { driver });

    // Only insert authors (1, 10, or 100)
    for (const row of seedData.authors) {
      em.create(Author, {
        id: `a:${row.id}`,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
      });
    }

    await em.flush();
  },
};
