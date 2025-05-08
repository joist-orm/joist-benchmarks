import { cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";
import { Author } from "./entities.ts";
import { TypeOrmOperation } from "./index.ts";

export const loadInLoop: TypeOrmOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.dataSource);
    await bulkCreate.run(ctx);
  },

  async run({ dataSource }) {
    const authorRepository = dataSource.getRepository(Author);
    const authors = await authorRepository.find({
      order: { id: "ASC" },
    });

    await Promise.all(
      authors.map(async (author) => {
        await authorRepository.findOne({
          where: { id: author.id },
          relations: { books: true },
        });
      })
    );
  },
};