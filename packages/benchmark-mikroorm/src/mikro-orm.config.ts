import { NamingStrategy, Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Author, Book, BookReview, Tag } from './entities';
import { DB_CONFIG } from 'shared-utils';

// Create a custom naming strategy that preserves camelCase
class CamelCaseNamingStrategy extends UnderscoreNamingStrategy {
  propertyToColumnName(propertyName: string): string {
    return propertyName;
  }
}

const config: Options<PostgreSqlDriver> = {
  entities: [Author, Book, BookReview, Tag],
  dbName: DB_CONFIG.database,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  user: DB_CONFIG.username,
  password: DB_CONFIG.password,
  type: 'postgresql',
  debug: false,
  namingStrategy: CamelCaseNamingStrategy,
};

export default config;