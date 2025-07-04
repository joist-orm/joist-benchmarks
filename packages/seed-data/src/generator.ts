import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Author, Book, BookReview, Tag } from "./interfaces.ts";

export class DataGenerator {
  private authorIds: number[] = [];
  private bookIds: number[] = [];
  private tagIds: number[] = [];
  private readonly startId: number;

  constructor(startId = 1) {
    this.startId = startId;
  }

  generateAuthors(count: number): Author[] {
    const authors: Author[] = [];
    for (let i = 0; i < count; i++) {
      const authorId = this.startId + i;
      this.authorIds.push(authorId);
      authors.push({
        id: authorId,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      });
    }
    return authors;
  }

  generateBooks(authorId: number, count: number): Book[] {
    const books: Book[] = [];
    for (let i = 0; i < count; i++) {
      const bookId = this.startId + this.bookIds.length;
      this.bookIds.push(bookId);
      books.push({
        id: bookId,
        title: faker.commerce.productName(),
        authorId,
        published: faker.date.past(),
        pages: faker.number.int({ min: 50, max: 1000 }),
      });
    }
    return books;
  }

  private reviewIdCounter = 0;

  generateReviews(bookId: number, count: number): BookReview[] {
    const reviews: BookReview[] = [];
    for (let i = 0; i < count; i++) {
      this.reviewIdCounter++;
      reviews.push({
        id: this.reviewIdCounter,
        bookId,
        rating: faker.number.int({ min: 1, max: 5 }),
        text: faker.lorem.paragraph(),
      });
    }
    return reviews;
  }

  generateTags(count: number): Tag[] {
    const tags: Tag[] = [];
    const usedNames = new Set<string>();
    for (let i = 0; i < count; i++) {
      const tagId = this.startId + this.tagIds.length;
      this.tagIds.push(tagId);
      // Make sure tag names are unique
      let tagName: string;
      do {
        tagName = faker.word.sample() + "-" + faker.number.int(1000);
      } while (usedNames.has(tagName));
      usedNames.add(tagName);
      tags.push({ id: tagId, name: tagName });
    }
    return tags;
  }

  assignTagsToBooks(bookIds: number[], tagIds: number[], tagsPerBook: number): { bookId: number; tagId: number }[] {
    const bookTags: { bookId: number; tagId: number }[] = [];
    for (const bookId of bookIds) {
      const shuffledTags = [...tagIds].sort(() => 0.5 - Math.random());
      const selectedTags = shuffledTags.slice(0, tagsPerBook);
      for (const tagId of selectedTags) {
        bookTags.push({ bookId, tagId });
      }
    }
    return bookTags;
  }

  generateDataSet(authorCount: number): {
    authors: Author[];
    books: Book[];
    reviews: BookReview[];
    tags: Tag[];
    bookTags: { bookId: number; tagId: number }[];
  } {
    const authors = this.generateAuthors(authorCount);
    let books: Book[] = [];
    let reviews: BookReview[] = [];
    // Generate books and reviews
    for (const author of authors) {
      const authorBooks = this.generateBooks(author.id, booksPerAuthor);
      books = [...books, ...authorBooks];
      for (const book of authorBooks) {
        const bookReviews = this.generateReviews(book.id, reviewsPerBook);
        reviews = [...reviews, ...bookReviews];
      }
    }

    // Generate tags
    const uniqueTagCount = Math.min(50, authorCount * booksPerAuthor); // Limit tag count to avoid too many
    const tags = this.generateTags(uniqueTagCount);
    // Assign tags to books
    const bookTags = this.assignTagsToBooks(
      books.map((b) => b.id),
      tags.map((t) => t.id),
      tagsPerBook,
    );

    return { authors, books, reviews, tags, bookTags };
  }
}

function createSeedData(authorCount: number): void {
  const generator = new DataGenerator();

  const data = generator.generateDataSet(authorCount);

  // Get the directory name of the current module in ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const outputDir = path.resolve(__dirname, "../");
  fs.writeFileSync(path.join(outputDir, `seed-${authorCount}.json`), JSON.stringify(data, null, 2));

  console.log(`Generated seed data for size ${authorCount} with:`);
  console.log(`- ${data.authors.length} authors`);
  console.log(`- ${data.books.length} books`);
  console.log(`- ${data.reviews.length} reviews`);
  console.log(`- ${data.tags.length} tags`);
  console.log(`- ${data.bookTags.length} book-tag relationships`);
}

export const booksPerAuthor = 10;
export const reviewsPerBook = 10;
export const tagsPerBook = 5;

// Generate seed data for all benchmark sizes
const sizes = [1, 10, 100, 1000];
sizes.forEach((size) => createSeedData(size));

console.log("All seed data generated successfully!");
