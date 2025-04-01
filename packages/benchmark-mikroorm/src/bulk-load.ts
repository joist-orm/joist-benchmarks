import { bulkCreate } from "./bulk-create.ts";
import { Author } from "./entities.ts";
import { cleanDatabase, MikroOperation } from "./index.ts";

export const bulkLoad: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
    await bulkCreate.run(ctx);
  },

  async run({ orm, size }) {
    const em = orm.em.fork();
    const authorRepository = em.getRepository(Author);
    await authorRepository.find(
      {},
      {
        limit: size,
        populate: ["books", "books.reviews", "books.tags"],
        orderBy: { id: "ASC" },
      },
    );
  },
};
