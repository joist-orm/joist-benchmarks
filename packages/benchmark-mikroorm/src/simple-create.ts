import { Author } from "./entities.ts";
import { cleanDatabase, MikroOperation } from "./index.ts";

export const simpleCreate: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
  },

  async run(ctx) {
    const { orm, seedData } = ctx;
    const em = orm.em.fork();
    await em.begin();
    for (const authorData of seedData.authors) {
      em.create(Author, {
        id: authorData.id,
        firstName: authorData.firstName,
        lastName: authorData.lastName,
        email: authorData.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await em.commit();
  },
};
