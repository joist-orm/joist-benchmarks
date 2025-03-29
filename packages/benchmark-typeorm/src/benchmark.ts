import { AppDataSource } from './db';
import { Author, Book, BookReview, Tag } from './entities';
import { benchmark, measure, getDataPath } from 'shared-utils';
import fs from 'fs';

async function loadData(size: number): Promise<number> {
  return measure(async () => {
    const authorRepository = AppDataSource.getRepository(Author);
    
    const authors = await authorRepository.find({
      take: size,
      relations: {
        books: {
          reviews: true,
          tags: true
        }
      },
      order: {
        id: 'ASC'
      }
    });
    
    console.log(`Loaded ${authors.length} authors with their books, reviews, and tags`);
  });
}

async function saveData(size: number): Promise<number> {
  // Load the generated seed data
  const seedFile = getDataPath(size);
  if (!fs.existsSync(seedFile)) {
    throw new Error(`Seed file not found: ${seedFile}`);
  }
  
  const seedData = JSON.parse(fs.readFileSync(seedFile, 'utf8'));
  
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
          email: authorData.email
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
          pages: bookData.pages
        });
        await bookRepository.save(book);
      }
      
      // Insert reviews
      for (const reviewData of seedData.reviews) {
        const review = reviewRepository.create({
          id: reviewData.id,
          bookId: reviewData.bookId,
          rating: reviewData.rating,
          text: reviewData.text
        });
        await reviewRepository.save(review);
      }
      
      // Insert tags
      for (const tagData of seedData.tags) {
        const tag = tagRepository.create({
          id: tagData.id,
          name: tagData.name
        });
        await tagRepository.save(tag);
      }
      
      // Insert book-tag relationships
      if (seedData.bookTags.length > 0) {
        await queryRunner.query(
          `INSERT INTO book_tag ("bookId", "tagId") VALUES ${
            seedData.bookTags.map(bt => `(${bt.bookId}, ${bt.tagId})`).join(', ')
          }`
        );
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
  await AppDataSource.query('TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE');
  console.log('Database cleaned');
}

async function runBenchmarks(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log('Database connection initialized');
    
    const sizes = [1, 10, 100, 1000];
    
    // Clean the database before starting
    await cleanDatabase();
    
    // Save data benchmarks
    await benchmark('TypeORM - Save Data', sizes, saveData);
    
    // Load data benchmarks
    await benchmark('TypeORM - Load Data', sizes, loadData);
    
  } catch (error) {
    console.error('Benchmark error:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

runBenchmarks().catch(console.error);