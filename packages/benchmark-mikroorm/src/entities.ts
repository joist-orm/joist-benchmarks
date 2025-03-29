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

@Entity({ tableName: 'author' })
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

  @Property({ name: 'createdAt', defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ name: 'updatedAt', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity({ tableName: 'book' })
export class Book {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  @Index()
  authorId!: number;

  @ManyToOne(() => Author)
  author!: Author;

  @Property({ nullable: true })
  published?: Date;

  @Property({ default: 0 })
  pages = 0;

  @OneToMany(() => BookReview, review => review.book, { cascade: [Cascade.REMOVE] })
  reviews = new Collection<BookReview>(this);

  @ManyToMany({ entity: () => Tag, pivotTable: 'book_tag', joinColumn: 'bookId', inverseJoinColumn: 'tagId' })
  tags = new Collection<Tag>(this);

  @Property({ name: 'createdAt', defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ name: 'updatedAt', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity({ tableName: 'book_review' })
export class BookReview {
  @PrimaryKey()
  id!: number;

  @Property()
  @Index()
  bookId!: number;

  @ManyToOne(() => Book)
  book!: Book;

  @Property()
  rating!: number;

  @Property({ nullable: true })
  text?: string;

  @Property({ name: 'createdAt', defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ name: 'updatedAt', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}

@Entity({ tableName: 'tag' })
export class Tag {
  @PrimaryKey()
  id!: number;

  @Property()
  @Unique()
  name!: string;

  @ManyToMany(() => Book, book => book.tags)
  books = new Collection<Book>(this);

  @Property({ name: 'createdAt', defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ name: 'updatedAt', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt = new Date();
}