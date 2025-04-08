
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
 * Model Convidado
 * 
 */
export type Convidado = $Result.DefaultSelection<Prisma.$ConvidadoPayload>
/**
 * Model Presente
 * 
 */
export type Presente = $Result.DefaultSelection<Prisma.$PresentePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MetodoPagamento: {
  DINHEIRO: 'DINHEIRO',
  PIX: 'PIX'
};

export type MetodoPagamento = (typeof MetodoPagamento)[keyof typeof MetodoPagamento]

}

export type MetodoPagamento = $Enums.MetodoPagamento

export const MetodoPagamento: typeof $Enums.MetodoPagamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Convidados
 * const convidados = await prisma.convidado.findMany()
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
   * // Fetch zero or more Convidados
   * const convidados = await prisma.convidado.findMany()
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
   * `prisma.convidado`: Exposes CRUD operations for the **Convidado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convidados
    * const convidados = await prisma.convidado.findMany()
    * ```
    */
  get convidado(): Prisma.ConvidadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presente`: Exposes CRUD operations for the **Presente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presentes
    * const presentes = await prisma.presente.findMany()
    * ```
    */
  get presente(): Prisma.PresenteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Convidado: 'Convidado',
    Presente: 'Presente'
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
      modelProps: "convidado" | "presente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Convidado: {
        payload: Prisma.$ConvidadoPayload<ExtArgs>
        fields: Prisma.ConvidadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConvidadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConvidadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          findFirst: {
            args: Prisma.ConvidadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConvidadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          findMany: {
            args: Prisma.ConvidadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>[]
          }
          create: {
            args: Prisma.ConvidadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          createMany: {
            args: Prisma.ConvidadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConvidadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          update: {
            args: Prisma.ConvidadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          deleteMany: {
            args: Prisma.ConvidadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConvidadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConvidadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          aggregate: {
            args: Prisma.ConvidadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvidado>
          }
          groupBy: {
            args: Prisma.ConvidadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConvidadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConvidadoCountArgs<ExtArgs>
            result: $Utils.Optional<ConvidadoCountAggregateOutputType> | number
          }
        }
      }
      Presente: {
        payload: Prisma.$PresentePayload<ExtArgs>
        fields: Prisma.PresenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          findFirst: {
            args: Prisma.PresenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          findMany: {
            args: Prisma.PresenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>[]
          }
          create: {
            args: Prisma.PresenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          createMany: {
            args: Prisma.PresenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PresenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          update: {
            args: Prisma.PresenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          deleteMany: {
            args: Prisma.PresenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PresenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentePayload>
          }
          aggregate: {
            args: Prisma.PresenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresente>
          }
          groupBy: {
            args: Prisma.PresenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresenteCountArgs<ExtArgs>
            result: $Utils.Optional<PresenteCountAggregateOutputType> | number
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
    convidado?: ConvidadoOmit
    presente?: PresenteOmit
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
   * Count Type ConvidadoCountOutputType
   */

  export type ConvidadoCountOutputType = {
    presentes: number
  }

  export type ConvidadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presentes?: boolean | ConvidadoCountOutputTypeCountPresentesArgs
  }

  // Custom InputTypes
  /**
   * ConvidadoCountOutputType without action
   */
  export type ConvidadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvidadoCountOutputType
     */
    select?: ConvidadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConvidadoCountOutputType without action
   */
  export type ConvidadoCountOutputTypeCountPresentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Convidado
   */

  export type AggregateConvidado = {
    _count: ConvidadoCountAggregateOutputType | null
    _avg: ConvidadoAvgAggregateOutputType | null
    _sum: ConvidadoSumAggregateOutputType | null
    _min: ConvidadoMinAggregateOutputType | null
    _max: ConvidadoMaxAggregateOutputType | null
  }

  export type ConvidadoAvgAggregateOutputType = {
    id: number | null
    adultos: number | null
    criancas: number | null
  }

  export type ConvidadoSumAggregateOutputType = {
    id: number | null
    adultos: number | null
    criancas: number | null
  }

  export type ConvidadoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    confirmado: boolean | null
    adultos: number | null
    criancas: number | null
    mensagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvidadoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    confirmado: boolean | null
    adultos: number | null
    criancas: number | null
    mensagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvidadoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    confirmado: number
    adultos: number
    criancas: number
    mensagem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConvidadoAvgAggregateInputType = {
    id?: true
    adultos?: true
    criancas?: true
  }

  export type ConvidadoSumAggregateInputType = {
    id?: true
    adultos?: true
    criancas?: true
  }

  export type ConvidadoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    confirmado?: true
    adultos?: true
    criancas?: true
    mensagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvidadoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    confirmado?: true
    adultos?: true
    criancas?: true
    mensagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvidadoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    confirmado?: true
    adultos?: true
    criancas?: true
    mensagem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConvidadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convidado to aggregate.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convidados
    **/
    _count?: true | ConvidadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConvidadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConvidadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConvidadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConvidadoMaxAggregateInputType
  }

  export type GetConvidadoAggregateType<T extends ConvidadoAggregateArgs> = {
        [P in keyof T & keyof AggregateConvidado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvidado[P]>
      : GetScalarType<T[P], AggregateConvidado[P]>
  }




  export type ConvidadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvidadoWhereInput
    orderBy?: ConvidadoOrderByWithAggregationInput | ConvidadoOrderByWithAggregationInput[]
    by: ConvidadoScalarFieldEnum[] | ConvidadoScalarFieldEnum
    having?: ConvidadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConvidadoCountAggregateInputType | true
    _avg?: ConvidadoAvgAggregateInputType
    _sum?: ConvidadoSumAggregateInputType
    _min?: ConvidadoMinAggregateInputType
    _max?: ConvidadoMaxAggregateInputType
  }

  export type ConvidadoGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    telefone: string | null
    confirmado: boolean
    adultos: number
    criancas: number
    mensagem: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConvidadoCountAggregateOutputType | null
    _avg: ConvidadoAvgAggregateOutputType | null
    _sum: ConvidadoSumAggregateOutputType | null
    _min: ConvidadoMinAggregateOutputType | null
    _max: ConvidadoMaxAggregateOutputType | null
  }

  type GetConvidadoGroupByPayload<T extends ConvidadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConvidadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConvidadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConvidadoGroupByOutputType[P]>
            : GetScalarType<T[P], ConvidadoGroupByOutputType[P]>
        }
      >
    >


  export type ConvidadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    confirmado?: boolean
    adultos?: boolean
    criancas?: boolean
    mensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    presentes?: boolean | Convidado$presentesArgs<ExtArgs>
    _count?: boolean | ConvidadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convidado"]>



  export type ConvidadoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    confirmado?: boolean
    adultos?: boolean
    criancas?: boolean
    mensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConvidadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "confirmado" | "adultos" | "criancas" | "mensagem" | "createdAt" | "updatedAt", ExtArgs["result"]["convidado"]>
  export type ConvidadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presentes?: boolean | Convidado$presentesArgs<ExtArgs>
    _count?: boolean | ConvidadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConvidadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convidado"
    objects: {
      presentes: Prisma.$PresentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      telefone: string | null
      confirmado: boolean
      adultos: number
      criancas: number
      mensagem: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["convidado"]>
    composites: {}
  }

  type ConvidadoGetPayload<S extends boolean | null | undefined | ConvidadoDefaultArgs> = $Result.GetResult<Prisma.$ConvidadoPayload, S>

  type ConvidadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConvidadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConvidadoCountAggregateInputType | true
    }

  export interface ConvidadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convidado'], meta: { name: 'Convidado' } }
    /**
     * Find zero or one Convidado that matches the filter.
     * @param {ConvidadoFindUniqueArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConvidadoFindUniqueArgs>(args: SelectSubset<T, ConvidadoFindUniqueArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convidado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConvidadoFindUniqueOrThrowArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConvidadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConvidadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convidado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindFirstArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConvidadoFindFirstArgs>(args?: SelectSubset<T, ConvidadoFindFirstArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convidado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindFirstOrThrowArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConvidadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConvidadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Convidados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convidados
     * const convidados = await prisma.convidado.findMany()
     * 
     * // Get first 10 Convidados
     * const convidados = await prisma.convidado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const convidadoWithIdOnly = await prisma.convidado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConvidadoFindManyArgs>(args?: SelectSubset<T, ConvidadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convidado.
     * @param {ConvidadoCreateArgs} args - Arguments to create a Convidado.
     * @example
     * // Create one Convidado
     * const Convidado = await prisma.convidado.create({
     *   data: {
     *     // ... data to create a Convidado
     *   }
     * })
     * 
     */
    create<T extends ConvidadoCreateArgs>(args: SelectSubset<T, ConvidadoCreateArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Convidados.
     * @param {ConvidadoCreateManyArgs} args - Arguments to create many Convidados.
     * @example
     * // Create many Convidados
     * const convidado = await prisma.convidado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConvidadoCreateManyArgs>(args?: SelectSubset<T, ConvidadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Convidado.
     * @param {ConvidadoDeleteArgs} args - Arguments to delete one Convidado.
     * @example
     * // Delete one Convidado
     * const Convidado = await prisma.convidado.delete({
     *   where: {
     *     // ... filter to delete one Convidado
     *   }
     * })
     * 
     */
    delete<T extends ConvidadoDeleteArgs>(args: SelectSubset<T, ConvidadoDeleteArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convidado.
     * @param {ConvidadoUpdateArgs} args - Arguments to update one Convidado.
     * @example
     * // Update one Convidado
     * const convidado = await prisma.convidado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConvidadoUpdateArgs>(args: SelectSubset<T, ConvidadoUpdateArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Convidados.
     * @param {ConvidadoDeleteManyArgs} args - Arguments to filter Convidados to delete.
     * @example
     * // Delete a few Convidados
     * const { count } = await prisma.convidado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConvidadoDeleteManyArgs>(args?: SelectSubset<T, ConvidadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convidados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convidados
     * const convidado = await prisma.convidado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConvidadoUpdateManyArgs>(args: SelectSubset<T, ConvidadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Convidado.
     * @param {ConvidadoUpsertArgs} args - Arguments to update or create a Convidado.
     * @example
     * // Update or create a Convidado
     * const convidado = await prisma.convidado.upsert({
     *   create: {
     *     // ... data to create a Convidado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convidado we want to update
     *   }
     * })
     */
    upsert<T extends ConvidadoUpsertArgs>(args: SelectSubset<T, ConvidadoUpsertArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Convidados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoCountArgs} args - Arguments to filter Convidados to count.
     * @example
     * // Count the number of Convidados
     * const count = await prisma.convidado.count({
     *   where: {
     *     // ... the filter for the Convidados we want to count
     *   }
     * })
    **/
    count<T extends ConvidadoCountArgs>(
      args?: Subset<T, ConvidadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConvidadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convidado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConvidadoAggregateArgs>(args: Subset<T, ConvidadoAggregateArgs>): Prisma.PrismaPromise<GetConvidadoAggregateType<T>>

    /**
     * Group by Convidado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoGroupByArgs} args - Group by arguments.
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
      T extends ConvidadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConvidadoGroupByArgs['orderBy'] }
        : { orderBy?: ConvidadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConvidadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvidadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convidado model
   */
  readonly fields: ConvidadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convidado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConvidadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presentes<T extends Convidado$presentesArgs<ExtArgs> = {}>(args?: Subset<T, Convidado$presentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Convidado model
   */
  interface ConvidadoFieldRefs {
    readonly id: FieldRef<"Convidado", 'Int'>
    readonly nome: FieldRef<"Convidado", 'String'>
    readonly email: FieldRef<"Convidado", 'String'>
    readonly telefone: FieldRef<"Convidado", 'String'>
    readonly confirmado: FieldRef<"Convidado", 'Boolean'>
    readonly adultos: FieldRef<"Convidado", 'Int'>
    readonly criancas: FieldRef<"Convidado", 'Int'>
    readonly mensagem: FieldRef<"Convidado", 'String'>
    readonly createdAt: FieldRef<"Convidado", 'DateTime'>
    readonly updatedAt: FieldRef<"Convidado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Convidado findUnique
   */
  export type ConvidadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado findUniqueOrThrow
   */
  export type ConvidadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado findFirst
   */
  export type ConvidadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convidados.
     */
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado findFirstOrThrow
   */
  export type ConvidadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convidados.
     */
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado findMany
   */
  export type ConvidadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidados to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado create
   */
  export type ConvidadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Convidado.
     */
    data: XOR<ConvidadoCreateInput, ConvidadoUncheckedCreateInput>
  }

  /**
   * Convidado createMany
   */
  export type ConvidadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convidados.
     */
    data: ConvidadoCreateManyInput | ConvidadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convidado update
   */
  export type ConvidadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Convidado.
     */
    data: XOR<ConvidadoUpdateInput, ConvidadoUncheckedUpdateInput>
    /**
     * Choose, which Convidado to update.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado updateMany
   */
  export type ConvidadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convidados.
     */
    data: XOR<ConvidadoUpdateManyMutationInput, ConvidadoUncheckedUpdateManyInput>
    /**
     * Filter which Convidados to update
     */
    where?: ConvidadoWhereInput
    /**
     * Limit how many Convidados to update.
     */
    limit?: number
  }

  /**
   * Convidado upsert
   */
  export type ConvidadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Convidado to update in case it exists.
     */
    where: ConvidadoWhereUniqueInput
    /**
     * In case the Convidado found by the `where` argument doesn't exist, create a new Convidado with this data.
     */
    create: XOR<ConvidadoCreateInput, ConvidadoUncheckedCreateInput>
    /**
     * In case the Convidado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConvidadoUpdateInput, ConvidadoUncheckedUpdateInput>
  }

  /**
   * Convidado delete
   */
  export type ConvidadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter which Convidado to delete.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado deleteMany
   */
  export type ConvidadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convidados to delete
     */
    where?: ConvidadoWhereInput
    /**
     * Limit how many Convidados to delete.
     */
    limit?: number
  }

  /**
   * Convidado.presentes
   */
  export type Convidado$presentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    where?: PresenteWhereInput
    orderBy?: PresenteOrderByWithRelationInput | PresenteOrderByWithRelationInput[]
    cursor?: PresenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenteScalarFieldEnum | PresenteScalarFieldEnum[]
  }

  /**
   * Convidado without action
   */
  export type ConvidadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
  }


  /**
   * Model Presente
   */

  export type AggregatePresente = {
    _count: PresenteCountAggregateOutputType | null
    _avg: PresenteAvgAggregateOutputType | null
    _sum: PresenteSumAggregateOutputType | null
    _min: PresenteMinAggregateOutputType | null
    _max: PresenteMaxAggregateOutputType | null
  }

  export type PresenteAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    convidadoId: number | null
  }

  export type PresenteSumAggregateOutputType = {
    id: number | null
    valor: number | null
    convidadoId: number | null
  }

  export type PresenteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: number | null
    link: string | null
    imagem: string | null
    reservado: boolean | null
    reservadoPor: string | null
    convidadoId: number | null
    metodoPagamento: $Enums.MetodoPagamento | null
    pixCode: string | null
    pixUrl: string | null
    qrCode: string | null
    pago: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresenteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: number | null
    link: string | null
    imagem: string | null
    reservado: boolean | null
    reservadoPor: string | null
    convidadoId: number | null
    metodoPagamento: $Enums.MetodoPagamento | null
    pixCode: string | null
    pixUrl: string | null
    qrCode: string | null
    pago: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresenteCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valor: number
    link: number
    imagem: number
    reservado: number
    reservadoPor: number
    convidadoId: number
    metodoPagamento: number
    pixCode: number
    pixUrl: number
    qrCode: number
    pago: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresenteAvgAggregateInputType = {
    id?: true
    valor?: true
    convidadoId?: true
  }

  export type PresenteSumAggregateInputType = {
    id?: true
    valor?: true
    convidadoId?: true
  }

  export type PresenteMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    link?: true
    imagem?: true
    reservado?: true
    reservadoPor?: true
    convidadoId?: true
    metodoPagamento?: true
    pixCode?: true
    pixUrl?: true
    qrCode?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresenteMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    link?: true
    imagem?: true
    reservado?: true
    reservadoPor?: true
    convidadoId?: true
    metodoPagamento?: true
    pixCode?: true
    pixUrl?: true
    qrCode?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresenteCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    link?: true
    imagem?: true
    reservado?: true
    reservadoPor?: true
    convidadoId?: true
    metodoPagamento?: true
    pixCode?: true
    pixUrl?: true
    qrCode?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presente to aggregate.
     */
    where?: PresenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentes to fetch.
     */
    orderBy?: PresenteOrderByWithRelationInput | PresenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presentes
    **/
    _count?: true | PresenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenteMaxAggregateInputType
  }

  export type GetPresenteAggregateType<T extends PresenteAggregateArgs> = {
        [P in keyof T & keyof AggregatePresente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresente[P]>
      : GetScalarType<T[P], AggregatePresente[P]>
  }




  export type PresenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenteWhereInput
    orderBy?: PresenteOrderByWithAggregationInput | PresenteOrderByWithAggregationInput[]
    by: PresenteScalarFieldEnum[] | PresenteScalarFieldEnum
    having?: PresenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenteCountAggregateInputType | true
    _avg?: PresenteAvgAggregateInputType
    _sum?: PresenteSumAggregateInputType
    _min?: PresenteMinAggregateInputType
    _max?: PresenteMaxAggregateInputType
  }

  export type PresenteGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    valor: number
    link: string | null
    imagem: string | null
    reservado: boolean
    reservadoPor: string | null
    convidadoId: number | null
    metodoPagamento: $Enums.MetodoPagamento | null
    pixCode: string | null
    pixUrl: string | null
    qrCode: string | null
    pago: boolean
    createdAt: Date
    updatedAt: Date
    _count: PresenteCountAggregateOutputType | null
    _avg: PresenteAvgAggregateOutputType | null
    _sum: PresenteSumAggregateOutputType | null
    _min: PresenteMinAggregateOutputType | null
    _max: PresenteMaxAggregateOutputType | null
  }

  type GetPresenteGroupByPayload<T extends PresenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenteGroupByOutputType[P]>
            : GetScalarType<T[P], PresenteGroupByOutputType[P]>
        }
      >
    >


  export type PresenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    link?: boolean
    imagem?: boolean
    reservado?: boolean
    reservadoPor?: boolean
    convidadoId?: boolean
    metodoPagamento?: boolean
    pixCode?: boolean
    pixUrl?: boolean
    qrCode?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convidado?: boolean | Presente$convidadoArgs<ExtArgs>
  }, ExtArgs["result"]["presente"]>



  export type PresenteSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    link?: boolean
    imagem?: boolean
    reservado?: boolean
    reservadoPor?: boolean
    convidadoId?: boolean
    metodoPagamento?: boolean
    pixCode?: boolean
    pixUrl?: boolean
    qrCode?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "valor" | "link" | "imagem" | "reservado" | "reservadoPor" | "convidadoId" | "metodoPagamento" | "pixCode" | "pixUrl" | "qrCode" | "pago" | "createdAt" | "updatedAt", ExtArgs["result"]["presente"]>
  export type PresenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidado?: boolean | Presente$convidadoArgs<ExtArgs>
  }

  export type $PresentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presente"
    objects: {
      convidado: Prisma.$ConvidadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      valor: number
      link: string | null
      imagem: string | null
      reservado: boolean
      reservadoPor: string | null
      convidadoId: number | null
      metodoPagamento: $Enums.MetodoPagamento | null
      pixCode: string | null
      pixUrl: string | null
      qrCode: string | null
      pago: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presente"]>
    composites: {}
  }

  type PresenteGetPayload<S extends boolean | null | undefined | PresenteDefaultArgs> = $Result.GetResult<Prisma.$PresentePayload, S>

  type PresenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresenteCountAggregateInputType | true
    }

  export interface PresenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presente'], meta: { name: 'Presente' } }
    /**
     * Find zero or one Presente that matches the filter.
     * @param {PresenteFindUniqueArgs} args - Arguments to find a Presente
     * @example
     * // Get one Presente
     * const presente = await prisma.presente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenteFindUniqueArgs>(args: SelectSubset<T, PresenteFindUniqueArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenteFindUniqueOrThrowArgs} args - Arguments to find a Presente
     * @example
     * // Get one Presente
     * const presente = await prisma.presente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenteFindUniqueOrThrowArgs>(args: SelectSubset<T, PresenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteFindFirstArgs} args - Arguments to find a Presente
     * @example
     * // Get one Presente
     * const presente = await prisma.presente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenteFindFirstArgs>(args?: SelectSubset<T, PresenteFindFirstArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteFindFirstOrThrowArgs} args - Arguments to find a Presente
     * @example
     * // Get one Presente
     * const presente = await prisma.presente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenteFindFirstOrThrowArgs>(args?: SelectSubset<T, PresenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presentes
     * const presentes = await prisma.presente.findMany()
     * 
     * // Get first 10 Presentes
     * const presentes = await prisma.presente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presenteWithIdOnly = await prisma.presente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresenteFindManyArgs>(args?: SelectSubset<T, PresenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presente.
     * @param {PresenteCreateArgs} args - Arguments to create a Presente.
     * @example
     * // Create one Presente
     * const Presente = await prisma.presente.create({
     *   data: {
     *     // ... data to create a Presente
     *   }
     * })
     * 
     */
    create<T extends PresenteCreateArgs>(args: SelectSubset<T, PresenteCreateArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presentes.
     * @param {PresenteCreateManyArgs} args - Arguments to create many Presentes.
     * @example
     * // Create many Presentes
     * const presente = await prisma.presente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresenteCreateManyArgs>(args?: SelectSubset<T, PresenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Presente.
     * @param {PresenteDeleteArgs} args - Arguments to delete one Presente.
     * @example
     * // Delete one Presente
     * const Presente = await prisma.presente.delete({
     *   where: {
     *     // ... filter to delete one Presente
     *   }
     * })
     * 
     */
    delete<T extends PresenteDeleteArgs>(args: SelectSubset<T, PresenteDeleteArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presente.
     * @param {PresenteUpdateArgs} args - Arguments to update one Presente.
     * @example
     * // Update one Presente
     * const presente = await prisma.presente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresenteUpdateArgs>(args: SelectSubset<T, PresenteUpdateArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presentes.
     * @param {PresenteDeleteManyArgs} args - Arguments to filter Presentes to delete.
     * @example
     * // Delete a few Presentes
     * const { count } = await prisma.presente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresenteDeleteManyArgs>(args?: SelectSubset<T, PresenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presentes
     * const presente = await prisma.presente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresenteUpdateManyArgs>(args: SelectSubset<T, PresenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Presente.
     * @param {PresenteUpsertArgs} args - Arguments to update or create a Presente.
     * @example
     * // Update or create a Presente
     * const presente = await prisma.presente.upsert({
     *   create: {
     *     // ... data to create a Presente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presente we want to update
     *   }
     * })
     */
    upsert<T extends PresenteUpsertArgs>(args: SelectSubset<T, PresenteUpsertArgs<ExtArgs>>): Prisma__PresenteClient<$Result.GetResult<Prisma.$PresentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteCountArgs} args - Arguments to filter Presentes to count.
     * @example
     * // Count the number of Presentes
     * const count = await prisma.presente.count({
     *   where: {
     *     // ... the filter for the Presentes we want to count
     *   }
     * })
    **/
    count<T extends PresenteCountArgs>(
      args?: Subset<T, PresenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresenteAggregateArgs>(args: Subset<T, PresenteAggregateArgs>): Prisma.PrismaPromise<GetPresenteAggregateType<T>>

    /**
     * Group by Presente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenteGroupByArgs} args - Group by arguments.
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
      T extends PresenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenteGroupByArgs['orderBy'] }
        : { orderBy?: PresenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presente model
   */
  readonly fields: PresenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    convidado<T extends Presente$convidadoArgs<ExtArgs> = {}>(args?: Subset<T, Presente$convidadoArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Presente model
   */
  interface PresenteFieldRefs {
    readonly id: FieldRef<"Presente", 'Int'>
    readonly nome: FieldRef<"Presente", 'String'>
    readonly descricao: FieldRef<"Presente", 'String'>
    readonly valor: FieldRef<"Presente", 'Float'>
    readonly link: FieldRef<"Presente", 'String'>
    readonly imagem: FieldRef<"Presente", 'String'>
    readonly reservado: FieldRef<"Presente", 'Boolean'>
    readonly reservadoPor: FieldRef<"Presente", 'String'>
    readonly convidadoId: FieldRef<"Presente", 'Int'>
    readonly metodoPagamento: FieldRef<"Presente", 'MetodoPagamento'>
    readonly pixCode: FieldRef<"Presente", 'String'>
    readonly pixUrl: FieldRef<"Presente", 'String'>
    readonly qrCode: FieldRef<"Presente", 'String'>
    readonly pago: FieldRef<"Presente", 'Boolean'>
    readonly createdAt: FieldRef<"Presente", 'DateTime'>
    readonly updatedAt: FieldRef<"Presente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presente findUnique
   */
  export type PresenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter, which Presente to fetch.
     */
    where: PresenteWhereUniqueInput
  }

  /**
   * Presente findUniqueOrThrow
   */
  export type PresenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter, which Presente to fetch.
     */
    where: PresenteWhereUniqueInput
  }

  /**
   * Presente findFirst
   */
  export type PresenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter, which Presente to fetch.
     */
    where?: PresenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentes to fetch.
     */
    orderBy?: PresenteOrderByWithRelationInput | PresenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presentes.
     */
    cursor?: PresenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presentes.
     */
    distinct?: PresenteScalarFieldEnum | PresenteScalarFieldEnum[]
  }

  /**
   * Presente findFirstOrThrow
   */
  export type PresenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter, which Presente to fetch.
     */
    where?: PresenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentes to fetch.
     */
    orderBy?: PresenteOrderByWithRelationInput | PresenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presentes.
     */
    cursor?: PresenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presentes.
     */
    distinct?: PresenteScalarFieldEnum | PresenteScalarFieldEnum[]
  }

  /**
   * Presente findMany
   */
  export type PresenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter, which Presentes to fetch.
     */
    where?: PresenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentes to fetch.
     */
    orderBy?: PresenteOrderByWithRelationInput | PresenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presentes.
     */
    cursor?: PresenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentes.
     */
    skip?: number
    distinct?: PresenteScalarFieldEnum | PresenteScalarFieldEnum[]
  }

  /**
   * Presente create
   */
  export type PresenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Presente.
     */
    data: XOR<PresenteCreateInput, PresenteUncheckedCreateInput>
  }

  /**
   * Presente createMany
   */
  export type PresenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presentes.
     */
    data: PresenteCreateManyInput | PresenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presente update
   */
  export type PresenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Presente.
     */
    data: XOR<PresenteUpdateInput, PresenteUncheckedUpdateInput>
    /**
     * Choose, which Presente to update.
     */
    where: PresenteWhereUniqueInput
  }

  /**
   * Presente updateMany
   */
  export type PresenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presentes.
     */
    data: XOR<PresenteUpdateManyMutationInput, PresenteUncheckedUpdateManyInput>
    /**
     * Filter which Presentes to update
     */
    where?: PresenteWhereInput
    /**
     * Limit how many Presentes to update.
     */
    limit?: number
  }

  /**
   * Presente upsert
   */
  export type PresenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Presente to update in case it exists.
     */
    where: PresenteWhereUniqueInput
    /**
     * In case the Presente found by the `where` argument doesn't exist, create a new Presente with this data.
     */
    create: XOR<PresenteCreateInput, PresenteUncheckedCreateInput>
    /**
     * In case the Presente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenteUpdateInput, PresenteUncheckedUpdateInput>
  }

  /**
   * Presente delete
   */
  export type PresenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
    /**
     * Filter which Presente to delete.
     */
    where: PresenteWhereUniqueInput
  }

  /**
   * Presente deleteMany
   */
  export type PresenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presentes to delete
     */
    where?: PresenteWhereInput
    /**
     * Limit how many Presentes to delete.
     */
    limit?: number
  }

  /**
   * Presente.convidado
   */
  export type Presente$convidadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    where?: ConvidadoWhereInput
  }

  /**
   * Presente without action
   */
  export type PresenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presente
     */
    select?: PresenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presente
     */
    omit?: PresenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenteInclude<ExtArgs> | null
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


  export const ConvidadoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    confirmado: 'confirmado',
    adultos: 'adultos',
    criancas: 'criancas',
    mensagem: 'mensagem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConvidadoScalarFieldEnum = (typeof ConvidadoScalarFieldEnum)[keyof typeof ConvidadoScalarFieldEnum]


  export const PresenteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valor: 'valor',
    link: 'link',
    imagem: 'imagem',
    reservado: 'reservado',
    reservadoPor: 'reservadoPor',
    convidadoId: 'convidadoId',
    metodoPagamento: 'metodoPagamento',
    pixCode: 'pixCode',
    pixUrl: 'pixUrl',
    qrCode: 'qrCode',
    pago: 'pago',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresenteScalarFieldEnum = (typeof PresenteScalarFieldEnum)[keyof typeof PresenteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ConvidadoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    mensagem: 'mensagem'
  };

  export type ConvidadoOrderByRelevanceFieldEnum = (typeof ConvidadoOrderByRelevanceFieldEnum)[keyof typeof ConvidadoOrderByRelevanceFieldEnum]


  export const PresenteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao',
    link: 'link',
    imagem: 'imagem',
    reservadoPor: 'reservadoPor',
    pixCode: 'pixCode',
    pixUrl: 'pixUrl',
    qrCode: 'qrCode'
  };

  export type PresenteOrderByRelevanceFieldEnum = (typeof PresenteOrderByRelevanceFieldEnum)[keyof typeof PresenteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'MetodoPagamento'
   */
  export type EnumMetodoPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPagamento'>
    
  /**
   * Deep Input Types
   */


  export type ConvidadoWhereInput = {
    AND?: ConvidadoWhereInput | ConvidadoWhereInput[]
    OR?: ConvidadoWhereInput[]
    NOT?: ConvidadoWhereInput | ConvidadoWhereInput[]
    id?: IntFilter<"Convidado"> | number
    nome?: StringFilter<"Convidado"> | string
    email?: StringNullableFilter<"Convidado"> | string | null
    telefone?: StringNullableFilter<"Convidado"> | string | null
    confirmado?: BoolFilter<"Convidado"> | boolean
    adultos?: IntFilter<"Convidado"> | number
    criancas?: IntFilter<"Convidado"> | number
    mensagem?: StringNullableFilter<"Convidado"> | string | null
    createdAt?: DateTimeFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeFilter<"Convidado"> | Date | string
    presentes?: PresenteListRelationFilter
  }

  export type ConvidadoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    confirmado?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    presentes?: PresenteOrderByRelationAggregateInput
    _relevance?: ConvidadoOrderByRelevanceInput
  }

  export type ConvidadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ConvidadoWhereInput | ConvidadoWhereInput[]
    OR?: ConvidadoWhereInput[]
    NOT?: ConvidadoWhereInput | ConvidadoWhereInput[]
    nome?: StringFilter<"Convidado"> | string
    telefone?: StringNullableFilter<"Convidado"> | string | null
    confirmado?: BoolFilter<"Convidado"> | boolean
    adultos?: IntFilter<"Convidado"> | number
    criancas?: IntFilter<"Convidado"> | number
    mensagem?: StringNullableFilter<"Convidado"> | string | null
    createdAt?: DateTimeFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeFilter<"Convidado"> | Date | string
    presentes?: PresenteListRelationFilter
  }, "id" | "email">

  export type ConvidadoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    confirmado?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConvidadoCountOrderByAggregateInput
    _avg?: ConvidadoAvgOrderByAggregateInput
    _max?: ConvidadoMaxOrderByAggregateInput
    _min?: ConvidadoMinOrderByAggregateInput
    _sum?: ConvidadoSumOrderByAggregateInput
  }

  export type ConvidadoScalarWhereWithAggregatesInput = {
    AND?: ConvidadoScalarWhereWithAggregatesInput | ConvidadoScalarWhereWithAggregatesInput[]
    OR?: ConvidadoScalarWhereWithAggregatesInput[]
    NOT?: ConvidadoScalarWhereWithAggregatesInput | ConvidadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Convidado"> | number
    nome?: StringWithAggregatesFilter<"Convidado"> | string
    email?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
    confirmado?: BoolWithAggregatesFilter<"Convidado"> | boolean
    adultos?: IntWithAggregatesFilter<"Convidado"> | number
    criancas?: IntWithAggregatesFilter<"Convidado"> | number
    mensagem?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convidado"> | Date | string
  }

  export type PresenteWhereInput = {
    AND?: PresenteWhereInput | PresenteWhereInput[]
    OR?: PresenteWhereInput[]
    NOT?: PresenteWhereInput | PresenteWhereInput[]
    id?: IntFilter<"Presente"> | number
    nome?: StringFilter<"Presente"> | string
    descricao?: StringNullableFilter<"Presente"> | string | null
    valor?: FloatFilter<"Presente"> | number
    link?: StringNullableFilter<"Presente"> | string | null
    imagem?: StringNullableFilter<"Presente"> | string | null
    reservado?: BoolFilter<"Presente"> | boolean
    reservadoPor?: StringNullableFilter<"Presente"> | string | null
    convidadoId?: IntNullableFilter<"Presente"> | number | null
    metodoPagamento?: EnumMetodoPagamentoNullableFilter<"Presente"> | $Enums.MetodoPagamento | null
    pixCode?: StringNullableFilter<"Presente"> | string | null
    pixUrl?: StringNullableFilter<"Presente"> | string | null
    qrCode?: StringNullableFilter<"Presente"> | string | null
    pago?: BoolFilter<"Presente"> | boolean
    createdAt?: DateTimeFilter<"Presente"> | Date | string
    updatedAt?: DateTimeFilter<"Presente"> | Date | string
    convidado?: XOR<ConvidadoNullableScalarRelationFilter, ConvidadoWhereInput> | null
  }

  export type PresenteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    link?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    reservado?: SortOrder
    reservadoPor?: SortOrderInput | SortOrder
    convidadoId?: SortOrderInput | SortOrder
    metodoPagamento?: SortOrderInput | SortOrder
    pixCode?: SortOrderInput | SortOrder
    pixUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    convidado?: ConvidadoOrderByWithRelationInput
    _relevance?: PresenteOrderByRelevanceInput
  }

  export type PresenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresenteWhereInput | PresenteWhereInput[]
    OR?: PresenteWhereInput[]
    NOT?: PresenteWhereInput | PresenteWhereInput[]
    nome?: StringFilter<"Presente"> | string
    descricao?: StringNullableFilter<"Presente"> | string | null
    valor?: FloatFilter<"Presente"> | number
    link?: StringNullableFilter<"Presente"> | string | null
    imagem?: StringNullableFilter<"Presente"> | string | null
    reservado?: BoolFilter<"Presente"> | boolean
    reservadoPor?: StringNullableFilter<"Presente"> | string | null
    convidadoId?: IntNullableFilter<"Presente"> | number | null
    metodoPagamento?: EnumMetodoPagamentoNullableFilter<"Presente"> | $Enums.MetodoPagamento | null
    pixCode?: StringNullableFilter<"Presente"> | string | null
    pixUrl?: StringNullableFilter<"Presente"> | string | null
    qrCode?: StringNullableFilter<"Presente"> | string | null
    pago?: BoolFilter<"Presente"> | boolean
    createdAt?: DateTimeFilter<"Presente"> | Date | string
    updatedAt?: DateTimeFilter<"Presente"> | Date | string
    convidado?: XOR<ConvidadoNullableScalarRelationFilter, ConvidadoWhereInput> | null
  }, "id">

  export type PresenteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    link?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    reservado?: SortOrder
    reservadoPor?: SortOrderInput | SortOrder
    convidadoId?: SortOrderInput | SortOrder
    metodoPagamento?: SortOrderInput | SortOrder
    pixCode?: SortOrderInput | SortOrder
    pixUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresenteCountOrderByAggregateInput
    _avg?: PresenteAvgOrderByAggregateInput
    _max?: PresenteMaxOrderByAggregateInput
    _min?: PresenteMinOrderByAggregateInput
    _sum?: PresenteSumOrderByAggregateInput
  }

  export type PresenteScalarWhereWithAggregatesInput = {
    AND?: PresenteScalarWhereWithAggregatesInput | PresenteScalarWhereWithAggregatesInput[]
    OR?: PresenteScalarWhereWithAggregatesInput[]
    NOT?: PresenteScalarWhereWithAggregatesInput | PresenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Presente"> | number
    nome?: StringWithAggregatesFilter<"Presente"> | string
    descricao?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    valor?: FloatWithAggregatesFilter<"Presente"> | number
    link?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    imagem?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    reservado?: BoolWithAggregatesFilter<"Presente"> | boolean
    reservadoPor?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    convidadoId?: IntNullableWithAggregatesFilter<"Presente"> | number | null
    metodoPagamento?: EnumMetodoPagamentoNullableWithAggregatesFilter<"Presente"> | $Enums.MetodoPagamento | null
    pixCode?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    pixUrl?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Presente"> | string | null
    pago?: BoolWithAggregatesFilter<"Presente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Presente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presente"> | Date | string
  }

  export type ConvidadoCreateInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    confirmado?: boolean
    adultos?: number
    criancas?: number
    mensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presentes?: PresenteCreateNestedManyWithoutConvidadoInput
  }

  export type ConvidadoUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    confirmado?: boolean
    adultos?: number
    criancas?: number
    mensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presentes?: PresenteUncheckedCreateNestedManyWithoutConvidadoInput
  }

  export type ConvidadoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presentes?: PresenteUpdateManyWithoutConvidadoNestedInput
  }

  export type ConvidadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presentes?: PresenteUncheckedUpdateManyWithoutConvidadoNestedInput
  }

  export type ConvidadoCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    confirmado?: boolean
    adultos?: number
    criancas?: number
    mensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvidadoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvidadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteCreateInput = {
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    convidado?: ConvidadoCreateNestedOneWithoutPresentesInput
  }

  export type PresenteUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    convidadoId?: number | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convidado?: ConvidadoUpdateOneWithoutPresentesNestedInput
  }

  export type PresenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    convidadoId?: NullableIntFieldUpdateOperationsInput | number | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    convidadoId?: number | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    convidadoId?: NullableIntFieldUpdateOperationsInput | number | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PresenteListRelationFilter = {
    every?: PresenteWhereInput
    some?: PresenteWhereInput
    none?: PresenteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PresenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConvidadoOrderByRelevanceInput = {
    fields: ConvidadoOrderByRelevanceFieldEnum | ConvidadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConvidadoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    confirmado?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvidadoAvgOrderByAggregateInput = {
    id?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
  }

  export type ConvidadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    confirmado?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvidadoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    confirmado?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvidadoSumOrderByAggregateInput = {
    id?: SortOrder
    adultos?: SortOrder
    criancas?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMetodoPagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoPagamento[] | null
    notIn?: $Enums.MetodoPagamento[] | null
    not?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel> | $Enums.MetodoPagamento | null
  }

  export type ConvidadoNullableScalarRelationFilter = {
    is?: ConvidadoWhereInput | null
    isNot?: ConvidadoWhereInput | null
  }

  export type PresenteOrderByRelevanceInput = {
    fields: PresenteOrderByRelevanceFieldEnum | PresenteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PresenteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    link?: SortOrder
    imagem?: SortOrder
    reservado?: SortOrder
    reservadoPor?: SortOrder
    convidadoId?: SortOrder
    metodoPagamento?: SortOrder
    pixCode?: SortOrder
    pixUrl?: SortOrder
    qrCode?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenteAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    convidadoId?: SortOrder
  }

  export type PresenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    link?: SortOrder
    imagem?: SortOrder
    reservado?: SortOrder
    reservadoPor?: SortOrder
    convidadoId?: SortOrder
    metodoPagamento?: SortOrder
    pixCode?: SortOrder
    pixUrl?: SortOrder
    qrCode?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    link?: SortOrder
    imagem?: SortOrder
    reservado?: SortOrder
    reservadoPor?: SortOrder
    convidadoId?: SortOrder
    metodoPagamento?: SortOrder
    pixCode?: SortOrder
    pixUrl?: SortOrder
    qrCode?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenteSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    convidadoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMetodoPagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoPagamento[] | null
    notIn?: $Enums.MetodoPagamento[] | null
    not?: NestedEnumMetodoPagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel>
  }

  export type PresenteCreateNestedManyWithoutConvidadoInput = {
    create?: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput> | PresenteCreateWithoutConvidadoInput[] | PresenteUncheckedCreateWithoutConvidadoInput[]
    connectOrCreate?: PresenteCreateOrConnectWithoutConvidadoInput | PresenteCreateOrConnectWithoutConvidadoInput[]
    createMany?: PresenteCreateManyConvidadoInputEnvelope
    connect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
  }

  export type PresenteUncheckedCreateNestedManyWithoutConvidadoInput = {
    create?: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput> | PresenteCreateWithoutConvidadoInput[] | PresenteUncheckedCreateWithoutConvidadoInput[]
    connectOrCreate?: PresenteCreateOrConnectWithoutConvidadoInput | PresenteCreateOrConnectWithoutConvidadoInput[]
    createMany?: PresenteCreateManyConvidadoInputEnvelope
    connect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PresenteUpdateManyWithoutConvidadoNestedInput = {
    create?: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput> | PresenteCreateWithoutConvidadoInput[] | PresenteUncheckedCreateWithoutConvidadoInput[]
    connectOrCreate?: PresenteCreateOrConnectWithoutConvidadoInput | PresenteCreateOrConnectWithoutConvidadoInput[]
    upsert?: PresenteUpsertWithWhereUniqueWithoutConvidadoInput | PresenteUpsertWithWhereUniqueWithoutConvidadoInput[]
    createMany?: PresenteCreateManyConvidadoInputEnvelope
    set?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    disconnect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    delete?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    connect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    update?: PresenteUpdateWithWhereUniqueWithoutConvidadoInput | PresenteUpdateWithWhereUniqueWithoutConvidadoInput[]
    updateMany?: PresenteUpdateManyWithWhereWithoutConvidadoInput | PresenteUpdateManyWithWhereWithoutConvidadoInput[]
    deleteMany?: PresenteScalarWhereInput | PresenteScalarWhereInput[]
  }

  export type PresenteUncheckedUpdateManyWithoutConvidadoNestedInput = {
    create?: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput> | PresenteCreateWithoutConvidadoInput[] | PresenteUncheckedCreateWithoutConvidadoInput[]
    connectOrCreate?: PresenteCreateOrConnectWithoutConvidadoInput | PresenteCreateOrConnectWithoutConvidadoInput[]
    upsert?: PresenteUpsertWithWhereUniqueWithoutConvidadoInput | PresenteUpsertWithWhereUniqueWithoutConvidadoInput[]
    createMany?: PresenteCreateManyConvidadoInputEnvelope
    set?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    disconnect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    delete?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    connect?: PresenteWhereUniqueInput | PresenteWhereUniqueInput[]
    update?: PresenteUpdateWithWhereUniqueWithoutConvidadoInput | PresenteUpdateWithWhereUniqueWithoutConvidadoInput[]
    updateMany?: PresenteUpdateManyWithWhereWithoutConvidadoInput | PresenteUpdateManyWithWhereWithoutConvidadoInput[]
    deleteMany?: PresenteScalarWhereInput | PresenteScalarWhereInput[]
  }

  export type ConvidadoCreateNestedOneWithoutPresentesInput = {
    create?: XOR<ConvidadoCreateWithoutPresentesInput, ConvidadoUncheckedCreateWithoutPresentesInput>
    connectOrCreate?: ConvidadoCreateOrConnectWithoutPresentesInput
    connect?: ConvidadoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumMetodoPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPagamento | null
  }

  export type ConvidadoUpdateOneWithoutPresentesNestedInput = {
    create?: XOR<ConvidadoCreateWithoutPresentesInput, ConvidadoUncheckedCreateWithoutPresentesInput>
    connectOrCreate?: ConvidadoCreateOrConnectWithoutPresentesInput
    upsert?: ConvidadoUpsertWithoutPresentesInput
    disconnect?: ConvidadoWhereInput | boolean
    delete?: ConvidadoWhereInput | boolean
    connect?: ConvidadoWhereUniqueInput
    update?: XOR<XOR<ConvidadoUpdateToOneWithWhereWithoutPresentesInput, ConvidadoUpdateWithoutPresentesInput>, ConvidadoUncheckedUpdateWithoutPresentesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoPagamento[] | null
    notIn?: $Enums.MetodoPagamento[] | null
    not?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel> | $Enums.MetodoPagamento | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMetodoPagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.MetodoPagamento[] | null
    notIn?: $Enums.MetodoPagamento[] | null
    not?: NestedEnumMetodoPagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoNullableFilter<$PrismaModel>
  }

  export type PresenteCreateWithoutConvidadoInput = {
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenteUncheckedCreateWithoutConvidadoInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenteCreateOrConnectWithoutConvidadoInput = {
    where: PresenteWhereUniqueInput
    create: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput>
  }

  export type PresenteCreateManyConvidadoInputEnvelope = {
    data: PresenteCreateManyConvidadoInput | PresenteCreateManyConvidadoInput[]
    skipDuplicates?: boolean
  }

  export type PresenteUpsertWithWhereUniqueWithoutConvidadoInput = {
    where: PresenteWhereUniqueInput
    update: XOR<PresenteUpdateWithoutConvidadoInput, PresenteUncheckedUpdateWithoutConvidadoInput>
    create: XOR<PresenteCreateWithoutConvidadoInput, PresenteUncheckedCreateWithoutConvidadoInput>
  }

  export type PresenteUpdateWithWhereUniqueWithoutConvidadoInput = {
    where: PresenteWhereUniqueInput
    data: XOR<PresenteUpdateWithoutConvidadoInput, PresenteUncheckedUpdateWithoutConvidadoInput>
  }

  export type PresenteUpdateManyWithWhereWithoutConvidadoInput = {
    where: PresenteScalarWhereInput
    data: XOR<PresenteUpdateManyMutationInput, PresenteUncheckedUpdateManyWithoutConvidadoInput>
  }

  export type PresenteScalarWhereInput = {
    AND?: PresenteScalarWhereInput | PresenteScalarWhereInput[]
    OR?: PresenteScalarWhereInput[]
    NOT?: PresenteScalarWhereInput | PresenteScalarWhereInput[]
    id?: IntFilter<"Presente"> | number
    nome?: StringFilter<"Presente"> | string
    descricao?: StringNullableFilter<"Presente"> | string | null
    valor?: FloatFilter<"Presente"> | number
    link?: StringNullableFilter<"Presente"> | string | null
    imagem?: StringNullableFilter<"Presente"> | string | null
    reservado?: BoolFilter<"Presente"> | boolean
    reservadoPor?: StringNullableFilter<"Presente"> | string | null
    convidadoId?: IntNullableFilter<"Presente"> | number | null
    metodoPagamento?: EnumMetodoPagamentoNullableFilter<"Presente"> | $Enums.MetodoPagamento | null
    pixCode?: StringNullableFilter<"Presente"> | string | null
    pixUrl?: StringNullableFilter<"Presente"> | string | null
    qrCode?: StringNullableFilter<"Presente"> | string | null
    pago?: BoolFilter<"Presente"> | boolean
    createdAt?: DateTimeFilter<"Presente"> | Date | string
    updatedAt?: DateTimeFilter<"Presente"> | Date | string
  }

  export type ConvidadoCreateWithoutPresentesInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    confirmado?: boolean
    adultos?: number
    criancas?: number
    mensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvidadoUncheckedCreateWithoutPresentesInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    confirmado?: boolean
    adultos?: number
    criancas?: number
    mensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvidadoCreateOrConnectWithoutPresentesInput = {
    where: ConvidadoWhereUniqueInput
    create: XOR<ConvidadoCreateWithoutPresentesInput, ConvidadoUncheckedCreateWithoutPresentesInput>
  }

  export type ConvidadoUpsertWithoutPresentesInput = {
    update: XOR<ConvidadoUpdateWithoutPresentesInput, ConvidadoUncheckedUpdateWithoutPresentesInput>
    create: XOR<ConvidadoCreateWithoutPresentesInput, ConvidadoUncheckedCreateWithoutPresentesInput>
    where?: ConvidadoWhereInput
  }

  export type ConvidadoUpdateToOneWithWhereWithoutPresentesInput = {
    where?: ConvidadoWhereInput
    data: XOR<ConvidadoUpdateWithoutPresentesInput, ConvidadoUncheckedUpdateWithoutPresentesInput>
  }

  export type ConvidadoUpdateWithoutPresentesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvidadoUncheckedUpdateWithoutPresentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    adultos?: IntFieldUpdateOperationsInput | number
    criancas?: IntFieldUpdateOperationsInput | number
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteCreateManyConvidadoInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    link?: string | null
    imagem?: string | null
    reservado?: boolean
    reservadoPor?: string | null
    metodoPagamento?: $Enums.MetodoPagamento | null
    pixCode?: string | null
    pixUrl?: string | null
    qrCode?: string | null
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresenteUpdateWithoutConvidadoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteUncheckedUpdateWithoutConvidadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenteUncheckedUpdateManyWithoutConvidadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    reservado?: BoolFieldUpdateOperationsInput | boolean
    reservadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    metodoPagamento?: NullableEnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento | null
    pixCode?: NullableStringFieldUpdateOperationsInput | string | null
    pixUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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