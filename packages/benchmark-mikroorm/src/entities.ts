import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  ManyToOne,
  Collection,
  ManyToMany,
  Cascade,
  Unique,
  Index
} from '@mikro-orm/core';

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  @Unique()
  email!: string;

  @OneToMany(() => Book, book => book.author, { cascade: [Cascade.REMOVE] })
  books = new Collection<Book>(this);

  @Property({ defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity()
export class Book {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  @Index()
  authorId!: number;

  @ManyToOne(() => Author, { joinColumn: 'authorId', fieldName: 'authorId', nullable: true })
  author?: Author;

  @Property({ nullable: true })
  published?: Date;

  @Property({ default: 0 })
  pages = 0;

  @OneToMany(() => BookReview, review => review.book, { cascade: [Cascade.REMOVE] })
  reviews = new Collection<BookReview>(this);

  @ManyToMany({ entity: () => Tag, pivotTable: 'book_tag', joinColumn: 'bookId', inverseJoinColumn: 'tagId' })
  tags = new Collection<Tag>(this);

  @Property({ defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity({ tableName: 'book_review' })
export class BookReview {
  @PrimaryKey()
  id!: number;

  @Property()
  @Index()
  bookId!: number;

  @ManyToOne(() => Book, { joinColumn: 'bookId', fieldName: 'bookId', nullable: true })
  book?: Book;

  @Property()
  rating!: number;

  @Property({ nullable: true })
  text?: string;

  @Property({ defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity()
export class Tag {
  @PrimaryKey()
  id!: number;

  @Property()
  @Unique()
  name!: string;

  @ManyToMany(() => Book, book => book.tags)
  books = new Collection<Book>(this);

  @Property({ defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}