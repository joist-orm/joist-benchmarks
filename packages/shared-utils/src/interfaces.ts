export interface Author {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  books?: Book[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Book {
  id?: number;
  title: string;
  authorId?: number;
  author?: Author;
  published?: Date;
  pages: number;
  reviews?: BookReview[];
  tags?: Tag[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BookReview {
  id?: number;
  bookId?: number;
  book?: Book;
  rating: number;
  text?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Tag {
  id?: number;
  name: string;
  books?: Book[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BenchmarkData {
  authorCount: number;
  booksPerAuthor: number;
  reviewsPerBook: number;
  tagsPerBook: number;
  totalAuthors: number;
  totalBooks: number;
  totalReviews: number;
  totalTags: number;
}

export type BenchmarkSize = 1 | 10 | 100 | 1000;

export interface BenchmarkResult {
  orm: 'prisma' | 'typeorm' | 'mikroorm';
  operation: 'load' | 'save';
  size: BenchmarkSize;
  duration: number; // milliseconds
  timestamp: Date;
}