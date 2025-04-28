import { cleanDatabase } from "./index.ts";
import { bulkCreate } from "./bulk-create.ts";
import { Author } from "./entities.ts";
import { TypeOrmOperation } from "./index.ts";

export const bulkLoad: TypeOrmOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.dataSource);
    await bulkCreate.run(ctx);
  },

  async run({ dataSource, size }) {
    const authorRepository = dataSource.getRepository(Author);
    await authorRepository.find({
      take: size,
      relations: {
        books: {
          reviews: true,
          tags: true,
        },
      },
      order: { id: "ASC" },
    });
  },
};
