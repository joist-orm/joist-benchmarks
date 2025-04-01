
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookReview
 * 
 */
export type BookReview = $Result.DefaultSelection<Prisma.$BookReviewPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model BookTag
 * 
 */
export type BookTag = $Result.DefaultSelection<Prisma.$BookTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookReview`: Exposes CRUD operations for the **BookReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookReviews
    * const bookReviews = await prisma.bookReview.findMany()
    * ```
    */
  get bookReview(): Prisma.BookReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookTag`: Exposes CRUD operations for the **BookTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookTags
    * const bookTags = await prisma.bookTag.findMany()
    * ```
    */
  get bookTag(): Prisma.BookTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Author: 'Author',
    Book: 'Book',
    BookReview: 'BookReview',
    Tag: 'Tag',
    BookTag: 'BookTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "author" | "book" | "bookReview" | "tag" | "bookTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookReview: {
        payload: Prisma.$BookReviewPayload<ExtArgs>
        fields: Prisma.BookReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          findFirst: {
            args: Prisma.BookReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          findMany: {
            args: Prisma.BookReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          create: {
            args: Prisma.BookReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          createMany: {
            args: Prisma.BookReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          delete: {
            args: Prisma.BookReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          update: {
            args: Prisma.BookReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          deleteMany: {
            args: Prisma.BookReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          upsert: {
            args: Prisma.BookReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          aggregate: {
            args: Prisma.BookReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookReview>
          }
          groupBy: {
            args: Prisma.BookReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookReviewCountArgs<ExtArgs>
            result: $Utils.Optional<BookReviewCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      BookTag: {
        payload: Prisma.$BookTagPayload<ExtArgs>
        fields: Prisma.BookTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          findFirst: {
            args: Prisma.BookTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          findMany: {
            args: Prisma.BookTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          create: {
            args: Prisma.BookTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          createMany: {
            args: Prisma.BookTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          delete: {
            args: Prisma.BookTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          update: {
            args: Prisma.BookTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          deleteMany: {
            args: Prisma.BookTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          upsert: {
            args: Prisma.BookTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          aggregate: {
            args: Prisma.BookTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookTag>
          }
          groupBy: {
            args: Prisma.BookTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookTagCountArgs<ExtArgs>
            result: $Utils.Optional<BookTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    author?: AuthorOmit
    book?: BookOmit
    bookReview?: BookReviewOmit
    tag?: TagOmit
    bookTag?: BookTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    reviews: number
    tags: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | BookCountOutputTypeCountReviewsArgs
    tags?: boolean | BookCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookReviewWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    books: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | TagCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly firstName: FieldRef<"Author", 'String'>
    readonly lastName: FieldRef<"Author", 'String'>
    readonly email: FieldRef<"Author", 'String'>
    readonly createdAt: FieldRef<"Author", 'DateTime'>
    readonly updatedAt: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    pages: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    pages: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    published: Date | null
    pages: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    published: Date | null
    pages: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    published: number
    pages: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    authorId?: true
    pages?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    authorId?: true
    pages?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    published?: true
    pages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    published?: true
    pages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    published?: true
    pages?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    authorId: number
    published: Date | null
    pages: number
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    published?: boolean
    pages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    reviews?: boolean | Book$reviewsArgs<ExtArgs>
    tags?: boolean | Book$tagsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    published?: boolean
    pages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    published?: boolean
    pages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    published?: boolean
    pages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "authorId" | "published" | "pages" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    reviews?: boolean | Book$reviewsArgs<ExtArgs>
    tags?: boolean | Book$tagsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      reviews: Prisma.$BookReviewPayload<ExtArgs>[]
      tags: Prisma.$BookTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number
      published: Date | null
      pages: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Book$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Book$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Book$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Book$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly authorId: FieldRef<"Book", 'Int'>
    readonly published: FieldRef<"Book", 'DateTime'>
    readonly pages: FieldRef<"Book", 'Int'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.reviews
   */
  export type Book$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    where?: BookReviewWhereInput
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    cursor?: BookReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * Book.tags
   */
  export type Book$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookReview
   */

  export type AggregateBookReview = {
    _count: BookReviewCountAggregateOutputType | null
    _avg: BookReviewAvgAggregateOutputType | null
    _sum: BookReviewSumAggregateOutputType | null
    _min: BookReviewMinAggregateOutputType | null
    _max: BookReviewMaxAggregateOutputType | null
  }

  export type BookReviewAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    rating: number | null
  }

  export type BookReviewSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    rating: number | null
  }

  export type BookReviewMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    rating: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookReviewMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    rating: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookReviewCountAggregateOutputType = {
    id: number
    bookId: number
    rating: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookReviewAvgAggregateInputType = {
    id?: true
    bookId?: true
    rating?: true
  }

  export type BookReviewSumAggregateInputType = {
    id?: true
    bookId?: true
    rating?: true
  }

  export type BookReviewMinAggregateInputType = {
    id?: true
    bookId?: true
    rating?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookReviewMaxAggregateInputType = {
    id?: true
    bookId?: true
    rating?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookReviewCountAggregateInputType = {
    id?: true
    bookId?: true
    rating?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookReview to aggregate.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookReviews
    **/
    _count?: true | BookReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookReviewMaxAggregateInputType
  }

  export type GetBookReviewAggregateType<T extends BookReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateBookReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookReview[P]>
      : GetScalarType<T[P], AggregateBookReview[P]>
  }




  export type BookReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookReviewWhereInput
    orderBy?: BookReviewOrderByWithAggregationInput | BookReviewOrderByWithAggregationInput[]
    by: BookReviewScalarFieldEnum[] | BookReviewScalarFieldEnum
    having?: BookReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookReviewCountAggregateInputType | true
    _avg?: BookReviewAvgAggregateInputType
    _sum?: BookReviewSumAggregateInputType
    _min?: BookReviewMinAggregateInputType
    _max?: BookReviewMaxAggregateInputType
  }

  export type BookReviewGroupByOutputType = {
    id: number
    bookId: number
    rating: number
    text: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookReviewCountAggregateOutputType | null
    _avg: BookReviewAvgAggregateOutputType | null
    _sum: BookReviewSumAggregateOutputType | null
    _min: BookReviewMinAggregateOutputType | null
    _max: BookReviewMaxAggregateOutputType | null
  }

  type GetBookReviewGroupByPayload<T extends BookReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookReviewGroupByOutputType[P]>
            : GetScalarType<T[P], BookReviewGroupByOutputType[P]>
        }
      >
    >


  export type BookReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectScalar = {
    id?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "rating" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["bookReview"]>
  export type BookReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookReview"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      rating: number
      text: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookReview"]>
    composites: {}
  }

  type BookReviewGetPayload<S extends boolean | null | undefined | BookReviewDefaultArgs> = $Result.GetResult<Prisma.$BookReviewPayload, S>

  type BookReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookReviewCountAggregateInputType | true
    }

  export interface BookReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookReview'], meta: { name: 'BookReview' } }
    /**
     * Find zero or one BookReview that matches the filter.
     * @param {BookReviewFindUniqueArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookReviewFindUniqueArgs>(args: SelectSubset<T, BookReviewFindUniqueArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookReviewFindUniqueOrThrowArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, BookReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindFirstArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookReviewFindFirstArgs>(args?: SelectSubset<T, BookReviewFindFirstArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindFirstOrThrowArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, BookReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookReviews
     * const bookReviews = await prisma.bookReview.findMany()
     * 
     * // Get first 10 BookReviews
     * const bookReviews = await prisma.bookReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookReviewFindManyArgs>(args?: SelectSubset<T, BookReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookReview.
     * @param {BookReviewCreateArgs} args - Arguments to create a BookReview.
     * @example
     * // Create one BookReview
     * const BookReview = await prisma.bookReview.create({
     *   data: {
     *     // ... data to create a BookReview
     *   }
     * })
     * 
     */
    create<T extends BookReviewCreateArgs>(args: SelectSubset<T, BookReviewCreateArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookReviews.
     * @param {BookReviewCreateManyArgs} args - Arguments to create many BookReviews.
     * @example
     * // Create many BookReviews
     * const bookReview = await prisma.bookReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookReviewCreateManyArgs>(args?: SelectSubset<T, BookReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookReviews and returns the data saved in the database.
     * @param {BookReviewCreateManyAndReturnArgs} args - Arguments to create many BookReviews.
     * @example
     * // Create many BookReviews
     * const bookReview = await prisma.bookReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookReviews and only return the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, BookReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookReview.
     * @param {BookReviewDeleteArgs} args - Arguments to delete one BookReview.
     * @example
     * // Delete one BookReview
     * const BookReview = await prisma.bookReview.delete({
     *   where: {
     *     // ... filter to delete one BookReview
     *   }
     * })
     * 
     */
    delete<T extends BookReviewDeleteArgs>(args: SelectSubset<T, BookReviewDeleteArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookReview.
     * @param {BookReviewUpdateArgs} args - Arguments to update one BookReview.
     * @example
     * // Update one BookReview
     * const bookReview = await prisma.bookReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookReviewUpdateArgs>(args: SelectSubset<T, BookReviewUpdateArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookReviews.
     * @param {BookReviewDeleteManyArgs} args - Arguments to filter BookReviews to delete.
     * @example
     * // Delete a few BookReviews
     * const { count } = await prisma.bookReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookReviewDeleteManyArgs>(args?: SelectSubset<T, BookReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookReviews
     * const bookReview = await prisma.bookReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookReviewUpdateManyArgs>(args: SelectSubset<T, BookReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookReviews and returns the data updated in the database.
     * @param {BookReviewUpdateManyAndReturnArgs} args - Arguments to update many BookReviews.
     * @example
     * // Update many BookReviews
     * const bookReview = await prisma.bookReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookReviews and only return the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, BookReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookReview.
     * @param {BookReviewUpsertArgs} args - Arguments to update or create a BookReview.
     * @example
     * // Update or create a BookReview
     * const bookReview = await prisma.bookReview.upsert({
     *   create: {
     *     // ... data to create a BookReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookReview we want to update
     *   }
     * })
     */
    upsert<T extends BookReviewUpsertArgs>(args: SelectSubset<T, BookReviewUpsertArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewCountArgs} args - Arguments to filter BookReviews to count.
     * @example
     * // Count the number of BookReviews
     * const count = await prisma.bookReview.count({
     *   where: {
     *     // ... the filter for the BookReviews we want to count
     *   }
     * })
    **/
    count<T extends BookReviewCountArgs>(
      args?: Subset<T, BookReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookReviewAggregateArgs>(args: Subset<T, BookReviewAggregateArgs>): Prisma.PrismaPromise<GetBookReviewAggregateType<T>>

    /**
     * Group by BookReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookReviewGroupByArgs['orderBy'] }
        : { orderBy?: BookReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookReview model
   */
  readonly fields: BookReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookReview model
   */ 
  interface BookReviewFieldRefs {
    readonly id: FieldRef<"BookReview", 'Int'>
    readonly bookId: FieldRef<"BookReview", 'Int'>
    readonly rating: FieldRef<"BookReview", 'Int'>
    readonly text: FieldRef<"BookReview", 'String'>
    readonly createdAt: FieldRef<"BookReview", 'DateTime'>
    readonly updatedAt: FieldRef<"BookReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookReview findUnique
   */
  export type BookReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview findUniqueOrThrow
   */
  export type BookReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview findFirst
   */
  export type BookReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookReviews.
     */
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview findFirstOrThrow
   */
  export type BookReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookReviews.
     */
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview findMany
   */
  export type BookReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReviews to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview create
   */
  export type BookReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a BookReview.
     */
    data: XOR<BookReviewCreateInput, BookReviewUncheckedCreateInput>
  }

  /**
   * BookReview createMany
   */
  export type BookReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookReviews.
     */
    data: BookReviewCreateManyInput | BookReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookReview createManyAndReturn
   */
  export type BookReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * The data used to create many BookReviews.
     */
    data: BookReviewCreateManyInput | BookReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookReview update
   */
  export type BookReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a BookReview.
     */
    data: XOR<BookReviewUpdateInput, BookReviewUncheckedUpdateInput>
    /**
     * Choose, which BookReview to update.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview updateMany
   */
  export type BookReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookReviews.
     */
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyInput>
    /**
     * Filter which BookReviews to update
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to update.
     */
    limit?: number
  }

  /**
   * BookReview updateManyAndReturn
   */
  export type BookReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * The data used to update BookReviews.
     */
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyInput>
    /**
     * Filter which BookReviews to update
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookReview upsert
   */
  export type BookReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the BookReview to update in case it exists.
     */
    where: BookReviewWhereUniqueInput
    /**
     * In case the BookReview found by the `where` argument doesn't exist, create a new BookReview with this data.
     */
    create: XOR<BookReviewCreateInput, BookReviewUncheckedCreateInput>
    /**
     * In case the BookReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookReviewUpdateInput, BookReviewUncheckedUpdateInput>
  }

  /**
   * BookReview delete
   */
  export type BookReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter which BookReview to delete.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview deleteMany
   */
  export type BookReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookReviews to delete
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to delete.
     */
    limit?: number
  }

  /**
   * BookReview without action
   */
  export type BookReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | Tag$booksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Tag$booksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      books: Prisma.$BookTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Tag$booksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.books
   */
  export type Tag$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model BookTag
   */

  export type AggregateBookTag = {
    _count: BookTagCountAggregateOutputType | null
    _avg: BookTagAvgAggregateOutputType | null
    _sum: BookTagSumAggregateOutputType | null
    _min: BookTagMinAggregateOutputType | null
    _max: BookTagMaxAggregateOutputType | null
  }

  export type BookTagAvgAggregateOutputType = {
    bookId: number | null
    tagId: number | null
  }

  export type BookTagSumAggregateOutputType = {
    bookId: number | null
    tagId: number | null
  }

  export type BookTagMinAggregateOutputType = {
    bookId: number | null
    tagId: number | null
  }

  export type BookTagMaxAggregateOutputType = {
    bookId: number | null
    tagId: number | null
  }

  export type BookTagCountAggregateOutputType = {
    bookId: number
    tagId: number
    _all: number
  }


  export type BookTagAvgAggregateInputType = {
    bookId?: true
    tagId?: true
  }

  export type BookTagSumAggregateInputType = {
    bookId?: true
    tagId?: true
  }

  export type BookTagMinAggregateInputType = {
    bookId?: true
    tagId?: true
  }

  export type BookTagMaxAggregateInputType = {
    bookId?: true
    tagId?: true
  }

  export type BookTagCountAggregateInputType = {
    bookId?: true
    tagId?: true
    _all?: true
  }

  export type BookTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTag to aggregate.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookTags
    **/
    _count?: true | BookTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookTagMaxAggregateInputType
  }

  export type GetBookTagAggregateType<T extends BookTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBookTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookTag[P]>
      : GetScalarType<T[P], AggregateBookTag[P]>
  }




  export type BookTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithAggregationInput | BookTagOrderByWithAggregationInput[]
    by: BookTagScalarFieldEnum[] | BookTagScalarFieldEnum
    having?: BookTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookTagCountAggregateInputType | true
    _avg?: BookTagAvgAggregateInputType
    _sum?: BookTagSumAggregateInputType
    _min?: BookTagMinAggregateInputType
    _max?: BookTagMaxAggregateInputType
  }

  export type BookTagGroupByOutputType = {
    bookId: number
    tagId: number
    _count: BookTagCountAggregateOutputType | null
    _avg: BookTagAvgAggregateOutputType | null
    _sum: BookTagSumAggregateOutputType | null
    _min: BookTagMinAggregateOutputType | null
    _max: BookTagMaxAggregateOutputType | null
  }

  type GetBookTagGroupByPayload<T extends BookTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookTagGroupByOutputType[P]>
            : GetScalarType<T[P], BookTagGroupByOutputType[P]>
        }
      >
    >


  export type BookTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    tagId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    tagId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    tagId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectScalar = {
    bookId?: boolean
    tagId?: boolean
  }

  export type BookTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "tagId", ExtArgs["result"]["bookTag"]>
  export type BookTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type BookTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type BookTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $BookTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookTag"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: number
      tagId: number
    }, ExtArgs["result"]["bookTag"]>
    composites: {}
  }

  type BookTagGetPayload<S extends boolean | null | undefined | BookTagDefaultArgs> = $Result.GetResult<Prisma.$BookTagPayload, S>

  type BookTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookTagCountAggregateInputType | true
    }

  export interface BookTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookTag'], meta: { name: 'BookTag' } }
    /**
     * Find zero or one BookTag that matches the filter.
     * @param {BookTagFindUniqueArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookTagFindUniqueArgs>(args: SelectSubset<T, BookTagFindUniqueArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookTagFindUniqueOrThrowArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BookTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindFirstArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookTagFindFirstArgs>(args?: SelectSubset<T, BookTagFindFirstArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindFirstOrThrowArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BookTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookTags
     * const bookTags = await prisma.bookTag.findMany()
     * 
     * // Get first 10 BookTags
     * const bookTags = await prisma.bookTag.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookTagWithBookIdOnly = await prisma.bookTag.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookTagFindManyArgs>(args?: SelectSubset<T, BookTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookTag.
     * @param {BookTagCreateArgs} args - Arguments to create a BookTag.
     * @example
     * // Create one BookTag
     * const BookTag = await prisma.bookTag.create({
     *   data: {
     *     // ... data to create a BookTag
     *   }
     * })
     * 
     */
    create<T extends BookTagCreateArgs>(args: SelectSubset<T, BookTagCreateArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookTags.
     * @param {BookTagCreateManyArgs} args - Arguments to create many BookTags.
     * @example
     * // Create many BookTags
     * const bookTag = await prisma.bookTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookTagCreateManyArgs>(args?: SelectSubset<T, BookTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookTags and returns the data saved in the database.
     * @param {BookTagCreateManyAndReturnArgs} args - Arguments to create many BookTags.
     * @example
     * // Create many BookTags
     * const bookTag = await prisma.bookTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookTags and only return the `bookId`
     * const bookTagWithBookIdOnly = await prisma.bookTag.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BookTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookTag.
     * @param {BookTagDeleteArgs} args - Arguments to delete one BookTag.
     * @example
     * // Delete one BookTag
     * const BookTag = await prisma.bookTag.delete({
     *   where: {
     *     // ... filter to delete one BookTag
     *   }
     * })
     * 
     */
    delete<T extends BookTagDeleteArgs>(args: SelectSubset<T, BookTagDeleteArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookTag.
     * @param {BookTagUpdateArgs} args - Arguments to update one BookTag.
     * @example
     * // Update one BookTag
     * const bookTag = await prisma.bookTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookTagUpdateArgs>(args: SelectSubset<T, BookTagUpdateArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookTags.
     * @param {BookTagDeleteManyArgs} args - Arguments to filter BookTags to delete.
     * @example
     * // Delete a few BookTags
     * const { count } = await prisma.bookTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookTagDeleteManyArgs>(args?: SelectSubset<T, BookTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookTags
     * const bookTag = await prisma.bookTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookTagUpdateManyArgs>(args: SelectSubset<T, BookTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTags and returns the data updated in the database.
     * @param {BookTagUpdateManyAndReturnArgs} args - Arguments to update many BookTags.
     * @example
     * // Update many BookTags
     * const bookTag = await prisma.bookTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookTags and only return the `bookId`
     * const bookTagWithBookIdOnly = await prisma.bookTag.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BookTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookTag.
     * @param {BookTagUpsertArgs} args - Arguments to update or create a BookTag.
     * @example
     * // Update or create a BookTag
     * const bookTag = await prisma.bookTag.upsert({
     *   create: {
     *     // ... data to create a BookTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookTag we want to update
     *   }
     * })
     */
    upsert<T extends BookTagUpsertArgs>(args: SelectSubset<T, BookTagUpsertArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagCountArgs} args - Arguments to filter BookTags to count.
     * @example
     * // Count the number of BookTags
     * const count = await prisma.bookTag.count({
     *   where: {
     *     // ... the filter for the BookTags we want to count
     *   }
     * })
    **/
    count<T extends BookTagCountArgs>(
      args?: Subset<T, BookTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookTagAggregateArgs>(args: Subset<T, BookTagAggregateArgs>): Prisma.PrismaPromise<GetBookTagAggregateType<T>>

    /**
     * Group by BookTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookTagGroupByArgs['orderBy'] }
        : { orderBy?: BookTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookTag model
   */
  readonly fields: BookTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookTag model
   */ 
  interface BookTagFieldRefs {
    readonly bookId: FieldRef<"BookTag", 'Int'>
    readonly tagId: FieldRef<"BookTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookTag findUnique
   */
  export type BookTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag findUniqueOrThrow
   */
  export type BookTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag findFirst
   */
  export type BookTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTags.
     */
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag findFirstOrThrow
   */
  export type BookTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTags.
     */
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag findMany
   */
  export type BookTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTags to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag create
   */
  export type BookTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BookTag.
     */
    data: XOR<BookTagCreateInput, BookTagUncheckedCreateInput>
  }

  /**
   * BookTag createMany
   */
  export type BookTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookTags.
     */
    data: BookTagCreateManyInput | BookTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookTag createManyAndReturn
   */
  export type BookTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * The data used to create many BookTags.
     */
    data: BookTagCreateManyInput | BookTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTag update
   */
  export type BookTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BookTag.
     */
    data: XOR<BookTagUpdateInput, BookTagUncheckedUpdateInput>
    /**
     * Choose, which BookTag to update.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag updateMany
   */
  export type BookTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookTags.
     */
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyInput>
    /**
     * Filter which BookTags to update
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to update.
     */
    limit?: number
  }

  /**
   * BookTag updateManyAndReturn
   */
  export type BookTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * The data used to update BookTags.
     */
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyInput>
    /**
     * Filter which BookTags to update
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTag upsert
   */
  export type BookTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BookTag to update in case it exists.
     */
    where: BookTagWhereUniqueInput
    /**
     * In case the BookTag found by the `where` argument doesn't exist, create a new BookTag with this data.
     */
    create: XOR<BookTagCreateInput, BookTagUncheckedCreateInput>
    /**
     * In case the BookTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookTagUpdateInput, BookTagUncheckedUpdateInput>
  }

  /**
   * BookTag delete
   */
  export type BookTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter which BookTag to delete.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag deleteMany
   */
  export type BookTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTags to delete
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to delete.
     */
    limit?: number
  }

  /**
   * BookTag without action
   */
  export type BookTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    published: 'published',
    pages: 'pages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookReviewScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    rating: 'rating',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookReviewScalarFieldEnum = (typeof BookReviewScalarFieldEnum)[keyof typeof BookReviewScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const BookTagScalarFieldEnum: {
    bookId: 'bookId',
    tagId: 'tagId'
  };

  export type BookTagScalarFieldEnum = (typeof BookTagScalarFieldEnum)[keyof typeof BookTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    email?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    books?: BookListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    books?: BookListRelationFilter
  }, "id" | "email">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    firstName?: StringWithAggregatesFilter<"Author"> | string
    lastName?: StringWithAggregatesFilter<"Author"> | string
    email?: StringWithAggregatesFilter<"Author"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    published?: DateTimeNullableFilter<"Book"> | Date | string | null
    pages?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    reviews?: BookReviewListRelationFilter
    tags?: BookTagListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    published?: SortOrderInput | SortOrder
    pages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AuthorOrderByWithRelationInput
    reviews?: BookReviewOrderByRelationAggregateInput
    tags?: BookTagOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    published?: DateTimeNullableFilter<"Book"> | Date | string | null
    pages?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    reviews?: BookReviewListRelationFilter
    tags?: BookTagListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    published?: SortOrderInput | SortOrder
    pages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    authorId?: IntWithAggregatesFilter<"Book"> | number
    published?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    pages?: IntWithAggregatesFilter<"Book"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type BookReviewWhereInput = {
    AND?: BookReviewWhereInput | BookReviewWhereInput[]
    OR?: BookReviewWhereInput[]
    NOT?: BookReviewWhereInput | BookReviewWhereInput[]
    id?: IntFilter<"BookReview"> | number
    bookId?: IntFilter<"BookReview"> | number
    rating?: IntFilter<"BookReview"> | number
    text?: StringNullableFilter<"BookReview"> | string | null
    createdAt?: DateTimeFilter<"BookReview"> | Date | string
    updatedAt?: DateTimeFilter<"BookReview"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookReviewOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookReviewWhereInput | BookReviewWhereInput[]
    OR?: BookReviewWhereInput[]
    NOT?: BookReviewWhereInput | BookReviewWhereInput[]
    bookId?: IntFilter<"BookReview"> | number
    rating?: IntFilter<"BookReview"> | number
    text?: StringNullableFilter<"BookReview"> | string | null
    createdAt?: DateTimeFilter<"BookReview"> | Date | string
    updatedAt?: DateTimeFilter<"BookReview"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookReviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookReviewCountOrderByAggregateInput
    _avg?: BookReviewAvgOrderByAggregateInput
    _max?: BookReviewMaxOrderByAggregateInput
    _min?: BookReviewMinOrderByAggregateInput
    _sum?: BookReviewSumOrderByAggregateInput
  }

  export type BookReviewScalarWhereWithAggregatesInput = {
    AND?: BookReviewScalarWhereWithAggregatesInput | BookReviewScalarWhereWithAggregatesInput[]
    OR?: BookReviewScalarWhereWithAggregatesInput[]
    NOT?: BookReviewScalarWhereWithAggregatesInput | BookReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookReview"> | number
    bookId?: IntWithAggregatesFilter<"BookReview"> | number
    rating?: IntWithAggregatesFilter<"BookReview"> | number
    text?: StringNullableWithAggregatesFilter<"BookReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BookReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookReview"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    books?: BookTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    books?: BookTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type BookTagWhereInput = {
    AND?: BookTagWhereInput | BookTagWhereInput[]
    OR?: BookTagWhereInput[]
    NOT?: BookTagWhereInput | BookTagWhereInput[]
    bookId?: IntFilter<"BookTag"> | number
    tagId?: IntFilter<"BookTag"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type BookTagOrderByWithRelationInput = {
    bookId?: SortOrder
    tagId?: SortOrder
    book?: BookOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type BookTagWhereUniqueInput = Prisma.AtLeast<{
    bookId_tagId?: BookTagBookIdTagIdCompoundUniqueInput
    AND?: BookTagWhereInput | BookTagWhereInput[]
    OR?: BookTagWhereInput[]
    NOT?: BookTagWhereInput | BookTagWhereInput[]
    bookId?: IntFilter<"BookTag"> | number
    tagId?: IntFilter<"BookTag"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "bookId_tagId">

  export type BookTagOrderByWithAggregationInput = {
    bookId?: SortOrder
    tagId?: SortOrder
    _count?: BookTagCountOrderByAggregateInput
    _avg?: BookTagAvgOrderByAggregateInput
    _max?: BookTagMaxOrderByAggregateInput
    _min?: BookTagMinOrderByAggregateInput
    _sum?: BookTagSumOrderByAggregateInput
  }

  export type BookTagScalarWhereWithAggregatesInput = {
    AND?: BookTagScalarWhereWithAggregatesInput | BookTagScalarWhereWithAggregatesInput[]
    OR?: BookTagScalarWhereWithAggregatesInput[]
    NOT?: BookTagScalarWhereWithAggregatesInput | BookTagScalarWhereWithAggregatesInput[]
    bookId?: IntWithAggregatesFilter<"BookTag"> | number
    tagId?: IntWithAggregatesFilter<"BookTag"> | number
  }

  export type AuthorCreateInput = {
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutBooksInput
    reviews?: BookReviewCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    reviews?: BookReviewUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    authorId: number
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewCreateInput = {
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutReviewsInput
  }

  export type BookReviewUncheckedCreateInput = {
    id?: number
    bookId: number
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type BookReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewCreateManyInput = {
    id?: number
    bookId: number
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookTagCreateInput = {
    book: BookCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutBooksInput
  }

  export type BookTagUncheckedCreateInput = {
    bookId: number
    tagId: number
  }

  export type BookTagUpdateInput = {
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookTagUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type BookTagCreateManyInput = {
    bookId: number
    tagId: number
  }

  export type BookTagUpdateManyMutationInput = {

  }

  export type BookTagUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookReviewListRelationFilter = {
    every?: BookReviewWhereInput
    some?: BookReviewWhereInput
    none?: BookReviewWhereInput
  }

  export type BookTagListRelationFilter = {
    every?: BookTagWhereInput
    some?: BookTagWhereInput
    none?: BookTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    pages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    pages?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    pages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    pages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    pages?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookReviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
  }

  export type BookReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookReviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookReviewSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type BookTagBookIdTagIdCompoundUniqueInput = {
    bookId: number
    tagId: number
  }

  export type BookTagCountOrderByAggregateInput = {
    bookId?: SortOrder
    tagId?: SortOrder
  }

  export type BookTagAvgOrderByAggregateInput = {
    bookId?: SortOrder
    tagId?: SortOrder
  }

  export type BookTagMaxOrderByAggregateInput = {
    bookId?: SortOrder
    tagId?: SortOrder
  }

  export type BookTagMinOrderByAggregateInput = {
    bookId?: SortOrder
    tagId?: SortOrder
  }

  export type BookTagSumOrderByAggregateInput = {
    bookId?: SortOrder
    tagId?: SortOrder
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookReviewCreateNestedManyWithoutBookInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
  }

  export type BookTagCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookReviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BookReviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput | BookReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    set?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    disconnect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    delete?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    update?: BookReviewUpdateWithWhereUniqueWithoutBookInput | BookReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput | BookReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
  }

  export type BookTagUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutBookInput | BookTagUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutBookInput | BookTagUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutBookInput | BookTagUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookReviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput | BookReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    set?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    disconnect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    delete?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    update?: BookReviewUpdateWithWhereUniqueWithoutBookInput | BookReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput | BookReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutBookInput | BookTagUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutBookInput | BookTagUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutBookInput | BookTagUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput
    connect?: BookWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput
    upsert?: BookUpsertWithoutReviewsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutReviewsInput, BookUpdateWithoutReviewsInput>, BookUncheckedUpdateWithoutReviewsInput>
  }

  export type BookTagCreateNestedManyWithoutTagInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutTagInput | BookTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutTagInput | BookTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutTagInput | BookTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutTagInput | BookTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutTagInput | BookTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutTagInput | BookTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutTagsInput = {
    create?: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTagsInput
    connect?: BookWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutBooksInput = {
    create?: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBooksInput
    connect?: TagWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTagsInput
    upsert?: BookUpsertWithoutTagsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutTagsInput, BookUpdateWithoutTagsInput>, BookUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBooksInput
    upsert?: TagUpsertWithoutBooksInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBooksInput, TagUpdateWithoutBooksInput>, TagUncheckedUpdateWithoutBooksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BookCreateWithoutAuthorInput = {
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: BookReviewCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    published?: DateTimeNullableFilter<"Book"> | Date | string | null
    pages?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
  }

  export type AuthorCreateWithoutBooksInput = {
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type BookReviewCreateWithoutBookInput = {
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookReviewUncheckedCreateWithoutBookInput = {
    id?: number
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookReviewCreateOrConnectWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    create: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput>
  }

  export type BookReviewCreateManyBookInputEnvelope = {
    data: BookReviewCreateManyBookInput | BookReviewCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookTagCreateWithoutBookInput = {
    tag: TagCreateNestedOneWithoutBooksInput
  }

  export type BookTagUncheckedCreateWithoutBookInput = {
    tagId: number
  }

  export type BookTagCreateOrConnectWithoutBookInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput>
  }

  export type BookTagCreateManyBookInputEnvelope = {
    data: BookTagCreateManyBookInput | BookTagCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewUpsertWithWhereUniqueWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    update: XOR<BookReviewUpdateWithoutBookInput, BookReviewUncheckedUpdateWithoutBookInput>
    create: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput>
  }

  export type BookReviewUpdateWithWhereUniqueWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    data: XOR<BookReviewUpdateWithoutBookInput, BookReviewUncheckedUpdateWithoutBookInput>
  }

  export type BookReviewUpdateManyWithWhereWithoutBookInput = {
    where: BookReviewScalarWhereInput
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyWithoutBookInput>
  }

  export type BookReviewScalarWhereInput = {
    AND?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
    OR?: BookReviewScalarWhereInput[]
    NOT?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
    id?: IntFilter<"BookReview"> | number
    bookId?: IntFilter<"BookReview"> | number
    rating?: IntFilter<"BookReview"> | number
    text?: StringNullableFilter<"BookReview"> | string | null
    createdAt?: DateTimeFilter<"BookReview"> | Date | string
    updatedAt?: DateTimeFilter<"BookReview"> | Date | string
  }

  export type BookTagUpsertWithWhereUniqueWithoutBookInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutBookInput, BookTagUncheckedUpdateWithoutBookInput>
    create: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutBookInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutBookInput, BookTagUncheckedUpdateWithoutBookInput>
  }

  export type BookTagUpdateManyWithWhereWithoutBookInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutBookInput>
  }

  export type BookTagScalarWhereInput = {
    AND?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
    OR?: BookTagScalarWhereInput[]
    NOT?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
    bookId?: IntFilter<"BookTag"> | number
    tagId?: IntFilter<"BookTag"> | number
  }

  export type BookCreateWithoutReviewsInput = {
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutBooksInput
    tags?: BookTagCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    authorId: number
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutReviewsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
  }

  export type BookUpsertWithoutReviewsInput = {
    update: XOR<BookUpdateWithoutReviewsInput, BookUncheckedUpdateWithoutReviewsInput>
    create: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutReviewsInput, BookUncheckedUpdateWithoutReviewsInput>
  }

  export type BookUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookTagCreateWithoutTagInput = {
    book: BookCreateNestedOneWithoutTagsInput
  }

  export type BookTagUncheckedCreateWithoutTagInput = {
    bookId: number
  }

  export type BookTagCreateOrConnectWithoutTagInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput>
  }

  export type BookTagCreateManyTagInputEnvelope = {
    data: BookTagCreateManyTagInput | BookTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type BookTagUpsertWithWhereUniqueWithoutTagInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutTagInput, BookTagUncheckedUpdateWithoutTagInput>
    create: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutTagInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutTagInput, BookTagUncheckedUpdateWithoutTagInput>
  }

  export type BookTagUpdateManyWithWhereWithoutTagInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutTagInput>
  }

  export type BookCreateWithoutTagsInput = {
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutBooksInput
    reviews?: BookReviewCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    authorId: number
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutTagsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutBooksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutBooksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutTagsInput = {
    update: XOR<BookUpdateWithoutTagsInput, BookUncheckedUpdateWithoutTagsInput>
    create: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutTagsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutTagsInput, BookUncheckedUpdateWithoutTagsInput>
  }

  export type BookUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    reviews?: BookReviewUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type TagUpsertWithoutBooksInput = {
    update: XOR<TagUpdateWithoutBooksInput, TagUncheckedUpdateWithoutBooksInput>
    create: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBooksInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBooksInput, TagUncheckedUpdateWithoutBooksInput>
  }

  export type TagUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateManyAuthorInput = {
    id?: number
    title: string
    published?: Date | string | null
    pages?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: BookReviewUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewCreateManyBookInput = {
    id?: number
    rating: number
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookTagCreateManyBookInput = {
    tagId: number
  }

  export type BookReviewUpdateWithoutBookInput = {
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookReviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookTagUpdateWithoutBookInput = {
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookTagUncheckedUpdateWithoutBookInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type BookTagUncheckedUpdateManyWithoutBookInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type BookTagCreateManyTagInput = {
    bookId: number
  }

  export type BookTagUpdateWithoutTagInput = {
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BookTagUncheckedUpdateWithoutTagInput = {
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookTagUncheckedUpdateManyWithoutTagInput = {
    bookId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}