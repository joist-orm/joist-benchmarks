import { JsonAggregatePreloader } from "joist-orm";
import { bulkCreate } from "./bulk-create.ts";
import { Author, EntityManager } from "./entities/index.ts";
import { cleanDatabase, type JoistOperation } from "./index.ts";

export const bulkLoad: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run(ctx) {
    const { driver, preload } = ctx;
    const preloadPlugin = preload ? new JsonAggregatePreloader() : undefined;
    const em = new EntityManager({}, { driver, preloadPlugin });
    await em.find(Author, {}, { populate: { books: ["reviews", "tags"] } });
  },
};
