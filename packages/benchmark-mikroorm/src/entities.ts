import { Collection, EntitySchema, type EntityClass } from "@mikro-orm/core";

export class Author {
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  books = new Collection<Book>(this);
  createdAt = new Date();
  updatedAt = new Date();
}

export class Book {
  id: number = 0;
  title: string = "";
  author?: Author;
  published?: Date;
  pages: number = 0;
  reviews = new Collection<BookReview>(this);
  tags = new Collection<Tag>(this);
  createdAt = new Date();
  updatedAt = new Date();
}

export class BookReview {
  id: number = 0;
  book?: Book;
  rating: number = 0;
  text?: string;
  createdAt = new Date();
  updatedAt = new Date();
}

export class Tag {
  id: number = 0;
  name: string = "";
  books = new Collection<Book>(this);
  createdAt = new Date();
  updatedAt = new Date();
}

export const AuthorSchema = new EntitySchema<Author>({
  class: Author,
  properties: {
    id: { primary: true, type: "number" },
    firstName: { type: "string", fieldName: "first_name" },
    lastName: { type: "string", fieldName: "last_name" },
    email: { type: "string", unique: true },
    books: { kind: "1:m", entity: () => Book, mappedBy: (book) => book.author },
    createdAt: { type: "Date", fieldName: "created_at" },
    updatedAt: { type: "Date", fieldName: "updated_at", onCreate: now, onUpdate: now },
  },
});

export const BookSchema = new EntitySchema<Book>({
  class: Book,
  properties: {
    id: { primary: true, type: "number" },
    title: { type: "string" },
    author: { kind: "m:1", entity: () => Author, nullable: false },
    published: { type: "Date", nullable: true },
    pages: { type: "number" },
    reviews: { kind: "1:m", entity: () => BookReview, mappedBy: (review) => review.book },
    tags: {
      kind: "m:n",
      entity: () => Tag,
      pivotTable: "book_tag",
      joinColumn: "book_id",
      inverseJoinColumn: "tag_id",
    },
    createdAt: { type: "Date", fieldName: "created_at" },
    updatedAt: { type: "Date", fieldName: "updated_at", onCreate: now, onUpdate: now },
  },
});

export const BookReviewSchema = new EntitySchema<BookReview>({
  class: BookReview,
  tableName: "book_review",
  properties: {
    id: { primary: true, type: "number" },
    book: { kind: "m:1", entity: () => Book, nullable: false },
    rating: { type: "number" },
    text: { type: "string", nullable: true },
    createdAt: { type: "Date", fieldName: "created_at" },
    updatedAt: { type: "Date", fieldName: "updated_at", onCreate: now, onUpdate: now },
  },
});

export const TagSchema = new EntitySchema<Tag>({
  class: Tag,
  properties: {
    id: { primary: true, type: "number" },
    name: { type: "string", unique: true },
    books: { kind: "m:n", entity: () => Book, mappedBy: (book) => book.tags },
    createdAt: { type: "Date", fieldName: "created_at" },
    updatedAt: { type: "Date", fieldName: "updated_at", onCreate: now, onUpdate: now },
  },
});

function now() {
  return new Date();
}
