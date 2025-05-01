import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, DrizzleOperation } from "./index.ts";

export const bulkLoad: DrizzleOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ db }) {
    // Fetch all authors + books + reviews / tags
    await db.query.authors.findMany({
      with: {
        books: {
          with: {
            reviews: true,
            tags: { with: { tag: true } },
          },
        },
      },
    });
  },
};
