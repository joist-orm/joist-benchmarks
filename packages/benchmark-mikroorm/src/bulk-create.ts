import { MikroORM } from "@mikro-orm/core";
import { SeedData } from "seed-data";
import { Author, Book, BookReview, Tag } from "./entities";

type Context = {
  size: number;
  seedData: SeedData;
  cleanDatabase: () => Promise<void>;
};

type Operation<C extends Context> = {
  beforeEach(ctx: C): Promise<void>;
  run(ctx: C): Promise<void>;
};

type MikroContext = Context & { orm: MikroORM };

export const bulkCreate: Operation<MikroContext> = {
  async beforeEach(ctx) {
    await ctx.cleanDatabase();
  },

  async run(ctx) {
    const { orm, seedData } = ctx;
    // Start a transaction
    const em = orm.em.fork();
    await em.begin();

    try {
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

      for (const bookData of seedData.books) {
        const author = em.getReference(Author, bookData.authorId);
        em.create(Book, {
          id: bookData.id,
          title: bookData.title,
          author: author,
          published: new Date(bookData.published),
          pages: bookData.pages,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const reviewData of seedData.reviews) {
        const book = em.getReference(Book, reviewData.bookId);
        em.create(BookReview, {
          id: reviewData.id,
          book: book,
          rating: reviewData.rating,
          text: reviewData.text,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      for (const tagData of seedData.tags) {
        em.create(Tag, {
          id: tagData.id,
          name: tagData.name,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      // Need to flush now to ensure tags are in the database
      await em.flush();

      // Insert book-tag relationships
      if (seedData.bookTags.length > 0) {
        // Filter out duplicate book-tag pairs
        const uniquePairs = new Set<string>();
        const uniqueBookTags = seedData.bookTags.filter((bt: { bookId: number; tagId: number }) => {
          const pairKey = `${bt.bookId}-${bt.tagId}`;
          if (uniquePairs.has(pairKey)) {
            return false;
          }
          uniquePairs.add(pairKey);
          return true;
        });

        // Process in chunks of 100 to avoid query size limits
        const chunkSize = 100;
        for (let i = 0; i < uniqueBookTags.length; i += chunkSize) {
          const chunk = uniqueBookTags.slice(i, i + chunkSize);
          if (chunk.length > 0) {
            try {
              await em
                .getConnection()
                .execute(
                  `INSERT INTO book_tag (book_id, tag_id) VALUES ${chunk
                    .map((bt: { bookId: number; tagId: number }) => `(${bt.bookId}, ${bt.tagId})`)
                    .join(", ")}`,
                );
            } catch (err) {
              console.error(`Error inserting book-tag chunk ${i} to ${i + chunk.length}:`, err);
              // Continue with the next chunk
            }
          }
        }
      }

      await em.commit();
      console.log(`Saved ${seedData.authors.length} authors with their books, reviews, and tags`);
    } catch (error) {
      await em.rollback();
      throw error;
    }
  },
};
