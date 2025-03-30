import { MikroORM } from "@mikro-orm/core";
import { Author, Book, BookReview, Tag } from "./entities";
import { benchmark, measure, getData } from "seed-data";
import { config } from "./mikro-orm.config";

export let orm: MikroORM;

async function loadData(size: number): Promise<number> {
  return measure(async () => {
    const authorRepository = orm.em.getRepository(Author);
    const authors = await authorRepository.find(
      {},
      {
        limit: size,
        populate: ["books", "books.reviews", "books.tags"],
        orderBy: { id: "ASC" },
      },
    );
    console.log(`Loaded ${authors.length} authors with their books, reviews, and tags`);
  });
}

async function saveData(size: number): Promise<number> {
  // Load the generated seed data
  return measure(async () => {});
}

export async function cleanDatabase(): Promise<void> {
  await orm.em.getConnection().execute("TRUNCATE book_tag, book_review, book, author, tag RESTART IDENTITY CASCADE");
  console.log("Database cleaned");
}

async function runBenchmarks(): Promise<void> {
  try {
    orm = await MikroORM.init(config);
    console.log("Database connection initialized");

    const sizes = [1, 10, 100, 1000];

    // Clean the database before starting
    await cleanDatabase();

    // Save data benchmarks
    await benchmark("MikroORM - Save Data", sizes, saveData);

    // Load data benchmarks
    // await benchmark('MikroORM - Load Data', sizes, loadData);
  } finally {
    await orm?.close();
  }
}

runBenchmarks().catch(console.error);
