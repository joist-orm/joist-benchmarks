import { Author } from "./entities";
import { cleanDatabase, MikroOperation } from "./index";

export const bulkLoad: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
  },

  async run({ orm, size }) {
    const authorRepository = orm.em.getRepository(Author);
    const authors = await authorRepository.find(
      {},
      {
        limit: size,
        populate: ["books", "books.reviews", "books.tags"],
        orderBy: { id: "ASC" },
      },
    );
    console.log(`Loaded ${authors.length} authors with their books, reviews, and tags`);
  },
};
