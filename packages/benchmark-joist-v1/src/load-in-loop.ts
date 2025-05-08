import { bulkCreate } from "./bulk-create.ts";
import { Author, EntityManager } from "./entities/index.ts";
import { cleanDatabase, JoistOperation } from "./index.ts";

export const loadInLoop: JoistOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ driver }) {
    const em = new EntityManager({}, { driver });
    const authors = await em.find(Author, {});
    
    await Promise.all(
      authors.map(async (author) => {
        await author.books.load();
      })
    );
  },
};