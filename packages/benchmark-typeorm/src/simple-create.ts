import { Author } from "./entities.ts";
import { cleanDatabase, TypeOrmOperation } from "./index.ts";

export const simpleCreate: TypeOrmOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.dataSource);
  },

  async run(ctx) {
    const { dataSource, seedData } = ctx;

    // Use a query runner with transaction
    const queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const authorRepository = queryRunner.manager.getRepository(Author);

    // Only insert authors (1, 10, or 100)
    const authors = seedData.authors.map((authorData) => {
      return authorRepository.create({
        id: authorData.id,
        firstName: authorData.firstName,
        lastName: authorData.lastName,
        email: authorData.email,
      });
    });
    await authorRepository.save(authors);

    await queryRunner.commitTransaction();
    await queryRunner.release();
  },
};
