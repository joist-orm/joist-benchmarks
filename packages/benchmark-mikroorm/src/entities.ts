import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  Collection,
  OneToMany,
  ManyToMany,
  Cascade,
  Unique,
} from "@mikro-orm/core";

/**
 * Note: For MikroORM 6.x running on Node.js 23.x, we need to be careful with decorators.
 * The code should be structured to work with the reflection-based metadata system.
 */

@Entity()
export class Author {
  @PrimaryKey()
  id: number;

  @Property({ fieldName: "first_name" })
  firstName: string;

  @Property({ fieldName: "last_name" })
  lastName: string;

  @Property()
  @Unique()
  email: string;

  @OneToMany(() => Book, (book) => book.author, { cascade: [Cascade.REMOVE] })
  books = new Collection<Book>(this);

  @Property({ fieldName: "created_at" })
  createdAt = new Date();

  @Property({ fieldName: "updated_at", onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor() {
    this.id = 0;
    this.firstName = "";
    this.lastName = "";
    this.email = "";
  }
}

@Entity()
export class Book {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @ManyToOne(() => Author, { nullable: true })
  author?: Author;

  @Property({ nullable: true })
  published?: Date;

  @Property()
  pages = 0;

  @OneToMany(() => BookReview, (review) => review.book, { cascade: [Cascade.REMOVE] })
  reviews = new Collection<BookReview>(this);

  @ManyToMany({ entity: () => Tag, pivotTable: "book_tag", joinColumn: "book_id", inverseJoinColumn: "tag_id" })
  tags = new Collection<Tag>(this);

  @Property({ fieldName: "created_at" })
  createdAt = new Date();

  @Property({ fieldName: "updated_at", onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor() {
    this.id = 0;
    this.title = "";
  }
}

@Entity({ tableName: "book_review" })
export class BookReview {
  @PrimaryKey()
  id: number;

  @ManyToOne(() => Book, { nullable: true })
  book?: Book;

  @Property()
  rating: number;

  @Property({ nullable: true })
  text?: string;

  @Property({ fieldName: "created_at" })
  createdAt = new Date();

  @Property({ fieldName: "updated_at", onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor() {
    this.id = 0;
    this.rating = 0;
  }
}

@Entity()
export class Tag {
  @PrimaryKey()
  id: number;

  @Property()
  @Unique()
  name: string;

  @ManyToMany(() => Book, (book) => book.tags)
  books = new Collection<Book>(this);

  @Property({ fieldName: "created_at" })
  createdAt = new Date();

  @Property({ fieldName: "updated_at", onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor() {
    this.id = 0;
    this.name = "";
  }
}
