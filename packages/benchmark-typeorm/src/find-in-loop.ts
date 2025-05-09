import { cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";
import { Author, BookReview } from "./entities.ts";
import { TypeOrmOperation } from "./index.ts";

export const findInLoop: TypeOrmOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.dataSource);
    await bulkCreate.run(ctx);
  },

  async run({ dataSource, size }) {
    const authorRepository = dataSource.getRepository(Author);
    const reviewRepository = dataSource.getRepository(BookReview);
    const authors = await authorRepository.find({ order: { id: "ASC" } });
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        await reviewRepository.find({
          where: { rating, book: { authorId: author.id } },
        });
      }),
    );
  },
};
