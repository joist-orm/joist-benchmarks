import { MikroORM } from '@mikro-orm/core';
import { Author, Book, BookReview, Tag } from './entities';
import { benchmark, measure, getDataPath } from 'shared-utils';
import fs from 'fs';
import config from './mikro-orm.config';

let orm: MikroORM;

async function loadData(size: number): Promise<number> {
  return measure(async () => {
    const authorRepository = orm.em.getRepository(Author);
    
    const authors = await authorRepository.find(
      {},
      {
        limit: size,
        populate: ['books', 'books.reviews', 'books.tags'],
        orderBy: { id: 'ASC' }
      }
    );
    
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
    // Start a transaction
    const em = orm.em.fork();
    await em.begin();
    
    try {
      // Insert authors
      for (const authorData of seedData.authors) {
        const author = em.create(Author, {
          id: authorData.id,
          firstName: authorData.firstName,
          lastName: authorData.lastName,
          email: authorData.email,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        em.persist(author);
      }
      
      // Insert books
      for (const bookData of seedData.books) {
        const book = em.create(Book, {
          id: bookData.id,
          title: bookData.title,
          authorId: bookData.authorId,
          author: { id: bookData.authorId },
          published: bookData.published ? new Date(bookData.published) : undefined,
          pages: bookData.pages,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        em.persist(book);
      }
      
      // Insert reviews
      for (const reviewData of seedData.reviews) {
        const review = em.create(BookReview, {
          id: reviewData.id,
          bookId: reviewData.bookId,
          book: { id: reviewData.bookId },
          rating: reviewData.rating,
          text: reviewData.text,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        em.persist(review);
      }
      
      // Insert tags
      for (const tagData of seedData.tags) {
        const tag = em.create(Tag, {
          id: tagData.id,
          name: tagData.name,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        em.persist(tag);
      }
      
      // Insert book-tag relationships
      if (seedData.bookTags.length > 0) {
        await em.getConnection().execute(
          `INSERT INTO book_tag ("bookId", "tagId") VALUES ${
            seedData.bookTags.map((bt: { bookId: number; tagId: number }) => `(${bt.bookId}, ${bt.tagId})`).join(', ')
          }`
        );
      }
      
      await em.commit();
      console.log(`Saved ${seedData.authors.length} authors with their books, reviews, and tags`);
      
    } catch (error) {
      await em.rollback();
      throw error;
    }
  });
}

async function cleanDatabase(): Promise<void> {
  await orm.em.getConnection().execute('TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE');
  console.log('Database cleaned');
}

async function runBenchmarks(): Promise<void> {
  try {
    orm = await MikroORM.init(config);
    console.log('Database connection initialized');
    
    const sizes = [1, 10, 100, 1000];
    
    // Clean the database before starting
    await cleanDatabase();
    
    // Save data benchmarks
    await benchmark('MikroORM - Save Data', sizes, saveData);
    
    // Load data benchmarks
    await benchmark('MikroORM - Load Data', sizes, loadData);
    
  } catch (error) {
    console.error('Benchmark error:', error);
  } finally {
    await orm.close();
  }
}

runBenchmarks().catch(console.error);