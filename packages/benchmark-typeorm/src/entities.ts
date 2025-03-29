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

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => Book, book => book.author)
  books!: Book[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  @Index()
  authorId!: number;

  @ManyToOne(() => Author, author => author.books, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'authorId' })
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
    joinColumn: { name: 'bookId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' }
  })
  tags!: Tag[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}

@Entity('book_review')
export class BookReview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Index()
  bookId!: number;

  @ManyToOne(() => Book, book => book.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  book!: Book;

  @Column()
  rating!: number;

  @Column({ nullable: true, type: 'text' })
  text!: string | null;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
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

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;
}

@Entity('book_tag')
export class BookTag {
  @PrimaryColumn()
  bookId!: number;

  @PrimaryColumn()
  tagId!: number;
}