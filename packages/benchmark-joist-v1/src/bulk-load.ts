import { bulkCreate } from "./bulk-create.ts";
import { Author, EntityManager } from "./entities/index.ts";
import { cleanDatabase, JoistOperation } from "./index.ts";

export const bulkLoad: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ driver }) {
    const em = new EntityManager({}, { driver });
    await em.find(Author, {}, { populate: { books: ["reviews", "tags"] } });
  },
};
