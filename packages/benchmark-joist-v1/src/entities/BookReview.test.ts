import { newBookReview } from "./entities";

describe("BookReview", () => {
  it("works", async () => {
    const em = newEntityManager();
    newBookReview(em);
    await em.flush();
  });
});
