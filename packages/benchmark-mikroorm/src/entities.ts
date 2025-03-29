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
  Index,
  Type,
  types
} from '@mikro-orm/core';

@Entity()
export class Author {
  @PrimaryKey({ type: types.integer })
  id!: number;

  @Property({ type: types.string, fieldName: 'first_name' })
  firstName!: string;

  @Property({ type: types.string, fieldName: 'last_name' })
  lastName!: string;

  @Property({ type: types.string })
  @Unique()
  email!: string;

  @OneToMany(() => Book, book => book.author, { cascade: [Cascade.REMOVE] })
  books = new Collection<Book>(this);

  @Property({ type: types.datetime, defaultRaw: 'now()', fieldName: 'created_at' })
  createdAt = new Date();

  @Property({ type: types.datetime, defaultRaw: 'now()', onUpdate: () => new Date(), fieldName: 'updated_at' })
  updatedAt = new Date();
}

@Entity()
export class Book {
  @PrimaryKey({ type: types.integer })
  id!: number;

  @Property({ type: types.string })
  title!: string;

  @ManyToOne(() => Author, { joinColumn: 'author_id', nullable: true })
  author?: Author;
  
  // Virtual property that maps to the same column as the relation
  @Property({ type: types.integer, persist: false })
  get authorId(): number {
    return this.author?.id || 0;
  }

  @Property({ type: types.datetime, nullable: true })
  published?: Date;

  @Property({ type: types.integer, default: 0 })
  pages = 0;

  @OneToMany(() => BookReview, review => review.book, { cascade: [Cascade.REMOVE] })
  reviews = new Collection<BookReview>(this);

  @ManyToMany({ entity: () => Tag, pivotTable: 'book_tag', joinColumn: 'book_id', inverseJoinColumn: 'tag_id' })
  tags = new Collection<Tag>(this);

  @Property({ type: types.datetime, defaultRaw: 'now()', fieldName: 'created_at' })
  createdAt = new Date();

  @Property({ type: types.datetime, defaultRaw: 'now()', onUpdate: () => new Date(), fieldName: 'updated_at' })
  updatedAt = new Date();
}

@Entity({ tableName: 'book_review' })
export class BookReview {
  @PrimaryKey({ type: types.integer })
  id!: number;

  @ManyToOne(() => Book, { joinColumn: 'book_id', nullable: true })
  book?: Book;
  
  // Virtual property that maps to the same column as the relation
  @Property({ type: types.integer, persist: false })
  get bookId(): number {
    return this.book?.id || 0;
  }

  @Property({ type: types.integer })
  rating!: number;

  @Property({ type: types.text, nullable: true })
  text?: string;

  @Property({ type: types.datetime, defaultRaw: 'now()', fieldName: 'created_at' })
  createdAt = new Date();

  @Property({ type: types.datetime, defaultRaw: 'now()', onUpdate: () => new Date(), fieldName: 'updated_at' })
  updatedAt = new Date();
}

@Entity()
export class Tag {
  @PrimaryKey({ type: types.integer })
  id!: number;

  @Property({ type: types.string })
  @Unique()
  name!: string;

  @ManyToMany(() => Book, book => book.tags)
  books = new Collection<Book>(this);

  @Property({ type: types.datetime, defaultRaw: 'now()', fieldName: 'created_at' })
  createdAt = new Date();

  @Property({ type: types.datetime, defaultRaw: 'now()', onUpdate: () => new Date(), fieldName: 'updated_at' })
  updatedAt = new Date();
}