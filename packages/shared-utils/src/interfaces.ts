export interface Author {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  books?: Book[];
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
}

export interface BookReview {
  id?: number;
  bookId?: number;
  book?: Book;
  rating: number;
  text?: string;
}

export interface Tag {
  id?: number;
  name: string;
  books?: Book[];
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

export interface BenchmarkResult {
  orm: 'prisma' | 'typeorm' | 'mikroorm';
  operation: 'load' | 'save';
  size: number;
  duration: number; // milliseconds
  timestamp: Date;
}
