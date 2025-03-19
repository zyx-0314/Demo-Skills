
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
    EventOrganizerServiceProvider: 'EventOrganizerServiceProvider'
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
      modelProps: "eventOrganizerUser" | "eventOrganizerTask" | "eventOrganizerGuest" | "eventOrganizerVenue" | "eventOrganizerServiceProvider"
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