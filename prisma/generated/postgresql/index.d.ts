
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PostDIYHomes
 * 
 */
export type PostDIYHomes = $Result.DefaultSelection<Prisma.$PostDIYHomesPayload>
/**
 * Model ReviewDIYHomes
 * 
 */
export type ReviewDIYHomes = $Result.DefaultSelection<Prisma.$ReviewDIYHomesPayload>
/**
 * Model LikeDIYHomes
 * 
 */
export type LikeDIYHomes = $Result.DefaultSelection<Prisma.$LikeDIYHomesPayload>
/**
 * Model BookmarkDIYHomes
 * 
 */
export type BookmarkDIYHomes = $Result.DefaultSelection<Prisma.$BookmarkDIYHomesPayload>
/**
 * Model ReportDIYHomes
 * 
 */
export type ReportDIYHomes = $Result.DefaultSelection<Prisma.$ReportDIYHomesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postDIYHomes`: Exposes CRUD operations for the **PostDIYHomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostDIYHomes
    * const postDIYHomes = await prisma.postDIYHomes.findMany()
    * ```
    */
  get postDIYHomes(): Prisma.PostDIYHomesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewDIYHomes`: Exposes CRUD operations for the **ReviewDIYHomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewDIYHomes
    * const reviewDIYHomes = await prisma.reviewDIYHomes.findMany()
    * ```
    */
  get reviewDIYHomes(): Prisma.ReviewDIYHomesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likeDIYHomes`: Exposes CRUD operations for the **LikeDIYHomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeDIYHomes
    * const likeDIYHomes = await prisma.likeDIYHomes.findMany()
    * ```
    */
  get likeDIYHomes(): Prisma.LikeDIYHomesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarkDIYHomes`: Exposes CRUD operations for the **BookmarkDIYHomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarkDIYHomes
    * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findMany()
    * ```
    */
  get bookmarkDIYHomes(): Prisma.BookmarkDIYHomesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportDIYHomes`: Exposes CRUD operations for the **ReportDIYHomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportDIYHomes
    * const reportDIYHomes = await prisma.reportDIYHomes.findMany()
    * ```
    */
  get reportDIYHomes(): Prisma.ReportDIYHomesDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    PostDIYHomes: 'PostDIYHomes',
    ReviewDIYHomes: 'ReviewDIYHomes',
    LikeDIYHomes: 'LikeDIYHomes',
    BookmarkDIYHomes: 'BookmarkDIYHomes',
    ReportDIYHomes: 'ReportDIYHomes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    neon?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "postDIYHomes" | "reviewDIYHomes" | "likeDIYHomes" | "bookmarkDIYHomes" | "reportDIYHomes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PostDIYHomes: {
        payload: Prisma.$PostDIYHomesPayload<ExtArgs>
        fields: Prisma.PostDIYHomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostDIYHomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostDIYHomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          findFirst: {
            args: Prisma.PostDIYHomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostDIYHomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          findMany: {
            args: Prisma.PostDIYHomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>[]
          }
          create: {
            args: Prisma.PostDIYHomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          createMany: {
            args: Prisma.PostDIYHomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostDIYHomesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>[]
          }
          delete: {
            args: Prisma.PostDIYHomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          update: {
            args: Prisma.PostDIYHomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          deleteMany: {
            args: Prisma.PostDIYHomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostDIYHomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostDIYHomesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>[]
          }
          upsert: {
            args: Prisma.PostDIYHomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDIYHomesPayload>
          }
          aggregate: {
            args: Prisma.PostDIYHomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostDIYHomes>
          }
          groupBy: {
            args: Prisma.PostDIYHomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostDIYHomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostDIYHomesCountArgs<ExtArgs>
            result: $Utils.Optional<PostDIYHomesCountAggregateOutputType> | number
          }
        }
      }
      ReviewDIYHomes: {
        payload: Prisma.$ReviewDIYHomesPayload<ExtArgs>
        fields: Prisma.ReviewDIYHomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewDIYHomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewDIYHomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          findFirst: {
            args: Prisma.ReviewDIYHomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewDIYHomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          findMany: {
            args: Prisma.ReviewDIYHomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>[]
          }
          create: {
            args: Prisma.ReviewDIYHomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          createMany: {
            args: Prisma.ReviewDIYHomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewDIYHomesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>[]
          }
          delete: {
            args: Prisma.ReviewDIYHomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          update: {
            args: Prisma.ReviewDIYHomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDIYHomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewDIYHomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewDIYHomesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>[]
          }
          upsert: {
            args: Prisma.ReviewDIYHomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDIYHomesPayload>
          }
          aggregate: {
            args: Prisma.ReviewDIYHomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewDIYHomes>
          }
          groupBy: {
            args: Prisma.ReviewDIYHomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewDIYHomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewDIYHomesCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewDIYHomesCountAggregateOutputType> | number
          }
        }
      }
      LikeDIYHomes: {
        payload: Prisma.$LikeDIYHomesPayload<ExtArgs>
        fields: Prisma.LikeDIYHomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeDIYHomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeDIYHomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          findFirst: {
            args: Prisma.LikeDIYHomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeDIYHomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          findMany: {
            args: Prisma.LikeDIYHomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>[]
          }
          create: {
            args: Prisma.LikeDIYHomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          createMany: {
            args: Prisma.LikeDIYHomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeDIYHomesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>[]
          }
          delete: {
            args: Prisma.LikeDIYHomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          update: {
            args: Prisma.LikeDIYHomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          deleteMany: {
            args: Prisma.LikeDIYHomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeDIYHomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeDIYHomesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>[]
          }
          upsert: {
            args: Prisma.LikeDIYHomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeDIYHomesPayload>
          }
          aggregate: {
            args: Prisma.LikeDIYHomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikeDIYHomes>
          }
          groupBy: {
            args: Prisma.LikeDIYHomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeDIYHomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeDIYHomesCountArgs<ExtArgs>
            result: $Utils.Optional<LikeDIYHomesCountAggregateOutputType> | number
          }
        }
      }
      BookmarkDIYHomes: {
        payload: Prisma.$BookmarkDIYHomesPayload<ExtArgs>
        fields: Prisma.BookmarkDIYHomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkDIYHomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkDIYHomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          findFirst: {
            args: Prisma.BookmarkDIYHomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkDIYHomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          findMany: {
            args: Prisma.BookmarkDIYHomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>[]
          }
          create: {
            args: Prisma.BookmarkDIYHomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          createMany: {
            args: Prisma.BookmarkDIYHomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkDIYHomesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDIYHomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          update: {
            args: Prisma.BookmarkDIYHomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDIYHomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkDIYHomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkDIYHomesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkDIYHomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkDIYHomesPayload>
          }
          aggregate: {
            args: Prisma.BookmarkDIYHomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarkDIYHomes>
          }
          groupBy: {
            args: Prisma.BookmarkDIYHomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkDIYHomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkDIYHomesCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkDIYHomesCountAggregateOutputType> | number
          }
        }
      }
      ReportDIYHomes: {
        payload: Prisma.$ReportDIYHomesPayload<ExtArgs>
        fields: Prisma.ReportDIYHomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportDIYHomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportDIYHomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          findFirst: {
            args: Prisma.ReportDIYHomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportDIYHomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          findMany: {
            args: Prisma.ReportDIYHomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>[]
          }
          create: {
            args: Prisma.ReportDIYHomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          createMany: {
            args: Prisma.ReportDIYHomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportDIYHomesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>[]
          }
          delete: {
            args: Prisma.ReportDIYHomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          update: {
            args: Prisma.ReportDIYHomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          deleteMany: {
            args: Prisma.ReportDIYHomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportDIYHomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportDIYHomesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>[]
          }
          upsert: {
            args: Prisma.ReportDIYHomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportDIYHomesPayload>
          }
          aggregate: {
            args: Prisma.ReportDIYHomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportDIYHomes>
          }
          groupBy: {
            args: Prisma.ReportDIYHomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportDIYHomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportDIYHomesCountArgs<ExtArgs>
            result: $Utils.Optional<ReportDIYHomesCountAggregateOutputType> | number
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
    user?: UserOmit
    postDIYHomes?: PostDIYHomesOmit
    reviewDIYHomes?: ReviewDIYHomesOmit
    likeDIYHomes?: LikeDIYHomesOmit
    bookmarkDIYHomes?: BookmarkDIYHomesOmit
    reportDIYHomes?: ReportDIYHomesOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    reviews: number
    bookmarks: number
    Like: number
    Report: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    Like?: boolean | UserCountOutputTypeCountLikeArgs
    Report?: boolean | UserCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDIYHomesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewDIYHomesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkDIYHomesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeDIYHomesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportDIYHomesWhereInput
  }


  /**
   * Count Type PostDIYHomesCountOutputType
   */

  export type PostDIYHomesCountOutputType = {
    reviews: number
    bookmarks: number
    Like: number
    Report: number
  }

  export type PostDIYHomesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | PostDIYHomesCountOutputTypeCountReviewsArgs
    bookmarks?: boolean | PostDIYHomesCountOutputTypeCountBookmarksArgs
    Like?: boolean | PostDIYHomesCountOutputTypeCountLikeArgs
    Report?: boolean | PostDIYHomesCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * PostDIYHomesCountOutputType without action
   */
  export type PostDIYHomesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomesCountOutputType
     */
    select?: PostDIYHomesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostDIYHomesCountOutputType without action
   */
  export type PostDIYHomesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewDIYHomesWhereInput
  }

  /**
   * PostDIYHomesCountOutputType without action
   */
  export type PostDIYHomesCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkDIYHomesWhereInput
  }

  /**
   * PostDIYHomesCountOutputType without action
   */
  export type PostDIYHomesCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeDIYHomesWhereInput
  }

  /**
   * PostDIYHomesCountOutputType without action
   */
  export type PostDIYHomesCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportDIYHomesWhereInput
  }


  /**
   * Count Type ReviewDIYHomesCountOutputType
   */

  export type ReviewDIYHomesCountOutputType = {
    Report: number
  }

  export type ReviewDIYHomesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | ReviewDIYHomesCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * ReviewDIYHomesCountOutputType without action
   */
  export type ReviewDIYHomesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomesCountOutputType
     */
    select?: ReviewDIYHomesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewDIYHomesCountOutputType without action
   */
  export type ReviewDIYHomesCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportDIYHomesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    group: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    group: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    group: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    group?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    group?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    group?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    group: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    group?: boolean
    createdAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    Like?: boolean | User$LikeArgs<ExtArgs>
    Report?: boolean | User$ReportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    group?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    group?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    group?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "group" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    Like?: boolean | User$LikeArgs<ExtArgs>
    Report?: boolean | User$ReportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostDIYHomesPayload<ExtArgs>[]
      reviews: Prisma.$ReviewDIYHomesPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkDIYHomesPayload<ExtArgs>[]
      Like: Prisma.$LikeDIYHomesPayload<ExtArgs>[]
      Report: Prisma.$ReportDIYHomesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      group: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Like<T extends User$LikeArgs<ExtArgs> = {}>(args?: Subset<T, User$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends User$ReportArgs<ExtArgs> = {}>(args?: Subset<T, User$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly group: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    where?: PostDIYHomesWhereInput
    orderBy?: PostDIYHomesOrderByWithRelationInput | PostDIYHomesOrderByWithRelationInput[]
    cursor?: PostDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostDIYHomesScalarFieldEnum | PostDIYHomesScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    where?: ReviewDIYHomesWhereInput
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    cursor?: ReviewDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewDIYHomesScalarFieldEnum | ReviewDIYHomesScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    where?: BookmarkDIYHomesWhereInput
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    cursor?: BookmarkDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkDIYHomesScalarFieldEnum | BookmarkDIYHomesScalarFieldEnum[]
  }

  /**
   * User.Like
   */
  export type User$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    where?: LikeDIYHomesWhereInput
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    cursor?: LikeDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeDIYHomesScalarFieldEnum | LikeDIYHomesScalarFieldEnum[]
  }

  /**
   * User.Report
   */
  export type User$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    where?: ReportDIYHomesWhereInput
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    cursor?: ReportDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PostDIYHomes
   */

  export type AggregatePostDIYHomes = {
    _count: PostDIYHomesCountAggregateOutputType | null
    _min: PostDIYHomesMinAggregateOutputType | null
    _max: PostDIYHomesMaxAggregateOutputType | null
  }

  export type PostDIYHomesMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostDIYHomesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostDIYHomesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostDIYHomesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    userId?: true
    createdAt?: true
  }

  export type PostDIYHomesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    userId?: true
    createdAt?: true
  }

  export type PostDIYHomesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostDIYHomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDIYHomes to aggregate.
     */
    where?: PostDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDIYHomes to fetch.
     */
    orderBy?: PostDIYHomesOrderByWithRelationInput | PostDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostDIYHomes
    **/
    _count?: true | PostDIYHomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostDIYHomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostDIYHomesMaxAggregateInputType
  }

  export type GetPostDIYHomesAggregateType<T extends PostDIYHomesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostDIYHomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostDIYHomes[P]>
      : GetScalarType<T[P], AggregatePostDIYHomes[P]>
  }




  export type PostDIYHomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDIYHomesWhereInput
    orderBy?: PostDIYHomesOrderByWithAggregationInput | PostDIYHomesOrderByWithAggregationInput[]
    by: PostDIYHomesScalarFieldEnum[] | PostDIYHomesScalarFieldEnum
    having?: PostDIYHomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostDIYHomesCountAggregateInputType | true
    _min?: PostDIYHomesMinAggregateInputType
    _max?: PostDIYHomesMaxAggregateInputType
  }

  export type PostDIYHomesGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string
    userId: string
    createdAt: Date
    _count: PostDIYHomesCountAggregateOutputType | null
    _min: PostDIYHomesMinAggregateOutputType | null
    _max: PostDIYHomesMaxAggregateOutputType | null
  }

  type GetPostDIYHomesGroupByPayload<T extends PostDIYHomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostDIYHomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostDIYHomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostDIYHomesGroupByOutputType[P]>
            : GetScalarType<T[P], PostDIYHomesGroupByOutputType[P]>
        }
      >
    >


  export type PostDIYHomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | PostDIYHomes$reviewsArgs<ExtArgs>
    bookmarks?: boolean | PostDIYHomes$bookmarksArgs<ExtArgs>
    Like?: boolean | PostDIYHomes$LikeArgs<ExtArgs>
    Report?: boolean | PostDIYHomes$ReportArgs<ExtArgs>
    _count?: boolean | PostDIYHomesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDIYHomes"]>

  export type PostDIYHomesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDIYHomes"]>

  export type PostDIYHomesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDIYHomes"]>

  export type PostDIYHomesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostDIYHomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "userId" | "createdAt", ExtArgs["result"]["postDIYHomes"]>
  export type PostDIYHomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | PostDIYHomes$reviewsArgs<ExtArgs>
    bookmarks?: boolean | PostDIYHomes$bookmarksArgs<ExtArgs>
    Like?: boolean | PostDIYHomes$LikeArgs<ExtArgs>
    Report?: boolean | PostDIYHomes$ReportArgs<ExtArgs>
    _count?: boolean | PostDIYHomesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostDIYHomesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostDIYHomesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostDIYHomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostDIYHomes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewDIYHomesPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkDIYHomesPayload<ExtArgs>[]
      Like: Prisma.$LikeDIYHomesPayload<ExtArgs>[]
      Report: Prisma.$ReportDIYHomesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["postDIYHomes"]>
    composites: {}
  }

  type PostDIYHomesGetPayload<S extends boolean | null | undefined | PostDIYHomesDefaultArgs> = $Result.GetResult<Prisma.$PostDIYHomesPayload, S>

  type PostDIYHomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostDIYHomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostDIYHomesCountAggregateInputType | true
    }

  export interface PostDIYHomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostDIYHomes'], meta: { name: 'PostDIYHomes' } }
    /**
     * Find zero or one PostDIYHomes that matches the filter.
     * @param {PostDIYHomesFindUniqueArgs} args - Arguments to find a PostDIYHomes
     * @example
     * // Get one PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostDIYHomesFindUniqueArgs>(args: SelectSubset<T, PostDIYHomesFindUniqueArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostDIYHomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostDIYHomesFindUniqueOrThrowArgs} args - Arguments to find a PostDIYHomes
     * @example
     * // Get one PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostDIYHomesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostDIYHomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesFindFirstArgs} args - Arguments to find a PostDIYHomes
     * @example
     * // Get one PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostDIYHomesFindFirstArgs>(args?: SelectSubset<T, PostDIYHomesFindFirstArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostDIYHomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesFindFirstOrThrowArgs} args - Arguments to find a PostDIYHomes
     * @example
     * // Get one PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostDIYHomesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostDIYHomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findMany()
     * 
     * // Get first 10 PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postDIYHomesWithIdOnly = await prisma.postDIYHomes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostDIYHomesFindManyArgs>(args?: SelectSubset<T, PostDIYHomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostDIYHomes.
     * @param {PostDIYHomesCreateArgs} args - Arguments to create a PostDIYHomes.
     * @example
     * // Create one PostDIYHomes
     * const PostDIYHomes = await prisma.postDIYHomes.create({
     *   data: {
     *     // ... data to create a PostDIYHomes
     *   }
     * })
     * 
     */
    create<T extends PostDIYHomesCreateArgs>(args: SelectSubset<T, PostDIYHomesCreateArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostDIYHomes.
     * @param {PostDIYHomesCreateManyArgs} args - Arguments to create many PostDIYHomes.
     * @example
     * // Create many PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostDIYHomesCreateManyArgs>(args?: SelectSubset<T, PostDIYHomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostDIYHomes and returns the data saved in the database.
     * @param {PostDIYHomesCreateManyAndReturnArgs} args - Arguments to create many PostDIYHomes.
     * @example
     * // Create many PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostDIYHomes and only return the `id`
     * const postDIYHomesWithIdOnly = await prisma.postDIYHomes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostDIYHomesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostDIYHomesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostDIYHomes.
     * @param {PostDIYHomesDeleteArgs} args - Arguments to delete one PostDIYHomes.
     * @example
     * // Delete one PostDIYHomes
     * const PostDIYHomes = await prisma.postDIYHomes.delete({
     *   where: {
     *     // ... filter to delete one PostDIYHomes
     *   }
     * })
     * 
     */
    delete<T extends PostDIYHomesDeleteArgs>(args: SelectSubset<T, PostDIYHomesDeleteArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostDIYHomes.
     * @param {PostDIYHomesUpdateArgs} args - Arguments to update one PostDIYHomes.
     * @example
     * // Update one PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostDIYHomesUpdateArgs>(args: SelectSubset<T, PostDIYHomesUpdateArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostDIYHomes.
     * @param {PostDIYHomesDeleteManyArgs} args - Arguments to filter PostDIYHomes to delete.
     * @example
     * // Delete a few PostDIYHomes
     * const { count } = await prisma.postDIYHomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDIYHomesDeleteManyArgs>(args?: SelectSubset<T, PostDIYHomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostDIYHomesUpdateManyArgs>(args: SelectSubset<T, PostDIYHomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDIYHomes and returns the data updated in the database.
     * @param {PostDIYHomesUpdateManyAndReturnArgs} args - Arguments to update many PostDIYHomes.
     * @example
     * // Update many PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostDIYHomes and only return the `id`
     * const postDIYHomesWithIdOnly = await prisma.postDIYHomes.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostDIYHomesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostDIYHomesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostDIYHomes.
     * @param {PostDIYHomesUpsertArgs} args - Arguments to update or create a PostDIYHomes.
     * @example
     * // Update or create a PostDIYHomes
     * const postDIYHomes = await prisma.postDIYHomes.upsert({
     *   create: {
     *     // ... data to create a PostDIYHomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostDIYHomes we want to update
     *   }
     * })
     */
    upsert<T extends PostDIYHomesUpsertArgs>(args: SelectSubset<T, PostDIYHomesUpsertArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesCountArgs} args - Arguments to filter PostDIYHomes to count.
     * @example
     * // Count the number of PostDIYHomes
     * const count = await prisma.postDIYHomes.count({
     *   where: {
     *     // ... the filter for the PostDIYHomes we want to count
     *   }
     * })
    **/
    count<T extends PostDIYHomesCountArgs>(
      args?: Subset<T, PostDIYHomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostDIYHomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostDIYHomesAggregateArgs>(args: Subset<T, PostDIYHomesAggregateArgs>): Prisma.PrismaPromise<GetPostDIYHomesAggregateType<T>>

    /**
     * Group by PostDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDIYHomesGroupByArgs} args - Group by arguments.
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
      T extends PostDIYHomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostDIYHomesGroupByArgs['orderBy'] }
        : { orderBy?: PostDIYHomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostDIYHomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostDIYHomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostDIYHomes model
   */
  readonly fields: PostDIYHomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostDIYHomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostDIYHomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends PostDIYHomes$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomes$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends PostDIYHomes$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomes$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Like<T extends PostDIYHomes$LikeArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomes$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends PostDIYHomes$ReportArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomes$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PostDIYHomes model
   */ 
  interface PostDIYHomesFieldRefs {
    readonly id: FieldRef<"PostDIYHomes", 'String'>
    readonly title: FieldRef<"PostDIYHomes", 'String'>
    readonly content: FieldRef<"PostDIYHomes", 'String'>
    readonly category: FieldRef<"PostDIYHomes", 'String'>
    readonly userId: FieldRef<"PostDIYHomes", 'String'>
    readonly createdAt: FieldRef<"PostDIYHomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostDIYHomes findUnique
   */
  export type PostDIYHomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which PostDIYHomes to fetch.
     */
    where: PostDIYHomesWhereUniqueInput
  }

  /**
   * PostDIYHomes findUniqueOrThrow
   */
  export type PostDIYHomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which PostDIYHomes to fetch.
     */
    where: PostDIYHomesWhereUniqueInput
  }

  /**
   * PostDIYHomes findFirst
   */
  export type PostDIYHomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which PostDIYHomes to fetch.
     */
    where?: PostDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDIYHomes to fetch.
     */
    orderBy?: PostDIYHomesOrderByWithRelationInput | PostDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDIYHomes.
     */
    cursor?: PostDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDIYHomes.
     */
    distinct?: PostDIYHomesScalarFieldEnum | PostDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes findFirstOrThrow
   */
  export type PostDIYHomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which PostDIYHomes to fetch.
     */
    where?: PostDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDIYHomes to fetch.
     */
    orderBy?: PostDIYHomesOrderByWithRelationInput | PostDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDIYHomes.
     */
    cursor?: PostDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDIYHomes.
     */
    distinct?: PostDIYHomesScalarFieldEnum | PostDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes findMany
   */
  export type PostDIYHomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which PostDIYHomes to fetch.
     */
    where?: PostDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDIYHomes to fetch.
     */
    orderBy?: PostDIYHomesOrderByWithRelationInput | PostDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostDIYHomes.
     */
    cursor?: PostDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDIYHomes.
     */
    skip?: number
    distinct?: PostDIYHomesScalarFieldEnum | PostDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes create
   */
  export type PostDIYHomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostDIYHomes.
     */
    data: XOR<PostDIYHomesCreateInput, PostDIYHomesUncheckedCreateInput>
  }

  /**
   * PostDIYHomes createMany
   */
  export type PostDIYHomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostDIYHomes.
     */
    data: PostDIYHomesCreateManyInput | PostDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostDIYHomes createManyAndReturn
   */
  export type PostDIYHomesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to create many PostDIYHomes.
     */
    data: PostDIYHomesCreateManyInput | PostDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDIYHomes update
   */
  export type PostDIYHomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostDIYHomes.
     */
    data: XOR<PostDIYHomesUpdateInput, PostDIYHomesUncheckedUpdateInput>
    /**
     * Choose, which PostDIYHomes to update.
     */
    where: PostDIYHomesWhereUniqueInput
  }

  /**
   * PostDIYHomes updateMany
   */
  export type PostDIYHomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostDIYHomes.
     */
    data: XOR<PostDIYHomesUpdateManyMutationInput, PostDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which PostDIYHomes to update
     */
    where?: PostDIYHomesWhereInput
    /**
     * Limit how many PostDIYHomes to update.
     */
    limit?: number
  }

  /**
   * PostDIYHomes updateManyAndReturn
   */
  export type PostDIYHomesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to update PostDIYHomes.
     */
    data: XOR<PostDIYHomesUpdateManyMutationInput, PostDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which PostDIYHomes to update
     */
    where?: PostDIYHomesWhereInput
    /**
     * Limit how many PostDIYHomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDIYHomes upsert
   */
  export type PostDIYHomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostDIYHomes to update in case it exists.
     */
    where: PostDIYHomesWhereUniqueInput
    /**
     * In case the PostDIYHomes found by the `where` argument doesn't exist, create a new PostDIYHomes with this data.
     */
    create: XOR<PostDIYHomesCreateInput, PostDIYHomesUncheckedCreateInput>
    /**
     * In case the PostDIYHomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostDIYHomesUpdateInput, PostDIYHomesUncheckedUpdateInput>
  }

  /**
   * PostDIYHomes delete
   */
  export type PostDIYHomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    /**
     * Filter which PostDIYHomes to delete.
     */
    where: PostDIYHomesWhereUniqueInput
  }

  /**
   * PostDIYHomes deleteMany
   */
  export type PostDIYHomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDIYHomes to delete
     */
    where?: PostDIYHomesWhereInput
    /**
     * Limit how many PostDIYHomes to delete.
     */
    limit?: number
  }

  /**
   * PostDIYHomes.reviews
   */
  export type PostDIYHomes$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    where?: ReviewDIYHomesWhereInput
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    cursor?: ReviewDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewDIYHomesScalarFieldEnum | ReviewDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes.bookmarks
   */
  export type PostDIYHomes$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    where?: BookmarkDIYHomesWhereInput
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    cursor?: BookmarkDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkDIYHomesScalarFieldEnum | BookmarkDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes.Like
   */
  export type PostDIYHomes$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    where?: LikeDIYHomesWhereInput
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    cursor?: LikeDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeDIYHomesScalarFieldEnum | LikeDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes.Report
   */
  export type PostDIYHomes$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    where?: ReportDIYHomesWhereInput
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    cursor?: ReportDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * PostDIYHomes without action
   */
  export type PostDIYHomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
  }


  /**
   * Model ReviewDIYHomes
   */

  export type AggregateReviewDIYHomes = {
    _count: ReviewDIYHomesCountAggregateOutputType | null
    _avg: ReviewDIYHomesAvgAggregateOutputType | null
    _sum: ReviewDIYHomesSumAggregateOutputType | null
    _min: ReviewDIYHomesMinAggregateOutputType | null
    _max: ReviewDIYHomesMaxAggregateOutputType | null
  }

  export type ReviewDIYHomesAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewDIYHomesSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewDIYHomesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewDIYHomesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewDIYHomesCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewDIYHomesAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewDIYHomesSumAggregateInputType = {
    rating?: true
  }

  export type ReviewDIYHomesMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewDIYHomesMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewDIYHomesCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewDIYHomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewDIYHomes to aggregate.
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDIYHomes to fetch.
     */
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewDIYHomes
    **/
    _count?: true | ReviewDIYHomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewDIYHomesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewDIYHomesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewDIYHomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewDIYHomesMaxAggregateInputType
  }

  export type GetReviewDIYHomesAggregateType<T extends ReviewDIYHomesAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewDIYHomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewDIYHomes[P]>
      : GetScalarType<T[P], AggregateReviewDIYHomes[P]>
  }




  export type ReviewDIYHomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewDIYHomesWhereInput
    orderBy?: ReviewDIYHomesOrderByWithAggregationInput | ReviewDIYHomesOrderByWithAggregationInput[]
    by: ReviewDIYHomesScalarFieldEnum[] | ReviewDIYHomesScalarFieldEnum
    having?: ReviewDIYHomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewDIYHomesCountAggregateInputType | true
    _avg?: ReviewDIYHomesAvgAggregateInputType
    _sum?: ReviewDIYHomesSumAggregateInputType
    _min?: ReviewDIYHomesMinAggregateInputType
    _max?: ReviewDIYHomesMaxAggregateInputType
  }

  export type ReviewDIYHomesGroupByOutputType = {
    id: string
    postId: string
    userId: string
    rating: number
    comment: string
    createdAt: Date
    _count: ReviewDIYHomesCountAggregateOutputType | null
    _avg: ReviewDIYHomesAvgAggregateOutputType | null
    _sum: ReviewDIYHomesSumAggregateOutputType | null
    _min: ReviewDIYHomesMinAggregateOutputType | null
    _max: ReviewDIYHomesMaxAggregateOutputType | null
  }

  type GetReviewDIYHomesGroupByPayload<T extends ReviewDIYHomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewDIYHomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewDIYHomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewDIYHomesGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewDIYHomesGroupByOutputType[P]>
        }
      >
    >


  export type ReviewDIYHomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
    Report?: boolean | ReviewDIYHomes$ReportArgs<ExtArgs>
    _count?: boolean | ReviewDIYHomesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDIYHomes"]>

  export type ReviewDIYHomesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDIYHomes"]>

  export type ReviewDIYHomesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDIYHomes"]>

  export type ReviewDIYHomesSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewDIYHomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["reviewDIYHomes"]>
  export type ReviewDIYHomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
    Report?: boolean | ReviewDIYHomes$ReportArgs<ExtArgs>
    _count?: boolean | ReviewDIYHomesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewDIYHomesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }
  export type ReviewDIYHomesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }

  export type $ReviewDIYHomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewDIYHomes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostDIYHomesPayload<ExtArgs>
      Report: Prisma.$ReportDIYHomesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      rating: number
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["reviewDIYHomes"]>
    composites: {}
  }

  type ReviewDIYHomesGetPayload<S extends boolean | null | undefined | ReviewDIYHomesDefaultArgs> = $Result.GetResult<Prisma.$ReviewDIYHomesPayload, S>

  type ReviewDIYHomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewDIYHomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewDIYHomesCountAggregateInputType | true
    }

  export interface ReviewDIYHomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewDIYHomes'], meta: { name: 'ReviewDIYHomes' } }
    /**
     * Find zero or one ReviewDIYHomes that matches the filter.
     * @param {ReviewDIYHomesFindUniqueArgs} args - Arguments to find a ReviewDIYHomes
     * @example
     * // Get one ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewDIYHomesFindUniqueArgs>(args: SelectSubset<T, ReviewDIYHomesFindUniqueArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewDIYHomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewDIYHomesFindUniqueOrThrowArgs} args - Arguments to find a ReviewDIYHomes
     * @example
     * // Get one ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewDIYHomesFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewDIYHomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesFindFirstArgs} args - Arguments to find a ReviewDIYHomes
     * @example
     * // Get one ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewDIYHomesFindFirstArgs>(args?: SelectSubset<T, ReviewDIYHomesFindFirstArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewDIYHomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesFindFirstOrThrowArgs} args - Arguments to find a ReviewDIYHomes
     * @example
     * // Get one ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewDIYHomesFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewDIYHomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findMany()
     * 
     * // Get first 10 ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewDIYHomesWithIdOnly = await prisma.reviewDIYHomes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewDIYHomesFindManyArgs>(args?: SelectSubset<T, ReviewDIYHomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewDIYHomes.
     * @param {ReviewDIYHomesCreateArgs} args - Arguments to create a ReviewDIYHomes.
     * @example
     * // Create one ReviewDIYHomes
     * const ReviewDIYHomes = await prisma.reviewDIYHomes.create({
     *   data: {
     *     // ... data to create a ReviewDIYHomes
     *   }
     * })
     * 
     */
    create<T extends ReviewDIYHomesCreateArgs>(args: SelectSubset<T, ReviewDIYHomesCreateArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewDIYHomes.
     * @param {ReviewDIYHomesCreateManyArgs} args - Arguments to create many ReviewDIYHomes.
     * @example
     * // Create many ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewDIYHomesCreateManyArgs>(args?: SelectSubset<T, ReviewDIYHomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewDIYHomes and returns the data saved in the database.
     * @param {ReviewDIYHomesCreateManyAndReturnArgs} args - Arguments to create many ReviewDIYHomes.
     * @example
     * // Create many ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewDIYHomes and only return the `id`
     * const reviewDIYHomesWithIdOnly = await prisma.reviewDIYHomes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewDIYHomesCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewDIYHomesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewDIYHomes.
     * @param {ReviewDIYHomesDeleteArgs} args - Arguments to delete one ReviewDIYHomes.
     * @example
     * // Delete one ReviewDIYHomes
     * const ReviewDIYHomes = await prisma.reviewDIYHomes.delete({
     *   where: {
     *     // ... filter to delete one ReviewDIYHomes
     *   }
     * })
     * 
     */
    delete<T extends ReviewDIYHomesDeleteArgs>(args: SelectSubset<T, ReviewDIYHomesDeleteArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewDIYHomes.
     * @param {ReviewDIYHomesUpdateArgs} args - Arguments to update one ReviewDIYHomes.
     * @example
     * // Update one ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewDIYHomesUpdateArgs>(args: SelectSubset<T, ReviewDIYHomesUpdateArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewDIYHomes.
     * @param {ReviewDIYHomesDeleteManyArgs} args - Arguments to filter ReviewDIYHomes to delete.
     * @example
     * // Delete a few ReviewDIYHomes
     * const { count } = await prisma.reviewDIYHomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDIYHomesDeleteManyArgs>(args?: SelectSubset<T, ReviewDIYHomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewDIYHomesUpdateManyArgs>(args: SelectSubset<T, ReviewDIYHomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewDIYHomes and returns the data updated in the database.
     * @param {ReviewDIYHomesUpdateManyAndReturnArgs} args - Arguments to update many ReviewDIYHomes.
     * @example
     * // Update many ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewDIYHomes and only return the `id`
     * const reviewDIYHomesWithIdOnly = await prisma.reviewDIYHomes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewDIYHomesUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewDIYHomesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewDIYHomes.
     * @param {ReviewDIYHomesUpsertArgs} args - Arguments to update or create a ReviewDIYHomes.
     * @example
     * // Update or create a ReviewDIYHomes
     * const reviewDIYHomes = await prisma.reviewDIYHomes.upsert({
     *   create: {
     *     // ... data to create a ReviewDIYHomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewDIYHomes we want to update
     *   }
     * })
     */
    upsert<T extends ReviewDIYHomesUpsertArgs>(args: SelectSubset<T, ReviewDIYHomesUpsertArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesCountArgs} args - Arguments to filter ReviewDIYHomes to count.
     * @example
     * // Count the number of ReviewDIYHomes
     * const count = await prisma.reviewDIYHomes.count({
     *   where: {
     *     // ... the filter for the ReviewDIYHomes we want to count
     *   }
     * })
    **/
    count<T extends ReviewDIYHomesCountArgs>(
      args?: Subset<T, ReviewDIYHomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewDIYHomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewDIYHomesAggregateArgs>(args: Subset<T, ReviewDIYHomesAggregateArgs>): Prisma.PrismaPromise<GetReviewDIYHomesAggregateType<T>>

    /**
     * Group by ReviewDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDIYHomesGroupByArgs} args - Group by arguments.
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
      T extends ReviewDIYHomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewDIYHomesGroupByArgs['orderBy'] }
        : { orderBy?: ReviewDIYHomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewDIYHomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewDIYHomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewDIYHomes model
   */
  readonly fields: ReviewDIYHomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewDIYHomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewDIYHomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDIYHomesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomesDefaultArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Report<T extends ReviewDIYHomes$ReportArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDIYHomes$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReviewDIYHomes model
   */ 
  interface ReviewDIYHomesFieldRefs {
    readonly id: FieldRef<"ReviewDIYHomes", 'String'>
    readonly postId: FieldRef<"ReviewDIYHomes", 'String'>
    readonly userId: FieldRef<"ReviewDIYHomes", 'String'>
    readonly rating: FieldRef<"ReviewDIYHomes", 'Int'>
    readonly comment: FieldRef<"ReviewDIYHomes", 'String'>
    readonly createdAt: FieldRef<"ReviewDIYHomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewDIYHomes findUnique
   */
  export type ReviewDIYHomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDIYHomes to fetch.
     */
    where: ReviewDIYHomesWhereUniqueInput
  }

  /**
   * ReviewDIYHomes findUniqueOrThrow
   */
  export type ReviewDIYHomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDIYHomes to fetch.
     */
    where: ReviewDIYHomesWhereUniqueInput
  }

  /**
   * ReviewDIYHomes findFirst
   */
  export type ReviewDIYHomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDIYHomes to fetch.
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDIYHomes to fetch.
     */
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewDIYHomes.
     */
    cursor?: ReviewDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewDIYHomes.
     */
    distinct?: ReviewDIYHomesScalarFieldEnum | ReviewDIYHomesScalarFieldEnum[]
  }

  /**
   * ReviewDIYHomes findFirstOrThrow
   */
  export type ReviewDIYHomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDIYHomes to fetch.
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDIYHomes to fetch.
     */
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewDIYHomes.
     */
    cursor?: ReviewDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewDIYHomes.
     */
    distinct?: ReviewDIYHomesScalarFieldEnum | ReviewDIYHomesScalarFieldEnum[]
  }

  /**
   * ReviewDIYHomes findMany
   */
  export type ReviewDIYHomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDIYHomes to fetch.
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDIYHomes to fetch.
     */
    orderBy?: ReviewDIYHomesOrderByWithRelationInput | ReviewDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewDIYHomes.
     */
    cursor?: ReviewDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDIYHomes.
     */
    skip?: number
    distinct?: ReviewDIYHomesScalarFieldEnum | ReviewDIYHomesScalarFieldEnum[]
  }

  /**
   * ReviewDIYHomes create
   */
  export type ReviewDIYHomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewDIYHomes.
     */
    data: XOR<ReviewDIYHomesCreateInput, ReviewDIYHomesUncheckedCreateInput>
  }

  /**
   * ReviewDIYHomes createMany
   */
  export type ReviewDIYHomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewDIYHomes.
     */
    data: ReviewDIYHomesCreateManyInput | ReviewDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewDIYHomes createManyAndReturn
   */
  export type ReviewDIYHomesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewDIYHomes.
     */
    data: ReviewDIYHomesCreateManyInput | ReviewDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewDIYHomes update
   */
  export type ReviewDIYHomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewDIYHomes.
     */
    data: XOR<ReviewDIYHomesUpdateInput, ReviewDIYHomesUncheckedUpdateInput>
    /**
     * Choose, which ReviewDIYHomes to update.
     */
    where: ReviewDIYHomesWhereUniqueInput
  }

  /**
   * ReviewDIYHomes updateMany
   */
  export type ReviewDIYHomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewDIYHomes.
     */
    data: XOR<ReviewDIYHomesUpdateManyMutationInput, ReviewDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which ReviewDIYHomes to update
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * Limit how many ReviewDIYHomes to update.
     */
    limit?: number
  }

  /**
   * ReviewDIYHomes updateManyAndReturn
   */
  export type ReviewDIYHomesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to update ReviewDIYHomes.
     */
    data: XOR<ReviewDIYHomesUpdateManyMutationInput, ReviewDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which ReviewDIYHomes to update
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * Limit how many ReviewDIYHomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewDIYHomes upsert
   */
  export type ReviewDIYHomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewDIYHomes to update in case it exists.
     */
    where: ReviewDIYHomesWhereUniqueInput
    /**
     * In case the ReviewDIYHomes found by the `where` argument doesn't exist, create a new ReviewDIYHomes with this data.
     */
    create: XOR<ReviewDIYHomesCreateInput, ReviewDIYHomesUncheckedCreateInput>
    /**
     * In case the ReviewDIYHomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewDIYHomesUpdateInput, ReviewDIYHomesUncheckedUpdateInput>
  }

  /**
   * ReviewDIYHomes delete
   */
  export type ReviewDIYHomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    /**
     * Filter which ReviewDIYHomes to delete.
     */
    where: ReviewDIYHomesWhereUniqueInput
  }

  /**
   * ReviewDIYHomes deleteMany
   */
  export type ReviewDIYHomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewDIYHomes to delete
     */
    where?: ReviewDIYHomesWhereInput
    /**
     * Limit how many ReviewDIYHomes to delete.
     */
    limit?: number
  }

  /**
   * ReviewDIYHomes.Report
   */
  export type ReviewDIYHomes$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    where?: ReportDIYHomesWhereInput
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    cursor?: ReportDIYHomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * ReviewDIYHomes without action
   */
  export type ReviewDIYHomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
  }


  /**
   * Model LikeDIYHomes
   */

  export type AggregateLikeDIYHomes = {
    _count: LikeDIYHomesCountAggregateOutputType | null
    _min: LikeDIYHomesMinAggregateOutputType | null
    _max: LikeDIYHomesMaxAggregateOutputType | null
  }

  export type LikeDIYHomesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type LikeDIYHomesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type LikeDIYHomesCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type LikeDIYHomesMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type LikeDIYHomesMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type LikeDIYHomesCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeDIYHomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeDIYHomes to aggregate.
     */
    where?: LikeDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeDIYHomes to fetch.
     */
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikeDIYHomes
    **/
    _count?: true | LikeDIYHomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeDIYHomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeDIYHomesMaxAggregateInputType
  }

  export type GetLikeDIYHomesAggregateType<T extends LikeDIYHomesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeDIYHomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeDIYHomes[P]>
      : GetScalarType<T[P], AggregateLikeDIYHomes[P]>
  }




  export type LikeDIYHomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeDIYHomesWhereInput
    orderBy?: LikeDIYHomesOrderByWithAggregationInput | LikeDIYHomesOrderByWithAggregationInput[]
    by: LikeDIYHomesScalarFieldEnum[] | LikeDIYHomesScalarFieldEnum
    having?: LikeDIYHomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeDIYHomesCountAggregateInputType | true
    _min?: LikeDIYHomesMinAggregateInputType
    _max?: LikeDIYHomesMaxAggregateInputType
  }

  export type LikeDIYHomesGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    _count: LikeDIYHomesCountAggregateOutputType | null
    _min: LikeDIYHomesMinAggregateOutputType | null
    _max: LikeDIYHomesMaxAggregateOutputType | null
  }

  type GetLikeDIYHomesGroupByPayload<T extends LikeDIYHomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeDIYHomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeDIYHomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeDIYHomesGroupByOutputType[P]>
            : GetScalarType<T[P], LikeDIYHomesGroupByOutputType[P]>
        }
      >
    >


  export type LikeDIYHomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeDIYHomes"]>

  export type LikeDIYHomesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeDIYHomes"]>

  export type LikeDIYHomesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeDIYHomes"]>

  export type LikeDIYHomesSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type LikeDIYHomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["likeDIYHomes"]>
  export type LikeDIYHomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }
  export type LikeDIYHomesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }
  export type LikeDIYHomesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }

  export type $LikeDIYHomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikeDIYHomes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostDIYHomesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["likeDIYHomes"]>
    composites: {}
  }

  type LikeDIYHomesGetPayload<S extends boolean | null | undefined | LikeDIYHomesDefaultArgs> = $Result.GetResult<Prisma.$LikeDIYHomesPayload, S>

  type LikeDIYHomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeDIYHomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeDIYHomesCountAggregateInputType | true
    }

  export interface LikeDIYHomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikeDIYHomes'], meta: { name: 'LikeDIYHomes' } }
    /**
     * Find zero or one LikeDIYHomes that matches the filter.
     * @param {LikeDIYHomesFindUniqueArgs} args - Arguments to find a LikeDIYHomes
     * @example
     * // Get one LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeDIYHomesFindUniqueArgs>(args: SelectSubset<T, LikeDIYHomesFindUniqueArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikeDIYHomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeDIYHomesFindUniqueOrThrowArgs} args - Arguments to find a LikeDIYHomes
     * @example
     * // Get one LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeDIYHomesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeDIYHomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesFindFirstArgs} args - Arguments to find a LikeDIYHomes
     * @example
     * // Get one LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeDIYHomesFindFirstArgs>(args?: SelectSubset<T, LikeDIYHomesFindFirstArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeDIYHomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesFindFirstOrThrowArgs} args - Arguments to find a LikeDIYHomes
     * @example
     * // Get one LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeDIYHomesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeDIYHomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikeDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findMany()
     * 
     * // Get first 10 LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeDIYHomesWithIdOnly = await prisma.likeDIYHomes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeDIYHomesFindManyArgs>(args?: SelectSubset<T, LikeDIYHomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikeDIYHomes.
     * @param {LikeDIYHomesCreateArgs} args - Arguments to create a LikeDIYHomes.
     * @example
     * // Create one LikeDIYHomes
     * const LikeDIYHomes = await prisma.likeDIYHomes.create({
     *   data: {
     *     // ... data to create a LikeDIYHomes
     *   }
     * })
     * 
     */
    create<T extends LikeDIYHomesCreateArgs>(args: SelectSubset<T, LikeDIYHomesCreateArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikeDIYHomes.
     * @param {LikeDIYHomesCreateManyArgs} args - Arguments to create many LikeDIYHomes.
     * @example
     * // Create many LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeDIYHomesCreateManyArgs>(args?: SelectSubset<T, LikeDIYHomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikeDIYHomes and returns the data saved in the database.
     * @param {LikeDIYHomesCreateManyAndReturnArgs} args - Arguments to create many LikeDIYHomes.
     * @example
     * // Create many LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikeDIYHomes and only return the `id`
     * const likeDIYHomesWithIdOnly = await prisma.likeDIYHomes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeDIYHomesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeDIYHomesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikeDIYHomes.
     * @param {LikeDIYHomesDeleteArgs} args - Arguments to delete one LikeDIYHomes.
     * @example
     * // Delete one LikeDIYHomes
     * const LikeDIYHomes = await prisma.likeDIYHomes.delete({
     *   where: {
     *     // ... filter to delete one LikeDIYHomes
     *   }
     * })
     * 
     */
    delete<T extends LikeDIYHomesDeleteArgs>(args: SelectSubset<T, LikeDIYHomesDeleteArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikeDIYHomes.
     * @param {LikeDIYHomesUpdateArgs} args - Arguments to update one LikeDIYHomes.
     * @example
     * // Update one LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeDIYHomesUpdateArgs>(args: SelectSubset<T, LikeDIYHomesUpdateArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikeDIYHomes.
     * @param {LikeDIYHomesDeleteManyArgs} args - Arguments to filter LikeDIYHomes to delete.
     * @example
     * // Delete a few LikeDIYHomes
     * const { count } = await prisma.likeDIYHomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDIYHomesDeleteManyArgs>(args?: SelectSubset<T, LikeDIYHomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeDIYHomesUpdateManyArgs>(args: SelectSubset<T, LikeDIYHomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeDIYHomes and returns the data updated in the database.
     * @param {LikeDIYHomesUpdateManyAndReturnArgs} args - Arguments to update many LikeDIYHomes.
     * @example
     * // Update many LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikeDIYHomes and only return the `id`
     * const likeDIYHomesWithIdOnly = await prisma.likeDIYHomes.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeDIYHomesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeDIYHomesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikeDIYHomes.
     * @param {LikeDIYHomesUpsertArgs} args - Arguments to update or create a LikeDIYHomes.
     * @example
     * // Update or create a LikeDIYHomes
     * const likeDIYHomes = await prisma.likeDIYHomes.upsert({
     *   create: {
     *     // ... data to create a LikeDIYHomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeDIYHomes we want to update
     *   }
     * })
     */
    upsert<T extends LikeDIYHomesUpsertArgs>(args: SelectSubset<T, LikeDIYHomesUpsertArgs<ExtArgs>>): Prisma__LikeDIYHomesClient<$Result.GetResult<Prisma.$LikeDIYHomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikeDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesCountArgs} args - Arguments to filter LikeDIYHomes to count.
     * @example
     * // Count the number of LikeDIYHomes
     * const count = await prisma.likeDIYHomes.count({
     *   where: {
     *     // ... the filter for the LikeDIYHomes we want to count
     *   }
     * })
    **/
    count<T extends LikeDIYHomesCountArgs>(
      args?: Subset<T, LikeDIYHomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeDIYHomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeDIYHomesAggregateArgs>(args: Subset<T, LikeDIYHomesAggregateArgs>): Prisma.PrismaPromise<GetLikeDIYHomesAggregateType<T>>

    /**
     * Group by LikeDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeDIYHomesGroupByArgs} args - Group by arguments.
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
      T extends LikeDIYHomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeDIYHomesGroupByArgs['orderBy'] }
        : { orderBy?: LikeDIYHomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeDIYHomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeDIYHomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikeDIYHomes model
   */
  readonly fields: LikeDIYHomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikeDIYHomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeDIYHomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDIYHomesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomesDefaultArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LikeDIYHomes model
   */ 
  interface LikeDIYHomesFieldRefs {
    readonly id: FieldRef<"LikeDIYHomes", 'String'>
    readonly postId: FieldRef<"LikeDIYHomes", 'String'>
    readonly userId: FieldRef<"LikeDIYHomes", 'String'>
    readonly createdAt: FieldRef<"LikeDIYHomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikeDIYHomes findUnique
   */
  export type LikeDIYHomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which LikeDIYHomes to fetch.
     */
    where: LikeDIYHomesWhereUniqueInput
  }

  /**
   * LikeDIYHomes findUniqueOrThrow
   */
  export type LikeDIYHomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which LikeDIYHomes to fetch.
     */
    where: LikeDIYHomesWhereUniqueInput
  }

  /**
   * LikeDIYHomes findFirst
   */
  export type LikeDIYHomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which LikeDIYHomes to fetch.
     */
    where?: LikeDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeDIYHomes to fetch.
     */
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeDIYHomes.
     */
    cursor?: LikeDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeDIYHomes.
     */
    distinct?: LikeDIYHomesScalarFieldEnum | LikeDIYHomesScalarFieldEnum[]
  }

  /**
   * LikeDIYHomes findFirstOrThrow
   */
  export type LikeDIYHomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which LikeDIYHomes to fetch.
     */
    where?: LikeDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeDIYHomes to fetch.
     */
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeDIYHomes.
     */
    cursor?: LikeDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeDIYHomes.
     */
    distinct?: LikeDIYHomesScalarFieldEnum | LikeDIYHomesScalarFieldEnum[]
  }

  /**
   * LikeDIYHomes findMany
   */
  export type LikeDIYHomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which LikeDIYHomes to fetch.
     */
    where?: LikeDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeDIYHomes to fetch.
     */
    orderBy?: LikeDIYHomesOrderByWithRelationInput | LikeDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikeDIYHomes.
     */
    cursor?: LikeDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeDIYHomes.
     */
    skip?: number
    distinct?: LikeDIYHomesScalarFieldEnum | LikeDIYHomesScalarFieldEnum[]
  }

  /**
   * LikeDIYHomes create
   */
  export type LikeDIYHomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to create a LikeDIYHomes.
     */
    data: XOR<LikeDIYHomesCreateInput, LikeDIYHomesUncheckedCreateInput>
  }

  /**
   * LikeDIYHomes createMany
   */
  export type LikeDIYHomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikeDIYHomes.
     */
    data: LikeDIYHomesCreateManyInput | LikeDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikeDIYHomes createManyAndReturn
   */
  export type LikeDIYHomesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to create many LikeDIYHomes.
     */
    data: LikeDIYHomesCreateManyInput | LikeDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeDIYHomes update
   */
  export type LikeDIYHomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to update a LikeDIYHomes.
     */
    data: XOR<LikeDIYHomesUpdateInput, LikeDIYHomesUncheckedUpdateInput>
    /**
     * Choose, which LikeDIYHomes to update.
     */
    where: LikeDIYHomesWhereUniqueInput
  }

  /**
   * LikeDIYHomes updateMany
   */
  export type LikeDIYHomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikeDIYHomes.
     */
    data: XOR<LikeDIYHomesUpdateManyMutationInput, LikeDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which LikeDIYHomes to update
     */
    where?: LikeDIYHomesWhereInput
    /**
     * Limit how many LikeDIYHomes to update.
     */
    limit?: number
  }

  /**
   * LikeDIYHomes updateManyAndReturn
   */
  export type LikeDIYHomesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to update LikeDIYHomes.
     */
    data: XOR<LikeDIYHomesUpdateManyMutationInput, LikeDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which LikeDIYHomes to update
     */
    where?: LikeDIYHomesWhereInput
    /**
     * Limit how many LikeDIYHomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeDIYHomes upsert
   */
  export type LikeDIYHomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * The filter to search for the LikeDIYHomes to update in case it exists.
     */
    where: LikeDIYHomesWhereUniqueInput
    /**
     * In case the LikeDIYHomes found by the `where` argument doesn't exist, create a new LikeDIYHomes with this data.
     */
    create: XOR<LikeDIYHomesCreateInput, LikeDIYHomesUncheckedCreateInput>
    /**
     * In case the LikeDIYHomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeDIYHomesUpdateInput, LikeDIYHomesUncheckedUpdateInput>
  }

  /**
   * LikeDIYHomes delete
   */
  export type LikeDIYHomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
    /**
     * Filter which LikeDIYHomes to delete.
     */
    where: LikeDIYHomesWhereUniqueInput
  }

  /**
   * LikeDIYHomes deleteMany
   */
  export type LikeDIYHomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeDIYHomes to delete
     */
    where?: LikeDIYHomesWhereInput
    /**
     * Limit how many LikeDIYHomes to delete.
     */
    limit?: number
  }

  /**
   * LikeDIYHomes without action
   */
  export type LikeDIYHomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeDIYHomes
     */
    select?: LikeDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeDIYHomes
     */
    omit?: LikeDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeDIYHomesInclude<ExtArgs> | null
  }


  /**
   * Model BookmarkDIYHomes
   */

  export type AggregateBookmarkDIYHomes = {
    _count: BookmarkDIYHomesCountAggregateOutputType | null
    _min: BookmarkDIYHomesMinAggregateOutputType | null
    _max: BookmarkDIYHomesMaxAggregateOutputType | null
  }

  export type BookmarkDIYHomesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BookmarkDIYHomesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BookmarkDIYHomesCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BookmarkDIYHomesMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type BookmarkDIYHomesMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type BookmarkDIYHomesCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkDIYHomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkDIYHomes to aggregate.
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkDIYHomes to fetch.
     */
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarkDIYHomes
    **/
    _count?: true | BookmarkDIYHomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkDIYHomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkDIYHomesMaxAggregateInputType
  }

  export type GetBookmarkDIYHomesAggregateType<T extends BookmarkDIYHomesAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarkDIYHomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarkDIYHomes[P]>
      : GetScalarType<T[P], AggregateBookmarkDIYHomes[P]>
  }




  export type BookmarkDIYHomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkDIYHomesWhereInput
    orderBy?: BookmarkDIYHomesOrderByWithAggregationInput | BookmarkDIYHomesOrderByWithAggregationInput[]
    by: BookmarkDIYHomesScalarFieldEnum[] | BookmarkDIYHomesScalarFieldEnum
    having?: BookmarkDIYHomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkDIYHomesCountAggregateInputType | true
    _min?: BookmarkDIYHomesMinAggregateInputType
    _max?: BookmarkDIYHomesMaxAggregateInputType
  }

  export type BookmarkDIYHomesGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    _count: BookmarkDIYHomesCountAggregateOutputType | null
    _min: BookmarkDIYHomesMinAggregateOutputType | null
    _max: BookmarkDIYHomesMaxAggregateOutputType | null
  }

  type GetBookmarkDIYHomesGroupByPayload<T extends BookmarkDIYHomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkDIYHomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkDIYHomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkDIYHomesGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkDIYHomesGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkDIYHomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkDIYHomes"]>

  export type BookmarkDIYHomesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkDIYHomes"]>

  export type BookmarkDIYHomesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkDIYHomes"]>

  export type BookmarkDIYHomesSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BookmarkDIYHomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["bookmarkDIYHomes"]>
  export type BookmarkDIYHomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }
  export type BookmarkDIYHomesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }
  export type BookmarkDIYHomesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDIYHomesDefaultArgs<ExtArgs>
  }

  export type $BookmarkDIYHomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarkDIYHomes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostDIYHomesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["bookmarkDIYHomes"]>
    composites: {}
  }

  type BookmarkDIYHomesGetPayload<S extends boolean | null | undefined | BookmarkDIYHomesDefaultArgs> = $Result.GetResult<Prisma.$BookmarkDIYHomesPayload, S>

  type BookmarkDIYHomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkDIYHomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkDIYHomesCountAggregateInputType | true
    }

  export interface BookmarkDIYHomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarkDIYHomes'], meta: { name: 'BookmarkDIYHomes' } }
    /**
     * Find zero or one BookmarkDIYHomes that matches the filter.
     * @param {BookmarkDIYHomesFindUniqueArgs} args - Arguments to find a BookmarkDIYHomes
     * @example
     * // Get one BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkDIYHomesFindUniqueArgs>(args: SelectSubset<T, BookmarkDIYHomesFindUniqueArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookmarkDIYHomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkDIYHomesFindUniqueOrThrowArgs} args - Arguments to find a BookmarkDIYHomes
     * @example
     * // Get one BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkDIYHomesFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkDIYHomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesFindFirstArgs} args - Arguments to find a BookmarkDIYHomes
     * @example
     * // Get one BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkDIYHomesFindFirstArgs>(args?: SelectSubset<T, BookmarkDIYHomesFindFirstArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkDIYHomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesFindFirstOrThrowArgs} args - Arguments to find a BookmarkDIYHomes
     * @example
     * // Get one BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkDIYHomesFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkDIYHomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookmarkDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findMany()
     * 
     * // Get first 10 BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkDIYHomesWithIdOnly = await prisma.bookmarkDIYHomes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkDIYHomesFindManyArgs>(args?: SelectSubset<T, BookmarkDIYHomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookmarkDIYHomes.
     * @param {BookmarkDIYHomesCreateArgs} args - Arguments to create a BookmarkDIYHomes.
     * @example
     * // Create one BookmarkDIYHomes
     * const BookmarkDIYHomes = await prisma.bookmarkDIYHomes.create({
     *   data: {
     *     // ... data to create a BookmarkDIYHomes
     *   }
     * })
     * 
     */
    create<T extends BookmarkDIYHomesCreateArgs>(args: SelectSubset<T, BookmarkDIYHomesCreateArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookmarkDIYHomes.
     * @param {BookmarkDIYHomesCreateManyArgs} args - Arguments to create many BookmarkDIYHomes.
     * @example
     * // Create many BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkDIYHomesCreateManyArgs>(args?: SelectSubset<T, BookmarkDIYHomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmarkDIYHomes and returns the data saved in the database.
     * @param {BookmarkDIYHomesCreateManyAndReturnArgs} args - Arguments to create many BookmarkDIYHomes.
     * @example
     * // Create many BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmarkDIYHomes and only return the `id`
     * const bookmarkDIYHomesWithIdOnly = await prisma.bookmarkDIYHomes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkDIYHomesCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkDIYHomesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookmarkDIYHomes.
     * @param {BookmarkDIYHomesDeleteArgs} args - Arguments to delete one BookmarkDIYHomes.
     * @example
     * // Delete one BookmarkDIYHomes
     * const BookmarkDIYHomes = await prisma.bookmarkDIYHomes.delete({
     *   where: {
     *     // ... filter to delete one BookmarkDIYHomes
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDIYHomesDeleteArgs>(args: SelectSubset<T, BookmarkDIYHomesDeleteArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookmarkDIYHomes.
     * @param {BookmarkDIYHomesUpdateArgs} args - Arguments to update one BookmarkDIYHomes.
     * @example
     * // Update one BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkDIYHomesUpdateArgs>(args: SelectSubset<T, BookmarkDIYHomesUpdateArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookmarkDIYHomes.
     * @param {BookmarkDIYHomesDeleteManyArgs} args - Arguments to filter BookmarkDIYHomes to delete.
     * @example
     * // Delete a few BookmarkDIYHomes
     * const { count } = await prisma.bookmarkDIYHomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDIYHomesDeleteManyArgs>(args?: SelectSubset<T, BookmarkDIYHomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkDIYHomesUpdateManyArgs>(args: SelectSubset<T, BookmarkDIYHomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkDIYHomes and returns the data updated in the database.
     * @param {BookmarkDIYHomesUpdateManyAndReturnArgs} args - Arguments to update many BookmarkDIYHomes.
     * @example
     * // Update many BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmarkDIYHomes and only return the `id`
     * const bookmarkDIYHomesWithIdOnly = await prisma.bookmarkDIYHomes.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkDIYHomesUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkDIYHomesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookmarkDIYHomes.
     * @param {BookmarkDIYHomesUpsertArgs} args - Arguments to update or create a BookmarkDIYHomes.
     * @example
     * // Update or create a BookmarkDIYHomes
     * const bookmarkDIYHomes = await prisma.bookmarkDIYHomes.upsert({
     *   create: {
     *     // ... data to create a BookmarkDIYHomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarkDIYHomes we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkDIYHomesUpsertArgs>(args: SelectSubset<T, BookmarkDIYHomesUpsertArgs<ExtArgs>>): Prisma__BookmarkDIYHomesClient<$Result.GetResult<Prisma.$BookmarkDIYHomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookmarkDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesCountArgs} args - Arguments to filter BookmarkDIYHomes to count.
     * @example
     * // Count the number of BookmarkDIYHomes
     * const count = await prisma.bookmarkDIYHomes.count({
     *   where: {
     *     // ... the filter for the BookmarkDIYHomes we want to count
     *   }
     * })
    **/
    count<T extends BookmarkDIYHomesCountArgs>(
      args?: Subset<T, BookmarkDIYHomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkDIYHomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarkDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkDIYHomesAggregateArgs>(args: Subset<T, BookmarkDIYHomesAggregateArgs>): Prisma.PrismaPromise<GetBookmarkDIYHomesAggregateType<T>>

    /**
     * Group by BookmarkDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkDIYHomesGroupByArgs} args - Group by arguments.
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
      T extends BookmarkDIYHomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkDIYHomesGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkDIYHomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkDIYHomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkDIYHomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarkDIYHomes model
   */
  readonly fields: BookmarkDIYHomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarkDIYHomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkDIYHomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDIYHomesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDIYHomesDefaultArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookmarkDIYHomes model
   */ 
  interface BookmarkDIYHomesFieldRefs {
    readonly id: FieldRef<"BookmarkDIYHomes", 'String'>
    readonly postId: FieldRef<"BookmarkDIYHomes", 'String'>
    readonly userId: FieldRef<"BookmarkDIYHomes", 'String'>
    readonly createdAt: FieldRef<"BookmarkDIYHomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookmarkDIYHomes findUnique
   */
  export type BookmarkDIYHomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkDIYHomes to fetch.
     */
    where: BookmarkDIYHomesWhereUniqueInput
  }

  /**
   * BookmarkDIYHomes findUniqueOrThrow
   */
  export type BookmarkDIYHomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkDIYHomes to fetch.
     */
    where: BookmarkDIYHomesWhereUniqueInput
  }

  /**
   * BookmarkDIYHomes findFirst
   */
  export type BookmarkDIYHomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkDIYHomes to fetch.
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkDIYHomes to fetch.
     */
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkDIYHomes.
     */
    cursor?: BookmarkDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkDIYHomes.
     */
    distinct?: BookmarkDIYHomesScalarFieldEnum | BookmarkDIYHomesScalarFieldEnum[]
  }

  /**
   * BookmarkDIYHomes findFirstOrThrow
   */
  export type BookmarkDIYHomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkDIYHomes to fetch.
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkDIYHomes to fetch.
     */
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkDIYHomes.
     */
    cursor?: BookmarkDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkDIYHomes.
     */
    distinct?: BookmarkDIYHomesScalarFieldEnum | BookmarkDIYHomesScalarFieldEnum[]
  }

  /**
   * BookmarkDIYHomes findMany
   */
  export type BookmarkDIYHomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkDIYHomes to fetch.
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkDIYHomes to fetch.
     */
    orderBy?: BookmarkDIYHomesOrderByWithRelationInput | BookmarkDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarkDIYHomes.
     */
    cursor?: BookmarkDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkDIYHomes.
     */
    skip?: number
    distinct?: BookmarkDIYHomesScalarFieldEnum | BookmarkDIYHomesScalarFieldEnum[]
  }

  /**
   * BookmarkDIYHomes create
   */
  export type BookmarkDIYHomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarkDIYHomes.
     */
    data: XOR<BookmarkDIYHomesCreateInput, BookmarkDIYHomesUncheckedCreateInput>
  }

  /**
   * BookmarkDIYHomes createMany
   */
  export type BookmarkDIYHomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarkDIYHomes.
     */
    data: BookmarkDIYHomesCreateManyInput | BookmarkDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarkDIYHomes createManyAndReturn
   */
  export type BookmarkDIYHomesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to create many BookmarkDIYHomes.
     */
    data: BookmarkDIYHomesCreateManyInput | BookmarkDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkDIYHomes update
   */
  export type BookmarkDIYHomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarkDIYHomes.
     */
    data: XOR<BookmarkDIYHomesUpdateInput, BookmarkDIYHomesUncheckedUpdateInput>
    /**
     * Choose, which BookmarkDIYHomes to update.
     */
    where: BookmarkDIYHomesWhereUniqueInput
  }

  /**
   * BookmarkDIYHomes updateMany
   */
  export type BookmarkDIYHomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarkDIYHomes.
     */
    data: XOR<BookmarkDIYHomesUpdateManyMutationInput, BookmarkDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkDIYHomes to update
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * Limit how many BookmarkDIYHomes to update.
     */
    limit?: number
  }

  /**
   * BookmarkDIYHomes updateManyAndReturn
   */
  export type BookmarkDIYHomesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to update BookmarkDIYHomes.
     */
    data: XOR<BookmarkDIYHomesUpdateManyMutationInput, BookmarkDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkDIYHomes to update
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * Limit how many BookmarkDIYHomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkDIYHomes upsert
   */
  export type BookmarkDIYHomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarkDIYHomes to update in case it exists.
     */
    where: BookmarkDIYHomesWhereUniqueInput
    /**
     * In case the BookmarkDIYHomes found by the `where` argument doesn't exist, create a new BookmarkDIYHomes with this data.
     */
    create: XOR<BookmarkDIYHomesCreateInput, BookmarkDIYHomesUncheckedCreateInput>
    /**
     * In case the BookmarkDIYHomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkDIYHomesUpdateInput, BookmarkDIYHomesUncheckedUpdateInput>
  }

  /**
   * BookmarkDIYHomes delete
   */
  export type BookmarkDIYHomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
    /**
     * Filter which BookmarkDIYHomes to delete.
     */
    where: BookmarkDIYHomesWhereUniqueInput
  }

  /**
   * BookmarkDIYHomes deleteMany
   */
  export type BookmarkDIYHomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkDIYHomes to delete
     */
    where?: BookmarkDIYHomesWhereInput
    /**
     * Limit how many BookmarkDIYHomes to delete.
     */
    limit?: number
  }

  /**
   * BookmarkDIYHomes without action
   */
  export type BookmarkDIYHomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkDIYHomes
     */
    select?: BookmarkDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkDIYHomes
     */
    omit?: BookmarkDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkDIYHomesInclude<ExtArgs> | null
  }


  /**
   * Model ReportDIYHomes
   */

  export type AggregateReportDIYHomes = {
    _count: ReportDIYHomesCountAggregateOutputType | null
    _min: ReportDIYHomesMinAggregateOutputType | null
    _max: ReportDIYHomesMaxAggregateOutputType | null
  }

  export type ReportDIYHomesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    reviewId: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportDIYHomesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    reviewId: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportDIYHomesCountAggregateOutputType = {
    id: number
    postId: number
    reviewId: number
    userId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ReportDIYHomesMinAggregateInputType = {
    id?: true
    postId?: true
    reviewId?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportDIYHomesMaxAggregateInputType = {
    id?: true
    postId?: true
    reviewId?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportDIYHomesCountAggregateInputType = {
    id?: true
    postId?: true
    reviewId?: true
    userId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ReportDIYHomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportDIYHomes to aggregate.
     */
    where?: ReportDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportDIYHomes to fetch.
     */
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportDIYHomes
    **/
    _count?: true | ReportDIYHomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportDIYHomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportDIYHomesMaxAggregateInputType
  }

  export type GetReportDIYHomesAggregateType<T extends ReportDIYHomesAggregateArgs> = {
        [P in keyof T & keyof AggregateReportDIYHomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportDIYHomes[P]>
      : GetScalarType<T[P], AggregateReportDIYHomes[P]>
  }




  export type ReportDIYHomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportDIYHomesWhereInput
    orderBy?: ReportDIYHomesOrderByWithAggregationInput | ReportDIYHomesOrderByWithAggregationInput[]
    by: ReportDIYHomesScalarFieldEnum[] | ReportDIYHomesScalarFieldEnum
    having?: ReportDIYHomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportDIYHomesCountAggregateInputType | true
    _min?: ReportDIYHomesMinAggregateInputType
    _max?: ReportDIYHomesMaxAggregateInputType
  }

  export type ReportDIYHomesGroupByOutputType = {
    id: string
    postId: string | null
    reviewId: string | null
    userId: string
    reason: string
    createdAt: Date
    _count: ReportDIYHomesCountAggregateOutputType | null
    _min: ReportDIYHomesMinAggregateOutputType | null
    _max: ReportDIYHomesMaxAggregateOutputType | null
  }

  type GetReportDIYHomesGroupByPayload<T extends ReportDIYHomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportDIYHomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportDIYHomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportDIYHomesGroupByOutputType[P]>
            : GetScalarType<T[P], ReportDIYHomesGroupByOutputType[P]>
        }
      >
    >


  export type ReportDIYHomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reviewId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["reportDIYHomes"]>

  export type ReportDIYHomesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reviewId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["reportDIYHomes"]>

  export type ReportDIYHomesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reviewId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["reportDIYHomes"]>

  export type ReportDIYHomesSelectScalar = {
    id?: boolean
    postId?: boolean
    reviewId?: boolean
    userId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ReportDIYHomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "reviewId" | "userId" | "reason" | "createdAt", ExtArgs["result"]["reportDIYHomes"]>
  export type ReportDIYHomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }
  export type ReportDIYHomesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }
  export type ReportDIYHomesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ReportDIYHomes$postArgs<ExtArgs>
    review?: boolean | ReportDIYHomes$reviewArgs<ExtArgs>
  }

  export type $ReportDIYHomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportDIYHomes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostDIYHomesPayload<ExtArgs> | null
      review: Prisma.$ReviewDIYHomesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string | null
      reviewId: string | null
      userId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["reportDIYHomes"]>
    composites: {}
  }

  type ReportDIYHomesGetPayload<S extends boolean | null | undefined | ReportDIYHomesDefaultArgs> = $Result.GetResult<Prisma.$ReportDIYHomesPayload, S>

  type ReportDIYHomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportDIYHomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportDIYHomesCountAggregateInputType | true
    }

  export interface ReportDIYHomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportDIYHomes'], meta: { name: 'ReportDIYHomes' } }
    /**
     * Find zero or one ReportDIYHomes that matches the filter.
     * @param {ReportDIYHomesFindUniqueArgs} args - Arguments to find a ReportDIYHomes
     * @example
     * // Get one ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportDIYHomesFindUniqueArgs>(args: SelectSubset<T, ReportDIYHomesFindUniqueArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportDIYHomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportDIYHomesFindUniqueOrThrowArgs} args - Arguments to find a ReportDIYHomes
     * @example
     * // Get one ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportDIYHomesFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportDIYHomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesFindFirstArgs} args - Arguments to find a ReportDIYHomes
     * @example
     * // Get one ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportDIYHomesFindFirstArgs>(args?: SelectSubset<T, ReportDIYHomesFindFirstArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportDIYHomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesFindFirstOrThrowArgs} args - Arguments to find a ReportDIYHomes
     * @example
     * // Get one ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportDIYHomesFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportDIYHomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportDIYHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findMany()
     * 
     * // Get first 10 ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportDIYHomesWithIdOnly = await prisma.reportDIYHomes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportDIYHomesFindManyArgs>(args?: SelectSubset<T, ReportDIYHomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportDIYHomes.
     * @param {ReportDIYHomesCreateArgs} args - Arguments to create a ReportDIYHomes.
     * @example
     * // Create one ReportDIYHomes
     * const ReportDIYHomes = await prisma.reportDIYHomes.create({
     *   data: {
     *     // ... data to create a ReportDIYHomes
     *   }
     * })
     * 
     */
    create<T extends ReportDIYHomesCreateArgs>(args: SelectSubset<T, ReportDIYHomesCreateArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportDIYHomes.
     * @param {ReportDIYHomesCreateManyArgs} args - Arguments to create many ReportDIYHomes.
     * @example
     * // Create many ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportDIYHomesCreateManyArgs>(args?: SelectSubset<T, ReportDIYHomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportDIYHomes and returns the data saved in the database.
     * @param {ReportDIYHomesCreateManyAndReturnArgs} args - Arguments to create many ReportDIYHomes.
     * @example
     * // Create many ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportDIYHomes and only return the `id`
     * const reportDIYHomesWithIdOnly = await prisma.reportDIYHomes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportDIYHomesCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportDIYHomesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportDIYHomes.
     * @param {ReportDIYHomesDeleteArgs} args - Arguments to delete one ReportDIYHomes.
     * @example
     * // Delete one ReportDIYHomes
     * const ReportDIYHomes = await prisma.reportDIYHomes.delete({
     *   where: {
     *     // ... filter to delete one ReportDIYHomes
     *   }
     * })
     * 
     */
    delete<T extends ReportDIYHomesDeleteArgs>(args: SelectSubset<T, ReportDIYHomesDeleteArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportDIYHomes.
     * @param {ReportDIYHomesUpdateArgs} args - Arguments to update one ReportDIYHomes.
     * @example
     * // Update one ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportDIYHomesUpdateArgs>(args: SelectSubset<T, ReportDIYHomesUpdateArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportDIYHomes.
     * @param {ReportDIYHomesDeleteManyArgs} args - Arguments to filter ReportDIYHomes to delete.
     * @example
     * // Delete a few ReportDIYHomes
     * const { count } = await prisma.reportDIYHomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDIYHomesDeleteManyArgs>(args?: SelectSubset<T, ReportDIYHomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportDIYHomesUpdateManyArgs>(args: SelectSubset<T, ReportDIYHomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportDIYHomes and returns the data updated in the database.
     * @param {ReportDIYHomesUpdateManyAndReturnArgs} args - Arguments to update many ReportDIYHomes.
     * @example
     * // Update many ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportDIYHomes and only return the `id`
     * const reportDIYHomesWithIdOnly = await prisma.reportDIYHomes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportDIYHomesUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportDIYHomesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportDIYHomes.
     * @param {ReportDIYHomesUpsertArgs} args - Arguments to update or create a ReportDIYHomes.
     * @example
     * // Update or create a ReportDIYHomes
     * const reportDIYHomes = await prisma.reportDIYHomes.upsert({
     *   create: {
     *     // ... data to create a ReportDIYHomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportDIYHomes we want to update
     *   }
     * })
     */
    upsert<T extends ReportDIYHomesUpsertArgs>(args: SelectSubset<T, ReportDIYHomesUpsertArgs<ExtArgs>>): Prisma__ReportDIYHomesClient<$Result.GetResult<Prisma.$ReportDIYHomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesCountArgs} args - Arguments to filter ReportDIYHomes to count.
     * @example
     * // Count the number of ReportDIYHomes
     * const count = await prisma.reportDIYHomes.count({
     *   where: {
     *     // ... the filter for the ReportDIYHomes we want to count
     *   }
     * })
    **/
    count<T extends ReportDIYHomesCountArgs>(
      args?: Subset<T, ReportDIYHomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportDIYHomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportDIYHomesAggregateArgs>(args: Subset<T, ReportDIYHomesAggregateArgs>): Prisma.PrismaPromise<GetReportDIYHomesAggregateType<T>>

    /**
     * Group by ReportDIYHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportDIYHomesGroupByArgs} args - Group by arguments.
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
      T extends ReportDIYHomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportDIYHomesGroupByArgs['orderBy'] }
        : { orderBy?: ReportDIYHomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportDIYHomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportDIYHomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportDIYHomes model
   */
  readonly fields: ReportDIYHomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportDIYHomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportDIYHomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends ReportDIYHomes$postArgs<ExtArgs> = {}>(args?: Subset<T, ReportDIYHomes$postArgs<ExtArgs>>): Prisma__PostDIYHomesClient<$Result.GetResult<Prisma.$PostDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends ReportDIYHomes$reviewArgs<ExtArgs> = {}>(args?: Subset<T, ReportDIYHomes$reviewArgs<ExtArgs>>): Prisma__ReviewDIYHomesClient<$Result.GetResult<Prisma.$ReviewDIYHomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReportDIYHomes model
   */ 
  interface ReportDIYHomesFieldRefs {
    readonly id: FieldRef<"ReportDIYHomes", 'String'>
    readonly postId: FieldRef<"ReportDIYHomes", 'String'>
    readonly reviewId: FieldRef<"ReportDIYHomes", 'String'>
    readonly userId: FieldRef<"ReportDIYHomes", 'String'>
    readonly reason: FieldRef<"ReportDIYHomes", 'String'>
    readonly createdAt: FieldRef<"ReportDIYHomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportDIYHomes findUnique
   */
  export type ReportDIYHomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReportDIYHomes to fetch.
     */
    where: ReportDIYHomesWhereUniqueInput
  }

  /**
   * ReportDIYHomes findUniqueOrThrow
   */
  export type ReportDIYHomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReportDIYHomes to fetch.
     */
    where: ReportDIYHomesWhereUniqueInput
  }

  /**
   * ReportDIYHomes findFirst
   */
  export type ReportDIYHomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReportDIYHomes to fetch.
     */
    where?: ReportDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportDIYHomes to fetch.
     */
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportDIYHomes.
     */
    cursor?: ReportDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportDIYHomes.
     */
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * ReportDIYHomes findFirstOrThrow
   */
  export type ReportDIYHomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReportDIYHomes to fetch.
     */
    where?: ReportDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportDIYHomes to fetch.
     */
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportDIYHomes.
     */
    cursor?: ReportDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportDIYHomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportDIYHomes.
     */
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * ReportDIYHomes findMany
   */
  export type ReportDIYHomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter, which ReportDIYHomes to fetch.
     */
    where?: ReportDIYHomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportDIYHomes to fetch.
     */
    orderBy?: ReportDIYHomesOrderByWithRelationInput | ReportDIYHomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportDIYHomes.
     */
    cursor?: ReportDIYHomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportDIYHomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportDIYHomes.
     */
    skip?: number
    distinct?: ReportDIYHomesScalarFieldEnum | ReportDIYHomesScalarFieldEnum[]
  }

  /**
   * ReportDIYHomes create
   */
  export type ReportDIYHomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportDIYHomes.
     */
    data: XOR<ReportDIYHomesCreateInput, ReportDIYHomesUncheckedCreateInput>
  }

  /**
   * ReportDIYHomes createMany
   */
  export type ReportDIYHomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportDIYHomes.
     */
    data: ReportDIYHomesCreateManyInput | ReportDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportDIYHomes createManyAndReturn
   */
  export type ReportDIYHomesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to create many ReportDIYHomes.
     */
    data: ReportDIYHomesCreateManyInput | ReportDIYHomesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportDIYHomes update
   */
  export type ReportDIYHomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportDIYHomes.
     */
    data: XOR<ReportDIYHomesUpdateInput, ReportDIYHomesUncheckedUpdateInput>
    /**
     * Choose, which ReportDIYHomes to update.
     */
    where: ReportDIYHomesWhereUniqueInput
  }

  /**
   * ReportDIYHomes updateMany
   */
  export type ReportDIYHomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportDIYHomes.
     */
    data: XOR<ReportDIYHomesUpdateManyMutationInput, ReportDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which ReportDIYHomes to update
     */
    where?: ReportDIYHomesWhereInput
    /**
     * Limit how many ReportDIYHomes to update.
     */
    limit?: number
  }

  /**
   * ReportDIYHomes updateManyAndReturn
   */
  export type ReportDIYHomesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * The data used to update ReportDIYHomes.
     */
    data: XOR<ReportDIYHomesUpdateManyMutationInput, ReportDIYHomesUncheckedUpdateManyInput>
    /**
     * Filter which ReportDIYHomes to update
     */
    where?: ReportDIYHomesWhereInput
    /**
     * Limit how many ReportDIYHomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportDIYHomes upsert
   */
  export type ReportDIYHomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportDIYHomes to update in case it exists.
     */
    where: ReportDIYHomesWhereUniqueInput
    /**
     * In case the ReportDIYHomes found by the `where` argument doesn't exist, create a new ReportDIYHomes with this data.
     */
    create: XOR<ReportDIYHomesCreateInput, ReportDIYHomesUncheckedCreateInput>
    /**
     * In case the ReportDIYHomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportDIYHomesUpdateInput, ReportDIYHomesUncheckedUpdateInput>
  }

  /**
   * ReportDIYHomes delete
   */
  export type ReportDIYHomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
    /**
     * Filter which ReportDIYHomes to delete.
     */
    where: ReportDIYHomesWhereUniqueInput
  }

  /**
   * ReportDIYHomes deleteMany
   */
  export type ReportDIYHomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportDIYHomes to delete
     */
    where?: ReportDIYHomesWhereInput
    /**
     * Limit how many ReportDIYHomes to delete.
     */
    limit?: number
  }

  /**
   * ReportDIYHomes.post
   */
  export type ReportDIYHomes$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDIYHomes
     */
    select?: PostDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostDIYHomes
     */
    omit?: PostDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDIYHomesInclude<ExtArgs> | null
    where?: PostDIYHomesWhereInput
  }

  /**
   * ReportDIYHomes.review
   */
  export type ReportDIYHomes$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDIYHomes
     */
    select?: ReviewDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDIYHomes
     */
    omit?: ReviewDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDIYHomesInclude<ExtArgs> | null
    where?: ReviewDIYHomesWhereInput
  }

  /**
   * ReportDIYHomes without action
   */
  export type ReportDIYHomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportDIYHomes
     */
    select?: ReportDIYHomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportDIYHomes
     */
    omit?: ReportDIYHomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportDIYHomesInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    group: 'group',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostDIYHomesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostDIYHomesScalarFieldEnum = (typeof PostDIYHomesScalarFieldEnum)[keyof typeof PostDIYHomesScalarFieldEnum]


  export const ReviewDIYHomesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewDIYHomesScalarFieldEnum = (typeof ReviewDIYHomesScalarFieldEnum)[keyof typeof ReviewDIYHomesScalarFieldEnum]


  export const LikeDIYHomesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type LikeDIYHomesScalarFieldEnum = (typeof LikeDIYHomesScalarFieldEnum)[keyof typeof LikeDIYHomesScalarFieldEnum]


  export const BookmarkDIYHomesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BookmarkDIYHomesScalarFieldEnum = (typeof BookmarkDIYHomesScalarFieldEnum)[keyof typeof BookmarkDIYHomesScalarFieldEnum]


  export const ReportDIYHomesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    reviewId: 'reviewId',
    userId: 'userId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ReportDIYHomesScalarFieldEnum = (typeof ReportDIYHomesScalarFieldEnum)[keyof typeof ReportDIYHomesScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    group?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostDIYHomesListRelationFilter
    reviews?: ReviewDIYHomesListRelationFilter
    bookmarks?: BookmarkDIYHomesListRelationFilter
    Like?: LikeDIYHomesListRelationFilter
    Report?: ReportDIYHomesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
    posts?: PostDIYHomesOrderByRelationAggregateInput
    reviews?: ReviewDIYHomesOrderByRelationAggregateInput
    bookmarks?: BookmarkDIYHomesOrderByRelationAggregateInput
    Like?: LikeDIYHomesOrderByRelationAggregateInput
    Report?: ReportDIYHomesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    group?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostDIYHomesListRelationFilter
    reviews?: ReviewDIYHomesListRelationFilter
    bookmarks?: BookmarkDIYHomesListRelationFilter
    Like?: LikeDIYHomesListRelationFilter
    Report?: ReportDIYHomesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    group?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostDIYHomesWhereInput = {
    AND?: PostDIYHomesWhereInput | PostDIYHomesWhereInput[]
    OR?: PostDIYHomesWhereInput[]
    NOT?: PostDIYHomesWhereInput | PostDIYHomesWhereInput[]
    id?: StringFilter<"PostDIYHomes"> | string
    title?: StringFilter<"PostDIYHomes"> | string
    content?: StringFilter<"PostDIYHomes"> | string
    category?: StringFilter<"PostDIYHomes"> | string
    userId?: StringFilter<"PostDIYHomes"> | string
    createdAt?: DateTimeFilter<"PostDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewDIYHomesListRelationFilter
    bookmarks?: BookmarkDIYHomesListRelationFilter
    Like?: LikeDIYHomesListRelationFilter
    Report?: ReportDIYHomesListRelationFilter
  }

  export type PostDIYHomesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewDIYHomesOrderByRelationAggregateInput
    bookmarks?: BookmarkDIYHomesOrderByRelationAggregateInput
    Like?: LikeDIYHomesOrderByRelationAggregateInput
    Report?: ReportDIYHomesOrderByRelationAggregateInput
  }

  export type PostDIYHomesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostDIYHomesWhereInput | PostDIYHomesWhereInput[]
    OR?: PostDIYHomesWhereInput[]
    NOT?: PostDIYHomesWhereInput | PostDIYHomesWhereInput[]
    title?: StringFilter<"PostDIYHomes"> | string
    content?: StringFilter<"PostDIYHomes"> | string
    category?: StringFilter<"PostDIYHomes"> | string
    userId?: StringFilter<"PostDIYHomes"> | string
    createdAt?: DateTimeFilter<"PostDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewDIYHomesListRelationFilter
    bookmarks?: BookmarkDIYHomesListRelationFilter
    Like?: LikeDIYHomesListRelationFilter
    Report?: ReportDIYHomesListRelationFilter
  }, "id">

  export type PostDIYHomesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostDIYHomesCountOrderByAggregateInput
    _max?: PostDIYHomesMaxOrderByAggregateInput
    _min?: PostDIYHomesMinOrderByAggregateInput
  }

  export type PostDIYHomesScalarWhereWithAggregatesInput = {
    AND?: PostDIYHomesScalarWhereWithAggregatesInput | PostDIYHomesScalarWhereWithAggregatesInput[]
    OR?: PostDIYHomesScalarWhereWithAggregatesInput[]
    NOT?: PostDIYHomesScalarWhereWithAggregatesInput | PostDIYHomesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostDIYHomes"> | string
    title?: StringWithAggregatesFilter<"PostDIYHomes"> | string
    content?: StringWithAggregatesFilter<"PostDIYHomes"> | string
    category?: StringWithAggregatesFilter<"PostDIYHomes"> | string
    userId?: StringWithAggregatesFilter<"PostDIYHomes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostDIYHomes"> | Date | string
  }

  export type ReviewDIYHomesWhereInput = {
    AND?: ReviewDIYHomesWhereInput | ReviewDIYHomesWhereInput[]
    OR?: ReviewDIYHomesWhereInput[]
    NOT?: ReviewDIYHomesWhereInput | ReviewDIYHomesWhereInput[]
    id?: StringFilter<"ReviewDIYHomes"> | string
    postId?: StringFilter<"ReviewDIYHomes"> | string
    userId?: StringFilter<"ReviewDIYHomes"> | string
    rating?: IntFilter<"ReviewDIYHomes"> | number
    comment?: StringFilter<"ReviewDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReviewDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
    Report?: ReportDIYHomesListRelationFilter
  }

  export type ReviewDIYHomesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostDIYHomesOrderByWithRelationInput
    Report?: ReportDIYHomesOrderByRelationAggregateInput
  }

  export type ReviewDIYHomesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewDIYHomesWhereInput | ReviewDIYHomesWhereInput[]
    OR?: ReviewDIYHomesWhereInput[]
    NOT?: ReviewDIYHomesWhereInput | ReviewDIYHomesWhereInput[]
    postId?: StringFilter<"ReviewDIYHomes"> | string
    userId?: StringFilter<"ReviewDIYHomes"> | string
    rating?: IntFilter<"ReviewDIYHomes"> | number
    comment?: StringFilter<"ReviewDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReviewDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
    Report?: ReportDIYHomesListRelationFilter
  }, "id">

  export type ReviewDIYHomesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewDIYHomesCountOrderByAggregateInput
    _avg?: ReviewDIYHomesAvgOrderByAggregateInput
    _max?: ReviewDIYHomesMaxOrderByAggregateInput
    _min?: ReviewDIYHomesMinOrderByAggregateInput
    _sum?: ReviewDIYHomesSumOrderByAggregateInput
  }

  export type ReviewDIYHomesScalarWhereWithAggregatesInput = {
    AND?: ReviewDIYHomesScalarWhereWithAggregatesInput | ReviewDIYHomesScalarWhereWithAggregatesInput[]
    OR?: ReviewDIYHomesScalarWhereWithAggregatesInput[]
    NOT?: ReviewDIYHomesScalarWhereWithAggregatesInput | ReviewDIYHomesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewDIYHomes"> | string
    postId?: StringWithAggregatesFilter<"ReviewDIYHomes"> | string
    userId?: StringWithAggregatesFilter<"ReviewDIYHomes"> | string
    rating?: IntWithAggregatesFilter<"ReviewDIYHomes"> | number
    comment?: StringWithAggregatesFilter<"ReviewDIYHomes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewDIYHomes"> | Date | string
  }

  export type LikeDIYHomesWhereInput = {
    AND?: LikeDIYHomesWhereInput | LikeDIYHomesWhereInput[]
    OR?: LikeDIYHomesWhereInput[]
    NOT?: LikeDIYHomesWhereInput | LikeDIYHomesWhereInput[]
    id?: StringFilter<"LikeDIYHomes"> | string
    postId?: StringFilter<"LikeDIYHomes"> | string
    userId?: StringFilter<"LikeDIYHomes"> | string
    createdAt?: DateTimeFilter<"LikeDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
  }

  export type LikeDIYHomesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostDIYHomesOrderByWithRelationInput
  }

  export type LikeDIYHomesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_userId?: LikeDIYHomesPostIdUserIdCompoundUniqueInput
    AND?: LikeDIYHomesWhereInput | LikeDIYHomesWhereInput[]
    OR?: LikeDIYHomesWhereInput[]
    NOT?: LikeDIYHomesWhereInput | LikeDIYHomesWhereInput[]
    postId?: StringFilter<"LikeDIYHomes"> | string
    userId?: StringFilter<"LikeDIYHomes"> | string
    createdAt?: DateTimeFilter<"LikeDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
  }, "id" | "postId_userId">

  export type LikeDIYHomesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeDIYHomesCountOrderByAggregateInput
    _max?: LikeDIYHomesMaxOrderByAggregateInput
    _min?: LikeDIYHomesMinOrderByAggregateInput
  }

  export type LikeDIYHomesScalarWhereWithAggregatesInput = {
    AND?: LikeDIYHomesScalarWhereWithAggregatesInput | LikeDIYHomesScalarWhereWithAggregatesInput[]
    OR?: LikeDIYHomesScalarWhereWithAggregatesInput[]
    NOT?: LikeDIYHomesScalarWhereWithAggregatesInput | LikeDIYHomesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikeDIYHomes"> | string
    postId?: StringWithAggregatesFilter<"LikeDIYHomes"> | string
    userId?: StringWithAggregatesFilter<"LikeDIYHomes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LikeDIYHomes"> | Date | string
  }

  export type BookmarkDIYHomesWhereInput = {
    AND?: BookmarkDIYHomesWhereInput | BookmarkDIYHomesWhereInput[]
    OR?: BookmarkDIYHomesWhereInput[]
    NOT?: BookmarkDIYHomesWhereInput | BookmarkDIYHomesWhereInput[]
    id?: StringFilter<"BookmarkDIYHomes"> | string
    postId?: StringFilter<"BookmarkDIYHomes"> | string
    userId?: StringFilter<"BookmarkDIYHomes"> | string
    createdAt?: DateTimeFilter<"BookmarkDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
  }

  export type BookmarkDIYHomesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostDIYHomesOrderByWithRelationInput
  }

  export type BookmarkDIYHomesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_userId?: BookmarkDIYHomesPostIdUserIdCompoundUniqueInput
    AND?: BookmarkDIYHomesWhereInput | BookmarkDIYHomesWhereInput[]
    OR?: BookmarkDIYHomesWhereInput[]
    NOT?: BookmarkDIYHomesWhereInput | BookmarkDIYHomesWhereInput[]
    postId?: StringFilter<"BookmarkDIYHomes"> | string
    userId?: StringFilter<"BookmarkDIYHomes"> | string
    createdAt?: DateTimeFilter<"BookmarkDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesScalarRelationFilter, PostDIYHomesWhereInput>
  }, "id" | "postId_userId">

  export type BookmarkDIYHomesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkDIYHomesCountOrderByAggregateInput
    _max?: BookmarkDIYHomesMaxOrderByAggregateInput
    _min?: BookmarkDIYHomesMinOrderByAggregateInput
  }

  export type BookmarkDIYHomesScalarWhereWithAggregatesInput = {
    AND?: BookmarkDIYHomesScalarWhereWithAggregatesInput | BookmarkDIYHomesScalarWhereWithAggregatesInput[]
    OR?: BookmarkDIYHomesScalarWhereWithAggregatesInput[]
    NOT?: BookmarkDIYHomesScalarWhereWithAggregatesInput | BookmarkDIYHomesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookmarkDIYHomes"> | string
    postId?: StringWithAggregatesFilter<"BookmarkDIYHomes"> | string
    userId?: StringWithAggregatesFilter<"BookmarkDIYHomes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookmarkDIYHomes"> | Date | string
  }

  export type ReportDIYHomesWhereInput = {
    AND?: ReportDIYHomesWhereInput | ReportDIYHomesWhereInput[]
    OR?: ReportDIYHomesWhereInput[]
    NOT?: ReportDIYHomesWhereInput | ReportDIYHomesWhereInput[]
    id?: StringFilter<"ReportDIYHomes"> | string
    postId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    reviewId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    userId?: StringFilter<"ReportDIYHomes"> | string
    reason?: StringFilter<"ReportDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReportDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesNullableScalarRelationFilter, PostDIYHomesWhereInput> | null
    review?: XOR<ReviewDIYHomesNullableScalarRelationFilter, ReviewDIYHomesWhereInput> | null
  }

  export type ReportDIYHomesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrderInput | SortOrder
    reviewId?: SortOrderInput | SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostDIYHomesOrderByWithRelationInput
    review?: ReviewDIYHomesOrderByWithRelationInput
  }

  export type ReportDIYHomesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportDIYHomesWhereInput | ReportDIYHomesWhereInput[]
    OR?: ReportDIYHomesWhereInput[]
    NOT?: ReportDIYHomesWhereInput | ReportDIYHomesWhereInput[]
    postId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    reviewId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    userId?: StringFilter<"ReportDIYHomes"> | string
    reason?: StringFilter<"ReportDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReportDIYHomes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostDIYHomesNullableScalarRelationFilter, PostDIYHomesWhereInput> | null
    review?: XOR<ReviewDIYHomesNullableScalarRelationFilter, ReviewDIYHomesWhereInput> | null
  }, "id">

  export type ReportDIYHomesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrderInput | SortOrder
    reviewId?: SortOrderInput | SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: ReportDIYHomesCountOrderByAggregateInput
    _max?: ReportDIYHomesMaxOrderByAggregateInput
    _min?: ReportDIYHomesMinOrderByAggregateInput
  }

  export type ReportDIYHomesScalarWhereWithAggregatesInput = {
    AND?: ReportDIYHomesScalarWhereWithAggregatesInput | ReportDIYHomesScalarWhereWithAggregatesInput[]
    OR?: ReportDIYHomesScalarWhereWithAggregatesInput[]
    NOT?: ReportDIYHomesScalarWhereWithAggregatesInput | ReportDIYHomesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportDIYHomes"> | string
    postId?: StringNullableWithAggregatesFilter<"ReportDIYHomes"> | string | null
    reviewId?: StringNullableWithAggregatesFilter<"ReportDIYHomes"> | string | null
    userId?: StringWithAggregatesFilter<"ReportDIYHomes"> | string
    reason?: StringWithAggregatesFilter<"ReportDIYHomes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReportDIYHomes"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDIYHomesCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesCreateManyInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
  }

  export type PostDIYHomesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDIYHomesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDIYHomesCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    post: PostDIYHomesCreateNestedOneWithoutReviewsInput
    Report?: ReportDIYHomesCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    post?: PostDIYHomesUpdateOneRequiredWithoutReviewsNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesCreateManyInput = {
    id?: string
    postId: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewDIYHomesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDIYHomesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeInput
    post: PostDIYHomesCreateNestedOneWithoutLikeInput
  }

  export type LikeDIYHomesUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNestedInput
    post?: PostDIYHomesUpdateOneRequiredWithoutLikeNestedInput
  }

  export type LikeDIYHomesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    post: PostDIYHomesCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkDIYHomesUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    post?: PostDIYHomesUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkDIYHomesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportInput
    post?: PostDIYHomesCreateNestedOneWithoutReportInput
    review?: ReviewDIYHomesCreateNestedOneWithoutReportInput
  }

  export type ReportDIYHomesUncheckedCreateInput = {
    id?: string
    postId?: string | null
    reviewId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportNestedInput
    post?: PostDIYHomesUpdateOneWithoutReportNestedInput
    review?: ReviewDIYHomesUpdateOneWithoutReportNestedInput
  }

  export type ReportDIYHomesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesCreateManyInput = {
    id?: string
    postId?: string | null
    reviewId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
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

  export type PostDIYHomesListRelationFilter = {
    every?: PostDIYHomesWhereInput
    some?: PostDIYHomesWhereInput
    none?: PostDIYHomesWhereInput
  }

  export type ReviewDIYHomesListRelationFilter = {
    every?: ReviewDIYHomesWhereInput
    some?: ReviewDIYHomesWhereInput
    none?: ReviewDIYHomesWhereInput
  }

  export type BookmarkDIYHomesListRelationFilter = {
    every?: BookmarkDIYHomesWhereInput
    some?: BookmarkDIYHomesWhereInput
    none?: BookmarkDIYHomesWhereInput
  }

  export type LikeDIYHomesListRelationFilter = {
    every?: LikeDIYHomesWhereInput
    some?: LikeDIYHomesWhereInput
    none?: LikeDIYHomesWhereInput
  }

  export type ReportDIYHomesListRelationFilter = {
    every?: ReportDIYHomesWhereInput
    some?: ReportDIYHomesWhereInput
    none?: ReportDIYHomesWhereInput
  }

  export type PostDIYHomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewDIYHomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkDIYHomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeDIYHomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportDIYHomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    group?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    group?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostDIYHomesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostDIYHomesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostDIYHomesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
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

  export type PostDIYHomesScalarRelationFilter = {
    is?: PostDIYHomesWhereInput
    isNot?: PostDIYHomesWhereInput
  }

  export type ReviewDIYHomesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewDIYHomesAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewDIYHomesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewDIYHomesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewDIYHomesSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type LikeDIYHomesPostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type LikeDIYHomesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeDIYHomesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeDIYHomesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkDIYHomesPostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type BookmarkDIYHomesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkDIYHomesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkDIYHomesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type PostDIYHomesNullableScalarRelationFilter = {
    is?: PostDIYHomesWhereInput | null
    isNot?: PostDIYHomesWhereInput | null
  }

  export type ReviewDIYHomesNullableScalarRelationFilter = {
    is?: ReviewDIYHomesWhereInput | null
    isNot?: ReviewDIYHomesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportDIYHomesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportDIYHomesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportDIYHomesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
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

  export type PostDIYHomesCreateNestedManyWithoutUserInput = {
    create?: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput> | PostDIYHomesCreateWithoutUserInput[] | PostDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutUserInput | PostDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: PostDIYHomesCreateManyUserInputEnvelope
    connect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
  }

  export type ReviewDIYHomesCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput> | ReviewDIYHomesCreateWithoutUserInput[] | ReviewDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutUserInput | ReviewDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: ReviewDIYHomesCreateManyUserInputEnvelope
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
  }

  export type BookmarkDIYHomesCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput> | BookmarkDIYHomesCreateWithoutUserInput[] | BookmarkDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutUserInput | BookmarkDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkDIYHomesCreateManyUserInputEnvelope
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
  }

  export type LikeDIYHomesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput> | LikeDIYHomesCreateWithoutUserInput[] | LikeDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutUserInput | LikeDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: LikeDIYHomesCreateManyUserInputEnvelope
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
  }

  export type ReportDIYHomesCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput> | ReportDIYHomesCreateWithoutUserInput[] | ReportDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutUserInput | ReportDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: ReportDIYHomesCreateManyUserInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type PostDIYHomesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput> | PostDIYHomesCreateWithoutUserInput[] | PostDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutUserInput | PostDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: PostDIYHomesCreateManyUserInputEnvelope
    connect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
  }

  export type ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput> | ReviewDIYHomesCreateWithoutUserInput[] | ReviewDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutUserInput | ReviewDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: ReviewDIYHomesCreateManyUserInputEnvelope
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
  }

  export type BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput> | BookmarkDIYHomesCreateWithoutUserInput[] | BookmarkDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutUserInput | BookmarkDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkDIYHomesCreateManyUserInputEnvelope
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
  }

  export type LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput> | LikeDIYHomesCreateWithoutUserInput[] | LikeDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutUserInput | LikeDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: LikeDIYHomesCreateManyUserInputEnvelope
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
  }

  export type ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput> | ReportDIYHomesCreateWithoutUserInput[] | ReportDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutUserInput | ReportDIYHomesCreateOrConnectWithoutUserInput[]
    createMany?: ReportDIYHomesCreateManyUserInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostDIYHomesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput> | PostDIYHomesCreateWithoutUserInput[] | PostDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutUserInput | PostDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: PostDIYHomesUpsertWithWhereUniqueWithoutUserInput | PostDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostDIYHomesCreateManyUserInputEnvelope
    set?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    disconnect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    delete?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    connect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    update?: PostDIYHomesUpdateWithWhereUniqueWithoutUserInput | PostDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostDIYHomesUpdateManyWithWhereWithoutUserInput | PostDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostDIYHomesScalarWhereInput | PostDIYHomesScalarWhereInput[]
  }

  export type ReviewDIYHomesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput> | ReviewDIYHomesCreateWithoutUserInput[] | ReviewDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutUserInput | ReviewDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: ReviewDIYHomesUpsertWithWhereUniqueWithoutUserInput | ReviewDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewDIYHomesCreateManyUserInputEnvelope
    set?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    disconnect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    delete?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    update?: ReviewDIYHomesUpdateWithWhereUniqueWithoutUserInput | ReviewDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewDIYHomesUpdateManyWithWhereWithoutUserInput | ReviewDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
  }

  export type BookmarkDIYHomesUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput> | BookmarkDIYHomesCreateWithoutUserInput[] | BookmarkDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutUserInput | BookmarkDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkDIYHomesUpsertWithWhereUniqueWithoutUserInput | BookmarkDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkDIYHomesCreateManyUserInputEnvelope
    set?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    disconnect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    delete?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    update?: BookmarkDIYHomesUpdateWithWhereUniqueWithoutUserInput | BookmarkDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkDIYHomesUpdateManyWithWhereWithoutUserInput | BookmarkDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
  }

  export type LikeDIYHomesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput> | LikeDIYHomesCreateWithoutUserInput[] | LikeDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutUserInput | LikeDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: LikeDIYHomesUpsertWithWhereUniqueWithoutUserInput | LikeDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeDIYHomesCreateManyUserInputEnvelope
    set?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    disconnect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    delete?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    update?: LikeDIYHomesUpdateWithWhereUniqueWithoutUserInput | LikeDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeDIYHomesUpdateManyWithWhereWithoutUserInput | LikeDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
  }

  export type ReportDIYHomesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput> | ReportDIYHomesCreateWithoutUserInput[] | ReportDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutUserInput | ReportDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutUserInput | ReportDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportDIYHomesCreateManyUserInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutUserInput | ReportDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutUserInput | ReportDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput> | PostDIYHomesCreateWithoutUserInput[] | PostDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutUserInput | PostDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: PostDIYHomesUpsertWithWhereUniqueWithoutUserInput | PostDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostDIYHomesCreateManyUserInputEnvelope
    set?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    disconnect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    delete?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    connect?: PostDIYHomesWhereUniqueInput | PostDIYHomesWhereUniqueInput[]
    update?: PostDIYHomesUpdateWithWhereUniqueWithoutUserInput | PostDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostDIYHomesUpdateManyWithWhereWithoutUserInput | PostDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostDIYHomesScalarWhereInput | PostDIYHomesScalarWhereInput[]
  }

  export type ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput> | ReviewDIYHomesCreateWithoutUserInput[] | ReviewDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutUserInput | ReviewDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: ReviewDIYHomesUpsertWithWhereUniqueWithoutUserInput | ReviewDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewDIYHomesCreateManyUserInputEnvelope
    set?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    disconnect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    delete?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    update?: ReviewDIYHomesUpdateWithWhereUniqueWithoutUserInput | ReviewDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewDIYHomesUpdateManyWithWhereWithoutUserInput | ReviewDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
  }

  export type BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput> | BookmarkDIYHomesCreateWithoutUserInput[] | BookmarkDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutUserInput | BookmarkDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkDIYHomesUpsertWithWhereUniqueWithoutUserInput | BookmarkDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkDIYHomesCreateManyUserInputEnvelope
    set?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    disconnect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    delete?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    update?: BookmarkDIYHomesUpdateWithWhereUniqueWithoutUserInput | BookmarkDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkDIYHomesUpdateManyWithWhereWithoutUserInput | BookmarkDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
  }

  export type LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput> | LikeDIYHomesCreateWithoutUserInput[] | LikeDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutUserInput | LikeDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: LikeDIYHomesUpsertWithWhereUniqueWithoutUserInput | LikeDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeDIYHomesCreateManyUserInputEnvelope
    set?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    disconnect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    delete?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    update?: LikeDIYHomesUpdateWithWhereUniqueWithoutUserInput | LikeDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeDIYHomesUpdateManyWithWhereWithoutUserInput | LikeDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput> | ReportDIYHomesCreateWithoutUserInput[] | ReportDIYHomesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutUserInput | ReportDIYHomesCreateOrConnectWithoutUserInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutUserInput | ReportDIYHomesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportDIYHomesCreateManyUserInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutUserInput | ReportDIYHomesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutUserInput | ReportDIYHomesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewDIYHomesCreateNestedManyWithoutPostInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput> | ReviewDIYHomesCreateWithoutPostInput[] | ReviewDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutPostInput | ReviewDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: ReviewDIYHomesCreateManyPostInputEnvelope
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
  }

  export type BookmarkDIYHomesCreateNestedManyWithoutPostInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput> | BookmarkDIYHomesCreateWithoutPostInput[] | BookmarkDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutPostInput | BookmarkDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: BookmarkDIYHomesCreateManyPostInputEnvelope
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
  }

  export type LikeDIYHomesCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput> | LikeDIYHomesCreateWithoutPostInput[] | LikeDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutPostInput | LikeDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: LikeDIYHomesCreateManyPostInputEnvelope
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
  }

  export type ReportDIYHomesCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput> | ReportDIYHomesCreateWithoutPostInput[] | ReportDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutPostInput | ReportDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: ReportDIYHomesCreateManyPostInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput> | ReviewDIYHomesCreateWithoutPostInput[] | ReviewDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutPostInput | ReviewDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: ReviewDIYHomesCreateManyPostInputEnvelope
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
  }

  export type BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput> | BookmarkDIYHomesCreateWithoutPostInput[] | BookmarkDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutPostInput | BookmarkDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: BookmarkDIYHomesCreateManyPostInputEnvelope
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
  }

  export type LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput> | LikeDIYHomesCreateWithoutPostInput[] | LikeDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutPostInput | LikeDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: LikeDIYHomesCreateManyPostInputEnvelope
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
  }

  export type ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput> | ReportDIYHomesCreateWithoutPostInput[] | ReportDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutPostInput | ReportDIYHomesCreateOrConnectWithoutPostInput[]
    createMany?: ReportDIYHomesCreateManyPostInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ReviewDIYHomesUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput> | ReviewDIYHomesCreateWithoutPostInput[] | ReviewDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutPostInput | ReviewDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: ReviewDIYHomesUpsertWithWhereUniqueWithoutPostInput | ReviewDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReviewDIYHomesCreateManyPostInputEnvelope
    set?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    disconnect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    delete?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    update?: ReviewDIYHomesUpdateWithWhereUniqueWithoutPostInput | ReviewDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReviewDIYHomesUpdateManyWithWhereWithoutPostInput | ReviewDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
  }

  export type BookmarkDIYHomesUpdateManyWithoutPostNestedInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput> | BookmarkDIYHomesCreateWithoutPostInput[] | BookmarkDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutPostInput | BookmarkDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: BookmarkDIYHomesUpsertWithWhereUniqueWithoutPostInput | BookmarkDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BookmarkDIYHomesCreateManyPostInputEnvelope
    set?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    disconnect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    delete?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    update?: BookmarkDIYHomesUpdateWithWhereUniqueWithoutPostInput | BookmarkDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BookmarkDIYHomesUpdateManyWithWhereWithoutPostInput | BookmarkDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
  }

  export type LikeDIYHomesUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput> | LikeDIYHomesCreateWithoutPostInput[] | LikeDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutPostInput | LikeDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: LikeDIYHomesUpsertWithWhereUniqueWithoutPostInput | LikeDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeDIYHomesCreateManyPostInputEnvelope
    set?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    disconnect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    delete?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    update?: LikeDIYHomesUpdateWithWhereUniqueWithoutPostInput | LikeDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeDIYHomesUpdateManyWithWhereWithoutPostInput | LikeDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
  }

  export type ReportDIYHomesUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput> | ReportDIYHomesCreateWithoutPostInput[] | ReportDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutPostInput | ReportDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutPostInput | ReportDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportDIYHomesCreateManyPostInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutPostInput | ReportDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutPostInput | ReportDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput> | ReviewDIYHomesCreateWithoutPostInput[] | ReviewDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutPostInput | ReviewDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: ReviewDIYHomesUpsertWithWhereUniqueWithoutPostInput | ReviewDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReviewDIYHomesCreateManyPostInputEnvelope
    set?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    disconnect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    delete?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    connect?: ReviewDIYHomesWhereUniqueInput | ReviewDIYHomesWhereUniqueInput[]
    update?: ReviewDIYHomesUpdateWithWhereUniqueWithoutPostInput | ReviewDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReviewDIYHomesUpdateManyWithWhereWithoutPostInput | ReviewDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
  }

  export type BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput> | BookmarkDIYHomesCreateWithoutPostInput[] | BookmarkDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BookmarkDIYHomesCreateOrConnectWithoutPostInput | BookmarkDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: BookmarkDIYHomesUpsertWithWhereUniqueWithoutPostInput | BookmarkDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BookmarkDIYHomesCreateManyPostInputEnvelope
    set?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    disconnect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    delete?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    connect?: BookmarkDIYHomesWhereUniqueInput | BookmarkDIYHomesWhereUniqueInput[]
    update?: BookmarkDIYHomesUpdateWithWhereUniqueWithoutPostInput | BookmarkDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BookmarkDIYHomesUpdateManyWithWhereWithoutPostInput | BookmarkDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
  }

  export type LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput> | LikeDIYHomesCreateWithoutPostInput[] | LikeDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeDIYHomesCreateOrConnectWithoutPostInput | LikeDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: LikeDIYHomesUpsertWithWhereUniqueWithoutPostInput | LikeDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeDIYHomesCreateManyPostInputEnvelope
    set?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    disconnect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    delete?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    connect?: LikeDIYHomesWhereUniqueInput | LikeDIYHomesWhereUniqueInput[]
    update?: LikeDIYHomesUpdateWithWhereUniqueWithoutPostInput | LikeDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeDIYHomesUpdateManyWithWhereWithoutPostInput | LikeDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput> | ReportDIYHomesCreateWithoutPostInput[] | ReportDIYHomesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutPostInput | ReportDIYHomesCreateOrConnectWithoutPostInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutPostInput | ReportDIYHomesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportDIYHomesCreateManyPostInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutPostInput | ReportDIYHomesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutPostInput | ReportDIYHomesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type PostDIYHomesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PostDIYHomesCreateWithoutReviewsInput, PostDIYHomesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutReviewsInput
    connect?: PostDIYHomesWhereUniqueInput
  }

  export type ReportDIYHomesCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput> | ReportDIYHomesCreateWithoutReviewInput[] | ReportDIYHomesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutReviewInput | ReportDIYHomesCreateOrConnectWithoutReviewInput[]
    createMany?: ReportDIYHomesCreateManyReviewInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type ReportDIYHomesUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput> | ReportDIYHomesCreateWithoutReviewInput[] | ReportDIYHomesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutReviewInput | ReportDIYHomesCreateOrConnectWithoutReviewInput[]
    createMany?: ReportDIYHomesCreateManyReviewInputEnvelope
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type PostDIYHomesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutReviewsInput, PostDIYHomesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutReviewsInput
    upsert?: PostDIYHomesUpsertWithoutReviewsInput
    connect?: PostDIYHomesWhereUniqueInput
    update?: XOR<XOR<PostDIYHomesUpdateToOneWithWhereWithoutReviewsInput, PostDIYHomesUpdateWithoutReviewsInput>, PostDIYHomesUncheckedUpdateWithoutReviewsInput>
  }

  export type ReportDIYHomesUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput> | ReportDIYHomesCreateWithoutReviewInput[] | ReportDIYHomesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutReviewInput | ReportDIYHomesCreateOrConnectWithoutReviewInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutReviewInput | ReportDIYHomesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReportDIYHomesCreateManyReviewInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutReviewInput | ReportDIYHomesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutReviewInput | ReportDIYHomesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput> | ReportDIYHomesCreateWithoutReviewInput[] | ReportDIYHomesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReportDIYHomesCreateOrConnectWithoutReviewInput | ReportDIYHomesCreateOrConnectWithoutReviewInput[]
    upsert?: ReportDIYHomesUpsertWithWhereUniqueWithoutReviewInput | ReportDIYHomesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReportDIYHomesCreateManyReviewInputEnvelope
    set?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    disconnect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    delete?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    connect?: ReportDIYHomesWhereUniqueInput | ReportDIYHomesWhereUniqueInput[]
    update?: ReportDIYHomesUpdateWithWhereUniqueWithoutReviewInput | ReportDIYHomesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReportDIYHomesUpdateManyWithWhereWithoutReviewInput | ReportDIYHomesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikeInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput
    connect?: UserWhereUniqueInput
  }

  export type PostDIYHomesCreateNestedOneWithoutLikeInput = {
    create?: XOR<PostDIYHomesCreateWithoutLikeInput, PostDIYHomesUncheckedCreateWithoutLikeInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutLikeInput
    connect?: PostDIYHomesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput
    upsert?: UserUpsertWithoutLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeInput, UserUpdateWithoutLikeInput>, UserUncheckedUpdateWithoutLikeInput>
  }

  export type PostDIYHomesUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutLikeInput, PostDIYHomesUncheckedCreateWithoutLikeInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutLikeInput
    upsert?: PostDIYHomesUpsertWithoutLikeInput
    connect?: PostDIYHomesWhereUniqueInput
    update?: XOR<XOR<PostDIYHomesUpdateToOneWithWhereWithoutLikeInput, PostDIYHomesUpdateWithoutLikeInput>, PostDIYHomesUncheckedUpdateWithoutLikeInput>
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type PostDIYHomesCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<PostDIYHomesCreateWithoutBookmarksInput, PostDIYHomesUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutBookmarksInput
    connect?: PostDIYHomesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type PostDIYHomesUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutBookmarksInput, PostDIYHomesUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutBookmarksInput
    upsert?: PostDIYHomesUpsertWithoutBookmarksInput
    connect?: PostDIYHomesWhereUniqueInput
    update?: XOR<XOR<PostDIYHomesUpdateToOneWithWhereWithoutBookmarksInput, PostDIYHomesUpdateWithoutBookmarksInput>, PostDIYHomesUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserCreateNestedOneWithoutReportInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    connect?: UserWhereUniqueInput
  }

  export type PostDIYHomesCreateNestedOneWithoutReportInput = {
    create?: XOR<PostDIYHomesCreateWithoutReportInput, PostDIYHomesUncheckedCreateWithoutReportInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutReportInput
    connect?: PostDIYHomesWhereUniqueInput
  }

  export type ReviewDIYHomesCreateNestedOneWithoutReportInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutReportInput, ReviewDIYHomesUncheckedCreateWithoutReportInput>
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutReportInput
    connect?: ReviewDIYHomesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    upsert?: UserUpsertWithoutReportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportInput, UserUpdateWithoutReportInput>, UserUncheckedUpdateWithoutReportInput>
  }

  export type PostDIYHomesUpdateOneWithoutReportNestedInput = {
    create?: XOR<PostDIYHomesCreateWithoutReportInput, PostDIYHomesUncheckedCreateWithoutReportInput>
    connectOrCreate?: PostDIYHomesCreateOrConnectWithoutReportInput
    upsert?: PostDIYHomesUpsertWithoutReportInput
    disconnect?: PostDIYHomesWhereInput | boolean
    delete?: PostDIYHomesWhereInput | boolean
    connect?: PostDIYHomesWhereUniqueInput
    update?: XOR<XOR<PostDIYHomesUpdateToOneWithWhereWithoutReportInput, PostDIYHomesUpdateWithoutReportInput>, PostDIYHomesUncheckedUpdateWithoutReportInput>
  }

  export type ReviewDIYHomesUpdateOneWithoutReportNestedInput = {
    create?: XOR<ReviewDIYHomesCreateWithoutReportInput, ReviewDIYHomesUncheckedCreateWithoutReportInput>
    connectOrCreate?: ReviewDIYHomesCreateOrConnectWithoutReportInput
    upsert?: ReviewDIYHomesUpsertWithoutReportInput
    disconnect?: ReviewDIYHomesWhereInput | boolean
    delete?: ReviewDIYHomesWhereInput | boolean
    connect?: ReviewDIYHomesWhereUniqueInput
    update?: XOR<XOR<ReviewDIYHomesUpdateToOneWithWhereWithoutReportInput, ReviewDIYHomesUpdateWithoutReportInput>, ReviewDIYHomesUncheckedUpdateWithoutReportInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type PostDIYHomesCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesCreateOrConnectWithoutUserInput = {
    where: PostDIYHomesWhereUniqueInput
    create: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type PostDIYHomesCreateManyUserInputEnvelope = {
    data: PostDIYHomesCreateManyUserInput | PostDIYHomesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewDIYHomesCreateWithoutUserInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    post: PostDIYHomesCreateNestedOneWithoutReviewsInput
    Report?: ReportDIYHomesCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    rating: number
    comment: string
    createdAt?: Date | string
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesCreateOrConnectWithoutUserInput = {
    where: ReviewDIYHomesWhereUniqueInput
    create: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type ReviewDIYHomesCreateManyUserInputEnvelope = {
    data: ReviewDIYHomesCreateManyUserInput | ReviewDIYHomesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkDIYHomesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostDIYHomesCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkDIYHomesUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesCreateOrConnectWithoutUserInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    create: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type BookmarkDIYHomesCreateManyUserInputEnvelope = {
    data: BookmarkDIYHomesCreateManyUserInput | BookmarkDIYHomesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeDIYHomesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostDIYHomesCreateNestedOneWithoutLikeInput
  }

  export type LikeDIYHomesUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesCreateOrConnectWithoutUserInput = {
    where: LikeDIYHomesWhereUniqueInput
    create: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type LikeDIYHomesCreateManyUserInputEnvelope = {
    data: LikeDIYHomesCreateManyUserInput | LikeDIYHomesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportDIYHomesCreateWithoutUserInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    post?: PostDIYHomesCreateNestedOneWithoutReportInput
    review?: ReviewDIYHomesCreateNestedOneWithoutReportInput
  }

  export type ReportDIYHomesUncheckedCreateWithoutUserInput = {
    id?: string
    postId?: string | null
    reviewId?: string | null
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesCreateOrConnectWithoutUserInput = {
    where: ReportDIYHomesWhereUniqueInput
    create: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type ReportDIYHomesCreateManyUserInputEnvelope = {
    data: ReportDIYHomesCreateManyUserInput | ReportDIYHomesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostDIYHomesUpsertWithWhereUniqueWithoutUserInput = {
    where: PostDIYHomesWhereUniqueInput
    update: XOR<PostDIYHomesUpdateWithoutUserInput, PostDIYHomesUncheckedUpdateWithoutUserInput>
    create: XOR<PostDIYHomesCreateWithoutUserInput, PostDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type PostDIYHomesUpdateWithWhereUniqueWithoutUserInput = {
    where: PostDIYHomesWhereUniqueInput
    data: XOR<PostDIYHomesUpdateWithoutUserInput, PostDIYHomesUncheckedUpdateWithoutUserInput>
  }

  export type PostDIYHomesUpdateManyWithWhereWithoutUserInput = {
    where: PostDIYHomesScalarWhereInput
    data: XOR<PostDIYHomesUpdateManyMutationInput, PostDIYHomesUncheckedUpdateManyWithoutUserInput>
  }

  export type PostDIYHomesScalarWhereInput = {
    AND?: PostDIYHomesScalarWhereInput | PostDIYHomesScalarWhereInput[]
    OR?: PostDIYHomesScalarWhereInput[]
    NOT?: PostDIYHomesScalarWhereInput | PostDIYHomesScalarWhereInput[]
    id?: StringFilter<"PostDIYHomes"> | string
    title?: StringFilter<"PostDIYHomes"> | string
    content?: StringFilter<"PostDIYHomes"> | string
    category?: StringFilter<"PostDIYHomes"> | string
    userId?: StringFilter<"PostDIYHomes"> | string
    createdAt?: DateTimeFilter<"PostDIYHomes"> | Date | string
  }

  export type ReviewDIYHomesUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewDIYHomesWhereUniqueInput
    update: XOR<ReviewDIYHomesUpdateWithoutUserInput, ReviewDIYHomesUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewDIYHomesCreateWithoutUserInput, ReviewDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type ReviewDIYHomesUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewDIYHomesWhereUniqueInput
    data: XOR<ReviewDIYHomesUpdateWithoutUserInput, ReviewDIYHomesUncheckedUpdateWithoutUserInput>
  }

  export type ReviewDIYHomesUpdateManyWithWhereWithoutUserInput = {
    where: ReviewDIYHomesScalarWhereInput
    data: XOR<ReviewDIYHomesUpdateManyMutationInput, ReviewDIYHomesUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewDIYHomesScalarWhereInput = {
    AND?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
    OR?: ReviewDIYHomesScalarWhereInput[]
    NOT?: ReviewDIYHomesScalarWhereInput | ReviewDIYHomesScalarWhereInput[]
    id?: StringFilter<"ReviewDIYHomes"> | string
    postId?: StringFilter<"ReviewDIYHomes"> | string
    userId?: StringFilter<"ReviewDIYHomes"> | string
    rating?: IntFilter<"ReviewDIYHomes"> | number
    comment?: StringFilter<"ReviewDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReviewDIYHomes"> | Date | string
  }

  export type BookmarkDIYHomesUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    update: XOR<BookmarkDIYHomesUpdateWithoutUserInput, BookmarkDIYHomesUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkDIYHomesCreateWithoutUserInput, BookmarkDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type BookmarkDIYHomesUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    data: XOR<BookmarkDIYHomesUpdateWithoutUserInput, BookmarkDIYHomesUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkDIYHomesUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkDIYHomesScalarWhereInput
    data: XOR<BookmarkDIYHomesUpdateManyMutationInput, BookmarkDIYHomesUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkDIYHomesScalarWhereInput = {
    AND?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
    OR?: BookmarkDIYHomesScalarWhereInput[]
    NOT?: BookmarkDIYHomesScalarWhereInput | BookmarkDIYHomesScalarWhereInput[]
    id?: StringFilter<"BookmarkDIYHomes"> | string
    postId?: StringFilter<"BookmarkDIYHomes"> | string
    userId?: StringFilter<"BookmarkDIYHomes"> | string
    createdAt?: DateTimeFilter<"BookmarkDIYHomes"> | Date | string
  }

  export type LikeDIYHomesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeDIYHomesWhereUniqueInput
    update: XOR<LikeDIYHomesUpdateWithoutUserInput, LikeDIYHomesUncheckedUpdateWithoutUserInput>
    create: XOR<LikeDIYHomesCreateWithoutUserInput, LikeDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type LikeDIYHomesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeDIYHomesWhereUniqueInput
    data: XOR<LikeDIYHomesUpdateWithoutUserInput, LikeDIYHomesUncheckedUpdateWithoutUserInput>
  }

  export type LikeDIYHomesUpdateManyWithWhereWithoutUserInput = {
    where: LikeDIYHomesScalarWhereInput
    data: XOR<LikeDIYHomesUpdateManyMutationInput, LikeDIYHomesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeDIYHomesScalarWhereInput = {
    AND?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
    OR?: LikeDIYHomesScalarWhereInput[]
    NOT?: LikeDIYHomesScalarWhereInput | LikeDIYHomesScalarWhereInput[]
    id?: StringFilter<"LikeDIYHomes"> | string
    postId?: StringFilter<"LikeDIYHomes"> | string
    userId?: StringFilter<"LikeDIYHomes"> | string
    createdAt?: DateTimeFilter<"LikeDIYHomes"> | Date | string
  }

  export type ReportDIYHomesUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportDIYHomesWhereUniqueInput
    update: XOR<ReportDIYHomesUpdateWithoutUserInput, ReportDIYHomesUncheckedUpdateWithoutUserInput>
    create: XOR<ReportDIYHomesCreateWithoutUserInput, ReportDIYHomesUncheckedCreateWithoutUserInput>
  }

  export type ReportDIYHomesUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportDIYHomesWhereUniqueInput
    data: XOR<ReportDIYHomesUpdateWithoutUserInput, ReportDIYHomesUncheckedUpdateWithoutUserInput>
  }

  export type ReportDIYHomesUpdateManyWithWhereWithoutUserInput = {
    where: ReportDIYHomesScalarWhereInput
    data: XOR<ReportDIYHomesUpdateManyMutationInput, ReportDIYHomesUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportDIYHomesScalarWhereInput = {
    AND?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
    OR?: ReportDIYHomesScalarWhereInput[]
    NOT?: ReportDIYHomesScalarWhereInput | ReportDIYHomesScalarWhereInput[]
    id?: StringFilter<"ReportDIYHomes"> | string
    postId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    reviewId?: StringNullableFilter<"ReportDIYHomes"> | string | null
    userId?: StringFilter<"ReportDIYHomes"> | string
    reason?: StringFilter<"ReportDIYHomes"> | string
    createdAt?: DateTimeFilter<"ReportDIYHomes"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ReviewDIYHomesCreateWithoutPostInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    Report?: ReportDIYHomesCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewDIYHomesCreateOrConnectWithoutPostInput = {
    where: ReviewDIYHomesWhereUniqueInput
    create: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type ReviewDIYHomesCreateManyPostInputEnvelope = {
    data: ReviewDIYHomesCreateManyPostInput | ReviewDIYHomesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkDIYHomesCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkDIYHomesUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesCreateOrConnectWithoutPostInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    create: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type BookmarkDIYHomesCreateManyPostInputEnvelope = {
    data: BookmarkDIYHomesCreateManyPostInput | BookmarkDIYHomesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikeDIYHomesCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeInput
  }

  export type LikeDIYHomesUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesCreateOrConnectWithoutPostInput = {
    where: LikeDIYHomesWhereUniqueInput
    create: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type LikeDIYHomesCreateManyPostInputEnvelope = {
    data: LikeDIYHomesCreateManyPostInput | LikeDIYHomesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ReportDIYHomesCreateWithoutPostInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportInput
    review?: ReviewDIYHomesCreateNestedOneWithoutReportInput
  }

  export type ReportDIYHomesUncheckedCreateWithoutPostInput = {
    id?: string
    reviewId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesCreateOrConnectWithoutPostInput = {
    where: ReportDIYHomesWhereUniqueInput
    create: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type ReportDIYHomesCreateManyPostInputEnvelope = {
    data: ReportDIYHomesCreateManyPostInput | ReportDIYHomesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewDIYHomesUpsertWithWhereUniqueWithoutPostInput = {
    where: ReviewDIYHomesWhereUniqueInput
    update: XOR<ReviewDIYHomesUpdateWithoutPostInput, ReviewDIYHomesUncheckedUpdateWithoutPostInput>
    create: XOR<ReviewDIYHomesCreateWithoutPostInput, ReviewDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type ReviewDIYHomesUpdateWithWhereUniqueWithoutPostInput = {
    where: ReviewDIYHomesWhereUniqueInput
    data: XOR<ReviewDIYHomesUpdateWithoutPostInput, ReviewDIYHomesUncheckedUpdateWithoutPostInput>
  }

  export type ReviewDIYHomesUpdateManyWithWhereWithoutPostInput = {
    where: ReviewDIYHomesScalarWhereInput
    data: XOR<ReviewDIYHomesUpdateManyMutationInput, ReviewDIYHomesUncheckedUpdateManyWithoutPostInput>
  }

  export type BookmarkDIYHomesUpsertWithWhereUniqueWithoutPostInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    update: XOR<BookmarkDIYHomesUpdateWithoutPostInput, BookmarkDIYHomesUncheckedUpdateWithoutPostInput>
    create: XOR<BookmarkDIYHomesCreateWithoutPostInput, BookmarkDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type BookmarkDIYHomesUpdateWithWhereUniqueWithoutPostInput = {
    where: BookmarkDIYHomesWhereUniqueInput
    data: XOR<BookmarkDIYHomesUpdateWithoutPostInput, BookmarkDIYHomesUncheckedUpdateWithoutPostInput>
  }

  export type BookmarkDIYHomesUpdateManyWithWhereWithoutPostInput = {
    where: BookmarkDIYHomesScalarWhereInput
    data: XOR<BookmarkDIYHomesUpdateManyMutationInput, BookmarkDIYHomesUncheckedUpdateManyWithoutPostInput>
  }

  export type LikeDIYHomesUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeDIYHomesWhereUniqueInput
    update: XOR<LikeDIYHomesUpdateWithoutPostInput, LikeDIYHomesUncheckedUpdateWithoutPostInput>
    create: XOR<LikeDIYHomesCreateWithoutPostInput, LikeDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type LikeDIYHomesUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeDIYHomesWhereUniqueInput
    data: XOR<LikeDIYHomesUpdateWithoutPostInput, LikeDIYHomesUncheckedUpdateWithoutPostInput>
  }

  export type LikeDIYHomesUpdateManyWithWhereWithoutPostInput = {
    where: LikeDIYHomesScalarWhereInput
    data: XOR<LikeDIYHomesUpdateManyMutationInput, LikeDIYHomesUncheckedUpdateManyWithoutPostInput>
  }

  export type ReportDIYHomesUpsertWithWhereUniqueWithoutPostInput = {
    where: ReportDIYHomesWhereUniqueInput
    update: XOR<ReportDIYHomesUpdateWithoutPostInput, ReportDIYHomesUncheckedUpdateWithoutPostInput>
    create: XOR<ReportDIYHomesCreateWithoutPostInput, ReportDIYHomesUncheckedCreateWithoutPostInput>
  }

  export type ReportDIYHomesUpdateWithWhereUniqueWithoutPostInput = {
    where: ReportDIYHomesWhereUniqueInput
    data: XOR<ReportDIYHomesUpdateWithoutPostInput, ReportDIYHomesUncheckedUpdateWithoutPostInput>
  }

  export type ReportDIYHomesUpdateManyWithWhereWithoutPostInput = {
    where: ReportDIYHomesScalarWhereInput
    data: XOR<ReportDIYHomesUpdateManyMutationInput, ReportDIYHomesUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type PostDIYHomesCreateWithoutReviewsInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesCreateOrConnectWithoutReviewsInput = {
    where: PostDIYHomesWhereUniqueInput
    create: XOR<PostDIYHomesCreateWithoutReviewsInput, PostDIYHomesUncheckedCreateWithoutReviewsInput>
  }

  export type ReportDIYHomesCreateWithoutReviewInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportInput
    post?: PostDIYHomesCreateNestedOneWithoutReportInput
  }

  export type ReportDIYHomesUncheckedCreateWithoutReviewInput = {
    id?: string
    postId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesCreateOrConnectWithoutReviewInput = {
    where: ReportDIYHomesWhereUniqueInput
    create: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput>
  }

  export type ReportDIYHomesCreateManyReviewInputEnvelope = {
    data: ReportDIYHomesCreateManyReviewInput | ReportDIYHomesCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostDIYHomesUpsertWithoutReviewsInput = {
    update: XOR<PostDIYHomesUpdateWithoutReviewsInput, PostDIYHomesUncheckedUpdateWithoutReviewsInput>
    create: XOR<PostDIYHomesCreateWithoutReviewsInput, PostDIYHomesUncheckedCreateWithoutReviewsInput>
    where?: PostDIYHomesWhereInput
  }

  export type PostDIYHomesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PostDIYHomesWhereInput
    data: XOR<PostDIYHomesUpdateWithoutReviewsInput, PostDIYHomesUncheckedUpdateWithoutReviewsInput>
  }

  export type PostDIYHomesUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ReportDIYHomesUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReportDIYHomesWhereUniqueInput
    update: XOR<ReportDIYHomesUpdateWithoutReviewInput, ReportDIYHomesUncheckedUpdateWithoutReviewInput>
    create: XOR<ReportDIYHomesCreateWithoutReviewInput, ReportDIYHomesUncheckedCreateWithoutReviewInput>
  }

  export type ReportDIYHomesUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReportDIYHomesWhereUniqueInput
    data: XOR<ReportDIYHomesUpdateWithoutReviewInput, ReportDIYHomesUncheckedUpdateWithoutReviewInput>
  }

  export type ReportDIYHomesUpdateManyWithWhereWithoutReviewInput = {
    where: ReportDIYHomesScalarWhereInput
    data: XOR<ReportDIYHomesUpdateManyMutationInput, ReportDIYHomesUncheckedUpdateManyWithoutReviewInput>
  }

  export type UserCreateWithoutLikeInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikeInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
  }

  export type PostDIYHomesCreateWithoutLikeInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateWithoutLikeInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesCreateOrConnectWithoutLikeInput = {
    where: PostDIYHomesWhereUniqueInput
    create: XOR<PostDIYHomesCreateWithoutLikeInput, PostDIYHomesUncheckedCreateWithoutLikeInput>
  }

  export type UserUpsertWithoutLikeInput = {
    update: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>
  }

  export type UserUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostDIYHomesUpsertWithoutLikeInput = {
    update: XOR<PostDIYHomesUpdateWithoutLikeInput, PostDIYHomesUncheckedUpdateWithoutLikeInput>
    create: XOR<PostDIYHomesCreateWithoutLikeInput, PostDIYHomesUncheckedCreateWithoutLikeInput>
    where?: PostDIYHomesWhereInput
  }

  export type PostDIYHomesUpdateToOneWithWhereWithoutLikeInput = {
    where?: PostDIYHomesWhereInput
    data: XOR<PostDIYHomesUpdateWithoutLikeInput, PostDIYHomesUncheckedUpdateWithoutLikeInput>
  }

  export type PostDIYHomesUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type PostDIYHomesCreateWithoutBookmarksInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateWithoutBookmarksInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Report?: ReportDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesCreateOrConnectWithoutBookmarksInput = {
    where: PostDIYHomesWhereUniqueInput
    create: XOR<PostDIYHomesCreateWithoutBookmarksInput, PostDIYHomesUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostDIYHomesUpsertWithoutBookmarksInput = {
    update: XOR<PostDIYHomesUpdateWithoutBookmarksInput, PostDIYHomesUncheckedUpdateWithoutBookmarksInput>
    create: XOR<PostDIYHomesCreateWithoutBookmarksInput, PostDIYHomesUncheckedCreateWithoutBookmarksInput>
    where?: PostDIYHomesWhereInput
  }

  export type PostDIYHomesUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: PostDIYHomesWhereInput
    data: XOR<PostDIYHomesUpdateWithoutBookmarksInput, PostDIYHomesUncheckedUpdateWithoutBookmarksInput>
  }

  export type PostDIYHomesUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutReportInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportInput = {
    id?: string
    email: string
    name: string
    password: string
    group: string
    createdAt?: Date | string
    posts?: PostDIYHomesUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
  }

  export type PostDIYHomesCreateWithoutReportInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    reviews?: ReviewDIYHomesCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesUncheckedCreateWithoutReportInput = {
    id?: string
    title: string
    content: string
    category: string
    userId: string
    createdAt?: Date | string
    reviews?: ReviewDIYHomesUncheckedCreateNestedManyWithoutPostInput
    bookmarks?: BookmarkDIYHomesUncheckedCreateNestedManyWithoutPostInput
    Like?: LikeDIYHomesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostDIYHomesCreateOrConnectWithoutReportInput = {
    where: PostDIYHomesWhereUniqueInput
    create: XOR<PostDIYHomesCreateWithoutReportInput, PostDIYHomesUncheckedCreateWithoutReportInput>
  }

  export type ReviewDIYHomesCreateWithoutReportInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    post: PostDIYHomesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewDIYHomesUncheckedCreateWithoutReportInput = {
    id?: string
    postId: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewDIYHomesCreateOrConnectWithoutReportInput = {
    where: ReviewDIYHomesWhereUniqueInput
    create: XOR<ReviewDIYHomesCreateWithoutReportInput, ReviewDIYHomesUncheckedCreateWithoutReportInput>
  }

  export type UserUpsertWithoutReportInput = {
    update: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
  }

  export type UserUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostDIYHomesUpsertWithoutReportInput = {
    update: XOR<PostDIYHomesUpdateWithoutReportInput, PostDIYHomesUncheckedUpdateWithoutReportInput>
    create: XOR<PostDIYHomesCreateWithoutReportInput, PostDIYHomesUncheckedCreateWithoutReportInput>
    where?: PostDIYHomesWhereInput
  }

  export type PostDIYHomesUpdateToOneWithWhereWithoutReportInput = {
    where?: PostDIYHomesWhereInput
    data: XOR<PostDIYHomesUpdateWithoutReportInput, PostDIYHomesUncheckedUpdateWithoutReportInput>
  }

  export type PostDIYHomesUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    reviews?: ReviewDIYHomesUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ReviewDIYHomesUpsertWithoutReportInput = {
    update: XOR<ReviewDIYHomesUpdateWithoutReportInput, ReviewDIYHomesUncheckedUpdateWithoutReportInput>
    create: XOR<ReviewDIYHomesCreateWithoutReportInput, ReviewDIYHomesUncheckedCreateWithoutReportInput>
    where?: ReviewDIYHomesWhereInput
  }

  export type ReviewDIYHomesUpdateToOneWithWhereWithoutReportInput = {
    where?: ReviewDIYHomesWhereInput
    data: XOR<ReviewDIYHomesUpdateWithoutReportInput, ReviewDIYHomesUncheckedUpdateWithoutReportInput>
  }

  export type ReviewDIYHomesUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    post?: PostDIYHomesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDIYHomesCreateManyUserInput = {
    id?: string
    title: string
    content: string
    category: string
    createdAt?: Date | string
  }

  export type ReviewDIYHomesCreateManyUserInput = {
    id?: string
    postId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesCreateManyUserInput = {
    id?: string
    postId?: string | null
    reviewId?: string | null
    reason: string
    createdAt?: Date | string
  }

  export type PostDIYHomesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    bookmarks?: BookmarkDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Like?: LikeDIYHomesUncheckedUpdateManyWithoutPostNestedInput
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostDIYHomesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDIYHomesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostDIYHomesUpdateOneRequiredWithoutReviewsNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostDIYHomesUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkDIYHomesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostDIYHomesUpdateOneRequiredWithoutLikeNestedInput
  }

  export type LikeDIYHomesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostDIYHomesUpdateOneWithoutReportNestedInput
    review?: ReviewDIYHomesUpdateOneWithoutReportNestedInput
  }

  export type ReportDIYHomesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDIYHomesCreateManyPostInput = {
    id?: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type BookmarkDIYHomesCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeDIYHomesCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesCreateManyPostInput = {
    id?: string
    reviewId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReviewDIYHomesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    Report?: ReportDIYHomesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportDIYHomesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewDIYHomesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkDIYHomesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkDIYHomesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNestedInput
  }

  export type LikeDIYHomesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeDIYHomesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportNestedInput
    review?: ReviewDIYHomesUpdateOneWithoutReportNestedInput
  }

  export type ReportDIYHomesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesCreateManyReviewInput = {
    id?: string
    postId?: string | null
    userId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportDIYHomesUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportNestedInput
    post?: PostDIYHomesUpdateOneWithoutReportNestedInput
  }

  export type ReportDIYHomesUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportDIYHomesUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
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