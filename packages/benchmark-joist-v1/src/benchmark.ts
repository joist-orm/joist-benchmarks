import { Author, Book, BookReview, Tag, newAuthor, newBook, newBookReview, newTag } from "./entities";
import { dbKnex, entityManager, newEntityManager } from "./db";
import { getData } from "seed-data";

// Ensure entity imports trigger codegen dependency
export { Author, Book, BookReview, Tag };

async function loadData(size: number): Promise<void> {
  const em = newEntityManager();
  
  // Load authors and eagerly load relationships
  const authors = await em.find(Author, {
    orderBy: { id: "ASC" },
    limit: size,
    
    // Eagerly load all relationships similar to the TypeORM approach
    populate: ["books.reviews", "books.tags"]
  });
  
  console.log(`Loaded ${authors.length} authors with their books, reviews, and tags`);
}

async function saveData(size: number): Promise<void> {
  // Load the generated seed data
  const seedData = getData(size);
  
  // Use a transaction for consistency with other ORM benchmarks
  const em = newEntityManager();
  
  try {
    await em.transaction(async () => {
      // Insert authors
      for (const authorData of seedData.authors) {
        newAuthor(em, {
          id: authorData.id,
          firstName: authorData.firstName,
          lastName: authorData.lastName,
          email: authorData.email,
        });
      }

      // Insert books
      for (const bookData of seedData.books) {
        newBook(em, {
          id: bookData.id,
          title: bookData.title,
          author: { id: bookData.authorId },
          published: bookData.published ? new Date(bookData.published) : undefined,
          pages: bookData.pages,
        });
      }

      // Insert reviews
      for (const reviewData of seedData.reviews) {
        newBookReview(em, {
          id: reviewData.id,
          book: { id: reviewData.bookId },
          rating: reviewData.rating,
          text: reviewData.text || undefined,
        });
      }

      // Insert tags
      for (const tagData of seedData.tags) {
        newTag(em, {
          id: tagData.id,
          name: tagData.name,
        });
      }

      // Insert book-tag relationships
      if (seedData.bookTags.length > 0) {
        // Filter out duplicate book-tag pairs
        const uniquePairs = new Set<string>();
        const uniqueBookTags = seedData.bookTags.filter((bt) => {
          const pairKey = `${bt.bookId}-${bt.tagId}`;
          if (uniquePairs.has(pairKey)) {
            return false;
          }
          uniquePairs.add(pairKey);
          return true;
        });

        // Joist handles m2m relationships through entities, so we need to manually
        // insert the BookTag records since we're using native SQL tables
        const chunkSize = 100;
        for (let i = 0; i < uniqueBookTags.length; i += chunkSize) {
          const chunk = uniqueBookTags.slice(i, i + chunkSize);
          if (chunk.length > 0) {
            try {
              await dbKnex("book_tag").insert(
                chunk.map((bt) => ({
                  book_id: bt.bookId,
                  tag_id: bt.tagId,
                }))
              );
            } catch (err) {
              console.error(`Error inserting book-tag chunk ${i} to ${i + chunk.length}:`, err);
              // Continue with the next chunk
            }
          }
        }
      }
    });
    
    console.log(`Saved ${seedData.authors.length} authors with their books, reviews, and tags`);
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
}

async function cleanDatabase(): Promise<void> {
  await dbKnex.raw("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
  console.log("Database cleaned");
}

// Run benchmarks
export async function bulkLoad(size: number): Promise<number> {
  await cleanDatabase();
  await saveData(size);
  
  const start = performance.now();
  await loadData(size);
  const end = performance.now();
  
  return end - start;
}

export async function bulkCreate(size: number): Promise<number> {
  await cleanDatabase();
  
  const start = performance.now();
  await saveData(size);
  const end = performance.now();
  
  return end - start;
}

// Export functions for external use
export { cleanDatabase, loadData, saveData };