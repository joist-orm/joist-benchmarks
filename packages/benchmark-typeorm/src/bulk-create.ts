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
    const authors = seedData.authors.map((authorData) => {
      return authorRepository.create({
        id: authorData.id,
        firstName: authorData.firstName,
        lastName: authorData.lastName,
        email: authorData.email,
      });
    });
    await authorRepository.save(authors);

    // Insert books
    const books = seedData.books.map((bookData) => {
      return bookRepository.create({
        id: bookData.id,
        title: bookData.title,
        authorId: bookData.authorId,
        published: new Date(bookData.published),
        pages: bookData.pages,
      });
    });
    await bookRepository.save(books);

    // Insert reviews
    const reviews = seedData.reviews.map((reviewData) => {
      return reviewRepository.create({
        id: reviewData.id,
        bookId: reviewData.bookId,
        rating: reviewData.rating,
        text: reviewData.text,
      });
    });
    await reviewRepository.save(reviews);

    // Insert tags
    const tags = seedData.tags.map((tagData) => {
      return tagRepository.create({
        id: tagData.id,
        name: tagData.name,
      });
    });
    await tagRepository.save(tags);

    // Insert book tags

    await queryRunner.commitTransaction();
    await queryRunner.release();
  },
};
