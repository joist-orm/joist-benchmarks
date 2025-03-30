import { PrismaClient } from '@prisma/client';
import { benchmark, measure, getDataPath } from 'seed-data';
import fs from 'fs';

const prisma = new PrismaClient();

async function loadData(size: number): Promise<number> {
  return measure(async () => {
    const authors = await prisma.author.findMany({
      take: size,
      include: {
        books: {
          include: {
            reviews: true,
            tags: {
              include: {
                tag: true
              }
            }
          }
        }
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
    // Use a transaction for atomicity
    await prisma.$transaction(async (tx: typeof prisma) => {
      // Insert authors
      for (const authorData of seedData.authors) {
        const { id, firstName, lastName, email } = authorData;

        await tx.author.create({
          data: {
            id,
            firstName,
            lastName,
            email
          }
        });
      }

      // Insert books
      for (const bookData of seedData.books) {
        const { id, title, authorId, published, pages } = bookData;

        await tx.book.create({
          data: {
            id,
            title,
            authorId,
            published: published ? new Date(published) : null,
            pages
          }
        });
      }

      // Insert reviews
      for (const reviewData of seedData.reviews) {
        const { id, bookId, rating, text } = reviewData;

        await tx.bookReview.create({
          data: {
            id,
            bookId,
            rating,
            text
          }
        });
      }

      // Insert tags
      for (const tagData of seedData.tags) {
        const { id, name } = tagData;

        await tx.tag.create({
          data: {
            id,
            name
          }
        });
      }

      // Insert book-tag relationships
      for (const { bookId, tagId } of seedData.bookTags) {
        await tx.bookTag.create({
          data: {
            bookId,
            tagId
          }
        });
      }
    });

    console.log(`Saved ${seedData.authors.length} authors with their books, reviews, and tags`);
  });
}

async function cleanDatabase(): Promise<void> {
  await prisma.$transaction([
    prisma.bookTag.deleteMany(),
    prisma.bookReview.deleteMany(),
    prisma.book.deleteMany(),
    prisma.author.deleteMany(),
    prisma.tag.deleteMany()
  ]);
  console.log('Database cleaned');
}

async function runBenchmarks(): Promise<void> {
  try {
    const sizes = [1, 10, 100, 1000];

    // Clean the database before starting
    await cleanDatabase();

    // Save data benchmarks
    await benchmark('Prisma - Save Data', sizes, saveData);

    // Load data benchmarks
    await benchmark('Prisma - Load Data', sizes, loadData);

  } catch (error) {
    console.error('Benchmark error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

runBenchmarks().catch(console.error);
