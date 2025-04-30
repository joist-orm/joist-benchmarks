import { cleanDatabase, DrizzleOperation } from "./index.ts";
import * as schema from "./schema.ts";

export const bulkCreate: DrizzleOperation = {
  async beforeEach() {
    await cleanDatabase();
  },

  async run({ db, seedData }) {
    // Convert string dates back to Date objects
    const books = seedData.books.map(book => ({
      ...book,
      published: book.published ? new Date(book.published) : null
    }));
    
    await db.transaction(async (tx) => {
      await tx.insert(schema.authors).values(seedData.authors);
      await tx.insert(schema.books).values(books);
      await tx.insert(schema.bookReviews).values(seedData.reviews);
      await tx.insert(schema.tags).values(seedData.tags);
      await tx.insert(schema.bookTags).values(seedData.bookTags);
    });
  },
};
