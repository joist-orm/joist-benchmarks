import { EntityManager, PostgresDriver, setDefaultEntityManager } from "joist-orm";
import { newPgPool } from "joist-utils";
import knex from "knex";
import { DB_CONFIG } from "seed-data";

// Create a knex instance for database connection
export const dbKnex = knex({
  client: "pg",
  connection: {
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    user: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
  },
  // Disable connection pool timeouts for benchmarking
  pool: { min: 0, max: 10 },
});

// Create a Postgres driver for Joist
export const driver = new PostgresDriver(dbKnex);

// Create an entity manager that will be used for all operations
export const entityManager = new EntityManager({ driver });

// Set the default entity manager for convenience
setDefaultEntityManager(entityManager);

// Function to create a new entity manager for transactions
export function newEntityManager(): EntityManager {
  return new EntityManager({ driver });
}