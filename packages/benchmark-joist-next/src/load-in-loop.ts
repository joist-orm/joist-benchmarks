import { JsonAggregatePreloader } from "joist-orm";
import { bulkCreate } from "./bulk-create.ts";
import { Author, EntityManager } from "./entities/index.ts";
import { cleanDatabase, type JoistOperation } from "./index.ts";

export const loadInLoop: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run(ctx) {
    const { driver, preload } = ctx;
    const preloadPlugin = preload ? new JsonAggregatePreloader() : undefined;
    const em = new EntityManager({}, { driver, preloadPlugin });
    const authors = await em.find(Author, {});

    await Promise.all(
      authors.map(async (author) => {
        await author.books.load();
      }),
    );
  },
};
