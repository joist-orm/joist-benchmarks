import { bulkCreate } from "./bulk-create.ts";
import { Author, BookReview, EntityManager } from "./entities/index.ts";
import { cleanDatabase, type JoistOperation } from "./index.ts";

export const findInLoop: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run(ctx) {
    const em = new EntityManager({}, { driver: ctx.driver });
    const authors = await em.find(Author, {});
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, index) => {
        const rating = index + 1;
        await em.find(BookReview, { rating, book: { author } });
      }),
    );
  },
};
