import { BookCodegen, bookConfig as config } from "./entities.ts";

export class Book extends BookCodegen {}

// remove once you have actual rules/hooks
config.placeholder();
