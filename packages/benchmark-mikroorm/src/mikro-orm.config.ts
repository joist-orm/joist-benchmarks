import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { DB_CONFIG } from 'shared-utils';
import { Author, Book, BookReview, Tag } from './entities';


const config = defineConfig({
  entities: [Author, Book, BookReview, Tag],
  dbName: DB_CONFIG.database,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  user: DB_CONFIG.username,
  password: DB_CONFIG.password,
  driver: PostgreSqlDriver,
  debug: false,
});

export default config;
