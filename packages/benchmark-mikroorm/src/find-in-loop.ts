import { bulkCreate } from "./bulk-create.ts";
import { Author, BookReview } from "./entities.ts";
import { cleanDatabase, MikroOperation } from "./index.ts";

export const findInLoop: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
    await bulkCreate.run(ctx);
  },

  async run({ orm, size }) {
    const em = orm.em.fork();
    const authorRepository = em.getRepository(Author);
    const reviewRepository = em.getRepository(BookReview);
    const authors = await authorRepository.find({}, { orderBy: { id: "ASC" } });
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        await reviewRepository.find({ rating, book: { author: { id: author.id } } });
      }),
    );
  },
};
