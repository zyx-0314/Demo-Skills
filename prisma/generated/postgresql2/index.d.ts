
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
 * Model EventOrganizerUser
 * 
 */
export type EventOrganizerUser = $Result.DefaultSelection<Prisma.$EventOrganizerUserPayload>
/**
 * Model EventOrganizerTask
 * 
 */
export type EventOrganizerTask = $Result.DefaultSelection<Prisma.$EventOrganizerTaskPayload>
/**
 * Model EventOrganizerGuest
 * 
 */
export type EventOrganizerGuest = $Result.DefaultSelection<Prisma.$EventOrganizerGuestPayload>
/**
 * Model EventOrganizerVenue
 * 
 */
export type EventOrganizerVenue = $Result.DefaultSelection<Prisma.$EventOrganizerVenuePayload>
/**
 * Model EventOrganizerServiceProvider
 * 
 */
export type EventOrganizerServiceProvider = $Result.DefaultSelection<Prisma.$EventOrganizerServiceProviderPayload>
/**
 * Model LanguageLearnerUser
 * 
 */
export type LanguageLearnerUser = $Result.DefaultSelection<Prisma.$LanguageLearnerUserPayload>
/**
 * Model LanguageLearnerPlatform
 * 
 */
export type LanguageLearnerPlatform = $Result.DefaultSelection<Prisma.$LanguageLearnerPlatformPayload>
/**
 * Model LanguageLearnerReview
 * 
 */
export type LanguageLearnerReview = $Result.DefaultSelection<Prisma.$LanguageLearnerReviewPayload>
/**
 * Model LanguageLearnerReviewLike
 * 
 */
export type LanguageLearnerReviewLike = $Result.DefaultSelection<Prisma.$LanguageLearnerReviewLikePayload>
/**
 * Model LanguageLearnerUserVote
 * 
 */
export type LanguageLearnerUserVote = $Result.DefaultSelection<Prisma.$LanguageLearnerUserVotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EventOrganizerUsers
 * const eventOrganizerUsers = await prisma.eventOrganizerUser.findMany()
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
   * // Fetch zero or more EventOrganizerUsers
   * const eventOrganizerUsers = await prisma.eventOrganizerUser.findMany()
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
   * `prisma.eventOrganizerUser`: Exposes CRUD operations for the **EventOrganizerUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizerUsers
    * const eventOrganizerUsers = await prisma.eventOrganizerUser.findMany()
    * ```
    */
  get eventOrganizerUser(): Prisma.EventOrganizerUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventOrganizerTask`: Exposes CRUD operations for the **EventOrganizerTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizerTasks
    * const eventOrganizerTasks = await prisma.eventOrganizerTask.findMany()
    * ```
    */
  get eventOrganizerTask(): Prisma.EventOrganizerTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventOrganizerGuest`: Exposes CRUD operations for the **EventOrganizerGuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizerGuests
    * const eventOrganizerGuests = await prisma.eventOrganizerGuest.findMany()
    * ```
    */
  get eventOrganizerGuest(): Prisma.EventOrganizerGuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventOrganizerVenue`: Exposes CRUD operations for the **EventOrganizerVenue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizerVenues
    * const eventOrganizerVenues = await prisma.eventOrganizerVenue.findMany()
    * ```
    */
  get eventOrganizerVenue(): Prisma.EventOrganizerVenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventOrganizerServiceProvider`: Exposes CRUD operations for the **EventOrganizerServiceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventOrganizerServiceProviders
    * const eventOrganizerServiceProviders = await prisma.eventOrganizerServiceProvider.findMany()
    * ```
    */
  get eventOrganizerServiceProvider(): Prisma.EventOrganizerServiceProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageLearnerUser`: Exposes CRUD operations for the **LanguageLearnerUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageLearnerUsers
    * const languageLearnerUsers = await prisma.languageLearnerUser.findMany()
    * ```
    */
  get languageLearnerUser(): Prisma.LanguageLearnerUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageLearnerPlatform`: Exposes CRUD operations for the **LanguageLearnerPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageLearnerPlatforms
    * const languageLearnerPlatforms = await prisma.languageLearnerPlatform.findMany()
    * ```
    */
  get languageLearnerPlatform(): Prisma.LanguageLearnerPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageLearnerReview`: Exposes CRUD operations for the **LanguageLearnerReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageLearnerReviews
    * const languageLearnerReviews = await prisma.languageLearnerReview.findMany()
    * ```
    */
  get languageLearnerReview(): Prisma.LanguageLearnerReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageLearnerReviewLike`: Exposes CRUD operations for the **LanguageLearnerReviewLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageLearnerReviewLikes
    * const languageLearnerReviewLikes = await prisma.languageLearnerReviewLike.findMany()
    * ```
    */
  get languageLearnerReviewLike(): Prisma.LanguageLearnerReviewLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageLearnerUserVote`: Exposes CRUD operations for the **LanguageLearnerUserVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageLearnerUserVotes
    * const languageLearnerUserVotes = await prisma.languageLearnerUserVote.findMany()
    * ```
    */
  get languageLearnerUserVote(): Prisma.LanguageLearnerUserVoteDelegate<ExtArgs, ClientOptions>;
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
    EventOrganizerUser: 'EventOrganizerUser',
    EventOrganizerTask: 'EventOrganizerTask',
    EventOrganizerGuest: 'EventOrganizerGuest',
    EventOrganizerVenue: 'EventOrganizerVenue',
    EventOrganizerServiceProvider: 'EventOrganizerServiceProvider',
    LanguageLearnerUser: 'LanguageLearnerUser',
    LanguageLearnerPlatform: 'LanguageLearnerPlatform',
    LanguageLearnerReview: 'LanguageLearnerReview',
    LanguageLearnerReviewLike: 'LanguageLearnerReviewLike',
    LanguageLearnerUserVote: 'LanguageLearnerUserVote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    mongodb?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "eventOrganizerUser" | "eventOrganizerTask" | "eventOrganizerGuest" | "eventOrganizerVenue" | "eventOrganizerServiceProvider" | "languageLearnerUser" | "languageLearnerPlatform" | "languageLearnerReview" | "languageLearnerReviewLike" | "languageLearnerUserVote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EventOrganizerUser: {
        payload: Prisma.$EventOrganizerUserPayload<ExtArgs>
        fields: Prisma.EventOrganizerUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          findMany: {
            args: Prisma.EventOrganizerUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>[]
          }
          create: {
            args: Prisma.EventOrganizerUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          createMany: {
            args: Prisma.EventOrganizerUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrganizerUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>[]
          }
          delete: {
            args: Prisma.EventOrganizerUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          update: {
            args: Prisma.EventOrganizerUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventOrganizerUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>[]
          }
          upsert: {
            args: Prisma.EventOrganizerUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerUserPayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrganizerUser>
          }
          groupBy: {
            args: Prisma.EventOrganizerUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerUserCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerUserCountAggregateOutputType> | number
          }
        }
      }
      EventOrganizerTask: {
        payload: Prisma.$EventOrganizerTaskPayload<ExtArgs>
        fields: Prisma.EventOrganizerTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          findMany: {
            args: Prisma.EventOrganizerTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>[]
          }
          create: {
            args: Prisma.EventOrganizerTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          createMany: {
            args: Prisma.EventOrganizerTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrganizerTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>[]
          }
          delete: {
            args: Prisma.EventOrganizerTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          update: {
            args: Prisma.EventOrganizerTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventOrganizerTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>[]
          }
          upsert: {
            args: Prisma.EventOrganizerTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerTaskPayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrganizerTask>
          }
          groupBy: {
            args: Prisma.EventOrganizerTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerTaskCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerTaskCountAggregateOutputType> | number
          }
        }
      }
      EventOrganizerGuest: {
        payload: Prisma.$EventOrganizerGuestPayload<ExtArgs>
        fields: Prisma.EventOrganizerGuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerGuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerGuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerGuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerGuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          findMany: {
            args: Prisma.EventOrganizerGuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>[]
          }
          create: {
            args: Prisma.EventOrganizerGuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          createMany: {
            args: Prisma.EventOrganizerGuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrganizerGuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>[]
          }
          delete: {
            args: Prisma.EventOrganizerGuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          update: {
            args: Prisma.EventOrganizerGuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerGuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerGuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventOrganizerGuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>[]
          }
          upsert: {
            args: Prisma.EventOrganizerGuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerGuestPayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerGuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrganizerGuest>
          }
          groupBy: {
            args: Prisma.EventOrganizerGuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerGuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerGuestCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerGuestCountAggregateOutputType> | number
          }
        }
      }
      EventOrganizerVenue: {
        payload: Prisma.$EventOrganizerVenuePayload<ExtArgs>
        fields: Prisma.EventOrganizerVenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerVenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerVenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerVenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerVenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          findMany: {
            args: Prisma.EventOrganizerVenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>[]
          }
          create: {
            args: Prisma.EventOrganizerVenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          createMany: {
            args: Prisma.EventOrganizerVenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrganizerVenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>[]
          }
          delete: {
            args: Prisma.EventOrganizerVenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          update: {
            args: Prisma.EventOrganizerVenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerVenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerVenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventOrganizerVenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>[]
          }
          upsert: {
            args: Prisma.EventOrganizerVenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerVenuePayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerVenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrganizerVenue>
          }
          groupBy: {
            args: Prisma.EventOrganizerVenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerVenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerVenueCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerVenueCountAggregateOutputType> | number
          }
        }
      }
      EventOrganizerServiceProvider: {
        payload: Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>
        fields: Prisma.EventOrganizerServiceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventOrganizerServiceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventOrganizerServiceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          findFirst: {
            args: Prisma.EventOrganizerServiceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventOrganizerServiceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          findMany: {
            args: Prisma.EventOrganizerServiceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>[]
          }
          create: {
            args: Prisma.EventOrganizerServiceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          createMany: {
            args: Prisma.EventOrganizerServiceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventOrganizerServiceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>[]
          }
          delete: {
            args: Prisma.EventOrganizerServiceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          update: {
            args: Prisma.EventOrganizerServiceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          deleteMany: {
            args: Prisma.EventOrganizerServiceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventOrganizerServiceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventOrganizerServiceProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>[]
          }
          upsert: {
            args: Prisma.EventOrganizerServiceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventOrganizerServiceProviderPayload>
          }
          aggregate: {
            args: Prisma.EventOrganizerServiceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventOrganizerServiceProvider>
          }
          groupBy: {
            args: Prisma.EventOrganizerServiceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerServiceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventOrganizerServiceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<EventOrganizerServiceProviderCountAggregateOutputType> | number
          }
        }
      }
      LanguageLearnerUser: {
        payload: Prisma.$LanguageLearnerUserPayload<ExtArgs>
        fields: Prisma.LanguageLearnerUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageLearnerUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageLearnerUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          findFirst: {
            args: Prisma.LanguageLearnerUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageLearnerUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          findMany: {
            args: Prisma.LanguageLearnerUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>[]
          }
          create: {
            args: Prisma.LanguageLearnerUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          createMany: {
            args: Prisma.LanguageLearnerUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageLearnerUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>[]
          }
          delete: {
            args: Prisma.LanguageLearnerUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          update: {
            args: Prisma.LanguageLearnerUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          deleteMany: {
            args: Prisma.LanguageLearnerUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageLearnerUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageLearnerUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>[]
          }
          upsert: {
            args: Prisma.LanguageLearnerUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserPayload>
          }
          aggregate: {
            args: Prisma.LanguageLearnerUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageLearnerUser>
          }
          groupBy: {
            args: Prisma.LanguageLearnerUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageLearnerUserCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerUserCountAggregateOutputType> | number
          }
        }
      }
      LanguageLearnerPlatform: {
        payload: Prisma.$LanguageLearnerPlatformPayload<ExtArgs>
        fields: Prisma.LanguageLearnerPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageLearnerPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageLearnerPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          findFirst: {
            args: Prisma.LanguageLearnerPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageLearnerPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          findMany: {
            args: Prisma.LanguageLearnerPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>[]
          }
          create: {
            args: Prisma.LanguageLearnerPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          createMany: {
            args: Prisma.LanguageLearnerPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageLearnerPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>[]
          }
          delete: {
            args: Prisma.LanguageLearnerPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          update: {
            args: Prisma.LanguageLearnerPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          deleteMany: {
            args: Prisma.LanguageLearnerPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageLearnerPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageLearnerPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>[]
          }
          upsert: {
            args: Prisma.LanguageLearnerPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerPlatformPayload>
          }
          aggregate: {
            args: Prisma.LanguageLearnerPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageLearnerPlatform>
          }
          groupBy: {
            args: Prisma.LanguageLearnerPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageLearnerPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerPlatformCountAggregateOutputType> | number
          }
        }
      }
      LanguageLearnerReview: {
        payload: Prisma.$LanguageLearnerReviewPayload<ExtArgs>
        fields: Prisma.LanguageLearnerReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageLearnerReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageLearnerReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          findFirst: {
            args: Prisma.LanguageLearnerReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageLearnerReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          findMany: {
            args: Prisma.LanguageLearnerReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>[]
          }
          create: {
            args: Prisma.LanguageLearnerReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          createMany: {
            args: Prisma.LanguageLearnerReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageLearnerReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>[]
          }
          delete: {
            args: Prisma.LanguageLearnerReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          update: {
            args: Prisma.LanguageLearnerReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          deleteMany: {
            args: Prisma.LanguageLearnerReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageLearnerReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageLearnerReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>[]
          }
          upsert: {
            args: Prisma.LanguageLearnerReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewPayload>
          }
          aggregate: {
            args: Prisma.LanguageLearnerReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageLearnerReview>
          }
          groupBy: {
            args: Prisma.LanguageLearnerReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageLearnerReviewCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerReviewCountAggregateOutputType> | number
          }
        }
      }
      LanguageLearnerReviewLike: {
        payload: Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>
        fields: Prisma.LanguageLearnerReviewLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageLearnerReviewLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageLearnerReviewLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          findFirst: {
            args: Prisma.LanguageLearnerReviewLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageLearnerReviewLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          findMany: {
            args: Prisma.LanguageLearnerReviewLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>[]
          }
          create: {
            args: Prisma.LanguageLearnerReviewLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          createMany: {
            args: Prisma.LanguageLearnerReviewLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageLearnerReviewLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>[]
          }
          delete: {
            args: Prisma.LanguageLearnerReviewLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          update: {
            args: Prisma.LanguageLearnerReviewLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          deleteMany: {
            args: Prisma.LanguageLearnerReviewLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageLearnerReviewLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageLearnerReviewLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>[]
          }
          upsert: {
            args: Prisma.LanguageLearnerReviewLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerReviewLikePayload>
          }
          aggregate: {
            args: Prisma.LanguageLearnerReviewLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageLearnerReviewLike>
          }
          groupBy: {
            args: Prisma.LanguageLearnerReviewLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerReviewLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageLearnerReviewLikeCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerReviewLikeCountAggregateOutputType> | number
          }
        }
      }
      LanguageLearnerUserVote: {
        payload: Prisma.$LanguageLearnerUserVotePayload<ExtArgs>
        fields: Prisma.LanguageLearnerUserVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageLearnerUserVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageLearnerUserVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          findFirst: {
            args: Prisma.LanguageLearnerUserVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageLearnerUserVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          findMany: {
            args: Prisma.LanguageLearnerUserVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>[]
          }
          create: {
            args: Prisma.LanguageLearnerUserVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          createMany: {
            args: Prisma.LanguageLearnerUserVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageLearnerUserVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>[]
          }
          delete: {
            args: Prisma.LanguageLearnerUserVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          update: {
            args: Prisma.LanguageLearnerUserVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          deleteMany: {
            args: Prisma.LanguageLearnerUserVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageLearnerUserVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageLearnerUserVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>[]
          }
          upsert: {
            args: Prisma.LanguageLearnerUserVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageLearnerUserVotePayload>
          }
          aggregate: {
            args: Prisma.LanguageLearnerUserVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageLearnerUserVote>
          }
          groupBy: {
            args: Prisma.LanguageLearnerUserVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerUserVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageLearnerUserVoteCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageLearnerUserVoteCountAggregateOutputType> | number
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
    eventOrganizerUser?: EventOrganizerUserOmit
    eventOrganizerTask?: EventOrganizerTaskOmit
    eventOrganizerGuest?: EventOrganizerGuestOmit
    eventOrganizerVenue?: EventOrganizerVenueOmit
    eventOrganizerServiceProvider?: EventOrganizerServiceProviderOmit
    languageLearnerUser?: LanguageLearnerUserOmit
    languageLearnerPlatform?: LanguageLearnerPlatformOmit
    languageLearnerReview?: LanguageLearnerReviewOmit
    languageLearnerReviewLike?: LanguageLearnerReviewLikeOmit
    languageLearnerUserVote?: LanguageLearnerUserVoteOmit
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
   * Count Type EventOrganizerUserCountOutputType
   */

  export type EventOrganizerUserCountOutputType = {
    tasks: number
    guests: number
    venues: number
    serviceProviders: number
  }

  export type EventOrganizerUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | EventOrganizerUserCountOutputTypeCountTasksArgs
    guests?: boolean | EventOrganizerUserCountOutputTypeCountGuestsArgs
    venues?: boolean | EventOrganizerUserCountOutputTypeCountVenuesArgs
    serviceProviders?: boolean | EventOrganizerUserCountOutputTypeCountServiceProvidersArgs
  }

  // Custom InputTypes
  /**
   * EventOrganizerUserCountOutputType without action
   */
  export type EventOrganizerUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUserCountOutputType
     */
    select?: EventOrganizerUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventOrganizerUserCountOutputType without action
   */
  export type EventOrganizerUserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerTaskWhereInput
  }

  /**
   * EventOrganizerUserCountOutputType without action
   */
  export type EventOrganizerUserCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerGuestWhereInput
  }

  /**
   * EventOrganizerUserCountOutputType without action
   */
  export type EventOrganizerUserCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerVenueWhereInput
  }

  /**
   * EventOrganizerUserCountOutputType without action
   */
  export type EventOrganizerUserCountOutputTypeCountServiceProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerServiceProviderWhereInput
  }


  /**
   * Count Type LanguageLearnerUserCountOutputType
   */

  export type LanguageLearnerUserCountOutputType = {
    ownedPlatforms: number
    reviews: number
    votesGiven: number
    votesReceived: number
    likes: number
  }

  export type LanguageLearnerUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedPlatforms?: boolean | LanguageLearnerUserCountOutputTypeCountOwnedPlatformsArgs
    reviews?: boolean | LanguageLearnerUserCountOutputTypeCountReviewsArgs
    votesGiven?: boolean | LanguageLearnerUserCountOutputTypeCountVotesGivenArgs
    votesReceived?: boolean | LanguageLearnerUserCountOutputTypeCountVotesReceivedArgs
    likes?: boolean | LanguageLearnerUserCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserCountOutputType
     */
    select?: LanguageLearnerUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeCountOwnedPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerPlatformWhereInput
  }

  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewWhereInput
  }

  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeCountVotesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerUserVoteWhereInput
  }

  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeCountVotesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerUserVoteWhereInput
  }

  /**
   * LanguageLearnerUserCountOutputType without action
   */
  export type LanguageLearnerUserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewLikeWhereInput
  }


  /**
   * Count Type LanguageLearnerPlatformCountOutputType
   */

  export type LanguageLearnerPlatformCountOutputType = {
    reviews: number
  }

  export type LanguageLearnerPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | LanguageLearnerPlatformCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * LanguageLearnerPlatformCountOutputType without action
   */
  export type LanguageLearnerPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatformCountOutputType
     */
    select?: LanguageLearnerPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageLearnerPlatformCountOutputType without action
   */
  export type LanguageLearnerPlatformCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewWhereInput
  }


  /**
   * Count Type LanguageLearnerReviewCountOutputType
   */

  export type LanguageLearnerReviewCountOutputType = {
    likes: number
  }

  export type LanguageLearnerReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | LanguageLearnerReviewCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * LanguageLearnerReviewCountOutputType without action
   */
  export type LanguageLearnerReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewCountOutputType
     */
    select?: LanguageLearnerReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageLearnerReviewCountOutputType without action
   */
  export type LanguageLearnerReviewCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EventOrganizerUser
   */

  export type AggregateEventOrganizerUser = {
    _count: EventOrganizerUserCountAggregateOutputType | null
    _min: EventOrganizerUserMinAggregateOutputType | null
    _max: EventOrganizerUserMaxAggregateOutputType | null
  }

  export type EventOrganizerUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type EventOrganizerUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type EventOrganizerUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type EventOrganizerUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type EventOrganizerUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type EventOrganizerUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type EventOrganizerUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerUser to aggregate.
     */
    where?: EventOrganizerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerUsers to fetch.
     */
    orderBy?: EventOrganizerUserOrderByWithRelationInput | EventOrganizerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizerUsers
    **/
    _count?: true | EventOrganizerUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerUserMaxAggregateInputType
  }

  export type GetEventOrganizerUserAggregateType<T extends EventOrganizerUserAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizerUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizerUser[P]>
      : GetScalarType<T[P], AggregateEventOrganizerUser[P]>
  }




  export type EventOrganizerUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerUserWhereInput
    orderBy?: EventOrganizerUserOrderByWithAggregationInput | EventOrganizerUserOrderByWithAggregationInput[]
    by: EventOrganizerUserScalarFieldEnum[] | EventOrganizerUserScalarFieldEnum
    having?: EventOrganizerUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerUserCountAggregateInputType | true
    _min?: EventOrganizerUserMinAggregateInputType
    _max?: EventOrganizerUserMaxAggregateInputType
  }

  export type EventOrganizerUserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createdAt: Date
    _count: EventOrganizerUserCountAggregateOutputType | null
    _min: EventOrganizerUserMinAggregateOutputType | null
    _max: EventOrganizerUserMaxAggregateOutputType | null
  }

  type GetEventOrganizerUserGroupByPayload<T extends EventOrganizerUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerUserGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerUserGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    tasks?: boolean | EventOrganizerUser$tasksArgs<ExtArgs>
    guests?: boolean | EventOrganizerUser$guestsArgs<ExtArgs>
    venues?: boolean | EventOrganizerUser$venuesArgs<ExtArgs>
    serviceProviders?: boolean | EventOrganizerUser$serviceProvidersArgs<ExtArgs>
    _count?: boolean | EventOrganizerUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerUser"]>

  export type EventOrganizerUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventOrganizerUser"]>

  export type EventOrganizerUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventOrganizerUser"]>

  export type EventOrganizerUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type EventOrganizerUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt", ExtArgs["result"]["eventOrganizerUser"]>
  export type EventOrganizerUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | EventOrganizerUser$tasksArgs<ExtArgs>
    guests?: boolean | EventOrganizerUser$guestsArgs<ExtArgs>
    venues?: boolean | EventOrganizerUser$venuesArgs<ExtArgs>
    serviceProviders?: boolean | EventOrganizerUser$serviceProvidersArgs<ExtArgs>
    _count?: boolean | EventOrganizerUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventOrganizerUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventOrganizerUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventOrganizerUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizerUser"
    objects: {
      tasks: Prisma.$EventOrganizerTaskPayload<ExtArgs>[]
      guests: Prisma.$EventOrganizerGuestPayload<ExtArgs>[]
      venues: Prisma.$EventOrganizerVenuePayload<ExtArgs>[]
      serviceProviders: Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["eventOrganizerUser"]>
    composites: {}
  }

  type EventOrganizerUserGetPayload<S extends boolean | null | undefined | EventOrganizerUserDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerUserPayload, S>

  type EventOrganizerUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventOrganizerUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventOrganizerUserCountAggregateInputType | true
    }

  export interface EventOrganizerUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizerUser'], meta: { name: 'EventOrganizerUser' } }
    /**
     * Find zero or one EventOrganizerUser that matches the filter.
     * @param {EventOrganizerUserFindUniqueArgs} args - Arguments to find a EventOrganizerUser
     * @example
     * // Get one EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrganizerUserFindUniqueArgs>(args: SelectSubset<T, EventOrganizerUserFindUniqueArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventOrganizerUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventOrganizerUserFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizerUser
     * @example
     * // Get one EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrganizerUserFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrganizerUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserFindFirstArgs} args - Arguments to find a EventOrganizerUser
     * @example
     * // Get one EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrganizerUserFindFirstArgs>(args?: SelectSubset<T, EventOrganizerUserFindFirstArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserFindFirstOrThrowArgs} args - Arguments to find a EventOrganizerUser
     * @example
     * // Get one EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrganizerUserFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrganizerUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventOrganizerUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizerUsers
     * const eventOrganizerUsers = await prisma.eventOrganizerUser.findMany()
     * 
     * // Get first 10 EventOrganizerUsers
     * const eventOrganizerUsers = await prisma.eventOrganizerUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerUserWithIdOnly = await prisma.eventOrganizerUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrganizerUserFindManyArgs>(args?: SelectSubset<T, EventOrganizerUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventOrganizerUser.
     * @param {EventOrganizerUserCreateArgs} args - Arguments to create a EventOrganizerUser.
     * @example
     * // Create one EventOrganizerUser
     * const EventOrganizerUser = await prisma.eventOrganizerUser.create({
     *   data: {
     *     // ... data to create a EventOrganizerUser
     *   }
     * })
     * 
     */
    create<T extends EventOrganizerUserCreateArgs>(args: SelectSubset<T, EventOrganizerUserCreateArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventOrganizerUsers.
     * @param {EventOrganizerUserCreateManyArgs} args - Arguments to create many EventOrganizerUsers.
     * @example
     * // Create many EventOrganizerUsers
     * const eventOrganizerUser = await prisma.eventOrganizerUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrganizerUserCreateManyArgs>(args?: SelectSubset<T, EventOrganizerUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrganizerUsers and returns the data saved in the database.
     * @param {EventOrganizerUserCreateManyAndReturnArgs} args - Arguments to create many EventOrganizerUsers.
     * @example
     * // Create many EventOrganizerUsers
     * const eventOrganizerUser = await prisma.eventOrganizerUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrganizerUsers and only return the `id`
     * const eventOrganizerUserWithIdOnly = await prisma.eventOrganizerUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrganizerUserCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrganizerUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventOrganizerUser.
     * @param {EventOrganizerUserDeleteArgs} args - Arguments to delete one EventOrganizerUser.
     * @example
     * // Delete one EventOrganizerUser
     * const EventOrganizerUser = await prisma.eventOrganizerUser.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizerUser
     *   }
     * })
     * 
     */
    delete<T extends EventOrganizerUserDeleteArgs>(args: SelectSubset<T, EventOrganizerUserDeleteArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventOrganizerUser.
     * @param {EventOrganizerUserUpdateArgs} args - Arguments to update one EventOrganizerUser.
     * @example
     * // Update one EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrganizerUserUpdateArgs>(args: SelectSubset<T, EventOrganizerUserUpdateArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventOrganizerUsers.
     * @param {EventOrganizerUserDeleteManyArgs} args - Arguments to filter EventOrganizerUsers to delete.
     * @example
     * // Delete a few EventOrganizerUsers
     * const { count } = await prisma.eventOrganizerUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrganizerUserDeleteManyArgs>(args?: SelectSubset<T, EventOrganizerUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizerUsers
     * const eventOrganizerUser = await prisma.eventOrganizerUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrganizerUserUpdateManyArgs>(args: SelectSubset<T, EventOrganizerUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerUsers and returns the data updated in the database.
     * @param {EventOrganizerUserUpdateManyAndReturnArgs} args - Arguments to update many EventOrganizerUsers.
     * @example
     * // Update many EventOrganizerUsers
     * const eventOrganizerUser = await prisma.eventOrganizerUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventOrganizerUsers and only return the `id`
     * const eventOrganizerUserWithIdOnly = await prisma.eventOrganizerUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventOrganizerUserUpdateManyAndReturnArgs>(args: SelectSubset<T, EventOrganizerUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventOrganizerUser.
     * @param {EventOrganizerUserUpsertArgs} args - Arguments to update or create a EventOrganizerUser.
     * @example
     * // Update or create a EventOrganizerUser
     * const eventOrganizerUser = await prisma.eventOrganizerUser.upsert({
     *   create: {
     *     // ... data to create a EventOrganizerUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizerUser we want to update
     *   }
     * })
     */
    upsert<T extends EventOrganizerUserUpsertArgs>(args: SelectSubset<T, EventOrganizerUserUpsertArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventOrganizerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserCountArgs} args - Arguments to filter EventOrganizerUsers to count.
     * @example
     * // Count the number of EventOrganizerUsers
     * const count = await prisma.eventOrganizerUser.count({
     *   where: {
     *     // ... the filter for the EventOrganizerUsers we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerUserCountArgs>(
      args?: Subset<T, EventOrganizerUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerUserAggregateArgs>(args: Subset<T, EventOrganizerUserAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerUserAggregateType<T>>

    /**
     * Group by EventOrganizerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerUserGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerUserGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizerUser model
   */
  readonly fields: EventOrganizerUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizerUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends EventOrganizerUser$tasksArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUser$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guests<T extends EventOrganizerUser$guestsArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUser$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venues<T extends EventOrganizerUser$venuesArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUser$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceProviders<T extends EventOrganizerUser$serviceProvidersArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUser$serviceProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventOrganizerUser model
   */ 
  interface EventOrganizerUserFieldRefs {
    readonly id: FieldRef<"EventOrganizerUser", 'String'>
    readonly email: FieldRef<"EventOrganizerUser", 'String'>
    readonly name: FieldRef<"EventOrganizerUser", 'String'>
    readonly password: FieldRef<"EventOrganizerUser", 'String'>
    readonly createdAt: FieldRef<"EventOrganizerUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventOrganizerUser findUnique
   */
  export type EventOrganizerUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerUser to fetch.
     */
    where: EventOrganizerUserWhereUniqueInput
  }

  /**
   * EventOrganizerUser findUniqueOrThrow
   */
  export type EventOrganizerUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerUser to fetch.
     */
    where: EventOrganizerUserWhereUniqueInput
  }

  /**
   * EventOrganizerUser findFirst
   */
  export type EventOrganizerUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerUser to fetch.
     */
    where?: EventOrganizerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerUsers to fetch.
     */
    orderBy?: EventOrganizerUserOrderByWithRelationInput | EventOrganizerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerUsers.
     */
    cursor?: EventOrganizerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerUsers.
     */
    distinct?: EventOrganizerUserScalarFieldEnum | EventOrganizerUserScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser findFirstOrThrow
   */
  export type EventOrganizerUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerUser to fetch.
     */
    where?: EventOrganizerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerUsers to fetch.
     */
    orderBy?: EventOrganizerUserOrderByWithRelationInput | EventOrganizerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerUsers.
     */
    cursor?: EventOrganizerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerUsers.
     */
    distinct?: EventOrganizerUserScalarFieldEnum | EventOrganizerUserScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser findMany
   */
  export type EventOrganizerUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerUsers to fetch.
     */
    where?: EventOrganizerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerUsers to fetch.
     */
    orderBy?: EventOrganizerUserOrderByWithRelationInput | EventOrganizerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizerUsers.
     */
    cursor?: EventOrganizerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerUsers.
     */
    skip?: number
    distinct?: EventOrganizerUserScalarFieldEnum | EventOrganizerUserScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser create
   */
  export type EventOrganizerUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizerUser.
     */
    data: XOR<EventOrganizerUserCreateInput, EventOrganizerUserUncheckedCreateInput>
  }

  /**
   * EventOrganizerUser createMany
   */
  export type EventOrganizerUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizerUsers.
     */
    data: EventOrganizerUserCreateManyInput | EventOrganizerUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerUser createManyAndReturn
   */
  export type EventOrganizerUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * The data used to create many EventOrganizerUsers.
     */
    data: EventOrganizerUserCreateManyInput | EventOrganizerUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerUser update
   */
  export type EventOrganizerUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizerUser.
     */
    data: XOR<EventOrganizerUserUpdateInput, EventOrganizerUserUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizerUser to update.
     */
    where: EventOrganizerUserWhereUniqueInput
  }

  /**
   * EventOrganizerUser updateMany
   */
  export type EventOrganizerUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizerUsers.
     */
    data: XOR<EventOrganizerUserUpdateManyMutationInput, EventOrganizerUserUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerUsers to update
     */
    where?: EventOrganizerUserWhereInput
    /**
     * Limit how many EventOrganizerUsers to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerUser updateManyAndReturn
   */
  export type EventOrganizerUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * The data used to update EventOrganizerUsers.
     */
    data: XOR<EventOrganizerUserUpdateManyMutationInput, EventOrganizerUserUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerUsers to update
     */
    where?: EventOrganizerUserWhereInput
    /**
     * Limit how many EventOrganizerUsers to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerUser upsert
   */
  export type EventOrganizerUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizerUser to update in case it exists.
     */
    where: EventOrganizerUserWhereUniqueInput
    /**
     * In case the EventOrganizerUser found by the `where` argument doesn't exist, create a new EventOrganizerUser with this data.
     */
    create: XOR<EventOrganizerUserCreateInput, EventOrganizerUserUncheckedCreateInput>
    /**
     * In case the EventOrganizerUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerUserUpdateInput, EventOrganizerUserUncheckedUpdateInput>
  }

  /**
   * EventOrganizerUser delete
   */
  export type EventOrganizerUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizerUser to delete.
     */
    where: EventOrganizerUserWhereUniqueInput
  }

  /**
   * EventOrganizerUser deleteMany
   */
  export type EventOrganizerUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerUsers to delete
     */
    where?: EventOrganizerUserWhereInput
    /**
     * Limit how many EventOrganizerUsers to delete.
     */
    limit?: number
  }

  /**
   * EventOrganizerUser.tasks
   */
  export type EventOrganizerUser$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    where?: EventOrganizerTaskWhereInput
    orderBy?: EventOrganizerTaskOrderByWithRelationInput | EventOrganizerTaskOrderByWithRelationInput[]
    cursor?: EventOrganizerTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerTaskScalarFieldEnum | EventOrganizerTaskScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser.guests
   */
  export type EventOrganizerUser$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    where?: EventOrganizerGuestWhereInput
    orderBy?: EventOrganizerGuestOrderByWithRelationInput | EventOrganizerGuestOrderByWithRelationInput[]
    cursor?: EventOrganizerGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerGuestScalarFieldEnum | EventOrganizerGuestScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser.venues
   */
  export type EventOrganizerUser$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    where?: EventOrganizerVenueWhereInput
    orderBy?: EventOrganizerVenueOrderByWithRelationInput | EventOrganizerVenueOrderByWithRelationInput[]
    cursor?: EventOrganizerVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerVenueScalarFieldEnum | EventOrganizerVenueScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser.serviceProviders
   */
  export type EventOrganizerUser$serviceProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    where?: EventOrganizerServiceProviderWhereInput
    orderBy?: EventOrganizerServiceProviderOrderByWithRelationInput | EventOrganizerServiceProviderOrderByWithRelationInput[]
    cursor?: EventOrganizerServiceProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventOrganizerServiceProviderScalarFieldEnum | EventOrganizerServiceProviderScalarFieldEnum[]
  }

  /**
   * EventOrganizerUser without action
   */
  export type EventOrganizerUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerUser
     */
    select?: EventOrganizerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerUser
     */
    omit?: EventOrganizerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerUserInclude<ExtArgs> | null
  }


  /**
   * Model EventOrganizerTask
   */

  export type AggregateEventOrganizerTask = {
    _count: EventOrganizerTaskCountAggregateOutputType | null
    _min: EventOrganizerTaskMinAggregateOutputType | null
    _max: EventOrganizerTaskMaxAggregateOutputType | null
  }

  export type EventOrganizerTaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventOrganizerTaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventOrganizerTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    status: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EventOrganizerTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type EventOrganizerTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type EventOrganizerTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EventOrganizerTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerTask to aggregate.
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerTasks to fetch.
     */
    orderBy?: EventOrganizerTaskOrderByWithRelationInput | EventOrganizerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizerTasks
    **/
    _count?: true | EventOrganizerTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerTaskMaxAggregateInputType
  }

  export type GetEventOrganizerTaskAggregateType<T extends EventOrganizerTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizerTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizerTask[P]>
      : GetScalarType<T[P], AggregateEventOrganizerTask[P]>
  }




  export type EventOrganizerTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerTaskWhereInput
    orderBy?: EventOrganizerTaskOrderByWithAggregationInput | EventOrganizerTaskOrderByWithAggregationInput[]
    by: EventOrganizerTaskScalarFieldEnum[] | EventOrganizerTaskScalarFieldEnum
    having?: EventOrganizerTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerTaskCountAggregateInputType | true
    _min?: EventOrganizerTaskMinAggregateInputType
    _max?: EventOrganizerTaskMaxAggregateInputType
  }

  export type EventOrganizerTaskGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date
    status: string
    userId: string
    createdAt: Date
    _count: EventOrganizerTaskCountAggregateOutputType | null
    _min: EventOrganizerTaskMinAggregateOutputType | null
    _max: EventOrganizerTaskMaxAggregateOutputType | null
  }

  type GetEventOrganizerTaskGroupByPayload<T extends EventOrganizerTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerTaskGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerTaskGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerTask"]>

  export type EventOrganizerTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerTask"]>

  export type EventOrganizerTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerTask"]>

  export type EventOrganizerTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EventOrganizerTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "status" | "userId" | "createdAt", ExtArgs["result"]["eventOrganizerTask"]>
  export type EventOrganizerTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }

  export type $EventOrganizerTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizerTask"
    objects: {
      user: Prisma.$EventOrganizerUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date
      status: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["eventOrganizerTask"]>
    composites: {}
  }

  type EventOrganizerTaskGetPayload<S extends boolean | null | undefined | EventOrganizerTaskDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerTaskPayload, S>

  type EventOrganizerTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventOrganizerTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventOrganizerTaskCountAggregateInputType | true
    }

  export interface EventOrganizerTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizerTask'], meta: { name: 'EventOrganizerTask' } }
    /**
     * Find zero or one EventOrganizerTask that matches the filter.
     * @param {EventOrganizerTaskFindUniqueArgs} args - Arguments to find a EventOrganizerTask
     * @example
     * // Get one EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrganizerTaskFindUniqueArgs>(args: SelectSubset<T, EventOrganizerTaskFindUniqueArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventOrganizerTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventOrganizerTaskFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizerTask
     * @example
     * // Get one EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrganizerTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrganizerTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskFindFirstArgs} args - Arguments to find a EventOrganizerTask
     * @example
     * // Get one EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrganizerTaskFindFirstArgs>(args?: SelectSubset<T, EventOrganizerTaskFindFirstArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskFindFirstOrThrowArgs} args - Arguments to find a EventOrganizerTask
     * @example
     * // Get one EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrganizerTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrganizerTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventOrganizerTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizerTasks
     * const eventOrganizerTasks = await prisma.eventOrganizerTask.findMany()
     * 
     * // Get first 10 EventOrganizerTasks
     * const eventOrganizerTasks = await prisma.eventOrganizerTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerTaskWithIdOnly = await prisma.eventOrganizerTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrganizerTaskFindManyArgs>(args?: SelectSubset<T, EventOrganizerTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventOrganizerTask.
     * @param {EventOrganizerTaskCreateArgs} args - Arguments to create a EventOrganizerTask.
     * @example
     * // Create one EventOrganizerTask
     * const EventOrganizerTask = await prisma.eventOrganizerTask.create({
     *   data: {
     *     // ... data to create a EventOrganizerTask
     *   }
     * })
     * 
     */
    create<T extends EventOrganizerTaskCreateArgs>(args: SelectSubset<T, EventOrganizerTaskCreateArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventOrganizerTasks.
     * @param {EventOrganizerTaskCreateManyArgs} args - Arguments to create many EventOrganizerTasks.
     * @example
     * // Create many EventOrganizerTasks
     * const eventOrganizerTask = await prisma.eventOrganizerTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrganizerTaskCreateManyArgs>(args?: SelectSubset<T, EventOrganizerTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrganizerTasks and returns the data saved in the database.
     * @param {EventOrganizerTaskCreateManyAndReturnArgs} args - Arguments to create many EventOrganizerTasks.
     * @example
     * // Create many EventOrganizerTasks
     * const eventOrganizerTask = await prisma.eventOrganizerTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrganizerTasks and only return the `id`
     * const eventOrganizerTaskWithIdOnly = await prisma.eventOrganizerTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrganizerTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrganizerTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventOrganizerTask.
     * @param {EventOrganizerTaskDeleteArgs} args - Arguments to delete one EventOrganizerTask.
     * @example
     * // Delete one EventOrganizerTask
     * const EventOrganizerTask = await prisma.eventOrganizerTask.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizerTask
     *   }
     * })
     * 
     */
    delete<T extends EventOrganizerTaskDeleteArgs>(args: SelectSubset<T, EventOrganizerTaskDeleteArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventOrganizerTask.
     * @param {EventOrganizerTaskUpdateArgs} args - Arguments to update one EventOrganizerTask.
     * @example
     * // Update one EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrganizerTaskUpdateArgs>(args: SelectSubset<T, EventOrganizerTaskUpdateArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventOrganizerTasks.
     * @param {EventOrganizerTaskDeleteManyArgs} args - Arguments to filter EventOrganizerTasks to delete.
     * @example
     * // Delete a few EventOrganizerTasks
     * const { count } = await prisma.eventOrganizerTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrganizerTaskDeleteManyArgs>(args?: SelectSubset<T, EventOrganizerTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizerTasks
     * const eventOrganizerTask = await prisma.eventOrganizerTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrganizerTaskUpdateManyArgs>(args: SelectSubset<T, EventOrganizerTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerTasks and returns the data updated in the database.
     * @param {EventOrganizerTaskUpdateManyAndReturnArgs} args - Arguments to update many EventOrganizerTasks.
     * @example
     * // Update many EventOrganizerTasks
     * const eventOrganizerTask = await prisma.eventOrganizerTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventOrganizerTasks and only return the `id`
     * const eventOrganizerTaskWithIdOnly = await prisma.eventOrganizerTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventOrganizerTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, EventOrganizerTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventOrganizerTask.
     * @param {EventOrganizerTaskUpsertArgs} args - Arguments to update or create a EventOrganizerTask.
     * @example
     * // Update or create a EventOrganizerTask
     * const eventOrganizerTask = await prisma.eventOrganizerTask.upsert({
     *   create: {
     *     // ... data to create a EventOrganizerTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizerTask we want to update
     *   }
     * })
     */
    upsert<T extends EventOrganizerTaskUpsertArgs>(args: SelectSubset<T, EventOrganizerTaskUpsertArgs<ExtArgs>>): Prisma__EventOrganizerTaskClient<$Result.GetResult<Prisma.$EventOrganizerTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventOrganizerTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskCountArgs} args - Arguments to filter EventOrganizerTasks to count.
     * @example
     * // Count the number of EventOrganizerTasks
     * const count = await prisma.eventOrganizerTask.count({
     *   where: {
     *     // ... the filter for the EventOrganizerTasks we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerTaskCountArgs>(
      args?: Subset<T, EventOrganizerTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerTaskAggregateArgs>(args: Subset<T, EventOrganizerTaskAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerTaskAggregateType<T>>

    /**
     * Group by EventOrganizerTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerTaskGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerTaskGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizerTask model
   */
  readonly fields: EventOrganizerTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizerTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EventOrganizerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUserDefaultArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventOrganizerTask model
   */ 
  interface EventOrganizerTaskFieldRefs {
    readonly id: FieldRef<"EventOrganizerTask", 'String'>
    readonly title: FieldRef<"EventOrganizerTask", 'String'>
    readonly description: FieldRef<"EventOrganizerTask", 'String'>
    readonly dueDate: FieldRef<"EventOrganizerTask", 'DateTime'>
    readonly status: FieldRef<"EventOrganizerTask", 'String'>
    readonly userId: FieldRef<"EventOrganizerTask", 'String'>
    readonly createdAt: FieldRef<"EventOrganizerTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventOrganizerTask findUnique
   */
  export type EventOrganizerTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerTask to fetch.
     */
    where: EventOrganizerTaskWhereUniqueInput
  }

  /**
   * EventOrganizerTask findUniqueOrThrow
   */
  export type EventOrganizerTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerTask to fetch.
     */
    where: EventOrganizerTaskWhereUniqueInput
  }

  /**
   * EventOrganizerTask findFirst
   */
  export type EventOrganizerTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerTask to fetch.
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerTasks to fetch.
     */
    orderBy?: EventOrganizerTaskOrderByWithRelationInput | EventOrganizerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerTasks.
     */
    cursor?: EventOrganizerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerTasks.
     */
    distinct?: EventOrganizerTaskScalarFieldEnum | EventOrganizerTaskScalarFieldEnum[]
  }

  /**
   * EventOrganizerTask findFirstOrThrow
   */
  export type EventOrganizerTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerTask to fetch.
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerTasks to fetch.
     */
    orderBy?: EventOrganizerTaskOrderByWithRelationInput | EventOrganizerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerTasks.
     */
    cursor?: EventOrganizerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerTasks.
     */
    distinct?: EventOrganizerTaskScalarFieldEnum | EventOrganizerTaskScalarFieldEnum[]
  }

  /**
   * EventOrganizerTask findMany
   */
  export type EventOrganizerTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerTasks to fetch.
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerTasks to fetch.
     */
    orderBy?: EventOrganizerTaskOrderByWithRelationInput | EventOrganizerTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizerTasks.
     */
    cursor?: EventOrganizerTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerTasks.
     */
    skip?: number
    distinct?: EventOrganizerTaskScalarFieldEnum | EventOrganizerTaskScalarFieldEnum[]
  }

  /**
   * EventOrganizerTask create
   */
  export type EventOrganizerTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizerTask.
     */
    data: XOR<EventOrganizerTaskCreateInput, EventOrganizerTaskUncheckedCreateInput>
  }

  /**
   * EventOrganizerTask createMany
   */
  export type EventOrganizerTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizerTasks.
     */
    data: EventOrganizerTaskCreateManyInput | EventOrganizerTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerTask createManyAndReturn
   */
  export type EventOrganizerTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * The data used to create many EventOrganizerTasks.
     */
    data: EventOrganizerTaskCreateManyInput | EventOrganizerTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerTask update
   */
  export type EventOrganizerTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizerTask.
     */
    data: XOR<EventOrganizerTaskUpdateInput, EventOrganizerTaskUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizerTask to update.
     */
    where: EventOrganizerTaskWhereUniqueInput
  }

  /**
   * EventOrganizerTask updateMany
   */
  export type EventOrganizerTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizerTasks.
     */
    data: XOR<EventOrganizerTaskUpdateManyMutationInput, EventOrganizerTaskUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerTasks to update
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * Limit how many EventOrganizerTasks to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerTask updateManyAndReturn
   */
  export type EventOrganizerTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * The data used to update EventOrganizerTasks.
     */
    data: XOR<EventOrganizerTaskUpdateManyMutationInput, EventOrganizerTaskUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerTasks to update
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * Limit how many EventOrganizerTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerTask upsert
   */
  export type EventOrganizerTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizerTask to update in case it exists.
     */
    where: EventOrganizerTaskWhereUniqueInput
    /**
     * In case the EventOrganizerTask found by the `where` argument doesn't exist, create a new EventOrganizerTask with this data.
     */
    create: XOR<EventOrganizerTaskCreateInput, EventOrganizerTaskUncheckedCreateInput>
    /**
     * In case the EventOrganizerTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerTaskUpdateInput, EventOrganizerTaskUncheckedUpdateInput>
  }

  /**
   * EventOrganizerTask delete
   */
  export type EventOrganizerTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizerTask to delete.
     */
    where: EventOrganizerTaskWhereUniqueInput
  }

  /**
   * EventOrganizerTask deleteMany
   */
  export type EventOrganizerTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerTasks to delete
     */
    where?: EventOrganizerTaskWhereInput
    /**
     * Limit how many EventOrganizerTasks to delete.
     */
    limit?: number
  }

  /**
   * EventOrganizerTask without action
   */
  export type EventOrganizerTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerTask
     */
    select?: EventOrganizerTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerTask
     */
    omit?: EventOrganizerTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerTaskInclude<ExtArgs> | null
  }


  /**
   * Model EventOrganizerGuest
   */

  export type AggregateEventOrganizerGuest = {
    _count: EventOrganizerGuestCountAggregateOutputType | null
    _min: EventOrganizerGuestMinAggregateOutputType | null
    _max: EventOrganizerGuestMaxAggregateOutputType | null
  }

  export type EventOrganizerGuestMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventOrganizerGuestMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventOrganizerGuestCountAggregateOutputType = {
    id: number
    eventId: number
    name: number
    email: number
    phone: number
    status: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EventOrganizerGuestMinAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type EventOrganizerGuestMaxAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type EventOrganizerGuestCountAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EventOrganizerGuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerGuest to aggregate.
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerGuests to fetch.
     */
    orderBy?: EventOrganizerGuestOrderByWithRelationInput | EventOrganizerGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizerGuests
    **/
    _count?: true | EventOrganizerGuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerGuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerGuestMaxAggregateInputType
  }

  export type GetEventOrganizerGuestAggregateType<T extends EventOrganizerGuestAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizerGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizerGuest[P]>
      : GetScalarType<T[P], AggregateEventOrganizerGuest[P]>
  }




  export type EventOrganizerGuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerGuestWhereInput
    orderBy?: EventOrganizerGuestOrderByWithAggregationInput | EventOrganizerGuestOrderByWithAggregationInput[]
    by: EventOrganizerGuestScalarFieldEnum[] | EventOrganizerGuestScalarFieldEnum
    having?: EventOrganizerGuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerGuestCountAggregateInputType | true
    _min?: EventOrganizerGuestMinAggregateInputType
    _max?: EventOrganizerGuestMaxAggregateInputType
  }

  export type EventOrganizerGuestGroupByOutputType = {
    id: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    userId: string
    createdAt: Date
    _count: EventOrganizerGuestCountAggregateOutputType | null
    _min: EventOrganizerGuestMinAggregateOutputType | null
    _max: EventOrganizerGuestMaxAggregateOutputType | null
  }

  type GetEventOrganizerGuestGroupByPayload<T extends EventOrganizerGuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerGuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerGuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerGuestGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerGuestGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerGuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerGuest"]>

  export type EventOrganizerGuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerGuest"]>

  export type EventOrganizerGuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerGuest"]>

  export type EventOrganizerGuestSelectScalar = {
    id?: boolean
    eventId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EventOrganizerGuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "name" | "email" | "phone" | "status" | "userId" | "createdAt", ExtArgs["result"]["eventOrganizerGuest"]>
  export type EventOrganizerGuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerGuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerGuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }

  export type $EventOrganizerGuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizerGuest"
    objects: {
      user: Prisma.$EventOrganizerUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      name: string
      email: string
      phone: string
      status: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["eventOrganizerGuest"]>
    composites: {}
  }

  type EventOrganizerGuestGetPayload<S extends boolean | null | undefined | EventOrganizerGuestDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerGuestPayload, S>

  type EventOrganizerGuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventOrganizerGuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventOrganizerGuestCountAggregateInputType | true
    }

  export interface EventOrganizerGuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizerGuest'], meta: { name: 'EventOrganizerGuest' } }
    /**
     * Find zero or one EventOrganizerGuest that matches the filter.
     * @param {EventOrganizerGuestFindUniqueArgs} args - Arguments to find a EventOrganizerGuest
     * @example
     * // Get one EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrganizerGuestFindUniqueArgs>(args: SelectSubset<T, EventOrganizerGuestFindUniqueArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventOrganizerGuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventOrganizerGuestFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizerGuest
     * @example
     * // Get one EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrganizerGuestFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrganizerGuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerGuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestFindFirstArgs} args - Arguments to find a EventOrganizerGuest
     * @example
     * // Get one EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrganizerGuestFindFirstArgs>(args?: SelectSubset<T, EventOrganizerGuestFindFirstArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerGuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestFindFirstOrThrowArgs} args - Arguments to find a EventOrganizerGuest
     * @example
     * // Get one EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrganizerGuestFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrganizerGuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventOrganizerGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizerGuests
     * const eventOrganizerGuests = await prisma.eventOrganizerGuest.findMany()
     * 
     * // Get first 10 EventOrganizerGuests
     * const eventOrganizerGuests = await prisma.eventOrganizerGuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerGuestWithIdOnly = await prisma.eventOrganizerGuest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrganizerGuestFindManyArgs>(args?: SelectSubset<T, EventOrganizerGuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventOrganizerGuest.
     * @param {EventOrganizerGuestCreateArgs} args - Arguments to create a EventOrganizerGuest.
     * @example
     * // Create one EventOrganizerGuest
     * const EventOrganizerGuest = await prisma.eventOrganizerGuest.create({
     *   data: {
     *     // ... data to create a EventOrganizerGuest
     *   }
     * })
     * 
     */
    create<T extends EventOrganizerGuestCreateArgs>(args: SelectSubset<T, EventOrganizerGuestCreateArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventOrganizerGuests.
     * @param {EventOrganizerGuestCreateManyArgs} args - Arguments to create many EventOrganizerGuests.
     * @example
     * // Create many EventOrganizerGuests
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrganizerGuestCreateManyArgs>(args?: SelectSubset<T, EventOrganizerGuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrganizerGuests and returns the data saved in the database.
     * @param {EventOrganizerGuestCreateManyAndReturnArgs} args - Arguments to create many EventOrganizerGuests.
     * @example
     * // Create many EventOrganizerGuests
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrganizerGuests and only return the `id`
     * const eventOrganizerGuestWithIdOnly = await prisma.eventOrganizerGuest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrganizerGuestCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrganizerGuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventOrganizerGuest.
     * @param {EventOrganizerGuestDeleteArgs} args - Arguments to delete one EventOrganizerGuest.
     * @example
     * // Delete one EventOrganizerGuest
     * const EventOrganizerGuest = await prisma.eventOrganizerGuest.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizerGuest
     *   }
     * })
     * 
     */
    delete<T extends EventOrganizerGuestDeleteArgs>(args: SelectSubset<T, EventOrganizerGuestDeleteArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventOrganizerGuest.
     * @param {EventOrganizerGuestUpdateArgs} args - Arguments to update one EventOrganizerGuest.
     * @example
     * // Update one EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrganizerGuestUpdateArgs>(args: SelectSubset<T, EventOrganizerGuestUpdateArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventOrganizerGuests.
     * @param {EventOrganizerGuestDeleteManyArgs} args - Arguments to filter EventOrganizerGuests to delete.
     * @example
     * // Delete a few EventOrganizerGuests
     * const { count } = await prisma.eventOrganizerGuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrganizerGuestDeleteManyArgs>(args?: SelectSubset<T, EventOrganizerGuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizerGuests
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrganizerGuestUpdateManyArgs>(args: SelectSubset<T, EventOrganizerGuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerGuests and returns the data updated in the database.
     * @param {EventOrganizerGuestUpdateManyAndReturnArgs} args - Arguments to update many EventOrganizerGuests.
     * @example
     * // Update many EventOrganizerGuests
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventOrganizerGuests and only return the `id`
     * const eventOrganizerGuestWithIdOnly = await prisma.eventOrganizerGuest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventOrganizerGuestUpdateManyAndReturnArgs>(args: SelectSubset<T, EventOrganizerGuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventOrganizerGuest.
     * @param {EventOrganizerGuestUpsertArgs} args - Arguments to update or create a EventOrganizerGuest.
     * @example
     * // Update or create a EventOrganizerGuest
     * const eventOrganizerGuest = await prisma.eventOrganizerGuest.upsert({
     *   create: {
     *     // ... data to create a EventOrganizerGuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizerGuest we want to update
     *   }
     * })
     */
    upsert<T extends EventOrganizerGuestUpsertArgs>(args: SelectSubset<T, EventOrganizerGuestUpsertArgs<ExtArgs>>): Prisma__EventOrganizerGuestClient<$Result.GetResult<Prisma.$EventOrganizerGuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventOrganizerGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestCountArgs} args - Arguments to filter EventOrganizerGuests to count.
     * @example
     * // Count the number of EventOrganizerGuests
     * const count = await prisma.eventOrganizerGuest.count({
     *   where: {
     *     // ... the filter for the EventOrganizerGuests we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerGuestCountArgs>(
      args?: Subset<T, EventOrganizerGuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerGuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizerGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerGuestAggregateArgs>(args: Subset<T, EventOrganizerGuestAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerGuestAggregateType<T>>

    /**
     * Group by EventOrganizerGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerGuestGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerGuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerGuestGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerGuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerGuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizerGuest model
   */
  readonly fields: EventOrganizerGuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizerGuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerGuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EventOrganizerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUserDefaultArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventOrganizerGuest model
   */ 
  interface EventOrganizerGuestFieldRefs {
    readonly id: FieldRef<"EventOrganizerGuest", 'String'>
    readonly eventId: FieldRef<"EventOrganizerGuest", 'String'>
    readonly name: FieldRef<"EventOrganizerGuest", 'String'>
    readonly email: FieldRef<"EventOrganizerGuest", 'String'>
    readonly phone: FieldRef<"EventOrganizerGuest", 'String'>
    readonly status: FieldRef<"EventOrganizerGuest", 'String'>
    readonly userId: FieldRef<"EventOrganizerGuest", 'String'>
    readonly createdAt: FieldRef<"EventOrganizerGuest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventOrganizerGuest findUnique
   */
  export type EventOrganizerGuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerGuest to fetch.
     */
    where: EventOrganizerGuestWhereUniqueInput
  }

  /**
   * EventOrganizerGuest findUniqueOrThrow
   */
  export type EventOrganizerGuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerGuest to fetch.
     */
    where: EventOrganizerGuestWhereUniqueInput
  }

  /**
   * EventOrganizerGuest findFirst
   */
  export type EventOrganizerGuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerGuest to fetch.
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerGuests to fetch.
     */
    orderBy?: EventOrganizerGuestOrderByWithRelationInput | EventOrganizerGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerGuests.
     */
    cursor?: EventOrganizerGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerGuests.
     */
    distinct?: EventOrganizerGuestScalarFieldEnum | EventOrganizerGuestScalarFieldEnum[]
  }

  /**
   * EventOrganizerGuest findFirstOrThrow
   */
  export type EventOrganizerGuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerGuest to fetch.
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerGuests to fetch.
     */
    orderBy?: EventOrganizerGuestOrderByWithRelationInput | EventOrganizerGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerGuests.
     */
    cursor?: EventOrganizerGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerGuests.
     */
    distinct?: EventOrganizerGuestScalarFieldEnum | EventOrganizerGuestScalarFieldEnum[]
  }

  /**
   * EventOrganizerGuest findMany
   */
  export type EventOrganizerGuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerGuests to fetch.
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerGuests to fetch.
     */
    orderBy?: EventOrganizerGuestOrderByWithRelationInput | EventOrganizerGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizerGuests.
     */
    cursor?: EventOrganizerGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerGuests.
     */
    skip?: number
    distinct?: EventOrganizerGuestScalarFieldEnum | EventOrganizerGuestScalarFieldEnum[]
  }

  /**
   * EventOrganizerGuest create
   */
  export type EventOrganizerGuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizerGuest.
     */
    data: XOR<EventOrganizerGuestCreateInput, EventOrganizerGuestUncheckedCreateInput>
  }

  /**
   * EventOrganizerGuest createMany
   */
  export type EventOrganizerGuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizerGuests.
     */
    data: EventOrganizerGuestCreateManyInput | EventOrganizerGuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerGuest createManyAndReturn
   */
  export type EventOrganizerGuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * The data used to create many EventOrganizerGuests.
     */
    data: EventOrganizerGuestCreateManyInput | EventOrganizerGuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerGuest update
   */
  export type EventOrganizerGuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizerGuest.
     */
    data: XOR<EventOrganizerGuestUpdateInput, EventOrganizerGuestUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizerGuest to update.
     */
    where: EventOrganizerGuestWhereUniqueInput
  }

  /**
   * EventOrganizerGuest updateMany
   */
  export type EventOrganizerGuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizerGuests.
     */
    data: XOR<EventOrganizerGuestUpdateManyMutationInput, EventOrganizerGuestUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerGuests to update
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * Limit how many EventOrganizerGuests to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerGuest updateManyAndReturn
   */
  export type EventOrganizerGuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * The data used to update EventOrganizerGuests.
     */
    data: XOR<EventOrganizerGuestUpdateManyMutationInput, EventOrganizerGuestUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerGuests to update
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * Limit how many EventOrganizerGuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerGuest upsert
   */
  export type EventOrganizerGuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizerGuest to update in case it exists.
     */
    where: EventOrganizerGuestWhereUniqueInput
    /**
     * In case the EventOrganizerGuest found by the `where` argument doesn't exist, create a new EventOrganizerGuest with this data.
     */
    create: XOR<EventOrganizerGuestCreateInput, EventOrganizerGuestUncheckedCreateInput>
    /**
     * In case the EventOrganizerGuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerGuestUpdateInput, EventOrganizerGuestUncheckedUpdateInput>
  }

  /**
   * EventOrganizerGuest delete
   */
  export type EventOrganizerGuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizerGuest to delete.
     */
    where: EventOrganizerGuestWhereUniqueInput
  }

  /**
   * EventOrganizerGuest deleteMany
   */
  export type EventOrganizerGuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerGuests to delete
     */
    where?: EventOrganizerGuestWhereInput
    /**
     * Limit how many EventOrganizerGuests to delete.
     */
    limit?: number
  }

  /**
   * EventOrganizerGuest without action
   */
  export type EventOrganizerGuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerGuest
     */
    select?: EventOrganizerGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerGuest
     */
    omit?: EventOrganizerGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerGuestInclude<ExtArgs> | null
  }


  /**
   * Model EventOrganizerVenue
   */

  export type AggregateEventOrganizerVenue = {
    _count: EventOrganizerVenueCountAggregateOutputType | null
    _avg: EventOrganizerVenueAvgAggregateOutputType | null
    _sum: EventOrganizerVenueSumAggregateOutputType | null
    _min: EventOrganizerVenueMinAggregateOutputType | null
    _max: EventOrganizerVenueMaxAggregateOutputType | null
  }

  export type EventOrganizerVenueAvgAggregateOutputType = {
    capacity: number | null
  }

  export type EventOrganizerVenueSumAggregateOutputType = {
    capacity: number | null
  }

  export type EventOrganizerVenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    amenities: string | null
    submittedBy: string | null
    createdAt: Date | null
  }

  export type EventOrganizerVenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    amenities: string | null
    submittedBy: string | null
    createdAt: Date | null
  }

  export type EventOrganizerVenueCountAggregateOutputType = {
    id: number
    name: number
    location: number
    capacity: number
    amenities: number
    submittedBy: number
    createdAt: number
    _all: number
  }


  export type EventOrganizerVenueAvgAggregateInputType = {
    capacity?: true
  }

  export type EventOrganizerVenueSumAggregateInputType = {
    capacity?: true
  }

  export type EventOrganizerVenueMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    amenities?: true
    submittedBy?: true
    createdAt?: true
  }

  export type EventOrganizerVenueMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    amenities?: true
    submittedBy?: true
    createdAt?: true
  }

  export type EventOrganizerVenueCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    amenities?: true
    submittedBy?: true
    createdAt?: true
    _all?: true
  }

  export type EventOrganizerVenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerVenue to aggregate.
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerVenues to fetch.
     */
    orderBy?: EventOrganizerVenueOrderByWithRelationInput | EventOrganizerVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizerVenues
    **/
    _count?: true | EventOrganizerVenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventOrganizerVenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventOrganizerVenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerVenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerVenueMaxAggregateInputType
  }

  export type GetEventOrganizerVenueAggregateType<T extends EventOrganizerVenueAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizerVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizerVenue[P]>
      : GetScalarType<T[P], AggregateEventOrganizerVenue[P]>
  }




  export type EventOrganizerVenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerVenueWhereInput
    orderBy?: EventOrganizerVenueOrderByWithAggregationInput | EventOrganizerVenueOrderByWithAggregationInput[]
    by: EventOrganizerVenueScalarFieldEnum[] | EventOrganizerVenueScalarFieldEnum
    having?: EventOrganizerVenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerVenueCountAggregateInputType | true
    _avg?: EventOrganizerVenueAvgAggregateInputType
    _sum?: EventOrganizerVenueSumAggregateInputType
    _min?: EventOrganizerVenueMinAggregateInputType
    _max?: EventOrganizerVenueMaxAggregateInputType
  }

  export type EventOrganizerVenueGroupByOutputType = {
    id: string
    name: string
    location: string
    capacity: number
    amenities: string
    submittedBy: string
    createdAt: Date
    _count: EventOrganizerVenueCountAggregateOutputType | null
    _avg: EventOrganizerVenueAvgAggregateOutputType | null
    _sum: EventOrganizerVenueSumAggregateOutputType | null
    _min: EventOrganizerVenueMinAggregateOutputType | null
    _max: EventOrganizerVenueMaxAggregateOutputType | null
  }

  type GetEventOrganizerVenueGroupByPayload<T extends EventOrganizerVenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerVenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerVenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerVenueGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerVenueGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerVenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    amenities?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerVenue"]>

  export type EventOrganizerVenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    amenities?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerVenue"]>

  export type EventOrganizerVenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    amenities?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerVenue"]>

  export type EventOrganizerVenueSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    amenities?: boolean
    submittedBy?: boolean
    createdAt?: boolean
  }

  export type EventOrganizerVenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "capacity" | "amenities" | "submittedBy" | "createdAt", ExtArgs["result"]["eventOrganizerVenue"]>
  export type EventOrganizerVenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerVenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerVenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }

  export type $EventOrganizerVenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizerVenue"
    objects: {
      user: Prisma.$EventOrganizerUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      capacity: number
      amenities: string
      submittedBy: string
      createdAt: Date
    }, ExtArgs["result"]["eventOrganizerVenue"]>
    composites: {}
  }

  type EventOrganizerVenueGetPayload<S extends boolean | null | undefined | EventOrganizerVenueDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerVenuePayload, S>

  type EventOrganizerVenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventOrganizerVenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventOrganizerVenueCountAggregateInputType | true
    }

  export interface EventOrganizerVenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizerVenue'], meta: { name: 'EventOrganizerVenue' } }
    /**
     * Find zero or one EventOrganizerVenue that matches the filter.
     * @param {EventOrganizerVenueFindUniqueArgs} args - Arguments to find a EventOrganizerVenue
     * @example
     * // Get one EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrganizerVenueFindUniqueArgs>(args: SelectSubset<T, EventOrganizerVenueFindUniqueArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventOrganizerVenue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventOrganizerVenueFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizerVenue
     * @example
     * // Get one EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrganizerVenueFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrganizerVenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerVenue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueFindFirstArgs} args - Arguments to find a EventOrganizerVenue
     * @example
     * // Get one EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrganizerVenueFindFirstArgs>(args?: SelectSubset<T, EventOrganizerVenueFindFirstArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerVenue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueFindFirstOrThrowArgs} args - Arguments to find a EventOrganizerVenue
     * @example
     * // Get one EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrganizerVenueFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrganizerVenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventOrganizerVenues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizerVenues
     * const eventOrganizerVenues = await prisma.eventOrganizerVenue.findMany()
     * 
     * // Get first 10 EventOrganizerVenues
     * const eventOrganizerVenues = await prisma.eventOrganizerVenue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerVenueWithIdOnly = await prisma.eventOrganizerVenue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrganizerVenueFindManyArgs>(args?: SelectSubset<T, EventOrganizerVenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventOrganizerVenue.
     * @param {EventOrganizerVenueCreateArgs} args - Arguments to create a EventOrganizerVenue.
     * @example
     * // Create one EventOrganizerVenue
     * const EventOrganizerVenue = await prisma.eventOrganizerVenue.create({
     *   data: {
     *     // ... data to create a EventOrganizerVenue
     *   }
     * })
     * 
     */
    create<T extends EventOrganizerVenueCreateArgs>(args: SelectSubset<T, EventOrganizerVenueCreateArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventOrganizerVenues.
     * @param {EventOrganizerVenueCreateManyArgs} args - Arguments to create many EventOrganizerVenues.
     * @example
     * // Create many EventOrganizerVenues
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrganizerVenueCreateManyArgs>(args?: SelectSubset<T, EventOrganizerVenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrganizerVenues and returns the data saved in the database.
     * @param {EventOrganizerVenueCreateManyAndReturnArgs} args - Arguments to create many EventOrganizerVenues.
     * @example
     * // Create many EventOrganizerVenues
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrganizerVenues and only return the `id`
     * const eventOrganizerVenueWithIdOnly = await prisma.eventOrganizerVenue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrganizerVenueCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrganizerVenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventOrganizerVenue.
     * @param {EventOrganizerVenueDeleteArgs} args - Arguments to delete one EventOrganizerVenue.
     * @example
     * // Delete one EventOrganizerVenue
     * const EventOrganizerVenue = await prisma.eventOrganizerVenue.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizerVenue
     *   }
     * })
     * 
     */
    delete<T extends EventOrganizerVenueDeleteArgs>(args: SelectSubset<T, EventOrganizerVenueDeleteArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventOrganizerVenue.
     * @param {EventOrganizerVenueUpdateArgs} args - Arguments to update one EventOrganizerVenue.
     * @example
     * // Update one EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrganizerVenueUpdateArgs>(args: SelectSubset<T, EventOrganizerVenueUpdateArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventOrganizerVenues.
     * @param {EventOrganizerVenueDeleteManyArgs} args - Arguments to filter EventOrganizerVenues to delete.
     * @example
     * // Delete a few EventOrganizerVenues
     * const { count } = await prisma.eventOrganizerVenue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrganizerVenueDeleteManyArgs>(args?: SelectSubset<T, EventOrganizerVenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizerVenues
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrganizerVenueUpdateManyArgs>(args: SelectSubset<T, EventOrganizerVenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerVenues and returns the data updated in the database.
     * @param {EventOrganizerVenueUpdateManyAndReturnArgs} args - Arguments to update many EventOrganizerVenues.
     * @example
     * // Update many EventOrganizerVenues
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventOrganizerVenues and only return the `id`
     * const eventOrganizerVenueWithIdOnly = await prisma.eventOrganizerVenue.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventOrganizerVenueUpdateManyAndReturnArgs>(args: SelectSubset<T, EventOrganizerVenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventOrganizerVenue.
     * @param {EventOrganizerVenueUpsertArgs} args - Arguments to update or create a EventOrganizerVenue.
     * @example
     * // Update or create a EventOrganizerVenue
     * const eventOrganizerVenue = await prisma.eventOrganizerVenue.upsert({
     *   create: {
     *     // ... data to create a EventOrganizerVenue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizerVenue we want to update
     *   }
     * })
     */
    upsert<T extends EventOrganizerVenueUpsertArgs>(args: SelectSubset<T, EventOrganizerVenueUpsertArgs<ExtArgs>>): Prisma__EventOrganizerVenueClient<$Result.GetResult<Prisma.$EventOrganizerVenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventOrganizerVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueCountArgs} args - Arguments to filter EventOrganizerVenues to count.
     * @example
     * // Count the number of EventOrganizerVenues
     * const count = await prisma.eventOrganizerVenue.count({
     *   where: {
     *     // ... the filter for the EventOrganizerVenues we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerVenueCountArgs>(
      args?: Subset<T, EventOrganizerVenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerVenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizerVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerVenueAggregateArgs>(args: Subset<T, EventOrganizerVenueAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerVenueAggregateType<T>>

    /**
     * Group by EventOrganizerVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerVenueGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerVenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerVenueGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerVenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerVenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizerVenue model
   */
  readonly fields: EventOrganizerVenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizerVenue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerVenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EventOrganizerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUserDefaultArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventOrganizerVenue model
   */ 
  interface EventOrganizerVenueFieldRefs {
    readonly id: FieldRef<"EventOrganizerVenue", 'String'>
    readonly name: FieldRef<"EventOrganizerVenue", 'String'>
    readonly location: FieldRef<"EventOrganizerVenue", 'String'>
    readonly capacity: FieldRef<"EventOrganizerVenue", 'Int'>
    readonly amenities: FieldRef<"EventOrganizerVenue", 'String'>
    readonly submittedBy: FieldRef<"EventOrganizerVenue", 'String'>
    readonly createdAt: FieldRef<"EventOrganizerVenue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventOrganizerVenue findUnique
   */
  export type EventOrganizerVenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerVenue to fetch.
     */
    where: EventOrganizerVenueWhereUniqueInput
  }

  /**
   * EventOrganizerVenue findUniqueOrThrow
   */
  export type EventOrganizerVenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerVenue to fetch.
     */
    where: EventOrganizerVenueWhereUniqueInput
  }

  /**
   * EventOrganizerVenue findFirst
   */
  export type EventOrganizerVenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerVenue to fetch.
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerVenues to fetch.
     */
    orderBy?: EventOrganizerVenueOrderByWithRelationInput | EventOrganizerVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerVenues.
     */
    cursor?: EventOrganizerVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerVenues.
     */
    distinct?: EventOrganizerVenueScalarFieldEnum | EventOrganizerVenueScalarFieldEnum[]
  }

  /**
   * EventOrganizerVenue findFirstOrThrow
   */
  export type EventOrganizerVenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerVenue to fetch.
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerVenues to fetch.
     */
    orderBy?: EventOrganizerVenueOrderByWithRelationInput | EventOrganizerVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerVenues.
     */
    cursor?: EventOrganizerVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerVenues.
     */
    distinct?: EventOrganizerVenueScalarFieldEnum | EventOrganizerVenueScalarFieldEnum[]
  }

  /**
   * EventOrganizerVenue findMany
   */
  export type EventOrganizerVenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerVenues to fetch.
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerVenues to fetch.
     */
    orderBy?: EventOrganizerVenueOrderByWithRelationInput | EventOrganizerVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizerVenues.
     */
    cursor?: EventOrganizerVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerVenues.
     */
    skip?: number
    distinct?: EventOrganizerVenueScalarFieldEnum | EventOrganizerVenueScalarFieldEnum[]
  }

  /**
   * EventOrganizerVenue create
   */
  export type EventOrganizerVenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizerVenue.
     */
    data: XOR<EventOrganizerVenueCreateInput, EventOrganizerVenueUncheckedCreateInput>
  }

  /**
   * EventOrganizerVenue createMany
   */
  export type EventOrganizerVenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizerVenues.
     */
    data: EventOrganizerVenueCreateManyInput | EventOrganizerVenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerVenue createManyAndReturn
   */
  export type EventOrganizerVenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * The data used to create many EventOrganizerVenues.
     */
    data: EventOrganizerVenueCreateManyInput | EventOrganizerVenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerVenue update
   */
  export type EventOrganizerVenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizerVenue.
     */
    data: XOR<EventOrganizerVenueUpdateInput, EventOrganizerVenueUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizerVenue to update.
     */
    where: EventOrganizerVenueWhereUniqueInput
  }

  /**
   * EventOrganizerVenue updateMany
   */
  export type EventOrganizerVenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizerVenues.
     */
    data: XOR<EventOrganizerVenueUpdateManyMutationInput, EventOrganizerVenueUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerVenues to update
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * Limit how many EventOrganizerVenues to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerVenue updateManyAndReturn
   */
  export type EventOrganizerVenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * The data used to update EventOrganizerVenues.
     */
    data: XOR<EventOrganizerVenueUpdateManyMutationInput, EventOrganizerVenueUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerVenues to update
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * Limit how many EventOrganizerVenues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerVenue upsert
   */
  export type EventOrganizerVenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizerVenue to update in case it exists.
     */
    where: EventOrganizerVenueWhereUniqueInput
    /**
     * In case the EventOrganizerVenue found by the `where` argument doesn't exist, create a new EventOrganizerVenue with this data.
     */
    create: XOR<EventOrganizerVenueCreateInput, EventOrganizerVenueUncheckedCreateInput>
    /**
     * In case the EventOrganizerVenue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerVenueUpdateInput, EventOrganizerVenueUncheckedUpdateInput>
  }

  /**
   * EventOrganizerVenue delete
   */
  export type EventOrganizerVenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizerVenue to delete.
     */
    where: EventOrganizerVenueWhereUniqueInput
  }

  /**
   * EventOrganizerVenue deleteMany
   */
  export type EventOrganizerVenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerVenues to delete
     */
    where?: EventOrganizerVenueWhereInput
    /**
     * Limit how many EventOrganizerVenues to delete.
     */
    limit?: number
  }

  /**
   * EventOrganizerVenue without action
   */
  export type EventOrganizerVenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerVenue
     */
    select?: EventOrganizerVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerVenue
     */
    omit?: EventOrganizerVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerVenueInclude<ExtArgs> | null
  }


  /**
   * Model EventOrganizerServiceProvider
   */

  export type AggregateEventOrganizerServiceProvider = {
    _count: EventOrganizerServiceProviderCountAggregateOutputType | null
    _min: EventOrganizerServiceProviderMinAggregateOutputType | null
    _max: EventOrganizerServiceProviderMaxAggregateOutputType | null
  }

  export type EventOrganizerServiceProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    serviceType: string | null
    contactInfo: string | null
    submittedBy: string | null
    createdAt: Date | null
  }

  export type EventOrganizerServiceProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serviceType: string | null
    contactInfo: string | null
    submittedBy: string | null
    createdAt: Date | null
  }

  export type EventOrganizerServiceProviderCountAggregateOutputType = {
    id: number
    name: number
    serviceType: number
    contactInfo: number
    submittedBy: number
    createdAt: number
    _all: number
  }


  export type EventOrganizerServiceProviderMinAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    contactInfo?: true
    submittedBy?: true
    createdAt?: true
  }

  export type EventOrganizerServiceProviderMaxAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    contactInfo?: true
    submittedBy?: true
    createdAt?: true
  }

  export type EventOrganizerServiceProviderCountAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    contactInfo?: true
    submittedBy?: true
    createdAt?: true
    _all?: true
  }

  export type EventOrganizerServiceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerServiceProvider to aggregate.
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerServiceProviders to fetch.
     */
    orderBy?: EventOrganizerServiceProviderOrderByWithRelationInput | EventOrganizerServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventOrganizerServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventOrganizerServiceProviders
    **/
    _count?: true | EventOrganizerServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventOrganizerServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventOrganizerServiceProviderMaxAggregateInputType
  }

  export type GetEventOrganizerServiceProviderAggregateType<T extends EventOrganizerServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateEventOrganizerServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventOrganizerServiceProvider[P]>
      : GetScalarType<T[P], AggregateEventOrganizerServiceProvider[P]>
  }




  export type EventOrganizerServiceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventOrganizerServiceProviderWhereInput
    orderBy?: EventOrganizerServiceProviderOrderByWithAggregationInput | EventOrganizerServiceProviderOrderByWithAggregationInput[]
    by: EventOrganizerServiceProviderScalarFieldEnum[] | EventOrganizerServiceProviderScalarFieldEnum
    having?: EventOrganizerServiceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventOrganizerServiceProviderCountAggregateInputType | true
    _min?: EventOrganizerServiceProviderMinAggregateInputType
    _max?: EventOrganizerServiceProviderMaxAggregateInputType
  }

  export type EventOrganizerServiceProviderGroupByOutputType = {
    id: string
    name: string
    serviceType: string
    contactInfo: string
    submittedBy: string
    createdAt: Date
    _count: EventOrganizerServiceProviderCountAggregateOutputType | null
    _min: EventOrganizerServiceProviderMinAggregateOutputType | null
    _max: EventOrganizerServiceProviderMaxAggregateOutputType | null
  }

  type GetEventOrganizerServiceProviderGroupByPayload<T extends EventOrganizerServiceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventOrganizerServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventOrganizerServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventOrganizerServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], EventOrganizerServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type EventOrganizerServiceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    contactInfo?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerServiceProvider"]>

  export type EventOrganizerServiceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    contactInfo?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerServiceProvider"]>

  export type EventOrganizerServiceProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    contactInfo?: boolean
    submittedBy?: boolean
    createdAt?: boolean
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventOrganizerServiceProvider"]>

  export type EventOrganizerServiceProviderSelectScalar = {
    id?: boolean
    name?: boolean
    serviceType?: boolean
    contactInfo?: boolean
    submittedBy?: boolean
    createdAt?: boolean
  }

  export type EventOrganizerServiceProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serviceType" | "contactInfo" | "submittedBy" | "createdAt", ExtArgs["result"]["eventOrganizerServiceProvider"]>
  export type EventOrganizerServiceProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerServiceProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }
  export type EventOrganizerServiceProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EventOrganizerUserDefaultArgs<ExtArgs>
  }

  export type $EventOrganizerServiceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventOrganizerServiceProvider"
    objects: {
      user: Prisma.$EventOrganizerUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serviceType: string
      contactInfo: string
      submittedBy: string
      createdAt: Date
    }, ExtArgs["result"]["eventOrganizerServiceProvider"]>
    composites: {}
  }

  type EventOrganizerServiceProviderGetPayload<S extends boolean | null | undefined | EventOrganizerServiceProviderDefaultArgs> = $Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload, S>

  type EventOrganizerServiceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventOrganizerServiceProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventOrganizerServiceProviderCountAggregateInputType | true
    }

  export interface EventOrganizerServiceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventOrganizerServiceProvider'], meta: { name: 'EventOrganizerServiceProvider' } }
    /**
     * Find zero or one EventOrganizerServiceProvider that matches the filter.
     * @param {EventOrganizerServiceProviderFindUniqueArgs} args - Arguments to find a EventOrganizerServiceProvider
     * @example
     * // Get one EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventOrganizerServiceProviderFindUniqueArgs>(args: SelectSubset<T, EventOrganizerServiceProviderFindUniqueArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventOrganizerServiceProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventOrganizerServiceProviderFindUniqueOrThrowArgs} args - Arguments to find a EventOrganizerServiceProvider
     * @example
     * // Get one EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventOrganizerServiceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, EventOrganizerServiceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderFindFirstArgs} args - Arguments to find a EventOrganizerServiceProvider
     * @example
     * // Get one EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventOrganizerServiceProviderFindFirstArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderFindFirstArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventOrganizerServiceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderFindFirstOrThrowArgs} args - Arguments to find a EventOrganizerServiceProvider
     * @example
     * // Get one EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventOrganizerServiceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventOrganizerServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventOrganizerServiceProviders
     * const eventOrganizerServiceProviders = await prisma.eventOrganizerServiceProvider.findMany()
     * 
     * // Get first 10 EventOrganizerServiceProviders
     * const eventOrganizerServiceProviders = await prisma.eventOrganizerServiceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventOrganizerServiceProviderWithIdOnly = await prisma.eventOrganizerServiceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventOrganizerServiceProviderFindManyArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventOrganizerServiceProvider.
     * @param {EventOrganizerServiceProviderCreateArgs} args - Arguments to create a EventOrganizerServiceProvider.
     * @example
     * // Create one EventOrganizerServiceProvider
     * const EventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.create({
     *   data: {
     *     // ... data to create a EventOrganizerServiceProvider
     *   }
     * })
     * 
     */
    create<T extends EventOrganizerServiceProviderCreateArgs>(args: SelectSubset<T, EventOrganizerServiceProviderCreateArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventOrganizerServiceProviders.
     * @param {EventOrganizerServiceProviderCreateManyArgs} args - Arguments to create many EventOrganizerServiceProviders.
     * @example
     * // Create many EventOrganizerServiceProviders
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventOrganizerServiceProviderCreateManyArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventOrganizerServiceProviders and returns the data saved in the database.
     * @param {EventOrganizerServiceProviderCreateManyAndReturnArgs} args - Arguments to create many EventOrganizerServiceProviders.
     * @example
     * // Create many EventOrganizerServiceProviders
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventOrganizerServiceProviders and only return the `id`
     * const eventOrganizerServiceProviderWithIdOnly = await prisma.eventOrganizerServiceProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventOrganizerServiceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventOrganizerServiceProvider.
     * @param {EventOrganizerServiceProviderDeleteArgs} args - Arguments to delete one EventOrganizerServiceProvider.
     * @example
     * // Delete one EventOrganizerServiceProvider
     * const EventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.delete({
     *   where: {
     *     // ... filter to delete one EventOrganizerServiceProvider
     *   }
     * })
     * 
     */
    delete<T extends EventOrganizerServiceProviderDeleteArgs>(args: SelectSubset<T, EventOrganizerServiceProviderDeleteArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventOrganizerServiceProvider.
     * @param {EventOrganizerServiceProviderUpdateArgs} args - Arguments to update one EventOrganizerServiceProvider.
     * @example
     * // Update one EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventOrganizerServiceProviderUpdateArgs>(args: SelectSubset<T, EventOrganizerServiceProviderUpdateArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventOrganizerServiceProviders.
     * @param {EventOrganizerServiceProviderDeleteManyArgs} args - Arguments to filter EventOrganizerServiceProviders to delete.
     * @example
     * // Delete a few EventOrganizerServiceProviders
     * const { count } = await prisma.eventOrganizerServiceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventOrganizerServiceProviderDeleteManyArgs>(args?: SelectSubset<T, EventOrganizerServiceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventOrganizerServiceProviders
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventOrganizerServiceProviderUpdateManyArgs>(args: SelectSubset<T, EventOrganizerServiceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventOrganizerServiceProviders and returns the data updated in the database.
     * @param {EventOrganizerServiceProviderUpdateManyAndReturnArgs} args - Arguments to update many EventOrganizerServiceProviders.
     * @example
     * // Update many EventOrganizerServiceProviders
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventOrganizerServiceProviders and only return the `id`
     * const eventOrganizerServiceProviderWithIdOnly = await prisma.eventOrganizerServiceProvider.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventOrganizerServiceProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, EventOrganizerServiceProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventOrganizerServiceProvider.
     * @param {EventOrganizerServiceProviderUpsertArgs} args - Arguments to update or create a EventOrganizerServiceProvider.
     * @example
     * // Update or create a EventOrganizerServiceProvider
     * const eventOrganizerServiceProvider = await prisma.eventOrganizerServiceProvider.upsert({
     *   create: {
     *     // ... data to create a EventOrganizerServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventOrganizerServiceProvider we want to update
     *   }
     * })
     */
    upsert<T extends EventOrganizerServiceProviderUpsertArgs>(args: SelectSubset<T, EventOrganizerServiceProviderUpsertArgs<ExtArgs>>): Prisma__EventOrganizerServiceProviderClient<$Result.GetResult<Prisma.$EventOrganizerServiceProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventOrganizerServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderCountArgs} args - Arguments to filter EventOrganizerServiceProviders to count.
     * @example
     * // Count the number of EventOrganizerServiceProviders
     * const count = await prisma.eventOrganizerServiceProvider.count({
     *   where: {
     *     // ... the filter for the EventOrganizerServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends EventOrganizerServiceProviderCountArgs>(
      args?: Subset<T, EventOrganizerServiceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventOrganizerServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventOrganizerServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventOrganizerServiceProviderAggregateArgs>(args: Subset<T, EventOrganizerServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetEventOrganizerServiceProviderAggregateType<T>>

    /**
     * Group by EventOrganizerServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventOrganizerServiceProviderGroupByArgs} args - Group by arguments.
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
      T extends EventOrganizerServiceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventOrganizerServiceProviderGroupByArgs['orderBy'] }
        : { orderBy?: EventOrganizerServiceProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventOrganizerServiceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventOrganizerServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventOrganizerServiceProvider model
   */
  readonly fields: EventOrganizerServiceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventOrganizerServiceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventOrganizerServiceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EventOrganizerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventOrganizerUserDefaultArgs<ExtArgs>>): Prisma__EventOrganizerUserClient<$Result.GetResult<Prisma.$EventOrganizerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventOrganizerServiceProvider model
   */ 
  interface EventOrganizerServiceProviderFieldRefs {
    readonly id: FieldRef<"EventOrganizerServiceProvider", 'String'>
    readonly name: FieldRef<"EventOrganizerServiceProvider", 'String'>
    readonly serviceType: FieldRef<"EventOrganizerServiceProvider", 'String'>
    readonly contactInfo: FieldRef<"EventOrganizerServiceProvider", 'String'>
    readonly submittedBy: FieldRef<"EventOrganizerServiceProvider", 'String'>
    readonly createdAt: FieldRef<"EventOrganizerServiceProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventOrganizerServiceProvider findUnique
   */
  export type EventOrganizerServiceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerServiceProvider to fetch.
     */
    where: EventOrganizerServiceProviderWhereUniqueInput
  }

  /**
   * EventOrganizerServiceProvider findUniqueOrThrow
   */
  export type EventOrganizerServiceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerServiceProvider to fetch.
     */
    where: EventOrganizerServiceProviderWhereUniqueInput
  }

  /**
   * EventOrganizerServiceProvider findFirst
   */
  export type EventOrganizerServiceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerServiceProvider to fetch.
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerServiceProviders to fetch.
     */
    orderBy?: EventOrganizerServiceProviderOrderByWithRelationInput | EventOrganizerServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerServiceProviders.
     */
    cursor?: EventOrganizerServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerServiceProviders.
     */
    distinct?: EventOrganizerServiceProviderScalarFieldEnum | EventOrganizerServiceProviderScalarFieldEnum[]
  }

  /**
   * EventOrganizerServiceProvider findFirstOrThrow
   */
  export type EventOrganizerServiceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerServiceProvider to fetch.
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerServiceProviders to fetch.
     */
    orderBy?: EventOrganizerServiceProviderOrderByWithRelationInput | EventOrganizerServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventOrganizerServiceProviders.
     */
    cursor?: EventOrganizerServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventOrganizerServiceProviders.
     */
    distinct?: EventOrganizerServiceProviderScalarFieldEnum | EventOrganizerServiceProviderScalarFieldEnum[]
  }

  /**
   * EventOrganizerServiceProvider findMany
   */
  export type EventOrganizerServiceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which EventOrganizerServiceProviders to fetch.
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventOrganizerServiceProviders to fetch.
     */
    orderBy?: EventOrganizerServiceProviderOrderByWithRelationInput | EventOrganizerServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventOrganizerServiceProviders.
     */
    cursor?: EventOrganizerServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventOrganizerServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventOrganizerServiceProviders.
     */
    skip?: number
    distinct?: EventOrganizerServiceProviderScalarFieldEnum | EventOrganizerServiceProviderScalarFieldEnum[]
  }

  /**
   * EventOrganizerServiceProvider create
   */
  export type EventOrganizerServiceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a EventOrganizerServiceProvider.
     */
    data: XOR<EventOrganizerServiceProviderCreateInput, EventOrganizerServiceProviderUncheckedCreateInput>
  }

  /**
   * EventOrganizerServiceProvider createMany
   */
  export type EventOrganizerServiceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventOrganizerServiceProviders.
     */
    data: EventOrganizerServiceProviderCreateManyInput | EventOrganizerServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventOrganizerServiceProvider createManyAndReturn
   */
  export type EventOrganizerServiceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to create many EventOrganizerServiceProviders.
     */
    data: EventOrganizerServiceProviderCreateManyInput | EventOrganizerServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerServiceProvider update
   */
  export type EventOrganizerServiceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a EventOrganizerServiceProvider.
     */
    data: XOR<EventOrganizerServiceProviderUpdateInput, EventOrganizerServiceProviderUncheckedUpdateInput>
    /**
     * Choose, which EventOrganizerServiceProvider to update.
     */
    where: EventOrganizerServiceProviderWhereUniqueInput
  }

  /**
   * EventOrganizerServiceProvider updateMany
   */
  export type EventOrganizerServiceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventOrganizerServiceProviders.
     */
    data: XOR<EventOrganizerServiceProviderUpdateManyMutationInput, EventOrganizerServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerServiceProviders to update
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * Limit how many EventOrganizerServiceProviders to update.
     */
    limit?: number
  }

  /**
   * EventOrganizerServiceProvider updateManyAndReturn
   */
  export type EventOrganizerServiceProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to update EventOrganizerServiceProviders.
     */
    data: XOR<EventOrganizerServiceProviderUpdateManyMutationInput, EventOrganizerServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which EventOrganizerServiceProviders to update
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * Limit how many EventOrganizerServiceProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventOrganizerServiceProvider upsert
   */
  export type EventOrganizerServiceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the EventOrganizerServiceProvider to update in case it exists.
     */
    where: EventOrganizerServiceProviderWhereUniqueInput
    /**
     * In case the EventOrganizerServiceProvider found by the `where` argument doesn't exist, create a new EventOrganizerServiceProvider with this data.
     */
    create: XOR<EventOrganizerServiceProviderCreateInput, EventOrganizerServiceProviderUncheckedCreateInput>
    /**
     * In case the EventOrganizerServiceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventOrganizerServiceProviderUpdateInput, EventOrganizerServiceProviderUncheckedUpdateInput>
  }

  /**
   * EventOrganizerServiceProvider delete
   */
  export type EventOrganizerServiceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
    /**
     * Filter which EventOrganizerServiceProvider to delete.
     */
    where: EventOrganizerServiceProviderWhereUniqueInput
  }

  /**
   * EventOrganizerServiceProvider deleteMany
   */
  export type EventOrganizerServiceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventOrganizerServiceProviders to delete
     */
    where?: EventOrganizerServiceProviderWhereInput
    /**
     * Limit how many EventOrganizerServiceProviders to delete.
     */
    limit?: number
  }

  /**
   * EventOrganizerServiceProvider without action
   */
  export type EventOrganizerServiceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventOrganizerServiceProvider
     */
    select?: EventOrganizerServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventOrganizerServiceProvider
     */
    omit?: EventOrganizerServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventOrganizerServiceProviderInclude<ExtArgs> | null
  }


  /**
   * Model LanguageLearnerUser
   */

  export type AggregateLanguageLearnerUser = {
    _count: LanguageLearnerUserCountAggregateOutputType | null
    _min: LanguageLearnerUserMinAggregateOutputType | null
    _max: LanguageLearnerUserMaxAggregateOutputType | null
  }

  export type LanguageLearnerUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type LanguageLearnerUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type LanguageLearnerUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type LanguageLearnerUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageLearnerUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerUser to aggregate.
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUsers to fetch.
     */
    orderBy?: LanguageLearnerUserOrderByWithRelationInput | LanguageLearnerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageLearnerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageLearnerUsers
    **/
    _count?: true | LanguageLearnerUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageLearnerUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageLearnerUserMaxAggregateInputType
  }

  export type GetLanguageLearnerUserAggregateType<T extends LanguageLearnerUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageLearnerUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageLearnerUser[P]>
      : GetScalarType<T[P], AggregateLanguageLearnerUser[P]>
  }




  export type LanguageLearnerUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerUserWhereInput
    orderBy?: LanguageLearnerUserOrderByWithAggregationInput | LanguageLearnerUserOrderByWithAggregationInput[]
    by: LanguageLearnerUserScalarFieldEnum[] | LanguageLearnerUserScalarFieldEnum
    having?: LanguageLearnerUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageLearnerUserCountAggregateInputType | true
    _min?: LanguageLearnerUserMinAggregateInputType
    _max?: LanguageLearnerUserMaxAggregateInputType
  }

  export type LanguageLearnerUserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: string
    createdAt: Date
    _count: LanguageLearnerUserCountAggregateOutputType | null
    _min: LanguageLearnerUserMinAggregateOutputType | null
    _max: LanguageLearnerUserMaxAggregateOutputType | null
  }

  type GetLanguageLearnerUserGroupByPayload<T extends LanguageLearnerUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageLearnerUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageLearnerUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageLearnerUserGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageLearnerUserGroupByOutputType[P]>
        }
      >
    >


  export type LanguageLearnerUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    ownedPlatforms?: boolean | LanguageLearnerUser$ownedPlatformsArgs<ExtArgs>
    reviews?: boolean | LanguageLearnerUser$reviewsArgs<ExtArgs>
    votesGiven?: boolean | LanguageLearnerUser$votesGivenArgs<ExtArgs>
    votesReceived?: boolean | LanguageLearnerUser$votesReceivedArgs<ExtArgs>
    likes?: boolean | LanguageLearnerUser$likesArgs<ExtArgs>
    _count?: boolean | LanguageLearnerUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerUser"]>

  export type LanguageLearnerUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["languageLearnerUser"]>

  export type LanguageLearnerUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["languageLearnerUser"]>

  export type LanguageLearnerUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type LanguageLearnerUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt", ExtArgs["result"]["languageLearnerUser"]>
  export type LanguageLearnerUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedPlatforms?: boolean | LanguageLearnerUser$ownedPlatformsArgs<ExtArgs>
    reviews?: boolean | LanguageLearnerUser$reviewsArgs<ExtArgs>
    votesGiven?: boolean | LanguageLearnerUser$votesGivenArgs<ExtArgs>
    votesReceived?: boolean | LanguageLearnerUser$votesReceivedArgs<ExtArgs>
    likes?: boolean | LanguageLearnerUser$likesArgs<ExtArgs>
    _count?: boolean | LanguageLearnerUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageLearnerUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguageLearnerUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageLearnerUser"
    objects: {
      ownedPlatforms: Prisma.$LanguageLearnerPlatformPayload<ExtArgs>[]
      reviews: Prisma.$LanguageLearnerReviewPayload<ExtArgs>[]
      votesGiven: Prisma.$LanguageLearnerUserVotePayload<ExtArgs>[]
      votesReceived: Prisma.$LanguageLearnerUserVotePayload<ExtArgs>[]
      likes: Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["languageLearnerUser"]>
    composites: {}
  }

  type LanguageLearnerUserGetPayload<S extends boolean | null | undefined | LanguageLearnerUserDefaultArgs> = $Result.GetResult<Prisma.$LanguageLearnerUserPayload, S>

  type LanguageLearnerUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageLearnerUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageLearnerUserCountAggregateInputType | true
    }

  export interface LanguageLearnerUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageLearnerUser'], meta: { name: 'LanguageLearnerUser' } }
    /**
     * Find zero or one LanguageLearnerUser that matches the filter.
     * @param {LanguageLearnerUserFindUniqueArgs} args - Arguments to find a LanguageLearnerUser
     * @example
     * // Get one LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageLearnerUserFindUniqueArgs>(args: SelectSubset<T, LanguageLearnerUserFindUniqueArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageLearnerUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageLearnerUserFindUniqueOrThrowArgs} args - Arguments to find a LanguageLearnerUser
     * @example
     * // Get one LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageLearnerUserFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageLearnerUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserFindFirstArgs} args - Arguments to find a LanguageLearnerUser
     * @example
     * // Get one LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageLearnerUserFindFirstArgs>(args?: SelectSubset<T, LanguageLearnerUserFindFirstArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserFindFirstOrThrowArgs} args - Arguments to find a LanguageLearnerUser
     * @example
     * // Get one LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageLearnerUserFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageLearnerUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageLearnerUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageLearnerUsers
     * const languageLearnerUsers = await prisma.languageLearnerUser.findMany()
     * 
     * // Get first 10 LanguageLearnerUsers
     * const languageLearnerUsers = await prisma.languageLearnerUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageLearnerUserWithIdOnly = await prisma.languageLearnerUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageLearnerUserFindManyArgs>(args?: SelectSubset<T, LanguageLearnerUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageLearnerUser.
     * @param {LanguageLearnerUserCreateArgs} args - Arguments to create a LanguageLearnerUser.
     * @example
     * // Create one LanguageLearnerUser
     * const LanguageLearnerUser = await prisma.languageLearnerUser.create({
     *   data: {
     *     // ... data to create a LanguageLearnerUser
     *   }
     * })
     * 
     */
    create<T extends LanguageLearnerUserCreateArgs>(args: SelectSubset<T, LanguageLearnerUserCreateArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageLearnerUsers.
     * @param {LanguageLearnerUserCreateManyArgs} args - Arguments to create many LanguageLearnerUsers.
     * @example
     * // Create many LanguageLearnerUsers
     * const languageLearnerUser = await prisma.languageLearnerUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageLearnerUserCreateManyArgs>(args?: SelectSubset<T, LanguageLearnerUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguageLearnerUsers and returns the data saved in the database.
     * @param {LanguageLearnerUserCreateManyAndReturnArgs} args - Arguments to create many LanguageLearnerUsers.
     * @example
     * // Create many LanguageLearnerUsers
     * const languageLearnerUser = await prisma.languageLearnerUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguageLearnerUsers and only return the `id`
     * const languageLearnerUserWithIdOnly = await prisma.languageLearnerUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageLearnerUserCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageLearnerUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguageLearnerUser.
     * @param {LanguageLearnerUserDeleteArgs} args - Arguments to delete one LanguageLearnerUser.
     * @example
     * // Delete one LanguageLearnerUser
     * const LanguageLearnerUser = await prisma.languageLearnerUser.delete({
     *   where: {
     *     // ... filter to delete one LanguageLearnerUser
     *   }
     * })
     * 
     */
    delete<T extends LanguageLearnerUserDeleteArgs>(args: SelectSubset<T, LanguageLearnerUserDeleteArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageLearnerUser.
     * @param {LanguageLearnerUserUpdateArgs} args - Arguments to update one LanguageLearnerUser.
     * @example
     * // Update one LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageLearnerUserUpdateArgs>(args: SelectSubset<T, LanguageLearnerUserUpdateArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageLearnerUsers.
     * @param {LanguageLearnerUserDeleteManyArgs} args - Arguments to filter LanguageLearnerUsers to delete.
     * @example
     * // Delete a few LanguageLearnerUsers
     * const { count } = await prisma.languageLearnerUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageLearnerUserDeleteManyArgs>(args?: SelectSubset<T, LanguageLearnerUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageLearnerUsers
     * const languageLearnerUser = await prisma.languageLearnerUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageLearnerUserUpdateManyArgs>(args: SelectSubset<T, LanguageLearnerUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerUsers and returns the data updated in the database.
     * @param {LanguageLearnerUserUpdateManyAndReturnArgs} args - Arguments to update many LanguageLearnerUsers.
     * @example
     * // Update many LanguageLearnerUsers
     * const languageLearnerUser = await prisma.languageLearnerUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguageLearnerUsers and only return the `id`
     * const languageLearnerUserWithIdOnly = await prisma.languageLearnerUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageLearnerUserUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageLearnerUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguageLearnerUser.
     * @param {LanguageLearnerUserUpsertArgs} args - Arguments to update or create a LanguageLearnerUser.
     * @example
     * // Update or create a LanguageLearnerUser
     * const languageLearnerUser = await prisma.languageLearnerUser.upsert({
     *   create: {
     *     // ... data to create a LanguageLearnerUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageLearnerUser we want to update
     *   }
     * })
     */
    upsert<T extends LanguageLearnerUserUpsertArgs>(args: SelectSubset<T, LanguageLearnerUserUpsertArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageLearnerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserCountArgs} args - Arguments to filter LanguageLearnerUsers to count.
     * @example
     * // Count the number of LanguageLearnerUsers
     * const count = await prisma.languageLearnerUser.count({
     *   where: {
     *     // ... the filter for the LanguageLearnerUsers we want to count
     *   }
     * })
    **/
    count<T extends LanguageLearnerUserCountArgs>(
      args?: Subset<T, LanguageLearnerUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageLearnerUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageLearnerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageLearnerUserAggregateArgs>(args: Subset<T, LanguageLearnerUserAggregateArgs>): Prisma.PrismaPromise<GetLanguageLearnerUserAggregateType<T>>

    /**
     * Group by LanguageLearnerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserGroupByArgs} args - Group by arguments.
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
      T extends LanguageLearnerUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageLearnerUserGroupByArgs['orderBy'] }
        : { orderBy?: LanguageLearnerUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageLearnerUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageLearnerUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageLearnerUser model
   */
  readonly fields: LanguageLearnerUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageLearnerUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageLearnerUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedPlatforms<T extends LanguageLearnerUser$ownedPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUser$ownedPlatformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends LanguageLearnerUser$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUser$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votesGiven<T extends LanguageLearnerUser$votesGivenArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUser$votesGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votesReceived<T extends LanguageLearnerUser$votesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUser$votesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends LanguageLearnerUser$likesArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUser$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LanguageLearnerUser model
   */ 
  interface LanguageLearnerUserFieldRefs {
    readonly id: FieldRef<"LanguageLearnerUser", 'String'>
    readonly email: FieldRef<"LanguageLearnerUser", 'String'>
    readonly name: FieldRef<"LanguageLearnerUser", 'String'>
    readonly password: FieldRef<"LanguageLearnerUser", 'String'>
    readonly role: FieldRef<"LanguageLearnerUser", 'String'>
    readonly createdAt: FieldRef<"LanguageLearnerUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguageLearnerUser findUnique
   */
  export type LanguageLearnerUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUser to fetch.
     */
    where: LanguageLearnerUserWhereUniqueInput
  }

  /**
   * LanguageLearnerUser findUniqueOrThrow
   */
  export type LanguageLearnerUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUser to fetch.
     */
    where: LanguageLearnerUserWhereUniqueInput
  }

  /**
   * LanguageLearnerUser findFirst
   */
  export type LanguageLearnerUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUser to fetch.
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUsers to fetch.
     */
    orderBy?: LanguageLearnerUserOrderByWithRelationInput | LanguageLearnerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerUsers.
     */
    cursor?: LanguageLearnerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerUsers.
     */
    distinct?: LanguageLearnerUserScalarFieldEnum | LanguageLearnerUserScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser findFirstOrThrow
   */
  export type LanguageLearnerUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUser to fetch.
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUsers to fetch.
     */
    orderBy?: LanguageLearnerUserOrderByWithRelationInput | LanguageLearnerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerUsers.
     */
    cursor?: LanguageLearnerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerUsers.
     */
    distinct?: LanguageLearnerUserScalarFieldEnum | LanguageLearnerUserScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser findMany
   */
  export type LanguageLearnerUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUsers to fetch.
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUsers to fetch.
     */
    orderBy?: LanguageLearnerUserOrderByWithRelationInput | LanguageLearnerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageLearnerUsers.
     */
    cursor?: LanguageLearnerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUsers.
     */
    skip?: number
    distinct?: LanguageLearnerUserScalarFieldEnum | LanguageLearnerUserScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser create
   */
  export type LanguageLearnerUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageLearnerUser.
     */
    data: XOR<LanguageLearnerUserCreateInput, LanguageLearnerUserUncheckedCreateInput>
  }

  /**
   * LanguageLearnerUser createMany
   */
  export type LanguageLearnerUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageLearnerUsers.
     */
    data: LanguageLearnerUserCreateManyInput | LanguageLearnerUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerUser createManyAndReturn
   */
  export type LanguageLearnerUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * The data used to create many LanguageLearnerUsers.
     */
    data: LanguageLearnerUserCreateManyInput | LanguageLearnerUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerUser update
   */
  export type LanguageLearnerUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageLearnerUser.
     */
    data: XOR<LanguageLearnerUserUpdateInput, LanguageLearnerUserUncheckedUpdateInput>
    /**
     * Choose, which LanguageLearnerUser to update.
     */
    where: LanguageLearnerUserWhereUniqueInput
  }

  /**
   * LanguageLearnerUser updateMany
   */
  export type LanguageLearnerUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageLearnerUsers.
     */
    data: XOR<LanguageLearnerUserUpdateManyMutationInput, LanguageLearnerUserUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerUsers to update
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * Limit how many LanguageLearnerUsers to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerUser updateManyAndReturn
   */
  export type LanguageLearnerUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * The data used to update LanguageLearnerUsers.
     */
    data: XOR<LanguageLearnerUserUpdateManyMutationInput, LanguageLearnerUserUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerUsers to update
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * Limit how many LanguageLearnerUsers to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerUser upsert
   */
  export type LanguageLearnerUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageLearnerUser to update in case it exists.
     */
    where: LanguageLearnerUserWhereUniqueInput
    /**
     * In case the LanguageLearnerUser found by the `where` argument doesn't exist, create a new LanguageLearnerUser with this data.
     */
    create: XOR<LanguageLearnerUserCreateInput, LanguageLearnerUserUncheckedCreateInput>
    /**
     * In case the LanguageLearnerUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageLearnerUserUpdateInput, LanguageLearnerUserUncheckedUpdateInput>
  }

  /**
   * LanguageLearnerUser delete
   */
  export type LanguageLearnerUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
    /**
     * Filter which LanguageLearnerUser to delete.
     */
    where: LanguageLearnerUserWhereUniqueInput
  }

  /**
   * LanguageLearnerUser deleteMany
   */
  export type LanguageLearnerUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerUsers to delete
     */
    where?: LanguageLearnerUserWhereInput
    /**
     * Limit how many LanguageLearnerUsers to delete.
     */
    limit?: number
  }

  /**
   * LanguageLearnerUser.ownedPlatforms
   */
  export type LanguageLearnerUser$ownedPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    where?: LanguageLearnerPlatformWhereInput
    orderBy?: LanguageLearnerPlatformOrderByWithRelationInput | LanguageLearnerPlatformOrderByWithRelationInput[]
    cursor?: LanguageLearnerPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerPlatformScalarFieldEnum | LanguageLearnerPlatformScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser.reviews
   */
  export type LanguageLearnerUser$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    where?: LanguageLearnerReviewWhereInput
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    cursor?: LanguageLearnerReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerReviewScalarFieldEnum | LanguageLearnerReviewScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser.votesGiven
   */
  export type LanguageLearnerUser$votesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    where?: LanguageLearnerUserVoteWhereInput
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerUserVoteScalarFieldEnum | LanguageLearnerUserVoteScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser.votesReceived
   */
  export type LanguageLearnerUser$votesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    where?: LanguageLearnerUserVoteWhereInput
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerUserVoteScalarFieldEnum | LanguageLearnerUserVoteScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser.likes
   */
  export type LanguageLearnerUser$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    where?: LanguageLearnerReviewLikeWhereInput
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerReviewLikeScalarFieldEnum | LanguageLearnerReviewLikeScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUser without action
   */
  export type LanguageLearnerUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUser
     */
    select?: LanguageLearnerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUser
     */
    omit?: LanguageLearnerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserInclude<ExtArgs> | null
  }


  /**
   * Model LanguageLearnerPlatform
   */

  export type AggregateLanguageLearnerPlatform = {
    _count: LanguageLearnerPlatformCountAggregateOutputType | null
    _min: LanguageLearnerPlatformMinAggregateOutputType | null
    _max: LanguageLearnerPlatformMaxAggregateOutputType | null
  }

  export type LanguageLearnerPlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    languagesOffered: string | null
    description: string | null
    ownerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerPlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    languagesOffered: string | null
    description: string | null
    ownerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerPlatformCountAggregateOutputType = {
    id: number
    name: number
    website: number
    languagesOffered: number
    description: number
    ownerId: number
    status: number
    createdAt: number
    _all: number
  }


  export type LanguageLearnerPlatformMinAggregateInputType = {
    id?: true
    name?: true
    website?: true
    languagesOffered?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
  }

  export type LanguageLearnerPlatformMaxAggregateInputType = {
    id?: true
    name?: true
    website?: true
    languagesOffered?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
  }

  export type LanguageLearnerPlatformCountAggregateInputType = {
    id?: true
    name?: true
    website?: true
    languagesOffered?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageLearnerPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerPlatform to aggregate.
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerPlatforms to fetch.
     */
    orderBy?: LanguageLearnerPlatformOrderByWithRelationInput | LanguageLearnerPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageLearnerPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageLearnerPlatforms
    **/
    _count?: true | LanguageLearnerPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageLearnerPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageLearnerPlatformMaxAggregateInputType
  }

  export type GetLanguageLearnerPlatformAggregateType<T extends LanguageLearnerPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageLearnerPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageLearnerPlatform[P]>
      : GetScalarType<T[P], AggregateLanguageLearnerPlatform[P]>
  }




  export type LanguageLearnerPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerPlatformWhereInput
    orderBy?: LanguageLearnerPlatformOrderByWithAggregationInput | LanguageLearnerPlatformOrderByWithAggregationInput[]
    by: LanguageLearnerPlatformScalarFieldEnum[] | LanguageLearnerPlatformScalarFieldEnum
    having?: LanguageLearnerPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageLearnerPlatformCountAggregateInputType | true
    _min?: LanguageLearnerPlatformMinAggregateInputType
    _max?: LanguageLearnerPlatformMaxAggregateInputType
  }

  export type LanguageLearnerPlatformGroupByOutputType = {
    id: string
    name: string
    website: string
    languagesOffered: string
    description: string
    ownerId: string
    status: string
    createdAt: Date
    _count: LanguageLearnerPlatformCountAggregateOutputType | null
    _min: LanguageLearnerPlatformMinAggregateOutputType | null
    _max: LanguageLearnerPlatformMaxAggregateOutputType | null
  }

  type GetLanguageLearnerPlatformGroupByPayload<T extends LanguageLearnerPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageLearnerPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageLearnerPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageLearnerPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageLearnerPlatformGroupByOutputType[P]>
        }
      >
    >


  export type LanguageLearnerPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    languagesOffered?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    reviews?: boolean | LanguageLearnerPlatform$reviewsArgs<ExtArgs>
    _count?: boolean | LanguageLearnerPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerPlatform"]>

  export type LanguageLearnerPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    languagesOffered?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerPlatform"]>

  export type LanguageLearnerPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    languagesOffered?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerPlatform"]>

  export type LanguageLearnerPlatformSelectScalar = {
    id?: boolean
    name?: boolean
    website?: boolean
    languagesOffered?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LanguageLearnerPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "website" | "languagesOffered" | "description" | "ownerId" | "status" | "createdAt", ExtArgs["result"]["languageLearnerPlatform"]>
  export type LanguageLearnerPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    reviews?: boolean | LanguageLearnerPlatform$reviewsArgs<ExtArgs>
    _count?: boolean | LanguageLearnerPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }

  export type $LanguageLearnerPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageLearnerPlatform"
    objects: {
      owner: Prisma.$LanguageLearnerUserPayload<ExtArgs>
      reviews: Prisma.$LanguageLearnerReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      website: string
      languagesOffered: string
      description: string
      ownerId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["languageLearnerPlatform"]>
    composites: {}
  }

  type LanguageLearnerPlatformGetPayload<S extends boolean | null | undefined | LanguageLearnerPlatformDefaultArgs> = $Result.GetResult<Prisma.$LanguageLearnerPlatformPayload, S>

  type LanguageLearnerPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageLearnerPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageLearnerPlatformCountAggregateInputType | true
    }

  export interface LanguageLearnerPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageLearnerPlatform'], meta: { name: 'LanguageLearnerPlatform' } }
    /**
     * Find zero or one LanguageLearnerPlatform that matches the filter.
     * @param {LanguageLearnerPlatformFindUniqueArgs} args - Arguments to find a LanguageLearnerPlatform
     * @example
     * // Get one LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageLearnerPlatformFindUniqueArgs>(args: SelectSubset<T, LanguageLearnerPlatformFindUniqueArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageLearnerPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageLearnerPlatformFindUniqueOrThrowArgs} args - Arguments to find a LanguageLearnerPlatform
     * @example
     * // Get one LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageLearnerPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageLearnerPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformFindFirstArgs} args - Arguments to find a LanguageLearnerPlatform
     * @example
     * // Get one LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageLearnerPlatformFindFirstArgs>(args?: SelectSubset<T, LanguageLearnerPlatformFindFirstArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformFindFirstOrThrowArgs} args - Arguments to find a LanguageLearnerPlatform
     * @example
     * // Get one LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageLearnerPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageLearnerPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageLearnerPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageLearnerPlatforms
     * const languageLearnerPlatforms = await prisma.languageLearnerPlatform.findMany()
     * 
     * // Get first 10 LanguageLearnerPlatforms
     * const languageLearnerPlatforms = await prisma.languageLearnerPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageLearnerPlatformWithIdOnly = await prisma.languageLearnerPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageLearnerPlatformFindManyArgs>(args?: SelectSubset<T, LanguageLearnerPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageLearnerPlatform.
     * @param {LanguageLearnerPlatformCreateArgs} args - Arguments to create a LanguageLearnerPlatform.
     * @example
     * // Create one LanguageLearnerPlatform
     * const LanguageLearnerPlatform = await prisma.languageLearnerPlatform.create({
     *   data: {
     *     // ... data to create a LanguageLearnerPlatform
     *   }
     * })
     * 
     */
    create<T extends LanguageLearnerPlatformCreateArgs>(args: SelectSubset<T, LanguageLearnerPlatformCreateArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageLearnerPlatforms.
     * @param {LanguageLearnerPlatformCreateManyArgs} args - Arguments to create many LanguageLearnerPlatforms.
     * @example
     * // Create many LanguageLearnerPlatforms
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageLearnerPlatformCreateManyArgs>(args?: SelectSubset<T, LanguageLearnerPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguageLearnerPlatforms and returns the data saved in the database.
     * @param {LanguageLearnerPlatformCreateManyAndReturnArgs} args - Arguments to create many LanguageLearnerPlatforms.
     * @example
     * // Create many LanguageLearnerPlatforms
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguageLearnerPlatforms and only return the `id`
     * const languageLearnerPlatformWithIdOnly = await prisma.languageLearnerPlatform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageLearnerPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageLearnerPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguageLearnerPlatform.
     * @param {LanguageLearnerPlatformDeleteArgs} args - Arguments to delete one LanguageLearnerPlatform.
     * @example
     * // Delete one LanguageLearnerPlatform
     * const LanguageLearnerPlatform = await prisma.languageLearnerPlatform.delete({
     *   where: {
     *     // ... filter to delete one LanguageLearnerPlatform
     *   }
     * })
     * 
     */
    delete<T extends LanguageLearnerPlatformDeleteArgs>(args: SelectSubset<T, LanguageLearnerPlatformDeleteArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageLearnerPlatform.
     * @param {LanguageLearnerPlatformUpdateArgs} args - Arguments to update one LanguageLearnerPlatform.
     * @example
     * // Update one LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageLearnerPlatformUpdateArgs>(args: SelectSubset<T, LanguageLearnerPlatformUpdateArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageLearnerPlatforms.
     * @param {LanguageLearnerPlatformDeleteManyArgs} args - Arguments to filter LanguageLearnerPlatforms to delete.
     * @example
     * // Delete a few LanguageLearnerPlatforms
     * const { count } = await prisma.languageLearnerPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageLearnerPlatformDeleteManyArgs>(args?: SelectSubset<T, LanguageLearnerPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageLearnerPlatforms
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageLearnerPlatformUpdateManyArgs>(args: SelectSubset<T, LanguageLearnerPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerPlatforms and returns the data updated in the database.
     * @param {LanguageLearnerPlatformUpdateManyAndReturnArgs} args - Arguments to update many LanguageLearnerPlatforms.
     * @example
     * // Update many LanguageLearnerPlatforms
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguageLearnerPlatforms and only return the `id`
     * const languageLearnerPlatformWithIdOnly = await prisma.languageLearnerPlatform.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageLearnerPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageLearnerPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguageLearnerPlatform.
     * @param {LanguageLearnerPlatformUpsertArgs} args - Arguments to update or create a LanguageLearnerPlatform.
     * @example
     * // Update or create a LanguageLearnerPlatform
     * const languageLearnerPlatform = await prisma.languageLearnerPlatform.upsert({
     *   create: {
     *     // ... data to create a LanguageLearnerPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageLearnerPlatform we want to update
     *   }
     * })
     */
    upsert<T extends LanguageLearnerPlatformUpsertArgs>(args: SelectSubset<T, LanguageLearnerPlatformUpsertArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageLearnerPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformCountArgs} args - Arguments to filter LanguageLearnerPlatforms to count.
     * @example
     * // Count the number of LanguageLearnerPlatforms
     * const count = await prisma.languageLearnerPlatform.count({
     *   where: {
     *     // ... the filter for the LanguageLearnerPlatforms we want to count
     *   }
     * })
    **/
    count<T extends LanguageLearnerPlatformCountArgs>(
      args?: Subset<T, LanguageLearnerPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageLearnerPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageLearnerPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageLearnerPlatformAggregateArgs>(args: Subset<T, LanguageLearnerPlatformAggregateArgs>): Prisma.PrismaPromise<GetLanguageLearnerPlatformAggregateType<T>>

    /**
     * Group by LanguageLearnerPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerPlatformGroupByArgs} args - Group by arguments.
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
      T extends LanguageLearnerPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageLearnerPlatformGroupByArgs['orderBy'] }
        : { orderBy?: LanguageLearnerPlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageLearnerPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageLearnerPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageLearnerPlatform model
   */
  readonly fields: LanguageLearnerPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageLearnerPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageLearnerPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends LanguageLearnerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUserDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends LanguageLearnerPlatform$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerPlatform$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LanguageLearnerPlatform model
   */ 
  interface LanguageLearnerPlatformFieldRefs {
    readonly id: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly name: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly website: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly languagesOffered: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly description: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly ownerId: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly status: FieldRef<"LanguageLearnerPlatform", 'String'>
    readonly createdAt: FieldRef<"LanguageLearnerPlatform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguageLearnerPlatform findUnique
   */
  export type LanguageLearnerPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerPlatform to fetch.
     */
    where: LanguageLearnerPlatformWhereUniqueInput
  }

  /**
   * LanguageLearnerPlatform findUniqueOrThrow
   */
  export type LanguageLearnerPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerPlatform to fetch.
     */
    where: LanguageLearnerPlatformWhereUniqueInput
  }

  /**
   * LanguageLearnerPlatform findFirst
   */
  export type LanguageLearnerPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerPlatform to fetch.
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerPlatforms to fetch.
     */
    orderBy?: LanguageLearnerPlatformOrderByWithRelationInput | LanguageLearnerPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerPlatforms.
     */
    cursor?: LanguageLearnerPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerPlatforms.
     */
    distinct?: LanguageLearnerPlatformScalarFieldEnum | LanguageLearnerPlatformScalarFieldEnum[]
  }

  /**
   * LanguageLearnerPlatform findFirstOrThrow
   */
  export type LanguageLearnerPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerPlatform to fetch.
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerPlatforms to fetch.
     */
    orderBy?: LanguageLearnerPlatformOrderByWithRelationInput | LanguageLearnerPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerPlatforms.
     */
    cursor?: LanguageLearnerPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerPlatforms.
     */
    distinct?: LanguageLearnerPlatformScalarFieldEnum | LanguageLearnerPlatformScalarFieldEnum[]
  }

  /**
   * LanguageLearnerPlatform findMany
   */
  export type LanguageLearnerPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerPlatforms to fetch.
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerPlatforms to fetch.
     */
    orderBy?: LanguageLearnerPlatformOrderByWithRelationInput | LanguageLearnerPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageLearnerPlatforms.
     */
    cursor?: LanguageLearnerPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerPlatforms.
     */
    skip?: number
    distinct?: LanguageLearnerPlatformScalarFieldEnum | LanguageLearnerPlatformScalarFieldEnum[]
  }

  /**
   * LanguageLearnerPlatform create
   */
  export type LanguageLearnerPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageLearnerPlatform.
     */
    data: XOR<LanguageLearnerPlatformCreateInput, LanguageLearnerPlatformUncheckedCreateInput>
  }

  /**
   * LanguageLearnerPlatform createMany
   */
  export type LanguageLearnerPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageLearnerPlatforms.
     */
    data: LanguageLearnerPlatformCreateManyInput | LanguageLearnerPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerPlatform createManyAndReturn
   */
  export type LanguageLearnerPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many LanguageLearnerPlatforms.
     */
    data: LanguageLearnerPlatformCreateManyInput | LanguageLearnerPlatformCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerPlatform update
   */
  export type LanguageLearnerPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageLearnerPlatform.
     */
    data: XOR<LanguageLearnerPlatformUpdateInput, LanguageLearnerPlatformUncheckedUpdateInput>
    /**
     * Choose, which LanguageLearnerPlatform to update.
     */
    where: LanguageLearnerPlatformWhereUniqueInput
  }

  /**
   * LanguageLearnerPlatform updateMany
   */
  export type LanguageLearnerPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageLearnerPlatforms.
     */
    data: XOR<LanguageLearnerPlatformUpdateManyMutationInput, LanguageLearnerPlatformUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerPlatforms to update
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * Limit how many LanguageLearnerPlatforms to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerPlatform updateManyAndReturn
   */
  export type LanguageLearnerPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * The data used to update LanguageLearnerPlatforms.
     */
    data: XOR<LanguageLearnerPlatformUpdateManyMutationInput, LanguageLearnerPlatformUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerPlatforms to update
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * Limit how many LanguageLearnerPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerPlatform upsert
   */
  export type LanguageLearnerPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageLearnerPlatform to update in case it exists.
     */
    where: LanguageLearnerPlatformWhereUniqueInput
    /**
     * In case the LanguageLearnerPlatform found by the `where` argument doesn't exist, create a new LanguageLearnerPlatform with this data.
     */
    create: XOR<LanguageLearnerPlatformCreateInput, LanguageLearnerPlatformUncheckedCreateInput>
    /**
     * In case the LanguageLearnerPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageLearnerPlatformUpdateInput, LanguageLearnerPlatformUncheckedUpdateInput>
  }

  /**
   * LanguageLearnerPlatform delete
   */
  export type LanguageLearnerPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
    /**
     * Filter which LanguageLearnerPlatform to delete.
     */
    where: LanguageLearnerPlatformWhereUniqueInput
  }

  /**
   * LanguageLearnerPlatform deleteMany
   */
  export type LanguageLearnerPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerPlatforms to delete
     */
    where?: LanguageLearnerPlatformWhereInput
    /**
     * Limit how many LanguageLearnerPlatforms to delete.
     */
    limit?: number
  }

  /**
   * LanguageLearnerPlatform.reviews
   */
  export type LanguageLearnerPlatform$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    where?: LanguageLearnerReviewWhereInput
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    cursor?: LanguageLearnerReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerReviewScalarFieldEnum | LanguageLearnerReviewScalarFieldEnum[]
  }

  /**
   * LanguageLearnerPlatform without action
   */
  export type LanguageLearnerPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerPlatform
     */
    select?: LanguageLearnerPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerPlatform
     */
    omit?: LanguageLearnerPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerPlatformInclude<ExtArgs> | null
  }


  /**
   * Model LanguageLearnerReview
   */

  export type AggregateLanguageLearnerReview = {
    _count: LanguageLearnerReviewCountAggregateOutputType | null
    _avg: LanguageLearnerReviewAvgAggregateOutputType | null
    _sum: LanguageLearnerReviewSumAggregateOutputType | null
    _min: LanguageLearnerReviewMinAggregateOutputType | null
    _max: LanguageLearnerReviewMaxAggregateOutputType | null
  }

  export type LanguageLearnerReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type LanguageLearnerReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type LanguageLearnerReviewMinAggregateOutputType = {
    id: string | null
    platformId: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerReviewMaxAggregateOutputType = {
    id: string | null
    platformId: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerReviewCountAggregateOutputType = {
    id: number
    platformId: number
    userId: number
    rating: number
    comment: number
    status: number
    createdAt: number
    _all: number
  }


  export type LanguageLearnerReviewAvgAggregateInputType = {
    rating?: true
  }

  export type LanguageLearnerReviewSumAggregateInputType = {
    rating?: true
  }

  export type LanguageLearnerReviewMinAggregateInputType = {
    id?: true
    platformId?: true
    userId?: true
    rating?: true
    comment?: true
    status?: true
    createdAt?: true
  }

  export type LanguageLearnerReviewMaxAggregateInputType = {
    id?: true
    platformId?: true
    userId?: true
    rating?: true
    comment?: true
    status?: true
    createdAt?: true
  }

  export type LanguageLearnerReviewCountAggregateInputType = {
    id?: true
    platformId?: true
    userId?: true
    rating?: true
    comment?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageLearnerReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerReview to aggregate.
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviews to fetch.
     */
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageLearnerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageLearnerReviews
    **/
    _count?: true | LanguageLearnerReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageLearnerReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageLearnerReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageLearnerReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageLearnerReviewMaxAggregateInputType
  }

  export type GetLanguageLearnerReviewAggregateType<T extends LanguageLearnerReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageLearnerReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageLearnerReview[P]>
      : GetScalarType<T[P], AggregateLanguageLearnerReview[P]>
  }




  export type LanguageLearnerReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewWhereInput
    orderBy?: LanguageLearnerReviewOrderByWithAggregationInput | LanguageLearnerReviewOrderByWithAggregationInput[]
    by: LanguageLearnerReviewScalarFieldEnum[] | LanguageLearnerReviewScalarFieldEnum
    having?: LanguageLearnerReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageLearnerReviewCountAggregateInputType | true
    _avg?: LanguageLearnerReviewAvgAggregateInputType
    _sum?: LanguageLearnerReviewSumAggregateInputType
    _min?: LanguageLearnerReviewMinAggregateInputType
    _max?: LanguageLearnerReviewMaxAggregateInputType
  }

  export type LanguageLearnerReviewGroupByOutputType = {
    id: string
    platformId: string
    userId: string
    rating: number
    comment: string
    status: string
    createdAt: Date
    _count: LanguageLearnerReviewCountAggregateOutputType | null
    _avg: LanguageLearnerReviewAvgAggregateOutputType | null
    _sum: LanguageLearnerReviewSumAggregateOutputType | null
    _min: LanguageLearnerReviewMinAggregateOutputType | null
    _max: LanguageLearnerReviewMaxAggregateOutputType | null
  }

  type GetLanguageLearnerReviewGroupByPayload<T extends LanguageLearnerReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageLearnerReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageLearnerReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageLearnerReviewGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageLearnerReviewGroupByOutputType[P]>
        }
      >
    >


  export type LanguageLearnerReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    likes?: boolean | LanguageLearnerReview$likesArgs<ExtArgs>
    _count?: boolean | LanguageLearnerReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReview"]>

  export type LanguageLearnerReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReview"]>

  export type LanguageLearnerReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReview"]>

  export type LanguageLearnerReviewSelectScalar = {
    id?: boolean
    platformId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LanguageLearnerReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platformId" | "userId" | "rating" | "comment" | "status" | "createdAt", ExtArgs["result"]["languageLearnerReview"]>
  export type LanguageLearnerReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    likes?: boolean | LanguageLearnerReview$likesArgs<ExtArgs>
    _count?: boolean | LanguageLearnerReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | LanguageLearnerPlatformDefaultArgs<ExtArgs>
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }

  export type $LanguageLearnerReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageLearnerReview"
    objects: {
      platform: Prisma.$LanguageLearnerPlatformPayload<ExtArgs>
      user: Prisma.$LanguageLearnerUserPayload<ExtArgs>
      likes: Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platformId: string
      userId: string
      rating: number
      comment: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["languageLearnerReview"]>
    composites: {}
  }

  type LanguageLearnerReviewGetPayload<S extends boolean | null | undefined | LanguageLearnerReviewDefaultArgs> = $Result.GetResult<Prisma.$LanguageLearnerReviewPayload, S>

  type LanguageLearnerReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageLearnerReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageLearnerReviewCountAggregateInputType | true
    }

  export interface LanguageLearnerReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageLearnerReview'], meta: { name: 'LanguageLearnerReview' } }
    /**
     * Find zero or one LanguageLearnerReview that matches the filter.
     * @param {LanguageLearnerReviewFindUniqueArgs} args - Arguments to find a LanguageLearnerReview
     * @example
     * // Get one LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageLearnerReviewFindUniqueArgs>(args: SelectSubset<T, LanguageLearnerReviewFindUniqueArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageLearnerReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageLearnerReviewFindUniqueOrThrowArgs} args - Arguments to find a LanguageLearnerReview
     * @example
     * // Get one LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageLearnerReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageLearnerReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewFindFirstArgs} args - Arguments to find a LanguageLearnerReview
     * @example
     * // Get one LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageLearnerReviewFindFirstArgs>(args?: SelectSubset<T, LanguageLearnerReviewFindFirstArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewFindFirstOrThrowArgs} args - Arguments to find a LanguageLearnerReview
     * @example
     * // Get one LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageLearnerReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageLearnerReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageLearnerReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageLearnerReviews
     * const languageLearnerReviews = await prisma.languageLearnerReview.findMany()
     * 
     * // Get first 10 LanguageLearnerReviews
     * const languageLearnerReviews = await prisma.languageLearnerReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageLearnerReviewWithIdOnly = await prisma.languageLearnerReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageLearnerReviewFindManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageLearnerReview.
     * @param {LanguageLearnerReviewCreateArgs} args - Arguments to create a LanguageLearnerReview.
     * @example
     * // Create one LanguageLearnerReview
     * const LanguageLearnerReview = await prisma.languageLearnerReview.create({
     *   data: {
     *     // ... data to create a LanguageLearnerReview
     *   }
     * })
     * 
     */
    create<T extends LanguageLearnerReviewCreateArgs>(args: SelectSubset<T, LanguageLearnerReviewCreateArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageLearnerReviews.
     * @param {LanguageLearnerReviewCreateManyArgs} args - Arguments to create many LanguageLearnerReviews.
     * @example
     * // Create many LanguageLearnerReviews
     * const languageLearnerReview = await prisma.languageLearnerReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageLearnerReviewCreateManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguageLearnerReviews and returns the data saved in the database.
     * @param {LanguageLearnerReviewCreateManyAndReturnArgs} args - Arguments to create many LanguageLearnerReviews.
     * @example
     * // Create many LanguageLearnerReviews
     * const languageLearnerReview = await prisma.languageLearnerReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguageLearnerReviews and only return the `id`
     * const languageLearnerReviewWithIdOnly = await prisma.languageLearnerReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageLearnerReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageLearnerReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguageLearnerReview.
     * @param {LanguageLearnerReviewDeleteArgs} args - Arguments to delete one LanguageLearnerReview.
     * @example
     * // Delete one LanguageLearnerReview
     * const LanguageLearnerReview = await prisma.languageLearnerReview.delete({
     *   where: {
     *     // ... filter to delete one LanguageLearnerReview
     *   }
     * })
     * 
     */
    delete<T extends LanguageLearnerReviewDeleteArgs>(args: SelectSubset<T, LanguageLearnerReviewDeleteArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageLearnerReview.
     * @param {LanguageLearnerReviewUpdateArgs} args - Arguments to update one LanguageLearnerReview.
     * @example
     * // Update one LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageLearnerReviewUpdateArgs>(args: SelectSubset<T, LanguageLearnerReviewUpdateArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageLearnerReviews.
     * @param {LanguageLearnerReviewDeleteManyArgs} args - Arguments to filter LanguageLearnerReviews to delete.
     * @example
     * // Delete a few LanguageLearnerReviews
     * const { count } = await prisma.languageLearnerReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageLearnerReviewDeleteManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageLearnerReviews
     * const languageLearnerReview = await prisma.languageLearnerReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageLearnerReviewUpdateManyArgs>(args: SelectSubset<T, LanguageLearnerReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerReviews and returns the data updated in the database.
     * @param {LanguageLearnerReviewUpdateManyAndReturnArgs} args - Arguments to update many LanguageLearnerReviews.
     * @example
     * // Update many LanguageLearnerReviews
     * const languageLearnerReview = await prisma.languageLearnerReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguageLearnerReviews and only return the `id`
     * const languageLearnerReviewWithIdOnly = await prisma.languageLearnerReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageLearnerReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageLearnerReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguageLearnerReview.
     * @param {LanguageLearnerReviewUpsertArgs} args - Arguments to update or create a LanguageLearnerReview.
     * @example
     * // Update or create a LanguageLearnerReview
     * const languageLearnerReview = await prisma.languageLearnerReview.upsert({
     *   create: {
     *     // ... data to create a LanguageLearnerReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageLearnerReview we want to update
     *   }
     * })
     */
    upsert<T extends LanguageLearnerReviewUpsertArgs>(args: SelectSubset<T, LanguageLearnerReviewUpsertArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageLearnerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewCountArgs} args - Arguments to filter LanguageLearnerReviews to count.
     * @example
     * // Count the number of LanguageLearnerReviews
     * const count = await prisma.languageLearnerReview.count({
     *   where: {
     *     // ... the filter for the LanguageLearnerReviews we want to count
     *   }
     * })
    **/
    count<T extends LanguageLearnerReviewCountArgs>(
      args?: Subset<T, LanguageLearnerReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageLearnerReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageLearnerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageLearnerReviewAggregateArgs>(args: Subset<T, LanguageLearnerReviewAggregateArgs>): Prisma.PrismaPromise<GetLanguageLearnerReviewAggregateType<T>>

    /**
     * Group by LanguageLearnerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewGroupByArgs} args - Group by arguments.
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
      T extends LanguageLearnerReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageLearnerReviewGroupByArgs['orderBy'] }
        : { orderBy?: LanguageLearnerReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageLearnerReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageLearnerReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageLearnerReview model
   */
  readonly fields: LanguageLearnerReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageLearnerReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageLearnerReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platform<T extends LanguageLearnerPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerPlatformDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerPlatformClient<$Result.GetResult<Prisma.$LanguageLearnerPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends LanguageLearnerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUserDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends LanguageLearnerReview$likesArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerReview$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LanguageLearnerReview model
   */ 
  interface LanguageLearnerReviewFieldRefs {
    readonly id: FieldRef<"LanguageLearnerReview", 'String'>
    readonly platformId: FieldRef<"LanguageLearnerReview", 'String'>
    readonly userId: FieldRef<"LanguageLearnerReview", 'String'>
    readonly rating: FieldRef<"LanguageLearnerReview", 'Int'>
    readonly comment: FieldRef<"LanguageLearnerReview", 'String'>
    readonly status: FieldRef<"LanguageLearnerReview", 'String'>
    readonly createdAt: FieldRef<"LanguageLearnerReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguageLearnerReview findUnique
   */
  export type LanguageLearnerReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReview to fetch.
     */
    where: LanguageLearnerReviewWhereUniqueInput
  }

  /**
   * LanguageLearnerReview findUniqueOrThrow
   */
  export type LanguageLearnerReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReview to fetch.
     */
    where: LanguageLearnerReviewWhereUniqueInput
  }

  /**
   * LanguageLearnerReview findFirst
   */
  export type LanguageLearnerReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReview to fetch.
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviews to fetch.
     */
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerReviews.
     */
    cursor?: LanguageLearnerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerReviews.
     */
    distinct?: LanguageLearnerReviewScalarFieldEnum | LanguageLearnerReviewScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReview findFirstOrThrow
   */
  export type LanguageLearnerReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReview to fetch.
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviews to fetch.
     */
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerReviews.
     */
    cursor?: LanguageLearnerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerReviews.
     */
    distinct?: LanguageLearnerReviewScalarFieldEnum | LanguageLearnerReviewScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReview findMany
   */
  export type LanguageLearnerReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviews to fetch.
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviews to fetch.
     */
    orderBy?: LanguageLearnerReviewOrderByWithRelationInput | LanguageLearnerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageLearnerReviews.
     */
    cursor?: LanguageLearnerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviews.
     */
    skip?: number
    distinct?: LanguageLearnerReviewScalarFieldEnum | LanguageLearnerReviewScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReview create
   */
  export type LanguageLearnerReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageLearnerReview.
     */
    data: XOR<LanguageLearnerReviewCreateInput, LanguageLearnerReviewUncheckedCreateInput>
  }

  /**
   * LanguageLearnerReview createMany
   */
  export type LanguageLearnerReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageLearnerReviews.
     */
    data: LanguageLearnerReviewCreateManyInput | LanguageLearnerReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerReview createManyAndReturn
   */
  export type LanguageLearnerReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * The data used to create many LanguageLearnerReviews.
     */
    data: LanguageLearnerReviewCreateManyInput | LanguageLearnerReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerReview update
   */
  export type LanguageLearnerReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageLearnerReview.
     */
    data: XOR<LanguageLearnerReviewUpdateInput, LanguageLearnerReviewUncheckedUpdateInput>
    /**
     * Choose, which LanguageLearnerReview to update.
     */
    where: LanguageLearnerReviewWhereUniqueInput
  }

  /**
   * LanguageLearnerReview updateMany
   */
  export type LanguageLearnerReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageLearnerReviews.
     */
    data: XOR<LanguageLearnerReviewUpdateManyMutationInput, LanguageLearnerReviewUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerReviews to update
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * Limit how many LanguageLearnerReviews to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerReview updateManyAndReturn
   */
  export type LanguageLearnerReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * The data used to update LanguageLearnerReviews.
     */
    data: XOR<LanguageLearnerReviewUpdateManyMutationInput, LanguageLearnerReviewUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerReviews to update
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * Limit how many LanguageLearnerReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerReview upsert
   */
  export type LanguageLearnerReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageLearnerReview to update in case it exists.
     */
    where: LanguageLearnerReviewWhereUniqueInput
    /**
     * In case the LanguageLearnerReview found by the `where` argument doesn't exist, create a new LanguageLearnerReview with this data.
     */
    create: XOR<LanguageLearnerReviewCreateInput, LanguageLearnerReviewUncheckedCreateInput>
    /**
     * In case the LanguageLearnerReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageLearnerReviewUpdateInput, LanguageLearnerReviewUncheckedUpdateInput>
  }

  /**
   * LanguageLearnerReview delete
   */
  export type LanguageLearnerReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
    /**
     * Filter which LanguageLearnerReview to delete.
     */
    where: LanguageLearnerReviewWhereUniqueInput
  }

  /**
   * LanguageLearnerReview deleteMany
   */
  export type LanguageLearnerReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerReviews to delete
     */
    where?: LanguageLearnerReviewWhereInput
    /**
     * Limit how many LanguageLearnerReviews to delete.
     */
    limit?: number
  }

  /**
   * LanguageLearnerReview.likes
   */
  export type LanguageLearnerReview$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    where?: LanguageLearnerReviewLikeWhereInput
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageLearnerReviewLikeScalarFieldEnum | LanguageLearnerReviewLikeScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReview without action
   */
  export type LanguageLearnerReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReview
     */
    select?: LanguageLearnerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReview
     */
    omit?: LanguageLearnerReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewInclude<ExtArgs> | null
  }


  /**
   * Model LanguageLearnerReviewLike
   */

  export type AggregateLanguageLearnerReviewLike = {
    _count: LanguageLearnerReviewLikeCountAggregateOutputType | null
    _min: LanguageLearnerReviewLikeMinAggregateOutputType | null
    _max: LanguageLearnerReviewLikeMaxAggregateOutputType | null
  }

  export type LanguageLearnerReviewLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reviewId: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerReviewLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reviewId: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerReviewLikeCountAggregateOutputType = {
    id: number
    userId: number
    reviewId: number
    createdAt: number
    _all: number
  }


  export type LanguageLearnerReviewLikeMinAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    createdAt?: true
  }

  export type LanguageLearnerReviewLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    createdAt?: true
  }

  export type LanguageLearnerReviewLikeCountAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageLearnerReviewLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerReviewLike to aggregate.
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviewLikes to fetch.
     */
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageLearnerReviewLikes
    **/
    _count?: true | LanguageLearnerReviewLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageLearnerReviewLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageLearnerReviewLikeMaxAggregateInputType
  }

  export type GetLanguageLearnerReviewLikeAggregateType<T extends LanguageLearnerReviewLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageLearnerReviewLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageLearnerReviewLike[P]>
      : GetScalarType<T[P], AggregateLanguageLearnerReviewLike[P]>
  }




  export type LanguageLearnerReviewLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerReviewLikeWhereInput
    orderBy?: LanguageLearnerReviewLikeOrderByWithAggregationInput | LanguageLearnerReviewLikeOrderByWithAggregationInput[]
    by: LanguageLearnerReviewLikeScalarFieldEnum[] | LanguageLearnerReviewLikeScalarFieldEnum
    having?: LanguageLearnerReviewLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageLearnerReviewLikeCountAggregateInputType | true
    _min?: LanguageLearnerReviewLikeMinAggregateInputType
    _max?: LanguageLearnerReviewLikeMaxAggregateInputType
  }

  export type LanguageLearnerReviewLikeGroupByOutputType = {
    id: string
    userId: string
    reviewId: string
    createdAt: Date
    _count: LanguageLearnerReviewLikeCountAggregateOutputType | null
    _min: LanguageLearnerReviewLikeMinAggregateOutputType | null
    _max: LanguageLearnerReviewLikeMaxAggregateOutputType | null
  }

  type GetLanguageLearnerReviewLikeGroupByPayload<T extends LanguageLearnerReviewLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageLearnerReviewLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageLearnerReviewLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageLearnerReviewLikeGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageLearnerReviewLikeGroupByOutputType[P]>
        }
      >
    >


  export type LanguageLearnerReviewLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReviewLike"]>

  export type LanguageLearnerReviewLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReviewLike"]>

  export type LanguageLearnerReviewLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerReviewLike"]>

  export type LanguageLearnerReviewLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    createdAt?: boolean
  }

  export type LanguageLearnerReviewLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reviewId" | "createdAt", ExtArgs["result"]["languageLearnerReviewLike"]>
  export type LanguageLearnerReviewLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerReviewLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerReviewLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    review?: boolean | LanguageLearnerReviewDefaultArgs<ExtArgs>
  }

  export type $LanguageLearnerReviewLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageLearnerReviewLike"
    objects: {
      user: Prisma.$LanguageLearnerUserPayload<ExtArgs>
      review: Prisma.$LanguageLearnerReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reviewId: string
      createdAt: Date
    }, ExtArgs["result"]["languageLearnerReviewLike"]>
    composites: {}
  }

  type LanguageLearnerReviewLikeGetPayload<S extends boolean | null | undefined | LanguageLearnerReviewLikeDefaultArgs> = $Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload, S>

  type LanguageLearnerReviewLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageLearnerReviewLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageLearnerReviewLikeCountAggregateInputType | true
    }

  export interface LanguageLearnerReviewLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageLearnerReviewLike'], meta: { name: 'LanguageLearnerReviewLike' } }
    /**
     * Find zero or one LanguageLearnerReviewLike that matches the filter.
     * @param {LanguageLearnerReviewLikeFindUniqueArgs} args - Arguments to find a LanguageLearnerReviewLike
     * @example
     * // Get one LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageLearnerReviewLikeFindUniqueArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeFindUniqueArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageLearnerReviewLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageLearnerReviewLikeFindUniqueOrThrowArgs} args - Arguments to find a LanguageLearnerReviewLike
     * @example
     * // Get one LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageLearnerReviewLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerReviewLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeFindFirstArgs} args - Arguments to find a LanguageLearnerReviewLike
     * @example
     * // Get one LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageLearnerReviewLikeFindFirstArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeFindFirstArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerReviewLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeFindFirstOrThrowArgs} args - Arguments to find a LanguageLearnerReviewLike
     * @example
     * // Get one LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageLearnerReviewLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageLearnerReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageLearnerReviewLikes
     * const languageLearnerReviewLikes = await prisma.languageLearnerReviewLike.findMany()
     * 
     * // Get first 10 LanguageLearnerReviewLikes
     * const languageLearnerReviewLikes = await prisma.languageLearnerReviewLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageLearnerReviewLikeWithIdOnly = await prisma.languageLearnerReviewLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageLearnerReviewLikeFindManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageLearnerReviewLike.
     * @param {LanguageLearnerReviewLikeCreateArgs} args - Arguments to create a LanguageLearnerReviewLike.
     * @example
     * // Create one LanguageLearnerReviewLike
     * const LanguageLearnerReviewLike = await prisma.languageLearnerReviewLike.create({
     *   data: {
     *     // ... data to create a LanguageLearnerReviewLike
     *   }
     * })
     * 
     */
    create<T extends LanguageLearnerReviewLikeCreateArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeCreateArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageLearnerReviewLikes.
     * @param {LanguageLearnerReviewLikeCreateManyArgs} args - Arguments to create many LanguageLearnerReviewLikes.
     * @example
     * // Create many LanguageLearnerReviewLikes
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageLearnerReviewLikeCreateManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguageLearnerReviewLikes and returns the data saved in the database.
     * @param {LanguageLearnerReviewLikeCreateManyAndReturnArgs} args - Arguments to create many LanguageLearnerReviewLikes.
     * @example
     * // Create many LanguageLearnerReviewLikes
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguageLearnerReviewLikes and only return the `id`
     * const languageLearnerReviewLikeWithIdOnly = await prisma.languageLearnerReviewLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageLearnerReviewLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguageLearnerReviewLike.
     * @param {LanguageLearnerReviewLikeDeleteArgs} args - Arguments to delete one LanguageLearnerReviewLike.
     * @example
     * // Delete one LanguageLearnerReviewLike
     * const LanguageLearnerReviewLike = await prisma.languageLearnerReviewLike.delete({
     *   where: {
     *     // ... filter to delete one LanguageLearnerReviewLike
     *   }
     * })
     * 
     */
    delete<T extends LanguageLearnerReviewLikeDeleteArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeDeleteArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageLearnerReviewLike.
     * @param {LanguageLearnerReviewLikeUpdateArgs} args - Arguments to update one LanguageLearnerReviewLike.
     * @example
     * // Update one LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageLearnerReviewLikeUpdateArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeUpdateArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageLearnerReviewLikes.
     * @param {LanguageLearnerReviewLikeDeleteManyArgs} args - Arguments to filter LanguageLearnerReviewLikes to delete.
     * @example
     * // Delete a few LanguageLearnerReviewLikes
     * const { count } = await prisma.languageLearnerReviewLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageLearnerReviewLikeDeleteManyArgs>(args?: SelectSubset<T, LanguageLearnerReviewLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageLearnerReviewLikes
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageLearnerReviewLikeUpdateManyArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerReviewLikes and returns the data updated in the database.
     * @param {LanguageLearnerReviewLikeUpdateManyAndReturnArgs} args - Arguments to update many LanguageLearnerReviewLikes.
     * @example
     * // Update many LanguageLearnerReviewLikes
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguageLearnerReviewLikes and only return the `id`
     * const languageLearnerReviewLikeWithIdOnly = await prisma.languageLearnerReviewLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageLearnerReviewLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguageLearnerReviewLike.
     * @param {LanguageLearnerReviewLikeUpsertArgs} args - Arguments to update or create a LanguageLearnerReviewLike.
     * @example
     * // Update or create a LanguageLearnerReviewLike
     * const languageLearnerReviewLike = await prisma.languageLearnerReviewLike.upsert({
     *   create: {
     *     // ... data to create a LanguageLearnerReviewLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageLearnerReviewLike we want to update
     *   }
     * })
     */
    upsert<T extends LanguageLearnerReviewLikeUpsertArgs>(args: SelectSubset<T, LanguageLearnerReviewLikeUpsertArgs<ExtArgs>>): Prisma__LanguageLearnerReviewLikeClient<$Result.GetResult<Prisma.$LanguageLearnerReviewLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageLearnerReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeCountArgs} args - Arguments to filter LanguageLearnerReviewLikes to count.
     * @example
     * // Count the number of LanguageLearnerReviewLikes
     * const count = await prisma.languageLearnerReviewLike.count({
     *   where: {
     *     // ... the filter for the LanguageLearnerReviewLikes we want to count
     *   }
     * })
    **/
    count<T extends LanguageLearnerReviewLikeCountArgs>(
      args?: Subset<T, LanguageLearnerReviewLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageLearnerReviewLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageLearnerReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageLearnerReviewLikeAggregateArgs>(args: Subset<T, LanguageLearnerReviewLikeAggregateArgs>): Prisma.PrismaPromise<GetLanguageLearnerReviewLikeAggregateType<T>>

    /**
     * Group by LanguageLearnerReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerReviewLikeGroupByArgs} args - Group by arguments.
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
      T extends LanguageLearnerReviewLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageLearnerReviewLikeGroupByArgs['orderBy'] }
        : { orderBy?: LanguageLearnerReviewLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageLearnerReviewLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageLearnerReviewLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageLearnerReviewLike model
   */
  readonly fields: LanguageLearnerReviewLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageLearnerReviewLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageLearnerReviewLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LanguageLearnerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUserDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends LanguageLearnerReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerReviewDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerReviewClient<$Result.GetResult<Prisma.$LanguageLearnerReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LanguageLearnerReviewLike model
   */ 
  interface LanguageLearnerReviewLikeFieldRefs {
    readonly id: FieldRef<"LanguageLearnerReviewLike", 'String'>
    readonly userId: FieldRef<"LanguageLearnerReviewLike", 'String'>
    readonly reviewId: FieldRef<"LanguageLearnerReviewLike", 'String'>
    readonly createdAt: FieldRef<"LanguageLearnerReviewLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguageLearnerReviewLike findUnique
   */
  export type LanguageLearnerReviewLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviewLike to fetch.
     */
    where: LanguageLearnerReviewLikeWhereUniqueInput
  }

  /**
   * LanguageLearnerReviewLike findUniqueOrThrow
   */
  export type LanguageLearnerReviewLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviewLike to fetch.
     */
    where: LanguageLearnerReviewLikeWhereUniqueInput
  }

  /**
   * LanguageLearnerReviewLike findFirst
   */
  export type LanguageLearnerReviewLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviewLike to fetch.
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviewLikes to fetch.
     */
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerReviewLikes.
     */
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerReviewLikes.
     */
    distinct?: LanguageLearnerReviewLikeScalarFieldEnum | LanguageLearnerReviewLikeScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReviewLike findFirstOrThrow
   */
  export type LanguageLearnerReviewLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviewLike to fetch.
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviewLikes to fetch.
     */
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerReviewLikes.
     */
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerReviewLikes.
     */
    distinct?: LanguageLearnerReviewLikeScalarFieldEnum | LanguageLearnerReviewLikeScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReviewLike findMany
   */
  export type LanguageLearnerReviewLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerReviewLikes to fetch.
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerReviewLikes to fetch.
     */
    orderBy?: LanguageLearnerReviewLikeOrderByWithRelationInput | LanguageLearnerReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageLearnerReviewLikes.
     */
    cursor?: LanguageLearnerReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerReviewLikes.
     */
    skip?: number
    distinct?: LanguageLearnerReviewLikeScalarFieldEnum | LanguageLearnerReviewLikeScalarFieldEnum[]
  }

  /**
   * LanguageLearnerReviewLike create
   */
  export type LanguageLearnerReviewLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageLearnerReviewLike.
     */
    data: XOR<LanguageLearnerReviewLikeCreateInput, LanguageLearnerReviewLikeUncheckedCreateInput>
  }

  /**
   * LanguageLearnerReviewLike createMany
   */
  export type LanguageLearnerReviewLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageLearnerReviewLikes.
     */
    data: LanguageLearnerReviewLikeCreateManyInput | LanguageLearnerReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerReviewLike createManyAndReturn
   */
  export type LanguageLearnerReviewLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * The data used to create many LanguageLearnerReviewLikes.
     */
    data: LanguageLearnerReviewLikeCreateManyInput | LanguageLearnerReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerReviewLike update
   */
  export type LanguageLearnerReviewLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageLearnerReviewLike.
     */
    data: XOR<LanguageLearnerReviewLikeUpdateInput, LanguageLearnerReviewLikeUncheckedUpdateInput>
    /**
     * Choose, which LanguageLearnerReviewLike to update.
     */
    where: LanguageLearnerReviewLikeWhereUniqueInput
  }

  /**
   * LanguageLearnerReviewLike updateMany
   */
  export type LanguageLearnerReviewLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageLearnerReviewLikes.
     */
    data: XOR<LanguageLearnerReviewLikeUpdateManyMutationInput, LanguageLearnerReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerReviewLikes to update
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * Limit how many LanguageLearnerReviewLikes to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerReviewLike updateManyAndReturn
   */
  export type LanguageLearnerReviewLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * The data used to update LanguageLearnerReviewLikes.
     */
    data: XOR<LanguageLearnerReviewLikeUpdateManyMutationInput, LanguageLearnerReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerReviewLikes to update
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * Limit how many LanguageLearnerReviewLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerReviewLike upsert
   */
  export type LanguageLearnerReviewLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageLearnerReviewLike to update in case it exists.
     */
    where: LanguageLearnerReviewLikeWhereUniqueInput
    /**
     * In case the LanguageLearnerReviewLike found by the `where` argument doesn't exist, create a new LanguageLearnerReviewLike with this data.
     */
    create: XOR<LanguageLearnerReviewLikeCreateInput, LanguageLearnerReviewLikeUncheckedCreateInput>
    /**
     * In case the LanguageLearnerReviewLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageLearnerReviewLikeUpdateInput, LanguageLearnerReviewLikeUncheckedUpdateInput>
  }

  /**
   * LanguageLearnerReviewLike delete
   */
  export type LanguageLearnerReviewLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
    /**
     * Filter which LanguageLearnerReviewLike to delete.
     */
    where: LanguageLearnerReviewLikeWhereUniqueInput
  }

  /**
   * LanguageLearnerReviewLike deleteMany
   */
  export type LanguageLearnerReviewLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerReviewLikes to delete
     */
    where?: LanguageLearnerReviewLikeWhereInput
    /**
     * Limit how many LanguageLearnerReviewLikes to delete.
     */
    limit?: number
  }

  /**
   * LanguageLearnerReviewLike without action
   */
  export type LanguageLearnerReviewLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerReviewLike
     */
    select?: LanguageLearnerReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerReviewLike
     */
    omit?: LanguageLearnerReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerReviewLikeInclude<ExtArgs> | null
  }


  /**
   * Model LanguageLearnerUserVote
   */

  export type AggregateLanguageLearnerUserVote = {
    _count: LanguageLearnerUserVoteCountAggregateOutputType | null
    _min: LanguageLearnerUserVoteMinAggregateOutputType | null
    _max: LanguageLearnerUserVoteMaxAggregateOutputType | null
  }

  export type LanguageLearnerUserVoteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    voterId: string | null
    voteType: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerUserVoteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    voterId: string | null
    voteType: string | null
    createdAt: Date | null
  }

  export type LanguageLearnerUserVoteCountAggregateOutputType = {
    id: number
    userId: number
    voterId: number
    voteType: number
    createdAt: number
    _all: number
  }


  export type LanguageLearnerUserVoteMinAggregateInputType = {
    id?: true
    userId?: true
    voterId?: true
    voteType?: true
    createdAt?: true
  }

  export type LanguageLearnerUserVoteMaxAggregateInputType = {
    id?: true
    userId?: true
    voterId?: true
    voteType?: true
    createdAt?: true
  }

  export type LanguageLearnerUserVoteCountAggregateInputType = {
    id?: true
    userId?: true
    voterId?: true
    voteType?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageLearnerUserVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerUserVote to aggregate.
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUserVotes to fetch.
     */
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageLearnerUserVotes
    **/
    _count?: true | LanguageLearnerUserVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageLearnerUserVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageLearnerUserVoteMaxAggregateInputType
  }

  export type GetLanguageLearnerUserVoteAggregateType<T extends LanguageLearnerUserVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageLearnerUserVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageLearnerUserVote[P]>
      : GetScalarType<T[P], AggregateLanguageLearnerUserVote[P]>
  }




  export type LanguageLearnerUserVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageLearnerUserVoteWhereInput
    orderBy?: LanguageLearnerUserVoteOrderByWithAggregationInput | LanguageLearnerUserVoteOrderByWithAggregationInput[]
    by: LanguageLearnerUserVoteScalarFieldEnum[] | LanguageLearnerUserVoteScalarFieldEnum
    having?: LanguageLearnerUserVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageLearnerUserVoteCountAggregateInputType | true
    _min?: LanguageLearnerUserVoteMinAggregateInputType
    _max?: LanguageLearnerUserVoteMaxAggregateInputType
  }

  export type LanguageLearnerUserVoteGroupByOutputType = {
    id: string
    userId: string
    voterId: string
    voteType: string
    createdAt: Date
    _count: LanguageLearnerUserVoteCountAggregateOutputType | null
    _min: LanguageLearnerUserVoteMinAggregateOutputType | null
    _max: LanguageLearnerUserVoteMaxAggregateOutputType | null
  }

  type GetLanguageLearnerUserVoteGroupByPayload<T extends LanguageLearnerUserVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageLearnerUserVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageLearnerUserVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageLearnerUserVoteGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageLearnerUserVoteGroupByOutputType[P]>
        }
      >
    >


  export type LanguageLearnerUserVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voterId?: boolean
    voteType?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerUserVote"]>

  export type LanguageLearnerUserVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voterId?: boolean
    voteType?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerUserVote"]>

  export type LanguageLearnerUserVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voterId?: boolean
    voteType?: boolean
    createdAt?: boolean
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageLearnerUserVote"]>

  export type LanguageLearnerUserVoteSelectScalar = {
    id?: boolean
    userId?: boolean
    voterId?: boolean
    voteType?: boolean
    createdAt?: boolean
  }

  export type LanguageLearnerUserVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "voterId" | "voteType" | "createdAt", ExtArgs["result"]["languageLearnerUserVote"]>
  export type LanguageLearnerUserVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerUserVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }
  export type LanguageLearnerUserVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
    voter?: boolean | LanguageLearnerUserDefaultArgs<ExtArgs>
  }

  export type $LanguageLearnerUserVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageLearnerUserVote"
    objects: {
      user: Prisma.$LanguageLearnerUserPayload<ExtArgs>
      voter: Prisma.$LanguageLearnerUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      voterId: string
      voteType: string
      createdAt: Date
    }, ExtArgs["result"]["languageLearnerUserVote"]>
    composites: {}
  }

  type LanguageLearnerUserVoteGetPayload<S extends boolean | null | undefined | LanguageLearnerUserVoteDefaultArgs> = $Result.GetResult<Prisma.$LanguageLearnerUserVotePayload, S>

  type LanguageLearnerUserVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageLearnerUserVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageLearnerUserVoteCountAggregateInputType | true
    }

  export interface LanguageLearnerUserVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageLearnerUserVote'], meta: { name: 'LanguageLearnerUserVote' } }
    /**
     * Find zero or one LanguageLearnerUserVote that matches the filter.
     * @param {LanguageLearnerUserVoteFindUniqueArgs} args - Arguments to find a LanguageLearnerUserVote
     * @example
     * // Get one LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageLearnerUserVoteFindUniqueArgs>(args: SelectSubset<T, LanguageLearnerUserVoteFindUniqueArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageLearnerUserVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageLearnerUserVoteFindUniqueOrThrowArgs} args - Arguments to find a LanguageLearnerUserVote
     * @example
     * // Get one LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageLearnerUserVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageLearnerUserVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerUserVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteFindFirstArgs} args - Arguments to find a LanguageLearnerUserVote
     * @example
     * // Get one LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageLearnerUserVoteFindFirstArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteFindFirstArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageLearnerUserVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteFindFirstOrThrowArgs} args - Arguments to find a LanguageLearnerUserVote
     * @example
     * // Get one LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageLearnerUserVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageLearnerUserVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageLearnerUserVotes
     * const languageLearnerUserVotes = await prisma.languageLearnerUserVote.findMany()
     * 
     * // Get first 10 LanguageLearnerUserVotes
     * const languageLearnerUserVotes = await prisma.languageLearnerUserVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageLearnerUserVoteWithIdOnly = await prisma.languageLearnerUserVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageLearnerUserVoteFindManyArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageLearnerUserVote.
     * @param {LanguageLearnerUserVoteCreateArgs} args - Arguments to create a LanguageLearnerUserVote.
     * @example
     * // Create one LanguageLearnerUserVote
     * const LanguageLearnerUserVote = await prisma.languageLearnerUserVote.create({
     *   data: {
     *     // ... data to create a LanguageLearnerUserVote
     *   }
     * })
     * 
     */
    create<T extends LanguageLearnerUserVoteCreateArgs>(args: SelectSubset<T, LanguageLearnerUserVoteCreateArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageLearnerUserVotes.
     * @param {LanguageLearnerUserVoteCreateManyArgs} args - Arguments to create many LanguageLearnerUserVotes.
     * @example
     * // Create many LanguageLearnerUserVotes
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageLearnerUserVoteCreateManyArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LanguageLearnerUserVotes and returns the data saved in the database.
     * @param {LanguageLearnerUserVoteCreateManyAndReturnArgs} args - Arguments to create many LanguageLearnerUserVotes.
     * @example
     * // Create many LanguageLearnerUserVotes
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LanguageLearnerUserVotes and only return the `id`
     * const languageLearnerUserVoteWithIdOnly = await prisma.languageLearnerUserVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageLearnerUserVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LanguageLearnerUserVote.
     * @param {LanguageLearnerUserVoteDeleteArgs} args - Arguments to delete one LanguageLearnerUserVote.
     * @example
     * // Delete one LanguageLearnerUserVote
     * const LanguageLearnerUserVote = await prisma.languageLearnerUserVote.delete({
     *   where: {
     *     // ... filter to delete one LanguageLearnerUserVote
     *   }
     * })
     * 
     */
    delete<T extends LanguageLearnerUserVoteDeleteArgs>(args: SelectSubset<T, LanguageLearnerUserVoteDeleteArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageLearnerUserVote.
     * @param {LanguageLearnerUserVoteUpdateArgs} args - Arguments to update one LanguageLearnerUserVote.
     * @example
     * // Update one LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageLearnerUserVoteUpdateArgs>(args: SelectSubset<T, LanguageLearnerUserVoteUpdateArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageLearnerUserVotes.
     * @param {LanguageLearnerUserVoteDeleteManyArgs} args - Arguments to filter LanguageLearnerUserVotes to delete.
     * @example
     * // Delete a few LanguageLearnerUserVotes
     * const { count } = await prisma.languageLearnerUserVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageLearnerUserVoteDeleteManyArgs>(args?: SelectSubset<T, LanguageLearnerUserVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerUserVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageLearnerUserVotes
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageLearnerUserVoteUpdateManyArgs>(args: SelectSubset<T, LanguageLearnerUserVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageLearnerUserVotes and returns the data updated in the database.
     * @param {LanguageLearnerUserVoteUpdateManyAndReturnArgs} args - Arguments to update many LanguageLearnerUserVotes.
     * @example
     * // Update many LanguageLearnerUserVotes
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LanguageLearnerUserVotes and only return the `id`
     * const languageLearnerUserVoteWithIdOnly = await prisma.languageLearnerUserVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageLearnerUserVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageLearnerUserVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LanguageLearnerUserVote.
     * @param {LanguageLearnerUserVoteUpsertArgs} args - Arguments to update or create a LanguageLearnerUserVote.
     * @example
     * // Update or create a LanguageLearnerUserVote
     * const languageLearnerUserVote = await prisma.languageLearnerUserVote.upsert({
     *   create: {
     *     // ... data to create a LanguageLearnerUserVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageLearnerUserVote we want to update
     *   }
     * })
     */
    upsert<T extends LanguageLearnerUserVoteUpsertArgs>(args: SelectSubset<T, LanguageLearnerUserVoteUpsertArgs<ExtArgs>>): Prisma__LanguageLearnerUserVoteClient<$Result.GetResult<Prisma.$LanguageLearnerUserVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageLearnerUserVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteCountArgs} args - Arguments to filter LanguageLearnerUserVotes to count.
     * @example
     * // Count the number of LanguageLearnerUserVotes
     * const count = await prisma.languageLearnerUserVote.count({
     *   where: {
     *     // ... the filter for the LanguageLearnerUserVotes we want to count
     *   }
     * })
    **/
    count<T extends LanguageLearnerUserVoteCountArgs>(
      args?: Subset<T, LanguageLearnerUserVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageLearnerUserVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageLearnerUserVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageLearnerUserVoteAggregateArgs>(args: Subset<T, LanguageLearnerUserVoteAggregateArgs>): Prisma.PrismaPromise<GetLanguageLearnerUserVoteAggregateType<T>>

    /**
     * Group by LanguageLearnerUserVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageLearnerUserVoteGroupByArgs} args - Group by arguments.
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
      T extends LanguageLearnerUserVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageLearnerUserVoteGroupByArgs['orderBy'] }
        : { orderBy?: LanguageLearnerUserVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageLearnerUserVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageLearnerUserVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageLearnerUserVote model
   */
  readonly fields: LanguageLearnerUserVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageLearnerUserVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageLearnerUserVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LanguageLearnerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUserDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voter<T extends LanguageLearnerUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageLearnerUserDefaultArgs<ExtArgs>>): Prisma__LanguageLearnerUserClient<$Result.GetResult<Prisma.$LanguageLearnerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LanguageLearnerUserVote model
   */ 
  interface LanguageLearnerUserVoteFieldRefs {
    readonly id: FieldRef<"LanguageLearnerUserVote", 'String'>
    readonly userId: FieldRef<"LanguageLearnerUserVote", 'String'>
    readonly voterId: FieldRef<"LanguageLearnerUserVote", 'String'>
    readonly voteType: FieldRef<"LanguageLearnerUserVote", 'String'>
    readonly createdAt: FieldRef<"LanguageLearnerUserVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LanguageLearnerUserVote findUnique
   */
  export type LanguageLearnerUserVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUserVote to fetch.
     */
    where: LanguageLearnerUserVoteWhereUniqueInput
  }

  /**
   * LanguageLearnerUserVote findUniqueOrThrow
   */
  export type LanguageLearnerUserVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUserVote to fetch.
     */
    where: LanguageLearnerUserVoteWhereUniqueInput
  }

  /**
   * LanguageLearnerUserVote findFirst
   */
  export type LanguageLearnerUserVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUserVote to fetch.
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUserVotes to fetch.
     */
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerUserVotes.
     */
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerUserVotes.
     */
    distinct?: LanguageLearnerUserVoteScalarFieldEnum | LanguageLearnerUserVoteScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUserVote findFirstOrThrow
   */
  export type LanguageLearnerUserVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUserVote to fetch.
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUserVotes to fetch.
     */
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageLearnerUserVotes.
     */
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUserVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageLearnerUserVotes.
     */
    distinct?: LanguageLearnerUserVoteScalarFieldEnum | LanguageLearnerUserVoteScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUserVote findMany
   */
  export type LanguageLearnerUserVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter, which LanguageLearnerUserVotes to fetch.
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageLearnerUserVotes to fetch.
     */
    orderBy?: LanguageLearnerUserVoteOrderByWithRelationInput | LanguageLearnerUserVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageLearnerUserVotes.
     */
    cursor?: LanguageLearnerUserVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageLearnerUserVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageLearnerUserVotes.
     */
    skip?: number
    distinct?: LanguageLearnerUserVoteScalarFieldEnum | LanguageLearnerUserVoteScalarFieldEnum[]
  }

  /**
   * LanguageLearnerUserVote create
   */
  export type LanguageLearnerUserVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageLearnerUserVote.
     */
    data: XOR<LanguageLearnerUserVoteCreateInput, LanguageLearnerUserVoteUncheckedCreateInput>
  }

  /**
   * LanguageLearnerUserVote createMany
   */
  export type LanguageLearnerUserVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageLearnerUserVotes.
     */
    data: LanguageLearnerUserVoteCreateManyInput | LanguageLearnerUserVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageLearnerUserVote createManyAndReturn
   */
  export type LanguageLearnerUserVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * The data used to create many LanguageLearnerUserVotes.
     */
    data: LanguageLearnerUserVoteCreateManyInput | LanguageLearnerUserVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerUserVote update
   */
  export type LanguageLearnerUserVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageLearnerUserVote.
     */
    data: XOR<LanguageLearnerUserVoteUpdateInput, LanguageLearnerUserVoteUncheckedUpdateInput>
    /**
     * Choose, which LanguageLearnerUserVote to update.
     */
    where: LanguageLearnerUserVoteWhereUniqueInput
  }

  /**
   * LanguageLearnerUserVote updateMany
   */
  export type LanguageLearnerUserVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageLearnerUserVotes.
     */
    data: XOR<LanguageLearnerUserVoteUpdateManyMutationInput, LanguageLearnerUserVoteUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerUserVotes to update
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * Limit how many LanguageLearnerUserVotes to update.
     */
    limit?: number
  }

  /**
   * LanguageLearnerUserVote updateManyAndReturn
   */
  export type LanguageLearnerUserVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * The data used to update LanguageLearnerUserVotes.
     */
    data: XOR<LanguageLearnerUserVoteUpdateManyMutationInput, LanguageLearnerUserVoteUncheckedUpdateManyInput>
    /**
     * Filter which LanguageLearnerUserVotes to update
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * Limit how many LanguageLearnerUserVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LanguageLearnerUserVote upsert
   */
  export type LanguageLearnerUserVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageLearnerUserVote to update in case it exists.
     */
    where: LanguageLearnerUserVoteWhereUniqueInput
    /**
     * In case the LanguageLearnerUserVote found by the `where` argument doesn't exist, create a new LanguageLearnerUserVote with this data.
     */
    create: XOR<LanguageLearnerUserVoteCreateInput, LanguageLearnerUserVoteUncheckedCreateInput>
    /**
     * In case the LanguageLearnerUserVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageLearnerUserVoteUpdateInput, LanguageLearnerUserVoteUncheckedUpdateInput>
  }

  /**
   * LanguageLearnerUserVote delete
   */
  export type LanguageLearnerUserVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
    /**
     * Filter which LanguageLearnerUserVote to delete.
     */
    where: LanguageLearnerUserVoteWhereUniqueInput
  }

  /**
   * LanguageLearnerUserVote deleteMany
   */
  export type LanguageLearnerUserVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageLearnerUserVotes to delete
     */
    where?: LanguageLearnerUserVoteWhereInput
    /**
     * Limit how many LanguageLearnerUserVotes to delete.
     */
    limit?: number
  }

  /**
   * LanguageLearnerUserVote without action
   */
  export type LanguageLearnerUserVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageLearnerUserVote
     */
    select?: LanguageLearnerUserVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageLearnerUserVote
     */
    omit?: LanguageLearnerUserVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageLearnerUserVoteInclude<ExtArgs> | null
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


  export const EventOrganizerUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type EventOrganizerUserScalarFieldEnum = (typeof EventOrganizerUserScalarFieldEnum)[keyof typeof EventOrganizerUserScalarFieldEnum]


  export const EventOrganizerTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EventOrganizerTaskScalarFieldEnum = (typeof EventOrganizerTaskScalarFieldEnum)[keyof typeof EventOrganizerTaskScalarFieldEnum]


  export const EventOrganizerGuestScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EventOrganizerGuestScalarFieldEnum = (typeof EventOrganizerGuestScalarFieldEnum)[keyof typeof EventOrganizerGuestScalarFieldEnum]


  export const EventOrganizerVenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    capacity: 'capacity',
    amenities: 'amenities',
    submittedBy: 'submittedBy',
    createdAt: 'createdAt'
  };

  export type EventOrganizerVenueScalarFieldEnum = (typeof EventOrganizerVenueScalarFieldEnum)[keyof typeof EventOrganizerVenueScalarFieldEnum]


  export const EventOrganizerServiceProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serviceType: 'serviceType',
    contactInfo: 'contactInfo',
    submittedBy: 'submittedBy',
    createdAt: 'createdAt'
  };

  export type EventOrganizerServiceProviderScalarFieldEnum = (typeof EventOrganizerServiceProviderScalarFieldEnum)[keyof typeof EventOrganizerServiceProviderScalarFieldEnum]


  export const LanguageLearnerUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type LanguageLearnerUserScalarFieldEnum = (typeof LanguageLearnerUserScalarFieldEnum)[keyof typeof LanguageLearnerUserScalarFieldEnum]


  export const LanguageLearnerPlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    website: 'website',
    languagesOffered: 'languagesOffered',
    description: 'description',
    ownerId: 'ownerId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LanguageLearnerPlatformScalarFieldEnum = (typeof LanguageLearnerPlatformScalarFieldEnum)[keyof typeof LanguageLearnerPlatformScalarFieldEnum]


  export const LanguageLearnerReviewScalarFieldEnum: {
    id: 'id',
    platformId: 'platformId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LanguageLearnerReviewScalarFieldEnum = (typeof LanguageLearnerReviewScalarFieldEnum)[keyof typeof LanguageLearnerReviewScalarFieldEnum]


  export const LanguageLearnerReviewLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reviewId: 'reviewId',
    createdAt: 'createdAt'
  };

  export type LanguageLearnerReviewLikeScalarFieldEnum = (typeof LanguageLearnerReviewLikeScalarFieldEnum)[keyof typeof LanguageLearnerReviewLikeScalarFieldEnum]


  export const LanguageLearnerUserVoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    voterId: 'voterId',
    voteType: 'voteType',
    createdAt: 'createdAt'
  };

  export type LanguageLearnerUserVoteScalarFieldEnum = (typeof LanguageLearnerUserVoteScalarFieldEnum)[keyof typeof LanguageLearnerUserVoteScalarFieldEnum]


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


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EventOrganizerUserWhereInput = {
    AND?: EventOrganizerUserWhereInput | EventOrganizerUserWhereInput[]
    OR?: EventOrganizerUserWhereInput[]
    NOT?: EventOrganizerUserWhereInput | EventOrganizerUserWhereInput[]
    id?: StringFilter<"EventOrganizerUser"> | string
    email?: StringFilter<"EventOrganizerUser"> | string
    name?: StringFilter<"EventOrganizerUser"> | string
    password?: StringFilter<"EventOrganizerUser"> | string
    createdAt?: DateTimeFilter<"EventOrganizerUser"> | Date | string
    tasks?: EventOrganizerTaskListRelationFilter
    guests?: EventOrganizerGuestListRelationFilter
    venues?: EventOrganizerVenueListRelationFilter
    serviceProviders?: EventOrganizerServiceProviderListRelationFilter
  }

  export type EventOrganizerUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    tasks?: EventOrganizerTaskOrderByRelationAggregateInput
    guests?: EventOrganizerGuestOrderByRelationAggregateInput
    venues?: EventOrganizerVenueOrderByRelationAggregateInput
    serviceProviders?: EventOrganizerServiceProviderOrderByRelationAggregateInput
  }

  export type EventOrganizerUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EventOrganizerUserWhereInput | EventOrganizerUserWhereInput[]
    OR?: EventOrganizerUserWhereInput[]
    NOT?: EventOrganizerUserWhereInput | EventOrganizerUserWhereInput[]
    name?: StringFilter<"EventOrganizerUser"> | string
    password?: StringFilter<"EventOrganizerUser"> | string
    createdAt?: DateTimeFilter<"EventOrganizerUser"> | Date | string
    tasks?: EventOrganizerTaskListRelationFilter
    guests?: EventOrganizerGuestListRelationFilter
    venues?: EventOrganizerVenueListRelationFilter
    serviceProviders?: EventOrganizerServiceProviderListRelationFilter
  }, "id" | "email">

  export type EventOrganizerUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: EventOrganizerUserCountOrderByAggregateInput
    _max?: EventOrganizerUserMaxOrderByAggregateInput
    _min?: EventOrganizerUserMinOrderByAggregateInput
  }

  export type EventOrganizerUserScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerUserScalarWhereWithAggregatesInput | EventOrganizerUserScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerUserScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerUserScalarWhereWithAggregatesInput | EventOrganizerUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizerUser"> | string
    email?: StringWithAggregatesFilter<"EventOrganizerUser"> | string
    name?: StringWithAggregatesFilter<"EventOrganizerUser"> | string
    password?: StringWithAggregatesFilter<"EventOrganizerUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizerUser"> | Date | string
  }

  export type EventOrganizerTaskWhereInput = {
    AND?: EventOrganizerTaskWhereInput | EventOrganizerTaskWhereInput[]
    OR?: EventOrganizerTaskWhereInput[]
    NOT?: EventOrganizerTaskWhereInput | EventOrganizerTaskWhereInput[]
    id?: StringFilter<"EventOrganizerTask"> | string
    title?: StringFilter<"EventOrganizerTask"> | string
    description?: StringFilter<"EventOrganizerTask"> | string
    dueDate?: DateTimeFilter<"EventOrganizerTask"> | Date | string
    status?: StringFilter<"EventOrganizerTask"> | string
    userId?: StringFilter<"EventOrganizerTask"> | string
    createdAt?: DateTimeFilter<"EventOrganizerTask"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }

  export type EventOrganizerTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: EventOrganizerUserOrderByWithRelationInput
  }

  export type EventOrganizerTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventOrganizerTaskWhereInput | EventOrganizerTaskWhereInput[]
    OR?: EventOrganizerTaskWhereInput[]
    NOT?: EventOrganizerTaskWhereInput | EventOrganizerTaskWhereInput[]
    title?: StringFilter<"EventOrganizerTask"> | string
    description?: StringFilter<"EventOrganizerTask"> | string
    dueDate?: DateTimeFilter<"EventOrganizerTask"> | Date | string
    status?: StringFilter<"EventOrganizerTask"> | string
    userId?: StringFilter<"EventOrganizerTask"> | string
    createdAt?: DateTimeFilter<"EventOrganizerTask"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }, "id">

  export type EventOrganizerTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EventOrganizerTaskCountOrderByAggregateInput
    _max?: EventOrganizerTaskMaxOrderByAggregateInput
    _min?: EventOrganizerTaskMinOrderByAggregateInput
  }

  export type EventOrganizerTaskScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerTaskScalarWhereWithAggregatesInput | EventOrganizerTaskScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerTaskScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerTaskScalarWhereWithAggregatesInput | EventOrganizerTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizerTask"> | string
    title?: StringWithAggregatesFilter<"EventOrganizerTask"> | string
    description?: StringWithAggregatesFilter<"EventOrganizerTask"> | string
    dueDate?: DateTimeWithAggregatesFilter<"EventOrganizerTask"> | Date | string
    status?: StringWithAggregatesFilter<"EventOrganizerTask"> | string
    userId?: StringWithAggregatesFilter<"EventOrganizerTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizerTask"> | Date | string
  }

  export type EventOrganizerGuestWhereInput = {
    AND?: EventOrganizerGuestWhereInput | EventOrganizerGuestWhereInput[]
    OR?: EventOrganizerGuestWhereInput[]
    NOT?: EventOrganizerGuestWhereInput | EventOrganizerGuestWhereInput[]
    id?: StringFilter<"EventOrganizerGuest"> | string
    eventId?: StringFilter<"EventOrganizerGuest"> | string
    name?: StringFilter<"EventOrganizerGuest"> | string
    email?: StringFilter<"EventOrganizerGuest"> | string
    phone?: StringFilter<"EventOrganizerGuest"> | string
    status?: StringFilter<"EventOrganizerGuest"> | string
    userId?: StringFilter<"EventOrganizerGuest"> | string
    createdAt?: DateTimeFilter<"EventOrganizerGuest"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }

  export type EventOrganizerGuestOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: EventOrganizerUserOrderByWithRelationInput
  }

  export type EventOrganizerGuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventOrganizerGuestWhereInput | EventOrganizerGuestWhereInput[]
    OR?: EventOrganizerGuestWhereInput[]
    NOT?: EventOrganizerGuestWhereInput | EventOrganizerGuestWhereInput[]
    eventId?: StringFilter<"EventOrganizerGuest"> | string
    name?: StringFilter<"EventOrganizerGuest"> | string
    email?: StringFilter<"EventOrganizerGuest"> | string
    phone?: StringFilter<"EventOrganizerGuest"> | string
    status?: StringFilter<"EventOrganizerGuest"> | string
    userId?: StringFilter<"EventOrganizerGuest"> | string
    createdAt?: DateTimeFilter<"EventOrganizerGuest"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }, "id">

  export type EventOrganizerGuestOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EventOrganizerGuestCountOrderByAggregateInput
    _max?: EventOrganizerGuestMaxOrderByAggregateInput
    _min?: EventOrganizerGuestMinOrderByAggregateInput
  }

  export type EventOrganizerGuestScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerGuestScalarWhereWithAggregatesInput | EventOrganizerGuestScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerGuestScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerGuestScalarWhereWithAggregatesInput | EventOrganizerGuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    eventId?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    name?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    email?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    phone?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    status?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    userId?: StringWithAggregatesFilter<"EventOrganizerGuest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizerGuest"> | Date | string
  }

  export type EventOrganizerVenueWhereInput = {
    AND?: EventOrganizerVenueWhereInput | EventOrganizerVenueWhereInput[]
    OR?: EventOrganizerVenueWhereInput[]
    NOT?: EventOrganizerVenueWhereInput | EventOrganizerVenueWhereInput[]
    id?: StringFilter<"EventOrganizerVenue"> | string
    name?: StringFilter<"EventOrganizerVenue"> | string
    location?: StringFilter<"EventOrganizerVenue"> | string
    capacity?: IntFilter<"EventOrganizerVenue"> | number
    amenities?: StringFilter<"EventOrganizerVenue"> | string
    submittedBy?: StringFilter<"EventOrganizerVenue"> | string
    createdAt?: DateTimeFilter<"EventOrganizerVenue"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }

  export type EventOrganizerVenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    amenities?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
    user?: EventOrganizerUserOrderByWithRelationInput
  }

  export type EventOrganizerVenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventOrganizerVenueWhereInput | EventOrganizerVenueWhereInput[]
    OR?: EventOrganizerVenueWhereInput[]
    NOT?: EventOrganizerVenueWhereInput | EventOrganizerVenueWhereInput[]
    name?: StringFilter<"EventOrganizerVenue"> | string
    location?: StringFilter<"EventOrganizerVenue"> | string
    capacity?: IntFilter<"EventOrganizerVenue"> | number
    amenities?: StringFilter<"EventOrganizerVenue"> | string
    submittedBy?: StringFilter<"EventOrganizerVenue"> | string
    createdAt?: DateTimeFilter<"EventOrganizerVenue"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }, "id">

  export type EventOrganizerVenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    amenities?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
    _count?: EventOrganizerVenueCountOrderByAggregateInput
    _avg?: EventOrganizerVenueAvgOrderByAggregateInput
    _max?: EventOrganizerVenueMaxOrderByAggregateInput
    _min?: EventOrganizerVenueMinOrderByAggregateInput
    _sum?: EventOrganizerVenueSumOrderByAggregateInput
  }

  export type EventOrganizerVenueScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerVenueScalarWhereWithAggregatesInput | EventOrganizerVenueScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerVenueScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerVenueScalarWhereWithAggregatesInput | EventOrganizerVenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizerVenue"> | string
    name?: StringWithAggregatesFilter<"EventOrganizerVenue"> | string
    location?: StringWithAggregatesFilter<"EventOrganizerVenue"> | string
    capacity?: IntWithAggregatesFilter<"EventOrganizerVenue"> | number
    amenities?: StringWithAggregatesFilter<"EventOrganizerVenue"> | string
    submittedBy?: StringWithAggregatesFilter<"EventOrganizerVenue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizerVenue"> | Date | string
  }

  export type EventOrganizerServiceProviderWhereInput = {
    AND?: EventOrganizerServiceProviderWhereInput | EventOrganizerServiceProviderWhereInput[]
    OR?: EventOrganizerServiceProviderWhereInput[]
    NOT?: EventOrganizerServiceProviderWhereInput | EventOrganizerServiceProviderWhereInput[]
    id?: StringFilter<"EventOrganizerServiceProvider"> | string
    name?: StringFilter<"EventOrganizerServiceProvider"> | string
    serviceType?: StringFilter<"EventOrganizerServiceProvider"> | string
    contactInfo?: StringFilter<"EventOrganizerServiceProvider"> | string
    submittedBy?: StringFilter<"EventOrganizerServiceProvider"> | string
    createdAt?: DateTimeFilter<"EventOrganizerServiceProvider"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }

  export type EventOrganizerServiceProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    contactInfo?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
    user?: EventOrganizerUserOrderByWithRelationInput
  }

  export type EventOrganizerServiceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventOrganizerServiceProviderWhereInput | EventOrganizerServiceProviderWhereInput[]
    OR?: EventOrganizerServiceProviderWhereInput[]
    NOT?: EventOrganizerServiceProviderWhereInput | EventOrganizerServiceProviderWhereInput[]
    name?: StringFilter<"EventOrganizerServiceProvider"> | string
    serviceType?: StringFilter<"EventOrganizerServiceProvider"> | string
    contactInfo?: StringFilter<"EventOrganizerServiceProvider"> | string
    submittedBy?: StringFilter<"EventOrganizerServiceProvider"> | string
    createdAt?: DateTimeFilter<"EventOrganizerServiceProvider"> | Date | string
    user?: XOR<EventOrganizerUserScalarRelationFilter, EventOrganizerUserWhereInput>
  }, "id">

  export type EventOrganizerServiceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    contactInfo?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
    _count?: EventOrganizerServiceProviderCountOrderByAggregateInput
    _max?: EventOrganizerServiceProviderMaxOrderByAggregateInput
    _min?: EventOrganizerServiceProviderMinOrderByAggregateInput
  }

  export type EventOrganizerServiceProviderScalarWhereWithAggregatesInput = {
    AND?: EventOrganizerServiceProviderScalarWhereWithAggregatesInput | EventOrganizerServiceProviderScalarWhereWithAggregatesInput[]
    OR?: EventOrganizerServiceProviderScalarWhereWithAggregatesInput[]
    NOT?: EventOrganizerServiceProviderScalarWhereWithAggregatesInput | EventOrganizerServiceProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventOrganizerServiceProvider"> | string
    name?: StringWithAggregatesFilter<"EventOrganizerServiceProvider"> | string
    serviceType?: StringWithAggregatesFilter<"EventOrganizerServiceProvider"> | string
    contactInfo?: StringWithAggregatesFilter<"EventOrganizerServiceProvider"> | string
    submittedBy?: StringWithAggregatesFilter<"EventOrganizerServiceProvider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventOrganizerServiceProvider"> | Date | string
  }

  export type LanguageLearnerUserWhereInput = {
    AND?: LanguageLearnerUserWhereInput | LanguageLearnerUserWhereInput[]
    OR?: LanguageLearnerUserWhereInput[]
    NOT?: LanguageLearnerUserWhereInput | LanguageLearnerUserWhereInput[]
    id?: StringFilter<"LanguageLearnerUser"> | string
    email?: StringFilter<"LanguageLearnerUser"> | string
    name?: StringFilter<"LanguageLearnerUser"> | string
    password?: StringFilter<"LanguageLearnerUser"> | string
    role?: StringFilter<"LanguageLearnerUser"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerUser"> | Date | string
    ownedPlatforms?: LanguageLearnerPlatformListRelationFilter
    reviews?: LanguageLearnerReviewListRelationFilter
    votesGiven?: LanguageLearnerUserVoteListRelationFilter
    votesReceived?: LanguageLearnerUserVoteListRelationFilter
    likes?: LanguageLearnerReviewLikeListRelationFilter
  }

  export type LanguageLearnerUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ownedPlatforms?: LanguageLearnerPlatformOrderByRelationAggregateInput
    reviews?: LanguageLearnerReviewOrderByRelationAggregateInput
    votesGiven?: LanguageLearnerUserVoteOrderByRelationAggregateInput
    votesReceived?: LanguageLearnerUserVoteOrderByRelationAggregateInput
    likes?: LanguageLearnerReviewLikeOrderByRelationAggregateInput
  }

  export type LanguageLearnerUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: LanguageLearnerUserWhereInput | LanguageLearnerUserWhereInput[]
    OR?: LanguageLearnerUserWhereInput[]
    NOT?: LanguageLearnerUserWhereInput | LanguageLearnerUserWhereInput[]
    name?: StringFilter<"LanguageLearnerUser"> | string
    password?: StringFilter<"LanguageLearnerUser"> | string
    role?: StringFilter<"LanguageLearnerUser"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerUser"> | Date | string
    ownedPlatforms?: LanguageLearnerPlatformListRelationFilter
    reviews?: LanguageLearnerReviewListRelationFilter
    votesGiven?: LanguageLearnerUserVoteListRelationFilter
    votesReceived?: LanguageLearnerUserVoteListRelationFilter
    likes?: LanguageLearnerReviewLikeListRelationFilter
  }, "id" | "email">

  export type LanguageLearnerUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageLearnerUserCountOrderByAggregateInput
    _max?: LanguageLearnerUserMaxOrderByAggregateInput
    _min?: LanguageLearnerUserMinOrderByAggregateInput
  }

  export type LanguageLearnerUserScalarWhereWithAggregatesInput = {
    AND?: LanguageLearnerUserScalarWhereWithAggregatesInput | LanguageLearnerUserScalarWhereWithAggregatesInput[]
    OR?: LanguageLearnerUserScalarWhereWithAggregatesInput[]
    NOT?: LanguageLearnerUserScalarWhereWithAggregatesInput | LanguageLearnerUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguageLearnerUser"> | string
    email?: StringWithAggregatesFilter<"LanguageLearnerUser"> | string
    name?: StringWithAggregatesFilter<"LanguageLearnerUser"> | string
    password?: StringWithAggregatesFilter<"LanguageLearnerUser"> | string
    role?: StringWithAggregatesFilter<"LanguageLearnerUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguageLearnerUser"> | Date | string
  }

  export type LanguageLearnerPlatformWhereInput = {
    AND?: LanguageLearnerPlatformWhereInput | LanguageLearnerPlatformWhereInput[]
    OR?: LanguageLearnerPlatformWhereInput[]
    NOT?: LanguageLearnerPlatformWhereInput | LanguageLearnerPlatformWhereInput[]
    id?: StringFilter<"LanguageLearnerPlatform"> | string
    name?: StringFilter<"LanguageLearnerPlatform"> | string
    website?: StringFilter<"LanguageLearnerPlatform"> | string
    languagesOffered?: StringFilter<"LanguageLearnerPlatform"> | string
    description?: StringFilter<"LanguageLearnerPlatform"> | string
    ownerId?: StringFilter<"LanguageLearnerPlatform"> | string
    status?: StringFilter<"LanguageLearnerPlatform"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerPlatform"> | Date | string
    owner?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    reviews?: LanguageLearnerReviewListRelationFilter
  }

  export type LanguageLearnerPlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    languagesOffered?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    owner?: LanguageLearnerUserOrderByWithRelationInput
    reviews?: LanguageLearnerReviewOrderByRelationAggregateInput
  }

  export type LanguageLearnerPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguageLearnerPlatformWhereInput | LanguageLearnerPlatformWhereInput[]
    OR?: LanguageLearnerPlatformWhereInput[]
    NOT?: LanguageLearnerPlatformWhereInput | LanguageLearnerPlatformWhereInput[]
    name?: StringFilter<"LanguageLearnerPlatform"> | string
    website?: StringFilter<"LanguageLearnerPlatform"> | string
    languagesOffered?: StringFilter<"LanguageLearnerPlatform"> | string
    description?: StringFilter<"LanguageLearnerPlatform"> | string
    ownerId?: StringFilter<"LanguageLearnerPlatform"> | string
    status?: StringFilter<"LanguageLearnerPlatform"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerPlatform"> | Date | string
    owner?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    reviews?: LanguageLearnerReviewListRelationFilter
  }, "id">

  export type LanguageLearnerPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    languagesOffered?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageLearnerPlatformCountOrderByAggregateInput
    _max?: LanguageLearnerPlatformMaxOrderByAggregateInput
    _min?: LanguageLearnerPlatformMinOrderByAggregateInput
  }

  export type LanguageLearnerPlatformScalarWhereWithAggregatesInput = {
    AND?: LanguageLearnerPlatformScalarWhereWithAggregatesInput | LanguageLearnerPlatformScalarWhereWithAggregatesInput[]
    OR?: LanguageLearnerPlatformScalarWhereWithAggregatesInput[]
    NOT?: LanguageLearnerPlatformScalarWhereWithAggregatesInput | LanguageLearnerPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    name?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    website?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    languagesOffered?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    description?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    ownerId?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    status?: StringWithAggregatesFilter<"LanguageLearnerPlatform"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguageLearnerPlatform"> | Date | string
  }

  export type LanguageLearnerReviewWhereInput = {
    AND?: LanguageLearnerReviewWhereInput | LanguageLearnerReviewWhereInput[]
    OR?: LanguageLearnerReviewWhereInput[]
    NOT?: LanguageLearnerReviewWhereInput | LanguageLearnerReviewWhereInput[]
    id?: StringFilter<"LanguageLearnerReview"> | string
    platformId?: StringFilter<"LanguageLearnerReview"> | string
    userId?: StringFilter<"LanguageLearnerReview"> | string
    rating?: IntFilter<"LanguageLearnerReview"> | number
    comment?: StringFilter<"LanguageLearnerReview"> | string
    status?: StringFilter<"LanguageLearnerReview"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReview"> | Date | string
    platform?: XOR<LanguageLearnerPlatformScalarRelationFilter, LanguageLearnerPlatformWhereInput>
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    likes?: LanguageLearnerReviewLikeListRelationFilter
  }

  export type LanguageLearnerReviewOrderByWithRelationInput = {
    id?: SortOrder
    platformId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: LanguageLearnerPlatformOrderByWithRelationInput
    user?: LanguageLearnerUserOrderByWithRelationInput
    likes?: LanguageLearnerReviewLikeOrderByRelationAggregateInput
  }

  export type LanguageLearnerReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguageLearnerReviewWhereInput | LanguageLearnerReviewWhereInput[]
    OR?: LanguageLearnerReviewWhereInput[]
    NOT?: LanguageLearnerReviewWhereInput | LanguageLearnerReviewWhereInput[]
    platformId?: StringFilter<"LanguageLearnerReview"> | string
    userId?: StringFilter<"LanguageLearnerReview"> | string
    rating?: IntFilter<"LanguageLearnerReview"> | number
    comment?: StringFilter<"LanguageLearnerReview"> | string
    status?: StringFilter<"LanguageLearnerReview"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReview"> | Date | string
    platform?: XOR<LanguageLearnerPlatformScalarRelationFilter, LanguageLearnerPlatformWhereInput>
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    likes?: LanguageLearnerReviewLikeListRelationFilter
  }, "id">

  export type LanguageLearnerReviewOrderByWithAggregationInput = {
    id?: SortOrder
    platformId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageLearnerReviewCountOrderByAggregateInput
    _avg?: LanguageLearnerReviewAvgOrderByAggregateInput
    _max?: LanguageLearnerReviewMaxOrderByAggregateInput
    _min?: LanguageLearnerReviewMinOrderByAggregateInput
    _sum?: LanguageLearnerReviewSumOrderByAggregateInput
  }

  export type LanguageLearnerReviewScalarWhereWithAggregatesInput = {
    AND?: LanguageLearnerReviewScalarWhereWithAggregatesInput | LanguageLearnerReviewScalarWhereWithAggregatesInput[]
    OR?: LanguageLearnerReviewScalarWhereWithAggregatesInput[]
    NOT?: LanguageLearnerReviewScalarWhereWithAggregatesInput | LanguageLearnerReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguageLearnerReview"> | string
    platformId?: StringWithAggregatesFilter<"LanguageLearnerReview"> | string
    userId?: StringWithAggregatesFilter<"LanguageLearnerReview"> | string
    rating?: IntWithAggregatesFilter<"LanguageLearnerReview"> | number
    comment?: StringWithAggregatesFilter<"LanguageLearnerReview"> | string
    status?: StringWithAggregatesFilter<"LanguageLearnerReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguageLearnerReview"> | Date | string
  }

  export type LanguageLearnerReviewLikeWhereInput = {
    AND?: LanguageLearnerReviewLikeWhereInput | LanguageLearnerReviewLikeWhereInput[]
    OR?: LanguageLearnerReviewLikeWhereInput[]
    NOT?: LanguageLearnerReviewLikeWhereInput | LanguageLearnerReviewLikeWhereInput[]
    id?: StringFilter<"LanguageLearnerReviewLike"> | string
    userId?: StringFilter<"LanguageLearnerReviewLike"> | string
    reviewId?: StringFilter<"LanguageLearnerReviewLike"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReviewLike"> | Date | string
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    review?: XOR<LanguageLearnerReviewScalarRelationFilter, LanguageLearnerReviewWhereInput>
  }

  export type LanguageLearnerReviewLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    user?: LanguageLearnerUserOrderByWithRelationInput
    review?: LanguageLearnerReviewOrderByWithRelationInput
  }

  export type LanguageLearnerReviewLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_reviewId?: LanguageLearnerReviewLikeUserIdReviewIdCompoundUniqueInput
    AND?: LanguageLearnerReviewLikeWhereInput | LanguageLearnerReviewLikeWhereInput[]
    OR?: LanguageLearnerReviewLikeWhereInput[]
    NOT?: LanguageLearnerReviewLikeWhereInput | LanguageLearnerReviewLikeWhereInput[]
    userId?: StringFilter<"LanguageLearnerReviewLike"> | string
    reviewId?: StringFilter<"LanguageLearnerReviewLike"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReviewLike"> | Date | string
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    review?: XOR<LanguageLearnerReviewScalarRelationFilter, LanguageLearnerReviewWhereInput>
  }, "id" | "userId_reviewId">

  export type LanguageLearnerReviewLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageLearnerReviewLikeCountOrderByAggregateInput
    _max?: LanguageLearnerReviewLikeMaxOrderByAggregateInput
    _min?: LanguageLearnerReviewLikeMinOrderByAggregateInput
  }

  export type LanguageLearnerReviewLikeScalarWhereWithAggregatesInput = {
    AND?: LanguageLearnerReviewLikeScalarWhereWithAggregatesInput | LanguageLearnerReviewLikeScalarWhereWithAggregatesInput[]
    OR?: LanguageLearnerReviewLikeScalarWhereWithAggregatesInput[]
    NOT?: LanguageLearnerReviewLikeScalarWhereWithAggregatesInput | LanguageLearnerReviewLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguageLearnerReviewLike"> | string
    userId?: StringWithAggregatesFilter<"LanguageLearnerReviewLike"> | string
    reviewId?: StringWithAggregatesFilter<"LanguageLearnerReviewLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguageLearnerReviewLike"> | Date | string
  }

  export type LanguageLearnerUserVoteWhereInput = {
    AND?: LanguageLearnerUserVoteWhereInput | LanguageLearnerUserVoteWhereInput[]
    OR?: LanguageLearnerUserVoteWhereInput[]
    NOT?: LanguageLearnerUserVoteWhereInput | LanguageLearnerUserVoteWhereInput[]
    id?: StringFilter<"LanguageLearnerUserVote"> | string
    userId?: StringFilter<"LanguageLearnerUserVote"> | string
    voterId?: StringFilter<"LanguageLearnerUserVote"> | string
    voteType?: StringFilter<"LanguageLearnerUserVote"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerUserVote"> | Date | string
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    voter?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
  }

  export type LanguageLearnerUserVoteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    voterId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    user?: LanguageLearnerUserOrderByWithRelationInput
    voter?: LanguageLearnerUserOrderByWithRelationInput
  }

  export type LanguageLearnerUserVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_voterId?: LanguageLearnerUserVoteUserIdVoterIdCompoundUniqueInput
    AND?: LanguageLearnerUserVoteWhereInput | LanguageLearnerUserVoteWhereInput[]
    OR?: LanguageLearnerUserVoteWhereInput[]
    NOT?: LanguageLearnerUserVoteWhereInput | LanguageLearnerUserVoteWhereInput[]
    userId?: StringFilter<"LanguageLearnerUserVote"> | string
    voterId?: StringFilter<"LanguageLearnerUserVote"> | string
    voteType?: StringFilter<"LanguageLearnerUserVote"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerUserVote"> | Date | string
    user?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
    voter?: XOR<LanguageLearnerUserScalarRelationFilter, LanguageLearnerUserWhereInput>
  }, "id" | "userId_voterId">

  export type LanguageLearnerUserVoteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    voterId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageLearnerUserVoteCountOrderByAggregateInput
    _max?: LanguageLearnerUserVoteMaxOrderByAggregateInput
    _min?: LanguageLearnerUserVoteMinOrderByAggregateInput
  }

  export type LanguageLearnerUserVoteScalarWhereWithAggregatesInput = {
    AND?: LanguageLearnerUserVoteScalarWhereWithAggregatesInput | LanguageLearnerUserVoteScalarWhereWithAggregatesInput[]
    OR?: LanguageLearnerUserVoteScalarWhereWithAggregatesInput[]
    NOT?: LanguageLearnerUserVoteScalarWhereWithAggregatesInput | LanguageLearnerUserVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LanguageLearnerUserVote"> | string
    userId?: StringWithAggregatesFilter<"LanguageLearnerUserVote"> | string
    voterId?: StringWithAggregatesFilter<"LanguageLearnerUserVote"> | string
    voteType?: StringWithAggregatesFilter<"LanguageLearnerUserVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LanguageLearnerUserVote"> | Date | string
  }

  export type EventOrganizerUserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskUncheckedCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestUncheckedCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueUncheckedCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUncheckedUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUncheckedUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUncheckedUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type EventOrganizerUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerTaskCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    createdAt?: Date | string
    user: EventOrganizerUserCreateNestedOneWithoutTasksInput
  }

  export type EventOrganizerTaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    userId: string
    createdAt?: Date | string
  }

  export type EventOrganizerTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: EventOrganizerUserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type EventOrganizerTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerTaskCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    userId: string
    createdAt?: Date | string
  }

  export type EventOrganizerTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestCreateInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    createdAt?: Date | string
    user: EventOrganizerUserCreateNestedOneWithoutGuestsInput
  }

  export type EventOrganizerGuestUncheckedCreateInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    userId: string
    createdAt?: Date | string
  }

  export type EventOrganizerGuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: EventOrganizerUserUpdateOneRequiredWithoutGuestsNestedInput
  }

  export type EventOrganizerGuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestCreateManyInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    userId: string
    createdAt?: Date | string
  }

  export type EventOrganizerGuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueCreateInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    createdAt?: Date | string
    user: EventOrganizerUserCreateNestedOneWithoutVenuesInput
  }

  export type EventOrganizerVenueUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    submittedBy: string
    createdAt?: Date | string
  }

  export type EventOrganizerVenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: EventOrganizerUserUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type EventOrganizerVenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueCreateManyInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    submittedBy: string
    createdAt?: Date | string
  }

  export type EventOrganizerVenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderCreateInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    createdAt?: Date | string
    user: EventOrganizerUserCreateNestedOneWithoutServiceProvidersInput
  }

  export type EventOrganizerServiceProviderUncheckedCreateInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    submittedBy: string
    createdAt?: Date | string
  }

  export type EventOrganizerServiceProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: EventOrganizerUserUpdateOneRequiredWithoutServiceProvidersNestedInput
  }

  export type EventOrganizerServiceProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderCreateManyInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    submittedBy: string
    createdAt?: Date | string
  }

  export type EventOrganizerServiceProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerPlatformCreateInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    status?: string
    createdAt?: Date | string
    owner: LanguageLearnerUserCreateNestedOneWithoutOwnedPlatformsInput
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutPlatformInput
  }

  export type LanguageLearnerPlatformUncheckedCreateInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type LanguageLearnerPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: LanguageLearnerUserUpdateOneRequiredWithoutOwnedPlatformsNestedInput
    reviews?: LanguageLearnerReviewUpdateManyWithoutPlatformNestedInput
  }

  export type LanguageLearnerPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type LanguageLearnerPlatformCreateManyInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewCreateInput = {
    id?: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    platform: LanguageLearnerPlatformCreateNestedOneWithoutReviewsInput
    user: LanguageLearnerUserCreateNestedOneWithoutReviewsInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewUncheckedCreateInput = {
    id?: string
    platformId: string
    userId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: LanguageLearnerPlatformUpdateOneRequiredWithoutReviewsNestedInput
    user?: LanguageLearnerUserUpdateOneRequiredWithoutReviewsNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewCreateManyInput = {
    id?: string
    platformId: string
    userId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: LanguageLearnerUserCreateNestedOneWithoutLikesInput
    review: LanguageLearnerReviewCreateNestedOneWithoutLikesInput
  }

  export type LanguageLearnerReviewLikeUncheckedCreateInput = {
    id?: string
    userId: string
    reviewId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LanguageLearnerUserUpdateOneRequiredWithoutLikesNestedInput
    review?: LanguageLearnerReviewUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeCreateManyInput = {
    id?: string
    userId: string
    reviewId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteCreateInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    user: LanguageLearnerUserCreateNestedOneWithoutVotesReceivedInput
    voter: LanguageLearnerUserCreateNestedOneWithoutVotesGivenInput
  }

  export type LanguageLearnerUserVoteUncheckedCreateInput = {
    id?: string
    userId: string
    voterId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LanguageLearnerUserUpdateOneRequiredWithoutVotesReceivedNestedInput
    voter?: LanguageLearnerUserUpdateOneRequiredWithoutVotesGivenNestedInput
  }

  export type LanguageLearnerUserVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteCreateManyInput = {
    id?: string
    userId: string
    voterId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventOrganizerTaskListRelationFilter = {
    every?: EventOrganizerTaskWhereInput
    some?: EventOrganizerTaskWhereInput
    none?: EventOrganizerTaskWhereInput
  }

  export type EventOrganizerGuestListRelationFilter = {
    every?: EventOrganizerGuestWhereInput
    some?: EventOrganizerGuestWhereInput
    none?: EventOrganizerGuestWhereInput
  }

  export type EventOrganizerVenueListRelationFilter = {
    every?: EventOrganizerVenueWhereInput
    some?: EventOrganizerVenueWhereInput
    none?: EventOrganizerVenueWhereInput
  }

  export type EventOrganizerServiceProviderListRelationFilter = {
    every?: EventOrganizerServiceProviderWhereInput
    some?: EventOrganizerServiceProviderWhereInput
    none?: EventOrganizerServiceProviderWhereInput
  }

  export type EventOrganizerTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrganizerGuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrganizerVenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrganizerServiceProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrganizerUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type EventOrganizerUserScalarRelationFilter = {
    is?: EventOrganizerUserWhereInput
    isNot?: EventOrganizerUserWhereInput
  }

  export type EventOrganizerTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerGuestCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerGuestMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerGuestMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type EventOrganizerVenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    amenities?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerVenueAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type EventOrganizerVenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    amenities?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerVenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    amenities?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerVenueSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type EventOrganizerServiceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    contactInfo?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerServiceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    contactInfo?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerServiceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    contactInfo?: SortOrder
    submittedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerPlatformListRelationFilter = {
    every?: LanguageLearnerPlatformWhereInput
    some?: LanguageLearnerPlatformWhereInput
    none?: LanguageLearnerPlatformWhereInput
  }

  export type LanguageLearnerReviewListRelationFilter = {
    every?: LanguageLearnerReviewWhereInput
    some?: LanguageLearnerReviewWhereInput
    none?: LanguageLearnerReviewWhereInput
  }

  export type LanguageLearnerUserVoteListRelationFilter = {
    every?: LanguageLearnerUserVoteWhereInput
    some?: LanguageLearnerUserVoteWhereInput
    none?: LanguageLearnerUserVoteWhereInput
  }

  export type LanguageLearnerReviewLikeListRelationFilter = {
    every?: LanguageLearnerReviewLikeWhereInput
    some?: LanguageLearnerReviewLikeWhereInput
    none?: LanguageLearnerReviewLikeWhereInput
  }

  export type LanguageLearnerPlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageLearnerReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageLearnerUserVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageLearnerReviewLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageLearnerUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserScalarRelationFilter = {
    is?: LanguageLearnerUserWhereInput
    isNot?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    languagesOffered?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    languagesOffered?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    languagesOffered?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerPlatformScalarRelationFilter = {
    is?: LanguageLearnerPlatformWhereInput
    isNot?: LanguageLearnerPlatformWhereInput
  }

  export type LanguageLearnerReviewCountOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type LanguageLearnerReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerReviewMinOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type LanguageLearnerReviewScalarRelationFilter = {
    is?: LanguageLearnerReviewWhereInput
    isNot?: LanguageLearnerReviewWhereInput
  }

  export type LanguageLearnerReviewLikeUserIdReviewIdCompoundUniqueInput = {
    userId: string
    reviewId: string
  }

  export type LanguageLearnerReviewLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerReviewLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerReviewLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserVoteUserIdVoterIdCompoundUniqueInput = {
    userId: string
    voterId: string
  }

  export type LanguageLearnerUserVoteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voterId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voterId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageLearnerUserVoteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voterId?: SortOrder
    voteType?: SortOrder
    createdAt?: SortOrder
  }

  export type EventOrganizerTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput> | EventOrganizerTaskCreateWithoutUserInput[] | EventOrganizerTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerTaskCreateOrConnectWithoutUserInput | EventOrganizerTaskCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerTaskCreateManyUserInputEnvelope
    connect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
  }

  export type EventOrganizerGuestCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput> | EventOrganizerGuestCreateWithoutUserInput[] | EventOrganizerGuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerGuestCreateOrConnectWithoutUserInput | EventOrganizerGuestCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerGuestCreateManyUserInputEnvelope
    connect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
  }

  export type EventOrganizerVenueCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput> | EventOrganizerVenueCreateWithoutUserInput[] | EventOrganizerVenueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerVenueCreateOrConnectWithoutUserInput | EventOrganizerVenueCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerVenueCreateManyUserInputEnvelope
    connect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
  }

  export type EventOrganizerServiceProviderCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput> | EventOrganizerServiceProviderCreateWithoutUserInput[] | EventOrganizerServiceProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerServiceProviderCreateOrConnectWithoutUserInput | EventOrganizerServiceProviderCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerServiceProviderCreateManyUserInputEnvelope
    connect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
  }

  export type EventOrganizerTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput> | EventOrganizerTaskCreateWithoutUserInput[] | EventOrganizerTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerTaskCreateOrConnectWithoutUserInput | EventOrganizerTaskCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerTaskCreateManyUserInputEnvelope
    connect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
  }

  export type EventOrganizerGuestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput> | EventOrganizerGuestCreateWithoutUserInput[] | EventOrganizerGuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerGuestCreateOrConnectWithoutUserInput | EventOrganizerGuestCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerGuestCreateManyUserInputEnvelope
    connect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
  }

  export type EventOrganizerVenueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput> | EventOrganizerVenueCreateWithoutUserInput[] | EventOrganizerVenueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerVenueCreateOrConnectWithoutUserInput | EventOrganizerVenueCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerVenueCreateManyUserInputEnvelope
    connect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
  }

  export type EventOrganizerServiceProviderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput> | EventOrganizerServiceProviderCreateWithoutUserInput[] | EventOrganizerServiceProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerServiceProviderCreateOrConnectWithoutUserInput | EventOrganizerServiceProviderCreateOrConnectWithoutUserInput[]
    createMany?: EventOrganizerServiceProviderCreateManyUserInputEnvelope
    connect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventOrganizerTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput> | EventOrganizerTaskCreateWithoutUserInput[] | EventOrganizerTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerTaskCreateOrConnectWithoutUserInput | EventOrganizerTaskCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerTaskUpsertWithWhereUniqueWithoutUserInput | EventOrganizerTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerTaskCreateManyUserInputEnvelope
    set?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    disconnect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    delete?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    connect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    update?: EventOrganizerTaskUpdateWithWhereUniqueWithoutUserInput | EventOrganizerTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerTaskUpdateManyWithWhereWithoutUserInput | EventOrganizerTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerTaskScalarWhereInput | EventOrganizerTaskScalarWhereInput[]
  }

  export type EventOrganizerGuestUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput> | EventOrganizerGuestCreateWithoutUserInput[] | EventOrganizerGuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerGuestCreateOrConnectWithoutUserInput | EventOrganizerGuestCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerGuestUpsertWithWhereUniqueWithoutUserInput | EventOrganizerGuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerGuestCreateManyUserInputEnvelope
    set?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    disconnect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    delete?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    connect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    update?: EventOrganizerGuestUpdateWithWhereUniqueWithoutUserInput | EventOrganizerGuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerGuestUpdateManyWithWhereWithoutUserInput | EventOrganizerGuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerGuestScalarWhereInput | EventOrganizerGuestScalarWhereInput[]
  }

  export type EventOrganizerVenueUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput> | EventOrganizerVenueCreateWithoutUserInput[] | EventOrganizerVenueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerVenueCreateOrConnectWithoutUserInput | EventOrganizerVenueCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerVenueUpsertWithWhereUniqueWithoutUserInput | EventOrganizerVenueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerVenueCreateManyUserInputEnvelope
    set?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    disconnect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    delete?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    connect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    update?: EventOrganizerVenueUpdateWithWhereUniqueWithoutUserInput | EventOrganizerVenueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerVenueUpdateManyWithWhereWithoutUserInput | EventOrganizerVenueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerVenueScalarWhereInput | EventOrganizerVenueScalarWhereInput[]
  }

  export type EventOrganizerServiceProviderUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput> | EventOrganizerServiceProviderCreateWithoutUserInput[] | EventOrganizerServiceProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerServiceProviderCreateOrConnectWithoutUserInput | EventOrganizerServiceProviderCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerServiceProviderUpsertWithWhereUniqueWithoutUserInput | EventOrganizerServiceProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerServiceProviderCreateManyUserInputEnvelope
    set?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    disconnect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    delete?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    connect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    update?: EventOrganizerServiceProviderUpdateWithWhereUniqueWithoutUserInput | EventOrganizerServiceProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerServiceProviderUpdateManyWithWhereWithoutUserInput | EventOrganizerServiceProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerServiceProviderScalarWhereInput | EventOrganizerServiceProviderScalarWhereInput[]
  }

  export type EventOrganizerTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput> | EventOrganizerTaskCreateWithoutUserInput[] | EventOrganizerTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerTaskCreateOrConnectWithoutUserInput | EventOrganizerTaskCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerTaskUpsertWithWhereUniqueWithoutUserInput | EventOrganizerTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerTaskCreateManyUserInputEnvelope
    set?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    disconnect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    delete?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    connect?: EventOrganizerTaskWhereUniqueInput | EventOrganizerTaskWhereUniqueInput[]
    update?: EventOrganizerTaskUpdateWithWhereUniqueWithoutUserInput | EventOrganizerTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerTaskUpdateManyWithWhereWithoutUserInput | EventOrganizerTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerTaskScalarWhereInput | EventOrganizerTaskScalarWhereInput[]
  }

  export type EventOrganizerGuestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput> | EventOrganizerGuestCreateWithoutUserInput[] | EventOrganizerGuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerGuestCreateOrConnectWithoutUserInput | EventOrganizerGuestCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerGuestUpsertWithWhereUniqueWithoutUserInput | EventOrganizerGuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerGuestCreateManyUserInputEnvelope
    set?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    disconnect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    delete?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    connect?: EventOrganizerGuestWhereUniqueInput | EventOrganizerGuestWhereUniqueInput[]
    update?: EventOrganizerGuestUpdateWithWhereUniqueWithoutUserInput | EventOrganizerGuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerGuestUpdateManyWithWhereWithoutUserInput | EventOrganizerGuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerGuestScalarWhereInput | EventOrganizerGuestScalarWhereInput[]
  }

  export type EventOrganizerVenueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput> | EventOrganizerVenueCreateWithoutUserInput[] | EventOrganizerVenueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerVenueCreateOrConnectWithoutUserInput | EventOrganizerVenueCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerVenueUpsertWithWhereUniqueWithoutUserInput | EventOrganizerVenueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerVenueCreateManyUserInputEnvelope
    set?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    disconnect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    delete?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    connect?: EventOrganizerVenueWhereUniqueInput | EventOrganizerVenueWhereUniqueInput[]
    update?: EventOrganizerVenueUpdateWithWhereUniqueWithoutUserInput | EventOrganizerVenueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerVenueUpdateManyWithWhereWithoutUserInput | EventOrganizerVenueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerVenueScalarWhereInput | EventOrganizerVenueScalarWhereInput[]
  }

  export type EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput> | EventOrganizerServiceProviderCreateWithoutUserInput[] | EventOrganizerServiceProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventOrganizerServiceProviderCreateOrConnectWithoutUserInput | EventOrganizerServiceProviderCreateOrConnectWithoutUserInput[]
    upsert?: EventOrganizerServiceProviderUpsertWithWhereUniqueWithoutUserInput | EventOrganizerServiceProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventOrganizerServiceProviderCreateManyUserInputEnvelope
    set?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    disconnect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    delete?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    connect?: EventOrganizerServiceProviderWhereUniqueInput | EventOrganizerServiceProviderWhereUniqueInput[]
    update?: EventOrganizerServiceProviderUpdateWithWhereUniqueWithoutUserInput | EventOrganizerServiceProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventOrganizerServiceProviderUpdateManyWithWhereWithoutUserInput | EventOrganizerServiceProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventOrganizerServiceProviderScalarWhereInput | EventOrganizerServiceProviderScalarWhereInput[]
  }

  export type EventOrganizerUserCreateNestedOneWithoutTasksInput = {
    create?: XOR<EventOrganizerUserCreateWithoutTasksInput, EventOrganizerUserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutTasksInput
    connect?: EventOrganizerUserWhereUniqueInput
  }

  export type EventOrganizerUserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<EventOrganizerUserCreateWithoutTasksInput, EventOrganizerUserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutTasksInput
    upsert?: EventOrganizerUserUpsertWithoutTasksInput
    connect?: EventOrganizerUserWhereUniqueInput
    update?: XOR<XOR<EventOrganizerUserUpdateToOneWithWhereWithoutTasksInput, EventOrganizerUserUpdateWithoutTasksInput>, EventOrganizerUserUncheckedUpdateWithoutTasksInput>
  }

  export type EventOrganizerUserCreateNestedOneWithoutGuestsInput = {
    create?: XOR<EventOrganizerUserCreateWithoutGuestsInput, EventOrganizerUserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutGuestsInput
    connect?: EventOrganizerUserWhereUniqueInput
  }

  export type EventOrganizerUserUpdateOneRequiredWithoutGuestsNestedInput = {
    create?: XOR<EventOrganizerUserCreateWithoutGuestsInput, EventOrganizerUserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutGuestsInput
    upsert?: EventOrganizerUserUpsertWithoutGuestsInput
    connect?: EventOrganizerUserWhereUniqueInput
    update?: XOR<XOR<EventOrganizerUserUpdateToOneWithWhereWithoutGuestsInput, EventOrganizerUserUpdateWithoutGuestsInput>, EventOrganizerUserUncheckedUpdateWithoutGuestsInput>
  }

  export type EventOrganizerUserCreateNestedOneWithoutVenuesInput = {
    create?: XOR<EventOrganizerUserCreateWithoutVenuesInput, EventOrganizerUserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutVenuesInput
    connect?: EventOrganizerUserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventOrganizerUserUpdateOneRequiredWithoutVenuesNestedInput = {
    create?: XOR<EventOrganizerUserCreateWithoutVenuesInput, EventOrganizerUserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutVenuesInput
    upsert?: EventOrganizerUserUpsertWithoutVenuesInput
    connect?: EventOrganizerUserWhereUniqueInput
    update?: XOR<XOR<EventOrganizerUserUpdateToOneWithWhereWithoutVenuesInput, EventOrganizerUserUpdateWithoutVenuesInput>, EventOrganizerUserUncheckedUpdateWithoutVenuesInput>
  }

  export type EventOrganizerUserCreateNestedOneWithoutServiceProvidersInput = {
    create?: XOR<EventOrganizerUserCreateWithoutServiceProvidersInput, EventOrganizerUserUncheckedCreateWithoutServiceProvidersInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutServiceProvidersInput
    connect?: EventOrganizerUserWhereUniqueInput
  }

  export type EventOrganizerUserUpdateOneRequiredWithoutServiceProvidersNestedInput = {
    create?: XOR<EventOrganizerUserCreateWithoutServiceProvidersInput, EventOrganizerUserUncheckedCreateWithoutServiceProvidersInput>
    connectOrCreate?: EventOrganizerUserCreateOrConnectWithoutServiceProvidersInput
    upsert?: EventOrganizerUserUpsertWithoutServiceProvidersInput
    connect?: EventOrganizerUserWhereUniqueInput
    update?: XOR<XOR<EventOrganizerUserUpdateToOneWithWhereWithoutServiceProvidersInput, EventOrganizerUserUpdateWithoutServiceProvidersInput>, EventOrganizerUserUncheckedUpdateWithoutServiceProvidersInput>
  }

  export type LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput> | LanguageLearnerPlatformCreateWithoutOwnerInput[] | LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput | LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput[]
    createMany?: LanguageLearnerPlatformCreateManyOwnerInputEnvelope
    connect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
  }

  export type LanguageLearnerReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput> | LanguageLearnerReviewCreateWithoutUserInput[] | LanguageLearnerReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutUserInput | LanguageLearnerReviewCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerReviewCreateManyUserInputEnvelope
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
  }

  export type LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput> | LanguageLearnerUserVoteCreateWithoutVoterInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput | LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput[]
    createMany?: LanguageLearnerUserVoteCreateManyVoterInputEnvelope
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
  }

  export type LanguageLearnerUserVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput> | LanguageLearnerUserVoteCreateWithoutUserInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutUserInput | LanguageLearnerUserVoteCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerUserVoteCreateManyUserInputEnvelope
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
  }

  export type LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput> | LanguageLearnerReviewLikeCreateWithoutUserInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput | LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyUserInputEnvelope
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
  }

  export type LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput> | LanguageLearnerPlatformCreateWithoutOwnerInput[] | LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput | LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput[]
    createMany?: LanguageLearnerPlatformCreateManyOwnerInputEnvelope
    connect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
  }

  export type LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput> | LanguageLearnerReviewCreateWithoutUserInput[] | LanguageLearnerReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutUserInput | LanguageLearnerReviewCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerReviewCreateManyUserInputEnvelope
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
  }

  export type LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput> | LanguageLearnerUserVoteCreateWithoutVoterInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput | LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput[]
    createMany?: LanguageLearnerUserVoteCreateManyVoterInputEnvelope
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
  }

  export type LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput> | LanguageLearnerUserVoteCreateWithoutUserInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutUserInput | LanguageLearnerUserVoteCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerUserVoteCreateManyUserInputEnvelope
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
  }

  export type LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput> | LanguageLearnerReviewLikeCreateWithoutUserInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput | LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyUserInputEnvelope
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
  }

  export type LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput> | LanguageLearnerPlatformCreateWithoutOwnerInput[] | LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput | LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput[]
    upsert?: LanguageLearnerPlatformUpsertWithWhereUniqueWithoutOwnerInput | LanguageLearnerPlatformUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LanguageLearnerPlatformCreateManyOwnerInputEnvelope
    set?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    disconnect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    delete?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    connect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    update?: LanguageLearnerPlatformUpdateWithWhereUniqueWithoutOwnerInput | LanguageLearnerPlatformUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LanguageLearnerPlatformUpdateManyWithWhereWithoutOwnerInput | LanguageLearnerPlatformUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LanguageLearnerPlatformScalarWhereInput | LanguageLearnerPlatformScalarWhereInput[]
  }

  export type LanguageLearnerReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput> | LanguageLearnerReviewCreateWithoutUserInput[] | LanguageLearnerReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutUserInput | LanguageLearnerReviewCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerReviewUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerReviewCreateManyUserInputEnvelope
    set?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    delete?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    update?: LanguageLearnerReviewUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerReviewUpdateManyWithWhereWithoutUserInput | LanguageLearnerReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
  }

  export type LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput> | LanguageLearnerUserVoteCreateWithoutVoterInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput | LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput[]
    upsert?: LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutVoterInput | LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: LanguageLearnerUserVoteCreateManyVoterInputEnvelope
    set?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    disconnect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    delete?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    update?: LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutVoterInput | LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: LanguageLearnerUserVoteUpdateManyWithWhereWithoutVoterInput | LanguageLearnerUserVoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
  }

  export type LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput> | LanguageLearnerUserVoteCreateWithoutUserInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutUserInput | LanguageLearnerUserVoteCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerUserVoteCreateManyUserInputEnvelope
    set?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    disconnect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    delete?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    update?: LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerUserVoteUpdateManyWithWhereWithoutUserInput | LanguageLearnerUserVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
  }

  export type LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput> | LanguageLearnerReviewLikeCreateWithoutUserInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput | LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyUserInputEnvelope
    set?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    delete?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    update?: LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerReviewLikeUpdateManyWithWhereWithoutUserInput | LanguageLearnerReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
  }

  export type LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput> | LanguageLearnerPlatformCreateWithoutOwnerInput[] | LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput | LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput[]
    upsert?: LanguageLearnerPlatformUpsertWithWhereUniqueWithoutOwnerInput | LanguageLearnerPlatformUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LanguageLearnerPlatformCreateManyOwnerInputEnvelope
    set?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    disconnect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    delete?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    connect?: LanguageLearnerPlatformWhereUniqueInput | LanguageLearnerPlatformWhereUniqueInput[]
    update?: LanguageLearnerPlatformUpdateWithWhereUniqueWithoutOwnerInput | LanguageLearnerPlatformUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LanguageLearnerPlatformUpdateManyWithWhereWithoutOwnerInput | LanguageLearnerPlatformUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LanguageLearnerPlatformScalarWhereInput | LanguageLearnerPlatformScalarWhereInput[]
  }

  export type LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput> | LanguageLearnerReviewCreateWithoutUserInput[] | LanguageLearnerReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutUserInput | LanguageLearnerReviewCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerReviewUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerReviewCreateManyUserInputEnvelope
    set?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    delete?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    update?: LanguageLearnerReviewUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerReviewUpdateManyWithWhereWithoutUserInput | LanguageLearnerReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
  }

  export type LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput> | LanguageLearnerUserVoteCreateWithoutVoterInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput | LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput[]
    upsert?: LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutVoterInput | LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: LanguageLearnerUserVoteCreateManyVoterInputEnvelope
    set?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    disconnect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    delete?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    update?: LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutVoterInput | LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: LanguageLearnerUserVoteUpdateManyWithWhereWithoutVoterInput | LanguageLearnerUserVoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
  }

  export type LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput> | LanguageLearnerUserVoteCreateWithoutUserInput[] | LanguageLearnerUserVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerUserVoteCreateOrConnectWithoutUserInput | LanguageLearnerUserVoteCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerUserVoteCreateManyUserInputEnvelope
    set?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    disconnect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    delete?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    connect?: LanguageLearnerUserVoteWhereUniqueInput | LanguageLearnerUserVoteWhereUniqueInput[]
    update?: LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerUserVoteUpdateManyWithWhereWithoutUserInput | LanguageLearnerUserVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput> | LanguageLearnerReviewLikeCreateWithoutUserInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput | LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutUserInput | LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyUserInputEnvelope
    set?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    delete?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    update?: LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutUserInput | LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageLearnerReviewLikeUpdateManyWithWhereWithoutUserInput | LanguageLearnerReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
  }

  export type LanguageLearnerUserCreateNestedOneWithoutOwnedPlatformsInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedCreateWithoutOwnedPlatformsInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutOwnedPlatformsInput
    connect?: LanguageLearnerUserWhereUniqueInput
  }

  export type LanguageLearnerReviewCreateNestedManyWithoutPlatformInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput> | LanguageLearnerReviewCreateWithoutPlatformInput[] | LanguageLearnerReviewUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutPlatformInput | LanguageLearnerReviewCreateOrConnectWithoutPlatformInput[]
    createMany?: LanguageLearnerReviewCreateManyPlatformInputEnvelope
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
  }

  export type LanguageLearnerReviewUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput> | LanguageLearnerReviewCreateWithoutPlatformInput[] | LanguageLearnerReviewUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutPlatformInput | LanguageLearnerReviewCreateOrConnectWithoutPlatformInput[]
    createMany?: LanguageLearnerReviewCreateManyPlatformInputEnvelope
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
  }

  export type LanguageLearnerUserUpdateOneRequiredWithoutOwnedPlatformsNestedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedCreateWithoutOwnedPlatformsInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutOwnedPlatformsInput
    upsert?: LanguageLearnerUserUpsertWithoutOwnedPlatformsInput
    connect?: LanguageLearnerUserWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerUserUpdateToOneWithWhereWithoutOwnedPlatformsInput, LanguageLearnerUserUpdateWithoutOwnedPlatformsInput>, LanguageLearnerUserUncheckedUpdateWithoutOwnedPlatformsInput>
  }

  export type LanguageLearnerReviewUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput> | LanguageLearnerReviewCreateWithoutPlatformInput[] | LanguageLearnerReviewUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutPlatformInput | LanguageLearnerReviewCreateOrConnectWithoutPlatformInput[]
    upsert?: LanguageLearnerReviewUpsertWithWhereUniqueWithoutPlatformInput | LanguageLearnerReviewUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: LanguageLearnerReviewCreateManyPlatformInputEnvelope
    set?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    delete?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    update?: LanguageLearnerReviewUpdateWithWhereUniqueWithoutPlatformInput | LanguageLearnerReviewUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: LanguageLearnerReviewUpdateManyWithWhereWithoutPlatformInput | LanguageLearnerReviewUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
  }

  export type LanguageLearnerReviewUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput> | LanguageLearnerReviewCreateWithoutPlatformInput[] | LanguageLearnerReviewUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutPlatformInput | LanguageLearnerReviewCreateOrConnectWithoutPlatformInput[]
    upsert?: LanguageLearnerReviewUpsertWithWhereUniqueWithoutPlatformInput | LanguageLearnerReviewUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: LanguageLearnerReviewCreateManyPlatformInputEnvelope
    set?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    delete?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    connect?: LanguageLearnerReviewWhereUniqueInput | LanguageLearnerReviewWhereUniqueInput[]
    update?: LanguageLearnerReviewUpdateWithWhereUniqueWithoutPlatformInput | LanguageLearnerReviewUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: LanguageLearnerReviewUpdateManyWithWhereWithoutPlatformInput | LanguageLearnerReviewUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
  }

  export type LanguageLearnerPlatformCreateNestedOneWithoutReviewsInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutReviewsInput, LanguageLearnerPlatformUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutReviewsInput
    connect?: LanguageLearnerPlatformWhereUniqueInput
  }

  export type LanguageLearnerUserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutReviewsInput, LanguageLearnerUserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutReviewsInput
    connect?: LanguageLearnerUserWhereUniqueInput
  }

  export type LanguageLearnerReviewLikeCreateNestedManyWithoutReviewInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput> | LanguageLearnerReviewLikeCreateWithoutReviewInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput | LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyReviewInputEnvelope
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
  }

  export type LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput> | LanguageLearnerReviewLikeCreateWithoutReviewInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput | LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyReviewInputEnvelope
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
  }

  export type LanguageLearnerPlatformUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<LanguageLearnerPlatformCreateWithoutReviewsInput, LanguageLearnerPlatformUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguageLearnerPlatformCreateOrConnectWithoutReviewsInput
    upsert?: LanguageLearnerPlatformUpsertWithoutReviewsInput
    connect?: LanguageLearnerPlatformWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerPlatformUpdateToOneWithWhereWithoutReviewsInput, LanguageLearnerPlatformUpdateWithoutReviewsInput>, LanguageLearnerPlatformUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguageLearnerUserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutReviewsInput, LanguageLearnerUserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutReviewsInput
    upsert?: LanguageLearnerUserUpsertWithoutReviewsInput
    connect?: LanguageLearnerUserWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerUserUpdateToOneWithWhereWithoutReviewsInput, LanguageLearnerUserUpdateWithoutReviewsInput>, LanguageLearnerUserUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguageLearnerReviewLikeUpdateManyWithoutReviewNestedInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput> | LanguageLearnerReviewLikeCreateWithoutReviewInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput | LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutReviewInput | LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyReviewInputEnvelope
    set?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    delete?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    update?: LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutReviewInput | LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: LanguageLearnerReviewLikeUpdateManyWithWhereWithoutReviewInput | LanguageLearnerReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput> | LanguageLearnerReviewLikeCreateWithoutReviewInput[] | LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput | LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutReviewInput | LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: LanguageLearnerReviewLikeCreateManyReviewInputEnvelope
    set?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    disconnect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    delete?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    connect?: LanguageLearnerReviewLikeWhereUniqueInput | LanguageLearnerReviewLikeWhereUniqueInput[]
    update?: LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutReviewInput | LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: LanguageLearnerReviewLikeUpdateManyWithWhereWithoutReviewInput | LanguageLearnerReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
  }

  export type LanguageLearnerUserCreateNestedOneWithoutLikesInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutLikesInput, LanguageLearnerUserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutLikesInput
    connect?: LanguageLearnerUserWhereUniqueInput
  }

  export type LanguageLearnerReviewCreateNestedOneWithoutLikesInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutLikesInput, LanguageLearnerReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutLikesInput
    connect?: LanguageLearnerReviewWhereUniqueInput
  }

  export type LanguageLearnerUserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutLikesInput, LanguageLearnerUserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutLikesInput
    upsert?: LanguageLearnerUserUpsertWithoutLikesInput
    connect?: LanguageLearnerUserWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerUserUpdateToOneWithWhereWithoutLikesInput, LanguageLearnerUserUpdateWithoutLikesInput>, LanguageLearnerUserUncheckedUpdateWithoutLikesInput>
  }

  export type LanguageLearnerReviewUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<LanguageLearnerReviewCreateWithoutLikesInput, LanguageLearnerReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: LanguageLearnerReviewCreateOrConnectWithoutLikesInput
    upsert?: LanguageLearnerReviewUpsertWithoutLikesInput
    connect?: LanguageLearnerReviewWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerReviewUpdateToOneWithWhereWithoutLikesInput, LanguageLearnerReviewUpdateWithoutLikesInput>, LanguageLearnerReviewUncheckedUpdateWithoutLikesInput>
  }

  export type LanguageLearnerUserCreateNestedOneWithoutVotesReceivedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedCreateWithoutVotesReceivedInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutVotesReceivedInput
    connect?: LanguageLearnerUserWhereUniqueInput
  }

  export type LanguageLearnerUserCreateNestedOneWithoutVotesGivenInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutVotesGivenInput, LanguageLearnerUserUncheckedCreateWithoutVotesGivenInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutVotesGivenInput
    connect?: LanguageLearnerUserWhereUniqueInput
  }

  export type LanguageLearnerUserUpdateOneRequiredWithoutVotesReceivedNestedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedCreateWithoutVotesReceivedInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutVotesReceivedInput
    upsert?: LanguageLearnerUserUpsertWithoutVotesReceivedInput
    connect?: LanguageLearnerUserWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerUserUpdateToOneWithWhereWithoutVotesReceivedInput, LanguageLearnerUserUpdateWithoutVotesReceivedInput>, LanguageLearnerUserUncheckedUpdateWithoutVotesReceivedInput>
  }

  export type LanguageLearnerUserUpdateOneRequiredWithoutVotesGivenNestedInput = {
    create?: XOR<LanguageLearnerUserCreateWithoutVotesGivenInput, LanguageLearnerUserUncheckedCreateWithoutVotesGivenInput>
    connectOrCreate?: LanguageLearnerUserCreateOrConnectWithoutVotesGivenInput
    upsert?: LanguageLearnerUserUpsertWithoutVotesGivenInput
    connect?: LanguageLearnerUserWhereUniqueInput
    update?: XOR<XOR<LanguageLearnerUserUpdateToOneWithWhereWithoutVotesGivenInput, LanguageLearnerUserUpdateWithoutVotesGivenInput>, LanguageLearnerUserUncheckedUpdateWithoutVotesGivenInput>
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

  export type EventOrganizerTaskCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerTaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerTaskCreateOrConnectWithoutUserInput = {
    where: EventOrganizerTaskWhereUniqueInput
    create: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerTaskCreateManyUserInputEnvelope = {
    data: EventOrganizerTaskCreateManyUserInput | EventOrganizerTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventOrganizerGuestCreateWithoutUserInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerGuestUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerGuestCreateOrConnectWithoutUserInput = {
    where: EventOrganizerGuestWhereUniqueInput
    create: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerGuestCreateManyUserInputEnvelope = {
    data: EventOrganizerGuestCreateManyUserInput | EventOrganizerGuestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventOrganizerVenueCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    createdAt?: Date | string
  }

  export type EventOrganizerVenueUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    createdAt?: Date | string
  }

  export type EventOrganizerVenueCreateOrConnectWithoutUserInput = {
    where: EventOrganizerVenueWhereUniqueInput
    create: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerVenueCreateManyUserInputEnvelope = {
    data: EventOrganizerVenueCreateManyUserInput | EventOrganizerVenueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventOrganizerServiceProviderCreateWithoutUserInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type EventOrganizerServiceProviderUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type EventOrganizerServiceProviderCreateOrConnectWithoutUserInput = {
    where: EventOrganizerServiceProviderWhereUniqueInput
    create: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerServiceProviderCreateManyUserInputEnvelope = {
    data: EventOrganizerServiceProviderCreateManyUserInput | EventOrganizerServiceProviderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventOrganizerTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerTaskWhereUniqueInput
    update: XOR<EventOrganizerTaskUpdateWithoutUserInput, EventOrganizerTaskUncheckedUpdateWithoutUserInput>
    create: XOR<EventOrganizerTaskCreateWithoutUserInput, EventOrganizerTaskUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerTaskWhereUniqueInput
    data: XOR<EventOrganizerTaskUpdateWithoutUserInput, EventOrganizerTaskUncheckedUpdateWithoutUserInput>
  }

  export type EventOrganizerTaskUpdateManyWithWhereWithoutUserInput = {
    where: EventOrganizerTaskScalarWhereInput
    data: XOR<EventOrganizerTaskUpdateManyMutationInput, EventOrganizerTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type EventOrganizerTaskScalarWhereInput = {
    AND?: EventOrganizerTaskScalarWhereInput | EventOrganizerTaskScalarWhereInput[]
    OR?: EventOrganizerTaskScalarWhereInput[]
    NOT?: EventOrganizerTaskScalarWhereInput | EventOrganizerTaskScalarWhereInput[]
    id?: StringFilter<"EventOrganizerTask"> | string
    title?: StringFilter<"EventOrganizerTask"> | string
    description?: StringFilter<"EventOrganizerTask"> | string
    dueDate?: DateTimeFilter<"EventOrganizerTask"> | Date | string
    status?: StringFilter<"EventOrganizerTask"> | string
    userId?: StringFilter<"EventOrganizerTask"> | string
    createdAt?: DateTimeFilter<"EventOrganizerTask"> | Date | string
  }

  export type EventOrganizerGuestUpsertWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerGuestWhereUniqueInput
    update: XOR<EventOrganizerGuestUpdateWithoutUserInput, EventOrganizerGuestUncheckedUpdateWithoutUserInput>
    create: XOR<EventOrganizerGuestCreateWithoutUserInput, EventOrganizerGuestUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerGuestUpdateWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerGuestWhereUniqueInput
    data: XOR<EventOrganizerGuestUpdateWithoutUserInput, EventOrganizerGuestUncheckedUpdateWithoutUserInput>
  }

  export type EventOrganizerGuestUpdateManyWithWhereWithoutUserInput = {
    where: EventOrganizerGuestScalarWhereInput
    data: XOR<EventOrganizerGuestUpdateManyMutationInput, EventOrganizerGuestUncheckedUpdateManyWithoutUserInput>
  }

  export type EventOrganizerGuestScalarWhereInput = {
    AND?: EventOrganizerGuestScalarWhereInput | EventOrganizerGuestScalarWhereInput[]
    OR?: EventOrganizerGuestScalarWhereInput[]
    NOT?: EventOrganizerGuestScalarWhereInput | EventOrganizerGuestScalarWhereInput[]
    id?: StringFilter<"EventOrganizerGuest"> | string
    eventId?: StringFilter<"EventOrganizerGuest"> | string
    name?: StringFilter<"EventOrganizerGuest"> | string
    email?: StringFilter<"EventOrganizerGuest"> | string
    phone?: StringFilter<"EventOrganizerGuest"> | string
    status?: StringFilter<"EventOrganizerGuest"> | string
    userId?: StringFilter<"EventOrganizerGuest"> | string
    createdAt?: DateTimeFilter<"EventOrganizerGuest"> | Date | string
  }

  export type EventOrganizerVenueUpsertWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerVenueWhereUniqueInput
    update: XOR<EventOrganizerVenueUpdateWithoutUserInput, EventOrganizerVenueUncheckedUpdateWithoutUserInput>
    create: XOR<EventOrganizerVenueCreateWithoutUserInput, EventOrganizerVenueUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerVenueUpdateWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerVenueWhereUniqueInput
    data: XOR<EventOrganizerVenueUpdateWithoutUserInput, EventOrganizerVenueUncheckedUpdateWithoutUserInput>
  }

  export type EventOrganizerVenueUpdateManyWithWhereWithoutUserInput = {
    where: EventOrganizerVenueScalarWhereInput
    data: XOR<EventOrganizerVenueUpdateManyMutationInput, EventOrganizerVenueUncheckedUpdateManyWithoutUserInput>
  }

  export type EventOrganizerVenueScalarWhereInput = {
    AND?: EventOrganizerVenueScalarWhereInput | EventOrganizerVenueScalarWhereInput[]
    OR?: EventOrganizerVenueScalarWhereInput[]
    NOT?: EventOrganizerVenueScalarWhereInput | EventOrganizerVenueScalarWhereInput[]
    id?: StringFilter<"EventOrganizerVenue"> | string
    name?: StringFilter<"EventOrganizerVenue"> | string
    location?: StringFilter<"EventOrganizerVenue"> | string
    capacity?: IntFilter<"EventOrganizerVenue"> | number
    amenities?: StringFilter<"EventOrganizerVenue"> | string
    submittedBy?: StringFilter<"EventOrganizerVenue"> | string
    createdAt?: DateTimeFilter<"EventOrganizerVenue"> | Date | string
  }

  export type EventOrganizerServiceProviderUpsertWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerServiceProviderWhereUniqueInput
    update: XOR<EventOrganizerServiceProviderUpdateWithoutUserInput, EventOrganizerServiceProviderUncheckedUpdateWithoutUserInput>
    create: XOR<EventOrganizerServiceProviderCreateWithoutUserInput, EventOrganizerServiceProviderUncheckedCreateWithoutUserInput>
  }

  export type EventOrganizerServiceProviderUpdateWithWhereUniqueWithoutUserInput = {
    where: EventOrganizerServiceProviderWhereUniqueInput
    data: XOR<EventOrganizerServiceProviderUpdateWithoutUserInput, EventOrganizerServiceProviderUncheckedUpdateWithoutUserInput>
  }

  export type EventOrganizerServiceProviderUpdateManyWithWhereWithoutUserInput = {
    where: EventOrganizerServiceProviderScalarWhereInput
    data: XOR<EventOrganizerServiceProviderUpdateManyMutationInput, EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserInput>
  }

  export type EventOrganizerServiceProviderScalarWhereInput = {
    AND?: EventOrganizerServiceProviderScalarWhereInput | EventOrganizerServiceProviderScalarWhereInput[]
    OR?: EventOrganizerServiceProviderScalarWhereInput[]
    NOT?: EventOrganizerServiceProviderScalarWhereInput | EventOrganizerServiceProviderScalarWhereInput[]
    id?: StringFilter<"EventOrganizerServiceProvider"> | string
    name?: StringFilter<"EventOrganizerServiceProvider"> | string
    serviceType?: StringFilter<"EventOrganizerServiceProvider"> | string
    contactInfo?: StringFilter<"EventOrganizerServiceProvider"> | string
    submittedBy?: StringFilter<"EventOrganizerServiceProvider"> | string
    createdAt?: DateTimeFilter<"EventOrganizerServiceProvider"> | Date | string
  }

  export type EventOrganizerUserCreateWithoutTasksInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    guests?: EventOrganizerGuestCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    guests?: EventOrganizerGuestUncheckedCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueUncheckedCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserCreateOrConnectWithoutTasksInput = {
    where: EventOrganizerUserWhereUniqueInput
    create: XOR<EventOrganizerUserCreateWithoutTasksInput, EventOrganizerUserUncheckedCreateWithoutTasksInput>
  }

  export type EventOrganizerUserUpsertWithoutTasksInput = {
    update: XOR<EventOrganizerUserUpdateWithoutTasksInput, EventOrganizerUserUncheckedUpdateWithoutTasksInput>
    create: XOR<EventOrganizerUserCreateWithoutTasksInput, EventOrganizerUserUncheckedCreateWithoutTasksInput>
    where?: EventOrganizerUserWhereInput
  }

  export type EventOrganizerUserUpdateToOneWithWhereWithoutTasksInput = {
    where?: EventOrganizerUserWhereInput
    data: XOR<EventOrganizerUserUpdateWithoutTasksInput, EventOrganizerUserUncheckedUpdateWithoutTasksInput>
  }

  export type EventOrganizerUserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: EventOrganizerGuestUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: EventOrganizerGuestUncheckedUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUncheckedUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserCreateWithoutGuestsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUncheckedCreateWithoutGuestsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskUncheckedCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueUncheckedCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserCreateOrConnectWithoutGuestsInput = {
    where: EventOrganizerUserWhereUniqueInput
    create: XOR<EventOrganizerUserCreateWithoutGuestsInput, EventOrganizerUserUncheckedCreateWithoutGuestsInput>
  }

  export type EventOrganizerUserUpsertWithoutGuestsInput = {
    update: XOR<EventOrganizerUserUpdateWithoutGuestsInput, EventOrganizerUserUncheckedUpdateWithoutGuestsInput>
    create: XOR<EventOrganizerUserCreateWithoutGuestsInput, EventOrganizerUserUncheckedCreateWithoutGuestsInput>
    where?: EventOrganizerUserWhereInput
  }

  export type EventOrganizerUserUpdateToOneWithWhereWithoutGuestsInput = {
    where?: EventOrganizerUserWhereInput
    data: XOR<EventOrganizerUserUpdateWithoutGuestsInput, EventOrganizerUserUncheckedUpdateWithoutGuestsInput>
  }

  export type EventOrganizerUserUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUncheckedUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUncheckedUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserCreateWithoutVenuesInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUncheckedCreateWithoutVenuesInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskUncheckedCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestUncheckedCreateNestedManyWithoutUserInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserCreateOrConnectWithoutVenuesInput = {
    where: EventOrganizerUserWhereUniqueInput
    create: XOR<EventOrganizerUserCreateWithoutVenuesInput, EventOrganizerUserUncheckedCreateWithoutVenuesInput>
  }

  export type EventOrganizerUserUpsertWithoutVenuesInput = {
    update: XOR<EventOrganizerUserUpdateWithoutVenuesInput, EventOrganizerUserUncheckedUpdateWithoutVenuesInput>
    create: XOR<EventOrganizerUserCreateWithoutVenuesInput, EventOrganizerUserUncheckedCreateWithoutVenuesInput>
    where?: EventOrganizerUserWhereInput
  }

  export type EventOrganizerUserUpdateToOneWithWhereWithoutVenuesInput = {
    where?: EventOrganizerUserWhereInput
    data: XOR<EventOrganizerUserUpdateWithoutVenuesInput, EventOrganizerUserUncheckedUpdateWithoutVenuesInput>
  }

  export type EventOrganizerUserUpdateWithoutVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserUncheckedUpdateWithoutVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUncheckedUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUncheckedUpdateManyWithoutUserNestedInput
    serviceProviders?: EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserCreateWithoutServiceProvidersInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserUncheckedCreateWithoutServiceProvidersInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    tasks?: EventOrganizerTaskUncheckedCreateNestedManyWithoutUserInput
    guests?: EventOrganizerGuestUncheckedCreateNestedManyWithoutUserInput
    venues?: EventOrganizerVenueUncheckedCreateNestedManyWithoutUserInput
  }

  export type EventOrganizerUserCreateOrConnectWithoutServiceProvidersInput = {
    where: EventOrganizerUserWhereUniqueInput
    create: XOR<EventOrganizerUserCreateWithoutServiceProvidersInput, EventOrganizerUserUncheckedCreateWithoutServiceProvidersInput>
  }

  export type EventOrganizerUserUpsertWithoutServiceProvidersInput = {
    update: XOR<EventOrganizerUserUpdateWithoutServiceProvidersInput, EventOrganizerUserUncheckedUpdateWithoutServiceProvidersInput>
    create: XOR<EventOrganizerUserCreateWithoutServiceProvidersInput, EventOrganizerUserUncheckedCreateWithoutServiceProvidersInput>
    where?: EventOrganizerUserWhereInput
  }

  export type EventOrganizerUserUpdateToOneWithWhereWithoutServiceProvidersInput = {
    where?: EventOrganizerUserWhereInput
    data: XOR<EventOrganizerUserUpdateWithoutServiceProvidersInput, EventOrganizerUserUncheckedUpdateWithoutServiceProvidersInput>
  }

  export type EventOrganizerUserUpdateWithoutServiceProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerUserUncheckedUpdateWithoutServiceProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: EventOrganizerTaskUncheckedUpdateManyWithoutUserNestedInput
    guests?: EventOrganizerGuestUncheckedUpdateManyWithoutUserNestedInput
    venues?: EventOrganizerVenueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerPlatformCreateWithoutOwnerInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    status?: string
    createdAt?: Date | string
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutPlatformInput
  }

  export type LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    status?: string
    createdAt?: Date | string
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type LanguageLearnerPlatformCreateOrConnectWithoutOwnerInput = {
    where: LanguageLearnerPlatformWhereUniqueInput
    create: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput>
  }

  export type LanguageLearnerPlatformCreateManyOwnerInputEnvelope = {
    data: LanguageLearnerPlatformCreateManyOwnerInput | LanguageLearnerPlatformCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    platform: LanguageLearnerPlatformCreateNestedOneWithoutReviewsInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewUncheckedCreateWithoutUserInput = {
    id?: string
    platformId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewCreateOrConnectWithoutUserInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    create: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerReviewCreateManyUserInputEnvelope = {
    data: LanguageLearnerReviewCreateManyUserInput | LanguageLearnerReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerUserVoteCreateWithoutVoterInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    user: LanguageLearnerUserCreateNestedOneWithoutVotesReceivedInput
  }

  export type LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput = {
    id?: string
    userId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteCreateOrConnectWithoutVoterInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    create: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput>
  }

  export type LanguageLearnerUserVoteCreateManyVoterInputEnvelope = {
    data: LanguageLearnerUserVoteCreateManyVoterInput | LanguageLearnerUserVoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerUserVoteCreateWithoutUserInput = {
    id?: string
    voteType: string
    createdAt?: Date | string
    voter: LanguageLearnerUserCreateNestedOneWithoutVotesGivenInput
  }

  export type LanguageLearnerUserVoteUncheckedCreateWithoutUserInput = {
    id?: string
    voterId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteCreateOrConnectWithoutUserInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    create: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerUserVoteCreateManyUserInputEnvelope = {
    data: LanguageLearnerUserVoteCreateManyUserInput | LanguageLearnerUserVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerReviewLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    review: LanguageLearnerReviewCreateNestedOneWithoutLikesInput
  }

  export type LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeCreateOrConnectWithoutUserInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    create: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerReviewLikeCreateManyUserInputEnvelope = {
    data: LanguageLearnerReviewLikeCreateManyUserInput | LanguageLearnerReviewLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerPlatformUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LanguageLearnerPlatformWhereUniqueInput
    update: XOR<LanguageLearnerPlatformUpdateWithoutOwnerInput, LanguageLearnerPlatformUncheckedUpdateWithoutOwnerInput>
    create: XOR<LanguageLearnerPlatformCreateWithoutOwnerInput, LanguageLearnerPlatformUncheckedCreateWithoutOwnerInput>
  }

  export type LanguageLearnerPlatformUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LanguageLearnerPlatformWhereUniqueInput
    data: XOR<LanguageLearnerPlatformUpdateWithoutOwnerInput, LanguageLearnerPlatformUncheckedUpdateWithoutOwnerInput>
  }

  export type LanguageLearnerPlatformUpdateManyWithWhereWithoutOwnerInput = {
    where: LanguageLearnerPlatformScalarWhereInput
    data: XOR<LanguageLearnerPlatformUpdateManyMutationInput, LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LanguageLearnerPlatformScalarWhereInput = {
    AND?: LanguageLearnerPlatformScalarWhereInput | LanguageLearnerPlatformScalarWhereInput[]
    OR?: LanguageLearnerPlatformScalarWhereInput[]
    NOT?: LanguageLearnerPlatformScalarWhereInput | LanguageLearnerPlatformScalarWhereInput[]
    id?: StringFilter<"LanguageLearnerPlatform"> | string
    name?: StringFilter<"LanguageLearnerPlatform"> | string
    website?: StringFilter<"LanguageLearnerPlatform"> | string
    languagesOffered?: StringFilter<"LanguageLearnerPlatform"> | string
    description?: StringFilter<"LanguageLearnerPlatform"> | string
    ownerId?: StringFilter<"LanguageLearnerPlatform"> | string
    status?: StringFilter<"LanguageLearnerPlatform"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerPlatform"> | Date | string
  }

  export type LanguageLearnerReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    update: XOR<LanguageLearnerReviewUpdateWithoutUserInput, LanguageLearnerReviewUncheckedUpdateWithoutUserInput>
    create: XOR<LanguageLearnerReviewCreateWithoutUserInput, LanguageLearnerReviewUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    data: XOR<LanguageLearnerReviewUpdateWithoutUserInput, LanguageLearnerReviewUncheckedUpdateWithoutUserInput>
  }

  export type LanguageLearnerReviewUpdateManyWithWhereWithoutUserInput = {
    where: LanguageLearnerReviewScalarWhereInput
    data: XOR<LanguageLearnerReviewUpdateManyMutationInput, LanguageLearnerReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type LanguageLearnerReviewScalarWhereInput = {
    AND?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
    OR?: LanguageLearnerReviewScalarWhereInput[]
    NOT?: LanguageLearnerReviewScalarWhereInput | LanguageLearnerReviewScalarWhereInput[]
    id?: StringFilter<"LanguageLearnerReview"> | string
    platformId?: StringFilter<"LanguageLearnerReview"> | string
    userId?: StringFilter<"LanguageLearnerReview"> | string
    rating?: IntFilter<"LanguageLearnerReview"> | number
    comment?: StringFilter<"LanguageLearnerReview"> | string
    status?: StringFilter<"LanguageLearnerReview"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReview"> | Date | string
  }

  export type LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    update: XOR<LanguageLearnerUserVoteUpdateWithoutVoterInput, LanguageLearnerUserVoteUncheckedUpdateWithoutVoterInput>
    create: XOR<LanguageLearnerUserVoteCreateWithoutVoterInput, LanguageLearnerUserVoteUncheckedCreateWithoutVoterInput>
  }

  export type LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    data: XOR<LanguageLearnerUserVoteUpdateWithoutVoterInput, LanguageLearnerUserVoteUncheckedUpdateWithoutVoterInput>
  }

  export type LanguageLearnerUserVoteUpdateManyWithWhereWithoutVoterInput = {
    where: LanguageLearnerUserVoteScalarWhereInput
    data: XOR<LanguageLearnerUserVoteUpdateManyMutationInput, LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type LanguageLearnerUserVoteScalarWhereInput = {
    AND?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
    OR?: LanguageLearnerUserVoteScalarWhereInput[]
    NOT?: LanguageLearnerUserVoteScalarWhereInput | LanguageLearnerUserVoteScalarWhereInput[]
    id?: StringFilter<"LanguageLearnerUserVote"> | string
    userId?: StringFilter<"LanguageLearnerUserVote"> | string
    voterId?: StringFilter<"LanguageLearnerUserVote"> | string
    voteType?: StringFilter<"LanguageLearnerUserVote"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerUserVote"> | Date | string
  }

  export type LanguageLearnerUserVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    update: XOR<LanguageLearnerUserVoteUpdateWithoutUserInput, LanguageLearnerUserVoteUncheckedUpdateWithoutUserInput>
    create: XOR<LanguageLearnerUserVoteCreateWithoutUserInput, LanguageLearnerUserVoteUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerUserVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerUserVoteWhereUniqueInput
    data: XOR<LanguageLearnerUserVoteUpdateWithoutUserInput, LanguageLearnerUserVoteUncheckedUpdateWithoutUserInput>
  }

  export type LanguageLearnerUserVoteUpdateManyWithWhereWithoutUserInput = {
    where: LanguageLearnerUserVoteScalarWhereInput
    data: XOR<LanguageLearnerUserVoteUpdateManyMutationInput, LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    update: XOR<LanguageLearnerReviewLikeUpdateWithoutUserInput, LanguageLearnerReviewLikeUncheckedUpdateWithoutUserInput>
    create: XOR<LanguageLearnerReviewLikeCreateWithoutUserInput, LanguageLearnerReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    data: XOR<LanguageLearnerReviewLikeUpdateWithoutUserInput, LanguageLearnerReviewLikeUncheckedUpdateWithoutUserInput>
  }

  export type LanguageLearnerReviewLikeUpdateManyWithWhereWithoutUserInput = {
    where: LanguageLearnerReviewLikeScalarWhereInput
    data: XOR<LanguageLearnerReviewLikeUpdateManyMutationInput, LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LanguageLearnerReviewLikeScalarWhereInput = {
    AND?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
    OR?: LanguageLearnerReviewLikeScalarWhereInput[]
    NOT?: LanguageLearnerReviewLikeScalarWhereInput | LanguageLearnerReviewLikeScalarWhereInput[]
    id?: StringFilter<"LanguageLearnerReviewLike"> | string
    userId?: StringFilter<"LanguageLearnerReviewLike"> | string
    reviewId?: StringFilter<"LanguageLearnerReviewLike"> | string
    createdAt?: DateTimeFilter<"LanguageLearnerReviewLike"> | Date | string
  }

  export type LanguageLearnerUserCreateWithoutOwnedPlatformsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateWithoutOwnedPlatformsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserCreateOrConnectWithoutOwnedPlatformsInput = {
    where: LanguageLearnerUserWhereUniqueInput
    create: XOR<LanguageLearnerUserCreateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedCreateWithoutOwnedPlatformsInput>
  }

  export type LanguageLearnerReviewCreateWithoutPlatformInput = {
    id?: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    user: LanguageLearnerUserCreateNestedOneWithoutReviewsInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewUncheckedCreateWithoutPlatformInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type LanguageLearnerReviewCreateOrConnectWithoutPlatformInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    create: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput>
  }

  export type LanguageLearnerReviewCreateManyPlatformInputEnvelope = {
    data: LanguageLearnerReviewCreateManyPlatformInput | LanguageLearnerReviewCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerUserUpsertWithoutOwnedPlatformsInput = {
    update: XOR<LanguageLearnerUserUpdateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedUpdateWithoutOwnedPlatformsInput>
    create: XOR<LanguageLearnerUserCreateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedCreateWithoutOwnedPlatformsInput>
    where?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerUserUpdateToOneWithWhereWithoutOwnedPlatformsInput = {
    where?: LanguageLearnerUserWhereInput
    data: XOR<LanguageLearnerUserUpdateWithoutOwnedPlatformsInput, LanguageLearnerUserUncheckedUpdateWithoutOwnedPlatformsInput>
  }

  export type LanguageLearnerUserUpdateWithoutOwnedPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: LanguageLearnerReviewUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateWithoutOwnedPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerReviewUpsertWithWhereUniqueWithoutPlatformInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    update: XOR<LanguageLearnerReviewUpdateWithoutPlatformInput, LanguageLearnerReviewUncheckedUpdateWithoutPlatformInput>
    create: XOR<LanguageLearnerReviewCreateWithoutPlatformInput, LanguageLearnerReviewUncheckedCreateWithoutPlatformInput>
  }

  export type LanguageLearnerReviewUpdateWithWhereUniqueWithoutPlatformInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    data: XOR<LanguageLearnerReviewUpdateWithoutPlatformInput, LanguageLearnerReviewUncheckedUpdateWithoutPlatformInput>
  }

  export type LanguageLearnerReviewUpdateManyWithWhereWithoutPlatformInput = {
    where: LanguageLearnerReviewScalarWhereInput
    data: XOR<LanguageLearnerReviewUpdateManyMutationInput, LanguageLearnerReviewUncheckedUpdateManyWithoutPlatformInput>
  }

  export type LanguageLearnerPlatformCreateWithoutReviewsInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    status?: string
    createdAt?: Date | string
    owner: LanguageLearnerUserCreateNestedOneWithoutOwnedPlatformsInput
  }

  export type LanguageLearnerPlatformUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerPlatformCreateOrConnectWithoutReviewsInput = {
    where: LanguageLearnerPlatformWhereUniqueInput
    create: XOR<LanguageLearnerPlatformCreateWithoutReviewsInput, LanguageLearnerPlatformUncheckedCreateWithoutReviewsInput>
  }

  export type LanguageLearnerUserCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput
    votesGiven?: LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput
    votesGiven?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserCreateOrConnectWithoutReviewsInput = {
    where: LanguageLearnerUserWhereUniqueInput
    create: XOR<LanguageLearnerUserCreateWithoutReviewsInput, LanguageLearnerUserUncheckedCreateWithoutReviewsInput>
  }

  export type LanguageLearnerReviewLikeCreateWithoutReviewInput = {
    id?: string
    createdAt?: Date | string
    user: LanguageLearnerUserCreateNestedOneWithoutLikesInput
  }

  export type LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeCreateOrConnectWithoutReviewInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    create: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type LanguageLearnerReviewLikeCreateManyReviewInputEnvelope = {
    data: LanguageLearnerReviewLikeCreateManyReviewInput | LanguageLearnerReviewLikeCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type LanguageLearnerPlatformUpsertWithoutReviewsInput = {
    update: XOR<LanguageLearnerPlatformUpdateWithoutReviewsInput, LanguageLearnerPlatformUncheckedUpdateWithoutReviewsInput>
    create: XOR<LanguageLearnerPlatformCreateWithoutReviewsInput, LanguageLearnerPlatformUncheckedCreateWithoutReviewsInput>
    where?: LanguageLearnerPlatformWhereInput
  }

  export type LanguageLearnerPlatformUpdateToOneWithWhereWithoutReviewsInput = {
    where?: LanguageLearnerPlatformWhereInput
    data: XOR<LanguageLearnerPlatformUpdateWithoutReviewsInput, LanguageLearnerPlatformUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguageLearnerPlatformUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: LanguageLearnerUserUpdateOneRequiredWithoutOwnedPlatformsNestedInput
  }

  export type LanguageLearnerPlatformUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserUpsertWithoutReviewsInput = {
    update: XOR<LanguageLearnerUserUpdateWithoutReviewsInput, LanguageLearnerUserUncheckedUpdateWithoutReviewsInput>
    create: XOR<LanguageLearnerUserCreateWithoutReviewsInput, LanguageLearnerUserUncheckedCreateWithoutReviewsInput>
    where?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerUserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: LanguageLearnerUserWhereInput
    data: XOR<LanguageLearnerUserUpdateWithoutReviewsInput, LanguageLearnerUserUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguageLearnerUserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput
    votesGiven?: LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput
    votesGiven?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerReviewLikeUpsertWithWhereUniqueWithoutReviewInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    update: XOR<LanguageLearnerReviewLikeUpdateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedUpdateWithoutReviewInput>
    create: XOR<LanguageLearnerReviewLikeCreateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type LanguageLearnerReviewLikeUpdateWithWhereUniqueWithoutReviewInput = {
    where: LanguageLearnerReviewLikeWhereUniqueInput
    data: XOR<LanguageLearnerReviewLikeUpdateWithoutReviewInput, LanguageLearnerReviewLikeUncheckedUpdateWithoutReviewInput>
  }

  export type LanguageLearnerReviewLikeUpdateManyWithWhereWithoutReviewInput = {
    where: LanguageLearnerReviewLikeScalarWhereInput
    data: XOR<LanguageLearnerReviewLikeUpdateManyMutationInput, LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewInput>
  }

  export type LanguageLearnerUserCreateWithoutLikesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateWithoutLikesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput
    votesReceived?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserCreateOrConnectWithoutLikesInput = {
    where: LanguageLearnerUserWhereUniqueInput
    create: XOR<LanguageLearnerUserCreateWithoutLikesInput, LanguageLearnerUserUncheckedCreateWithoutLikesInput>
  }

  export type LanguageLearnerReviewCreateWithoutLikesInput = {
    id?: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
    platform: LanguageLearnerPlatformCreateNestedOneWithoutReviewsInput
    user: LanguageLearnerUserCreateNestedOneWithoutReviewsInput
  }

  export type LanguageLearnerReviewUncheckedCreateWithoutLikesInput = {
    id?: string
    platformId: string
    userId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewCreateOrConnectWithoutLikesInput = {
    where: LanguageLearnerReviewWhereUniqueInput
    create: XOR<LanguageLearnerReviewCreateWithoutLikesInput, LanguageLearnerReviewUncheckedCreateWithoutLikesInput>
  }

  export type LanguageLearnerUserUpsertWithoutLikesInput = {
    update: XOR<LanguageLearnerUserUpdateWithoutLikesInput, LanguageLearnerUserUncheckedUpdateWithoutLikesInput>
    create: XOR<LanguageLearnerUserCreateWithoutLikesInput, LanguageLearnerUserUncheckedCreateWithoutLikesInput>
    where?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerUserUpdateToOneWithWhereWithoutLikesInput = {
    where?: LanguageLearnerUserWhereInput
    data: XOR<LanguageLearnerUserUpdateWithoutLikesInput, LanguageLearnerUserUncheckedUpdateWithoutLikesInput>
  }

  export type LanguageLearnerUserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput
    votesReceived?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerReviewUpsertWithoutLikesInput = {
    update: XOR<LanguageLearnerReviewUpdateWithoutLikesInput, LanguageLearnerReviewUncheckedUpdateWithoutLikesInput>
    create: XOR<LanguageLearnerReviewCreateWithoutLikesInput, LanguageLearnerReviewUncheckedCreateWithoutLikesInput>
    where?: LanguageLearnerReviewWhereInput
  }

  export type LanguageLearnerReviewUpdateToOneWithWhereWithoutLikesInput = {
    where?: LanguageLearnerReviewWhereInput
    data: XOR<LanguageLearnerReviewUpdateWithoutLikesInput, LanguageLearnerReviewUncheckedUpdateWithoutLikesInput>
  }

  export type LanguageLearnerReviewUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: LanguageLearnerPlatformUpdateOneRequiredWithoutReviewsNestedInput
    user?: LanguageLearnerUserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserCreateWithoutVotesReceivedInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteCreateNestedManyWithoutVoterInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateWithoutVotesReceivedInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput
    votesGiven?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutVoterInput
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserCreateOrConnectWithoutVotesReceivedInput = {
    where: LanguageLearnerUserWhereUniqueInput
    create: XOR<LanguageLearnerUserCreateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedCreateWithoutVotesReceivedInput>
  }

  export type LanguageLearnerUserCreateWithoutVotesGivenInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewCreateNestedManyWithoutUserInput
    votesReceived?: LanguageLearnerUserVoteCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserUncheckedCreateWithoutVotesGivenInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: string
    createdAt?: Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: LanguageLearnerReviewUncheckedCreateNestedManyWithoutUserInput
    votesReceived?: LanguageLearnerUserVoteUncheckedCreateNestedManyWithoutUserInput
    likes?: LanguageLearnerReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LanguageLearnerUserCreateOrConnectWithoutVotesGivenInput = {
    where: LanguageLearnerUserWhereUniqueInput
    create: XOR<LanguageLearnerUserCreateWithoutVotesGivenInput, LanguageLearnerUserUncheckedCreateWithoutVotesGivenInput>
  }

  export type LanguageLearnerUserUpsertWithoutVotesReceivedInput = {
    update: XOR<LanguageLearnerUserUpdateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedUpdateWithoutVotesReceivedInput>
    create: XOR<LanguageLearnerUserCreateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedCreateWithoutVotesReceivedInput>
    where?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerUserUpdateToOneWithWhereWithoutVotesReceivedInput = {
    where?: LanguageLearnerUserWhereInput
    data: XOR<LanguageLearnerUserUpdateWithoutVotesReceivedInput, LanguageLearnerUserUncheckedUpdateWithoutVotesReceivedInput>
  }

  export type LanguageLearnerUserUpdateWithoutVotesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUpdateManyWithoutVoterNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateWithoutVotesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput
    votesGiven?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterNestedInput
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUpsertWithoutVotesGivenInput = {
    update: XOR<LanguageLearnerUserUpdateWithoutVotesGivenInput, LanguageLearnerUserUncheckedUpdateWithoutVotesGivenInput>
    create: XOR<LanguageLearnerUserCreateWithoutVotesGivenInput, LanguageLearnerUserUncheckedCreateWithoutVotesGivenInput>
    where?: LanguageLearnerUserWhereInput
  }

  export type LanguageLearnerUserUpdateToOneWithWhereWithoutVotesGivenInput = {
    where?: LanguageLearnerUserWhereInput
    data: XOR<LanguageLearnerUserUpdateWithoutVotesGivenInput, LanguageLearnerUserUncheckedUpdateWithoutVotesGivenInput>
  }

  export type LanguageLearnerUserUpdateWithoutVotesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUpdateManyWithoutUserNestedInput
    votesReceived?: LanguageLearnerUserVoteUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type LanguageLearnerUserUncheckedUpdateWithoutVotesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedPlatforms?: LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutUserNestedInput
    votesReceived?: LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventOrganizerTaskCreateManyUserInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerGuestCreateManyUserInput = {
    id?: string
    eventId: string
    name: string
    email: string
    phone: string
    status: string
    createdAt?: Date | string
  }

  export type EventOrganizerVenueCreateManyUserInput = {
    id?: string
    name: string
    location: string
    capacity: number
    amenities: string
    createdAt?: Date | string
  }

  export type EventOrganizerServiceProviderCreateManyUserInput = {
    id?: string
    name: string
    serviceType: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type EventOrganizerTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerGuestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerVenueUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventOrganizerServiceProviderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerPlatformCreateManyOwnerInput = {
    id?: string
    name: string
    website: string
    languagesOffered: string
    description: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewCreateManyUserInput = {
    id?: string
    platformId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteCreateManyVoterInput = {
    id?: string
    userId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerUserVoteCreateManyUserInput = {
    id?: string
    voterId: string
    voteType: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeCreateManyUserInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerPlatformUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: LanguageLearnerReviewUpdateManyWithoutPlatformNestedInput
  }

  export type LanguageLearnerPlatformUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: LanguageLearnerReviewUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type LanguageLearnerPlatformUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    languagesOffered?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: LanguageLearnerPlatformUpdateOneRequiredWithoutReviewsNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LanguageLearnerUserUpdateOneRequiredWithoutVotesReceivedNestedInput
  }

  export type LanguageLearnerUserVoteUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: LanguageLearnerUserUpdateOneRequiredWithoutVotesGivenNestedInput
  }

  export type LanguageLearnerUserVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerUserVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: LanguageLearnerReviewUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewCreateManyPlatformInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    status?: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LanguageLearnerUserUpdateOneRequiredWithoutReviewsNestedInput
    likes?: LanguageLearnerReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type LanguageLearnerReviewUncheckedUpdateManyWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeCreateManyReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LanguageLearnerReviewLikeUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LanguageLearnerUserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageLearnerReviewLikeUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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