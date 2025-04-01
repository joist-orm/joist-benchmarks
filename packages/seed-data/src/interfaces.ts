export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Book {
  id: number;
  title: string;
  authorId: number;
  published: Date;
  pages: number;
}

export interface BookReview {
  id: number;
  bookId: number;
  rating: number;
  text: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface BenchmarkResult {
  orm: "prisma" | "typeorm" | "mikroorm" | "joist-v1";
  operation: "load" | "save";
  size: number;
  duration: number; // milliseconds
  timestamp: Date;
}
