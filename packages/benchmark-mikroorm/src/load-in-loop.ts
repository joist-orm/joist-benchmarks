import { bulkCreate } from "./bulk-create.ts";
import { Author } from "./entities.ts";
import { cleanDatabase, MikroOperation } from "./index.ts";

export const loadInLoop: MikroOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx.orm);
    await bulkCreate.run(ctx);
  },

  async run({ orm }) {
    const em = orm.em.fork();
    const authorRepository = em.getRepository(Author);
    const authors = await authorRepository.find({}, { orderBy: { id: "ASC" } });
    
    await Promise.all(
      authors.map(async (author) => {
        await em.populate(author, ["books"]);
      })
    );
  },
};