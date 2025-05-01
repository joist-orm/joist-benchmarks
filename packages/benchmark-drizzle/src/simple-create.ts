import { cleanDatabase, DrizzleOperation } from "./index.ts";
import * as schema from "./schema.ts";

export const simpleCreate: DrizzleOperation = {
  async beforeEach(ctx) {
    await cleanDatabase(ctx);
  },

  async run({ db, seedData }) {
    // Only insert authors (1, 10, or 100)
    await db.transaction(async (tx) => {
      await tx.insert(schema.authors).values(seedData.authors);
    });
  },
};
