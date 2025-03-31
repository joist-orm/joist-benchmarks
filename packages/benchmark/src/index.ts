import { SeedData } from "seed-data";

export type Context = {
  size: number;
  seedData: SeedData;
};

export type Operation<C extends Context> = {
  beforeEach(ctx: C): Promise<void>;
  run(ctx: C): Promise<void>;
};

export type AllOperations<C extends Context> = {
  bulkCreate: Operation<C> | undefined;
  bulkLoad: Operation<C> | undefined;
  shutdown(): Promise<void>;
};
