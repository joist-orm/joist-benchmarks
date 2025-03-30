import { AppDataSource } from "./db";
import { Author, Book, BookReview, Tag } from "./entities";
import { benchmark, measure, getData } from "seed-data";

async function loadData(size: number): Promise<number> {
  return measure(async () => {
    const authorRepository = AppDataSource.getRepository(Author);

    const authors = await authorRepository.find({
      take: size,
      relations: {
        books: {
          reviews: true,
          tags: true,
        },
      },
      order: {
        id: "ASC",
      },
    });

    console.log(`Loaded ${authors.length} authors with their books, reviews, and tags`);
  });
}

async function saveData(size: number): Promise<number> {
  // Load the generated seed data
  const seedData = getData(size);

  return measure(async () => {
    // Use a query runner with transaction
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const authorRepository = queryRunner.manager.getRepository(Author);
      const bookRepository = queryRunner.manager.getRepository(Book);
      const reviewRepository = queryRunner.manager.getRepository(BookReview);
      const tagRepository = queryRunner.manager.getRepository(Tag);

      // Insert authors
      for (const authorData of seedData.authors) {
        const author = authorRepository.create({
          id: authorData.id,
          firstName: authorData.firstName,
          lastName: authorData.lastName,
          email: authorData.email,
        });
        await authorRepository.save(author);
      }

      // Insert books
      for (const bookData of seedData.books) {
        const book = bookRepository.create({
          id: bookData.id,
          title: bookData.title,
          authorId: bookData.authorId,
          published: bookData.published ? new Date(bookData.published) : null,
          pages: bookData.pages,
        });
        await bookRepository.save(book);
      }

      // Insert reviews
      for (const reviewData of seedData.reviews) {
        const review = reviewRepository.create({
          id: reviewData.id,
          bookId: reviewData.bookId,
          rating: reviewData.rating,
          text: reviewData.text,
        });
        await reviewRepository.save(review);
      }

      // Insert tags
      for (const tagData of seedData.tags) {
        const tag = tagRepository.create({
          id: tagData.id,
          name: tagData.name,
        });
        await tagRepository.save(tag);
      }

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
              await queryRunner.query(
                `INSERT INTO book_tag ("bookId", "tagId") VALUES ${chunk
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

      await queryRunner.commitTransaction();
      console.log(`Saved ${seedData.authors.length} authors with their books, reviews, and tags`);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  });
}

async function cleanDatabase(): Promise<void> {
  try {
    await AppDataSource.query("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
    console.log("Database cleaned");
  } catch (error) {
    console.error("Error cleaning database:", error);
    // Try a different approach if the first one fails
    try {
      await AppDataSource.query("DELETE FROM book_tag");
      await AppDataSource.query("DELETE FROM book_review");
      await AppDataSource.query("DELETE FROM book");
      await AppDataSource.query("DELETE FROM author");
      await AppDataSource.query("DELETE FROM tag");
      await AppDataSource.query("ALTER SEQUENCE book_review_id_seq RESTART WITH 1");
      await AppDataSource.query("ALTER SEQUENCE book_id_seq RESTART WITH 1");
      await AppDataSource.query("ALTER SEQUENCE author_id_seq RESTART WITH 1");
      await AppDataSource.query("ALTER SEQUENCE tag_id_seq RESTART WITH 1");
      console.log("Database cleaned using alternate method");
    } catch (secondError) {
      console.error("Error in alternate cleaning method:", secondError);
      throw secondError;
    }
  }
}

async function runBenchmarks(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log("Database connection initialized");

    const sizes = [1, 10, 100, 1000];

    // Clean the database before starting
    await cleanDatabase();

    // Save data benchmarks
    await benchmark("TypeORM - Save Data", sizes, saveData);

    // Load data benchmarks
    await benchmark("TypeORM - Load Data", sizes, loadData);
  } catch (error) {
    console.error("Benchmark error:", error);
  } finally {
    await AppDataSource.destroy();
  }
}

runBenchmarks().catch(console.error);
