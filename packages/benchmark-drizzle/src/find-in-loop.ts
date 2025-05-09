import { bulkCreate } from "./bulk-create.ts";
import { cleanDatabase, DrizzleOperation } from "./index.ts";
import { eq, and } from "drizzle-orm";
import * as schema from "./schema.ts";

export const findInLoop: DrizzleOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
    await bulkCreate.run(ctx);
  },

  async run({ db, size }) {
    // Load all authors
    const authors = await db.query.authors.findMany({ orderBy: schema.authors.id });
    // Perform N async operations where N is the number of authors
    await Promise.all(
      authors.map(async (author, i) => {
        const rating = i + 1;
        await db.query.bookReviews.findMany({
          where: and(eq(schema.bookReviews.rating, rating), eq(schema.authors.id, author.id)),
        });
      }),
    );
  },
};
