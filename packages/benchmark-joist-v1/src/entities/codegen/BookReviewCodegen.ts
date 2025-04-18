import {
  BaseEntity,
  type Changes,
  cleanStringValue,
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
  Book,
  type BookId,
  bookMeta,
  type BookOrder,
  BookReview,
  bookReviewMeta,
  type Entity,
  EntityManager,
  newBookReview,
} from "../entities.js";

export type BookReviewId = Flavor<string, "BookReview">;

export interface BookReviewFields {
  id: { kind: "primitive"; type: string; unique: true; nullable: never };
  rating: { kind: "primitive"; type: number; unique: false; nullable: never; derived: false };
  text: { kind: "primitive"; type: string; unique: false; nullable: undefined; derived: false };
  createdAt: { kind: "primitive"; type: Date; unique: false; nullable: never; derived: true };
  updatedAt: { kind: "primitive"; type: Date; unique: false; nullable: never; derived: true };
  book: { kind: "m2o"; type: Book; nullable: never; derived: false };
}

export interface BookReviewOpts {
  rating: number;
  text?: string | null;
  book: Book | BookId;
}

export interface BookReviewIdsOpts {
  bookId?: BookId | null;
}

export interface BookReviewFilter {
  id?: ValueFilter<BookReviewId, never> | null;
  rating?: ValueFilter<number, never>;
  text?: ValueFilter<string, null>;
  createdAt?: ValueFilter<Date, never>;
  updatedAt?: ValueFilter<Date, never>;
  book?: EntityFilter<Book, BookId, FilterOf<Book>, never>;
}

export interface BookReviewGraphQLFilter {
  id?: ValueGraphQLFilter<BookReviewId>;
  rating?: ValueGraphQLFilter<number>;
  text?: ValueGraphQLFilter<string>;
  createdAt?: ValueGraphQLFilter<Date>;
  updatedAt?: ValueGraphQLFilter<Date>;
  book?: EntityGraphQLFilter<Book, BookId, GraphQLFilterOf<Book>, never>;
}

export interface BookReviewOrder {
  id?: OrderBy;
  rating?: OrderBy;
  text?: OrderBy;
  createdAt?: OrderBy;
  updatedAt?: OrderBy;
  book?: BookOrder;
}

export interface BookReviewFactoryExtras {
}

export const bookReviewConfig = new ConfigApi<BookReview, {}>();

bookReviewConfig.addRule(newRequiredRule("rating"));
bookReviewConfig.addRule(newRequiredRule("createdAt"));
bookReviewConfig.addRule(newRequiredRule("updatedAt"));
bookReviewConfig.addRule(newRequiredRule("book"));

declare module "joist-orm" {
  interface TypeMap {
    BookReview: {
      entityType: BookReview;
      filterType: BookReviewFilter;
      gqlFilterType: BookReviewGraphQLFilter;
      orderType: BookReviewOrder;
      optsType: BookReviewOpts;
      fieldsType: BookReviewFields;
      optIdsType: BookReviewIdsOpts;
      factoryExtrasType: BookReviewFactoryExtras;
      factoryOptsType: Parameters<typeof newBookReview>[1];
    };
  }
}

export abstract class BookReviewCodegen extends BaseEntity<EntityManager, string> implements Entity {
  static readonly tagName = "br";
  static readonly metadata: EntityMetadata<BookReview>;

  declare readonly __type: { 0: "BookReview" };

  constructor(em: EntityManager, opts: BookReviewOpts) {
    super(em, opts);
    setOpts(this as any as BookReview, opts, { calledFromConstructor: true });
  }

  get id(): BookReviewId {
    return this.idMaybe || failNoIdYet("BookReview");
  }

  get idMaybe(): BookReviewId | undefined {
    return toIdOf(bookReviewMeta, this.idTaggedMaybe);
  }

  get idTagged(): TaggedId {
    return this.idTaggedMaybe || failNoIdYet("BookReview");
  }

  get idTaggedMaybe(): TaggedId | undefined {
    return getField(this, "id");
  }

  get rating(): number {
    return getField(this, "rating");
  }

  set rating(rating: number) {
    setField(this, "rating", rating);
  }

  get text(): string | undefined {
    return getField(this, "text");
  }

  set text(text: string | undefined) {
    setField(this, "text", cleanStringValue(text));
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
  set(opts: Partial<BookReviewOpts>): void {
    setOpts(this as any as BookReview, opts);
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
  setPartial(opts: PartialOrNull<BookReviewOpts>): void {
    setOpts(this as any as BookReview, opts as OptsOf<BookReview>, { partial: true });
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
  setDeepPartial(opts: DeepPartialOrNull<BookReview>): Promise<void> {
    return updatePartial(this as any as BookReview, opts);
  }

  /**
   * Details the field changes of the entity within the current unit of work.
   *
   * @see {@link https://joist-orm.io/docs/features/changed-fields | Changed Fields} on the Joist docs
   */
  get changes(): Changes<BookReview> {
    return newChangesProxy(this) as any;
  }

  /**
   * Traverse from this entity using a lens, and load the result.
   *
   * @see {@link https://joist-orm.io/docs/advanced/lenses | Lens Traversal} on the Joist docs
   */
  load<U, V>(fn: (lens: Lens<BookReview>) => Lens<U, V>, opts: { sql?: boolean } = {}): Promise<V> {
    return loadLens(this as any as BookReview, fn, opts);
  }

  /**
   * Hydrate this entity using a load hint
   *
   * @see {@link https://joist-orm.io/docs/features/loading-entities#1-object-graph-navigation | Loading entities} on the Joist docs
   */
  populate<const H extends LoadHint<BookReview>>(hint: H): Promise<Loaded<BookReview, H>>;
  populate<const H extends LoadHint<BookReview>>(
    opts: { hint: H; forceReload?: boolean },
  ): Promise<Loaded<BookReview, H>>;
  populate<const H extends LoadHint<BookReview>, V>(hint: H, fn: (br: Loaded<BookReview, H>) => V): Promise<V>;
  populate<const H extends LoadHint<BookReview>, V>(
    opts: { hint: H; forceReload?: boolean },
    fn: (br: Loaded<BookReview, H>) => V,
  ): Promise<V>;
  populate<const H extends LoadHint<BookReview>, V>(
    hintOrOpts: any,
    fn?: (br: Loaded<BookReview, H>) => V,
  ): Promise<Loaded<BookReview, H> | V> {
    return this.em.populate(this as any as BookReview, hintOrOpts, fn);
  }

  /**
   * Given a load hint, checks if it is loaded within the unit of work.
   *
   * Type Guarded via Loaded<>
   */
  isLoaded<const H extends LoadHint<BookReview>>(hint: H): this is Loaded<BookReview, H> {
    return isLoaded(this as any as BookReview, hint);
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
  toJSON<const H extends ToJsonHint<BookReview>>(hint: H): Promise<JsonPayload<BookReview, H>>;
  toJSON(hint?: any): object {
    return !hint || typeof hint === "string" ? super.toJSON() : toJSON(this, hint);
  }

  get book(): ManyToOneReference<BookReview, Book, never> {
    return this.__data.relations.book ??= hasOne(this, bookMeta, "book", "reviews");
  }
}
