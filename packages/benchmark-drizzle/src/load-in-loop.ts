import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, DrizzleOperation } from "./index.ts";
import { eq } from "drizzle-orm";
import * as schema from "./schema.ts";

export const loadInLoop: DrizzleOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ db }) {
    const authors = await db.query.authors.findMany();
    
    await Promise.all(
      authors.map(async (author) => {
        await db.query.authors.findFirst({
          where: eq(schema.authors.id, author.id),
          with: {
            books: true,
          },
        });
      })
    );
  },
};