import { Author, Book, BookReview, Tag } from "./entities.ts";
import { cleanDatabase, TypeOrmOperation } from "./index.ts";

export const bulkCreate: TypeOrmOperation = {
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
          await queryRunner.query(
            `INSERT INTO book_tag ("bookId", "tagId") VALUES ${chunk
              .map((bt: { bookId: number; tagId: number }) => `(${bt.bookId}, ${bt.tagId})`)
              .join(", ")}`,
          );
        }
      }
    }

    await queryRunner.commitTransaction();
    await queryRunner.release();
  },
};
