import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
  Index,
  PrimaryColumn
} from 'typeorm';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'first_name' })
  firstName!: string;

  @Column({ name: 'last_name' })
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => Book, book => book.author)
  books!: Book[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ name: 'author_id' })
  @Index()
  authorId!: number;

  @ManyToOne(() => Author, author => author.books, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'author_id' })
  author!: Author;

  @Column({ nullable: true, type: 'timestamp with time zone' })
  published!: Date | null;

  @Column({ default: 0 })
  pages!: number;

  @OneToMany(() => BookReview, review => review.book)
  reviews!: BookReview[];

  @ManyToMany(() => Tag, tag => tag.books)
  @JoinTable({
    name: 'book_tag',
    joinColumn: { name: 'book_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' }
  })
  tags!: Tag[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

@Entity('book_review')
export class BookReview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'book_id' })
  @Index()
  bookId!: number;

  @ManyToOne(() => Book, book => book.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book!: Book;

  @Column()
  rating!: number;

  @Column({ nullable: true, type: 'text' })
  text!: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @ManyToMany(() => Book, book => book.tags)
  books!: Book[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

@Entity('book_tag')
export class BookTag {
  @PrimaryColumn({ name: 'book_id' })
  bookId!: number;

  @PrimaryColumn({ name: 'tag_id' })
  tagId!: number;
}