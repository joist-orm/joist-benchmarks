export * from './interfaces';

export const DB_CONFIG = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'benchmark'
};

export const getDataPath = (size: number): string => {
  return `${__dirname}/../../data/seed-${size}.json`;
};

export const measure = async (fn: () => Promise<void>): Promise<number> => {
  const start = Date.now();
  await fn();
  return Date.now() - start;
};

export async function benchmark(
  name: string,
  sizesToRun: number[],
  fn: (size: number) => Promise<number>
): Promise<void> {
  console.log(`\n--- ${name} ---`);
  console.log('Size\tDuration (ms)');

  for (const size of sizesToRun) {
    const duration = await fn(size);
    console.log(`${size}\t${duration}`);
  }
};
