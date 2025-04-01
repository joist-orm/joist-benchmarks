import { EntityManager } from "joist-orm";
import { AuthorOpts, BookOpts, BookReviewOpts, TagOpts } from "./entities";

// Define the Context type that will be used for all Joist operations
export interface Context {
  em: EntityManager<{
    entities: {
      Author: AuthorOpts;
      Book: BookOpts;
      BookReview: BookReviewOpts;
      Tag: TagOpts;
    };
  }>;
}