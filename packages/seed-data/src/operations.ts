import { SeedData } from "./index";

export type Context = {
  size: number;
  seedData: SeedData;
  shutdown?: () => Promise<void>;
};

export type Operation<C extends Context> = {
  beforeEach(ctx: C): Promise<void>;
  run(ctx: C): Promise<void>;
};

export type AllOperations<C extends Context> = {
  bulkCreate: Operation<C> | undefined;
  bulkLoad: Operation<C> | undefined;
};

export const operations = {
  // bulkCreate: [1, 10, 100, 1000],
  // bulkLoad: [1, 10, 100, 1000],
  bulkCreate: [1, 10, 100],
  bulkLoad: [1, 10, 100],
};
