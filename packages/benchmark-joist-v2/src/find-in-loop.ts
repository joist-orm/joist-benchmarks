import { bulkCreate } from "./bulk-create.ts";
import { Author, BookReview, EntityManager } from "./entities/index.ts";
import { cleanDatabase, JoistOperation } from "./index.ts";

export const findInLoop: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ driver, size }) {
    const em = new EntityManager({}, { driver });
    const authors = await em.find(Author, {});
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        await em.find(BookReview, { rating, book: { author } });
      }),
    );
  },
};
