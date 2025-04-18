import {
  BaseEntity,
  type Changes,
  cleanStringValue,
  type Collection,
  ConfigApi,
  type DeepPartialOrNull,
  type EntityFilter,
  type EntityGraphQLFilter,
  type EntityMetadata,
  failNoIdYet,
  type FilterOf,
  type Flavor,
  getField,
  type GraphQLFilterOf,
  hasMany,
  hasManyToMany,
  hasOne,
  isLoaded,
  type JsonPayload,
  type Lens,
  type Loaded,
  type LoadHint,
  loadLens,
  type ManyToOneReference,
  newChangesProxy,
  newRequiredRule,
  type OptsOf,
  type OrderBy,
  type PartialOrNull,
  setField,
  setOpts,
  type TaggedId,
  toIdOf,
  toJSON,
  type ToJsonHint,
  updatePartial,
  type ValueFilter,
  type ValueGraphQLFilter,
} from "joist-orm";
import {
  Author,
  type AuthorId,
  authorMeta,
  type AuthorOrder,
  Book,
  bookMeta,
  BookReview,
  type BookReviewId,
  bookReviewMeta,
  type Entity,
  EntityManager,
  newBook,
  Tag,
  type TagId,
  tagMeta,
} from "../entities.js";

export type BookId = Flavor<string, "Book">;

export interface BookFields {
  id: { kind: "primitive"; type: string; unique: true; nullable: never };
  title: { kind: "primitive"; type: string; unique: false; nullable: never; derived: false };
  published: { kind: "primitive"; type: Date; unique: false; nullable: undefined; derived: false };
  pages: { kind: "primitive"; type: number; unique: false; nullable: never; derived: false };
  createdAt: { kind: "primitive"; type: Date; unique: false; nullable: never; derived: true };
  updatedAt: { kind: "primitive"; type: Date; unique: false; nullable: never; derived: true };
  author: { kind: "m2o"; type: Author; nullable: never; derived: false };
  tags: { kind: "m2m"; type: Tag };
  reviews: { kind: "o2m"; type: BookReview };
}

export interface BookOpts {
  title: string;
  published?: Date | null;
  pages?: number;
  author: Author | AuthorId;
  reviews?: BookReview[];
  tags?: Tag[];
}

export interface BookIdsOpts {
  authorId?: AuthorId | null;
  reviewIds?: BookReviewId[] | null;
  tagIds?: TagId[] | null;
}

export interface BookFilter {
  id?: ValueFilter<BookId, never> | null;
  title?: ValueFilter<string, never>;
  published?: ValueFilter<Date, null>;
  pages?: ValueFilter<number, never>;
  createdAt?: ValueFilter<Date, never>;
  updatedAt?: ValueFilter<Date, never>;
  author?: EntityFilter<Author, AuthorId, FilterOf<Author>, never>;
  reviews?: EntityFilter<BookReview, BookReviewId, FilterOf<BookReview>, null | undefined>;
  tags?: EntityFilter<Tag, TagId, FilterOf<Tag>, null | undefined>;
}

export interface BookGraphQLFilter {
  id?: ValueGraphQLFilter<BookId>;
  title?: ValueGraphQLFilter<string>;
  published?: ValueGraphQLFilter<Date>;
  pages?: ValueGraphQLFilter<number>;
  createdAt?: ValueGraphQLFilter<Date>;
  updatedAt?: ValueGraphQLFilter<Date>;
  author?: EntityGraphQLFilter<Author, AuthorId, GraphQLFilterOf<Author>, never>;
  reviews?: EntityGraphQLFilter<BookReview, BookReviewId, GraphQLFilterOf<BookReview>, null | undefined>;
  tags?: EntityGraphQLFilter<Tag, TagId, GraphQLFilterOf<Tag>, null | undefined>;
}

export interface BookOrder {
  id?: OrderBy;
  title?: OrderBy;
  published?: OrderBy;
  pages?: OrderBy;
  createdAt?: OrderBy;
  updatedAt?: OrderBy;
  author?: AuthorOrder;
}

export interface BookFactoryExtras {
}

export const bookConfig = new ConfigApi<Book, {}>();

bookConfig.addRule(newRequiredRule("title"));
bookConfig.addRule(newRequiredRule("pages"));
bookConfig.addRule(newRequiredRule("createdAt"));
bookConfig.addRule(newRequiredRule("updatedAt"));
bookConfig.addRule(newRequiredRule("author"));
bookConfig.setDefault("pages", 0);

declare module "joist-orm" {
  interface TypeMap {
    Book: {
      entityType: Book;
      filterType: BookFilter;
      gqlFilterType: BookGraphQLFilter;
      orderType: BookOrder;
      optsType: BookOpts;
      fieldsType: BookFields;
      optIdsType: BookIdsOpts;
      factoryExtrasType: BookFactoryExtras;
      factoryOptsType: Parameters<typeof newBook>[1];
    };
  }
}

export abstract class BookCodegen extends BaseEntity<EntityManager, string> implements Entity {
  static readonly tagName = "b";
  static readonly metadata: EntityMetadata<Book>;

  declare readonly __type: { 0: "Book" };

  constructor(em: EntityManager, opts: BookOpts) {
    super(em, opts);
    setOpts(this as any as Book, opts, { calledFromConstructor: true });
  }

  get id(): BookId {
    return this.idMaybe || failNoIdYet("Book");
  }

  get idMaybe(): BookId | undefined {
    return toIdOf(bookMeta, this.idTaggedMaybe);
  }

  get idTagged(): TaggedId {
    return this.idTaggedMaybe || failNoIdYet("Book");
  }

  get idTaggedMaybe(): TaggedId | undefined {
    return getField(this, "id");
  }

  get title(): string {
    return getField(this, "title");
  }

  set title(title: string) {
    setField(this, "title", cleanStringValue(title));
  }

  get published(): Date | undefined {
    return getField(this, "published");
  }

  set published(published: Date | undefined) {
    setField(this, "published", published);
  }

  get pages(): number {
    return getField(this, "pages");
  }

  set pages(pages: number) {
    setField(this, "pages", pages);
  }

  get createdAt(): Date {
    return getField(this, "createdAt");
  }

  get updatedAt(): Date {
    return getField(this, "updatedAt");
  }

  /**
   * Partial update taking any subset of the entities fields.
   *
   * Unlike `set`, null is used as a marker to mean "unset this field", and undefined
   * is left as untouched.
   *
   * Collections are exhaustively set to the new values, however,
   * {@link https://joist-orm.io/docs/features/partial-update-apis#incremental-collection-updates | Incremental collection updates} are supported.
   *
   * @example
   * ```
   * entity.setPartial({
   *   firstName: 'foo' // updated
   *   lastName: undefined // do nothing
   *   age: null // unset, (i.e. set it as undefined)
   * });
   * ```
   * @see {@link https://joist-orm.io/docs/features/partial-update-apis | Partial Update APIs} on the Joist docs
   */
  set(opts: Partial<BookOpts>): void {
    setOpts(this as any as Book, opts);
  }

  /**
   * Partial update taking any subset of the entities fields.
   *
   * Unlike `set`, null is used as a marker to mean "unset this field", and undefined
   * is left as untouched.
   *
   * Collections are exhaustively set to the new values, however,
   * {@link https://joist-orm.io/docs/features/partial-update-apis#incremental-collection-updates | Incremental collection updates} are supported.
   *
   * @example
   * ```
   * entity.setPartial({
   *   firstName: 'foo' // updated
   *   lastName: undefined // do nothing
   *   age: null // unset, (i.e. set it as undefined)
   * });
   * ```
   * @see {@link https://joist-orm.io/docs/features/partial-update-apis | Partial Update APIs} on the Joist docs
   */
  setPartial(opts: PartialOrNull<BookOpts>): void {
    setOpts(this as any as Book, opts as OptsOf<Book>, { partial: true });
  }

  /**
   * Partial update taking any nested subset of the entities fields.
   *
   * Unlike `set`, null is used as a marker to mean "unset this field", and undefined
   * is left as untouched.
   *
   * Collections are exhaustively set to the new values, however,
   * {@link https://joist-orm.io/docs/features/partial-update-apis#incremental-collection-updates | Incremental collection updates} are supported.
   *
   * @example
   * ```
   * entity.setDeepPartial({
   *   firstName: 'foo' // updated
   *   lastName: undefined // do nothing
   *   age: null // unset, (i.e. set it as undefined)
   *   books: [{ title: "b1" }], // create a child book
   * });
   * ```
   * @see {@link https://joist-orm.io/docs/features/partial-update-apis | Partial Update APIs} on the Joist docs
   */
  setDeepPartial(opts: DeepPartialOrNull<Book>): Promise<void> {
    return updatePartial(this as any as Book, opts);
  }

  /**
   * Details the field changes of the entity within the current unit of work.
   *
   * @see {@link https://joist-orm.io/docs/features/changed-fields | Changed Fields} on the Joist docs
   */
  get changes(): Changes<Book> {
    return newChangesProxy(this) as any;
  }

  /**
   * Traverse from this entity using a lens, and load the result.
   *
   * @see {@link https://joist-orm.io/docs/advanced/lenses | Lens Traversal} on the Joist docs
   */
  load<U, V>(fn: (lens: Lens<Book>) => Lens<U, V>, opts: { sql?: boolean } = {}): Promise<V> {
    return loadLens(this as any as Book, fn, opts);
  }

  /**
   * Hydrate this entity using a load hint
   *
   * @see {@link https://joist-orm.io/docs/features/loading-entities#1-object-graph-navigation | Loading entities} on the Joist docs
   */
  populate<const H extends LoadHint<Book>>(hint: H): Promise<Loaded<Book, H>>;
  populate<const H extends LoadHint<Book>>(opts: { hint: H; forceReload?: boolean }): Promise<Loaded<Book, H>>;
  populate<const H extends LoadHint<Book>, V>(hint: H, fn: (b: Loaded<Book, H>) => V): Promise<V>;
  populate<const H extends LoadHint<Book>, V>(
    opts: { hint: H; forceReload?: boolean },
    fn: (b: Loaded<Book, H>) => V,
  ): Promise<V>;
  populate<const H extends LoadHint<Book>, V>(
    hintOrOpts: any,
    fn?: (b: Loaded<Book, H>) => V,
  ): Promise<Loaded<Book, H> | V> {
    return this.em.populate(this as any as Book, hintOrOpts, fn);
  }

  /**
   * Given a load hint, checks if it is loaded within the unit of work.
   *
   * Type Guarded via Loaded<>
   */
  isLoaded<const H extends LoadHint<Book>>(hint: H): this is Loaded<Book, H> {
    return isLoaded(this as any as Book, hint);
  }

  /**
   * Build a type-safe, loadable and relation aware POJO from this entity, given a hint.
   *
   * Note: As the hint might load, this returns a Promise
   *
   * @example
   * ```
   * const payload = await a.toJSON({
   *   id: true,
   *   books: { id: true, reviews: { rating: true } }
   * });
   * ```
   * @see {@link https://joist-orm.io/docs/advanced/json-payloads | Json Payloads} on the Joist docs
   */
  toJSON(): object;
  toJSON<const H extends ToJsonHint<Book>>(hint: H): Promise<JsonPayload<Book, H>>;
  toJSON(hint?: any): object {
    return !hint || typeof hint === "string" ? super.toJSON() : toJSON(this, hint);
  }

  get reviews(): Collection<Book, BookReview> {
    return this.__data.relations.reviews ??= hasMany(this, bookReviewMeta, "reviews", "book", "book_id", undefined);
  }

  get author(): ManyToOneReference<Book, Author, never> {
    return this.__data.relations.author ??= hasOne(this, authorMeta, "author", "books");
  }

  get tags(): Collection<Book, Tag> {
    return this.__data.relations.tags ??= hasManyToMany(
      this,
      "book_tag",
      "tags",
      "book_id",
      tagMeta,
      "books",
      "tag_id",
    );
  }
}
