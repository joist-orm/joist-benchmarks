import postgres from "postgres";
import { run, bench, summary } from "mitata";
import { DB_CONFIG } from "seed-data";
import { setToxiproxyLatency } from "./toxi-init.ts";

// yarn pipeline
// node --expose-gc --import tsx --env-file=.env ./pipeline.cjs

// Number of statements (i.e. INSERT author, UPDATE book, etc)
const numStatements = 10;

// url: "postgres://postgres:postgres@localhost:5432/benchmark",
const sql = postgres(DB_CONFIG.url, {
  onnotice(n) {
    if (n.severity !== "NOTICE") {
      console.error(n);
    }
  },
});

let nextTag = 0;

async function testPipelining() {
  // Sequential execution (no pipelining, just serially on 1 connection) ==> 3-5ms
  summary(() => {
    bench("sequential", async () => {
      await sql.begin(async (sql) => {
        for (let i = 0; i < numStatements; i++) {
          await sql`INSERT INTO tag (name) VALUES (${`value-${nextTag++}`})`;
        }
      });
    });

    // "Concurrent" execution with Promise.all  ==> 15ms
    // This is expensive b/c each statement is waiting on the connection pool
    bench("concurrent", async () => {
      const promises = [];
      for (let i = 0; i < numStatements; i++) {
        promises.push(sql`INSERT INTO tag (name)VALUES (${`value-${nextTag++}`})`);
      }
      await Promise.all(promises);
    });

    // Now use sql.begin so we have a reserved connection => can pipeline
    bench("pipeline (return string[])", async () => {
      await sql.begin((sql) => {
        const statements = [];
        for (let i = 0; i < numStatements; i++) {
          statements.push(sql`INSERT INTO tag (name) VALUES (${`value-${nextTag++}`})`);
        }
        return statements;
      });
    });

    // Also with sql.begin so we have a reserved connection => can pipeline ==> < 1ms
    bench("pipeline (await Promise.all)", async () => {
      await sql.begin(async (sql) => {
        const statements = [];
        for (let i = 0; i < numStatements; i++) {
          statements.push(sql`INSERT INTO tag (name) VALUES (${`value-${nextTag++}`})`);
        }
        await Promise.all(statements);
      });
    });
  });

  await setToxiproxyLatency(2);
  await sql`TRUNCATE tag CASCADE`;
  await run();
  await sql.end();
}

testPipelining().catch(console.error);
