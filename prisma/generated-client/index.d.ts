
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model CaseRequest
 * 
 */
export type CaseRequest = $Result.DefaultSelection<Prisma.$CaseRequestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ngo
 * 
 */
export type Ngo = $Result.DefaultSelection<Prisma.$NgoPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model CampaignUpdate
 * 
 */
export type CampaignUpdate = $Result.DefaultSelection<Prisma.$CampaignUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  NGO_PARTNER: 'NGO_PARTNER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const NgoStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type NgoStatus = (typeof NgoStatus)[keyof typeof NgoStatus]


export const CampaignStatus: {
  PENDING_REVIEW: 'PENDING_REVIEW',
  ACTIVE: 'ACTIVE',
  URGENT: 'URGENT',
  GOAL_MET: 'GOAL_MET',
  CLOSED: 'CLOSED',
  REJECTED: 'REJECTED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const DonationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED',
  FLAGGED: 'FLAGGED'
};

export type DonationStatus = (typeof DonationStatus)[keyof typeof DonationStatus]


export const Category: {
  MEDICAL: 'MEDICAL',
  EDUCATION: 'EDUCATION',
  DISASTER: 'DISASTER',
  WOMEN: 'WOMEN',
  ORPHAN: 'ORPHAN',
  LIVELIHOOD: 'LIVELIHOOD',
  ENVIRONMENT: 'ENVIRONMENT'
};

export type Category = (typeof Category)[keyof typeof Category]


export const CaseStatus: {
  AVAILABLE: 'AVAILABLE',
  ADOPTED: 'ADOPTED',
  REJECTED: 'REJECTED'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type NgoStatus = $Enums.NgoStatus

export const NgoStatus: typeof $Enums.NgoStatus

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type DonationStatus = $Enums.DonationStatus

export const DonationStatus: typeof $Enums.DonationStatus

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Districts
 * const districts = await prisma.district.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Districts
   * const districts = await prisma.district.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseRequest`: Exposes CRUD operations for the **CaseRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseRequests
    * const caseRequests = await prisma.caseRequest.findMany()
    * ```
    */
  get caseRequest(): Prisma.CaseRequestDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.ngo`: Exposes CRUD operations for the **Ngo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ngos
    * const ngos = await prisma.ngo.findMany()
    * ```
    */
  get ngo(): Prisma.NgoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignUpdate`: Exposes CRUD operations for the **CampaignUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignUpdates
    * const campaignUpdates = await prisma.campaignUpdate.findMany()
    * ```
    */
  get campaignUpdate(): Prisma.CampaignUpdateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    District: 'District',
    CaseRequest: 'CaseRequest',
    User: 'User',
    Ngo: 'Ngo',
    Campaign: 'Campaign',
    Donation: 'Donation',
    CampaignUpdate: 'CampaignUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "district" | "caseRequest" | "user" | "ngo" | "campaign" | "donation" | "campaignUpdate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistrictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      CaseRequest: {
        payload: Prisma.$CaseRequestPayload<ExtArgs>
        fields: Prisma.CaseRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          findFirst: {
            args: Prisma.CaseRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          findMany: {
            args: Prisma.CaseRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>[]
          }
          create: {
            args: Prisma.CaseRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          createMany: {
            args: Prisma.CaseRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>[]
          }
          delete: {
            args: Prisma.CaseRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          update: {
            args: Prisma.CaseRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          deleteMany: {
            args: Prisma.CaseRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>[]
          }
          upsert: {
            args: Prisma.CaseRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseRequestPayload>
          }
          aggregate: {
            args: Prisma.CaseRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseRequest>
          }
          groupBy: {
            args: Prisma.CaseRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CaseRequestCountAggregateOutputType> | number
          }
        }
      }
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
      Ngo: {
        payload: Prisma.$NgoPayload<ExtArgs>
        fields: Prisma.NgoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NgoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NgoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          findFirst: {
            args: Prisma.NgoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NgoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          findMany: {
            args: Prisma.NgoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>[]
          }
          create: {
            args: Prisma.NgoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          createMany: {
            args: Prisma.NgoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NgoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>[]
          }
          delete: {
            args: Prisma.NgoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          update: {
            args: Prisma.NgoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          deleteMany: {
            args: Prisma.NgoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NgoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NgoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>[]
          }
          upsert: {
            args: Prisma.NgoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NgoPayload>
          }
          aggregate: {
            args: Prisma.NgoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNgo>
          }
          groupBy: {
            args: Prisma.NgoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NgoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NgoCountArgs<ExtArgs>
            result: $Utils.Optional<NgoCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      CampaignUpdate: {
        payload: Prisma.$CampaignUpdatePayload<ExtArgs>
        fields: Prisma.CampaignUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          findFirst: {
            args: Prisma.CampaignUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          findMany: {
            args: Prisma.CampaignUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>[]
          }
          create: {
            args: Prisma.CampaignUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          createMany: {
            args: Prisma.CampaignUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>[]
          }
          delete: {
            args: Prisma.CampaignUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          update: {
            args: Prisma.CampaignUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          deleteMany: {
            args: Prisma.CampaignUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignUpdatePayload>
          }
          aggregate: {
            args: Prisma.CampaignUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignUpdate>
          }
          groupBy: {
            args: Prisma.CampaignUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignUpdateCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    district?: DistrictOmit
    caseRequest?: CaseRequestOmit
    user?: UserOmit
    ngo?: NgoOmit
    campaign?: CampaignOmit
    donation?: DonationOmit
    campaignUpdate?: CampaignUpdateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    cases: number
    ngos: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | DistrictCountOutputTypeCountCasesArgs
    ngos?: boolean | DistrictCountOutputTypeCountNgosArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseRequestWhereInput
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountNgosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NgoWhereInput
  }


  /**
   * Count Type NgoCountOutputType
   */

  export type NgoCountOutputType = {
    campaigns: number
    campaignUpdates: number
    adoptedCases: number
  }

  export type NgoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | NgoCountOutputTypeCountCampaignsArgs
    campaignUpdates?: boolean | NgoCountOutputTypeCountCampaignUpdatesArgs
    adoptedCases?: boolean | NgoCountOutputTypeCountAdoptedCasesArgs
  }

  // Custom InputTypes
  /**
   * NgoCountOutputType without action
   */
  export type NgoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NgoCountOutputType
     */
    select?: NgoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NgoCountOutputType without action
   */
  export type NgoCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * NgoCountOutputType without action
   */
  export type NgoCountOutputTypeCountCampaignUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignUpdateWhereInput
  }

  /**
   * NgoCountOutputType without action
   */
  export type NgoCountOutputTypeCountAdoptedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseRequestWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    updates: number
    donations: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | CampaignCountOutputTypeCountUpdatesArgs
    donations?: boolean | CampaignCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignUpdateWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
    isCapital: boolean | null
    createdAt: Date | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isCapital: boolean | null
    createdAt: Date | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    isCapital: number
    createdAt: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    isCapital?: true
    createdAt?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    isCapital?: true
    createdAt?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    isCapital?: true
    createdAt?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    isCapital: boolean
    createdAt: Date
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isCapital?: boolean
    createdAt?: boolean
    cases?: boolean | District$casesArgs<ExtArgs>
    ngos?: boolean | District$ngosArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isCapital?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isCapital?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
    isCapital?: boolean
    createdAt?: boolean
  }

  export type DistrictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isCapital" | "createdAt", ExtArgs["result"]["district"]>
  export type DistrictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | District$casesArgs<ExtArgs>
    ngos?: boolean | District$ngosArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DistrictIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {
      cases: Prisma.$CaseRequestPayload<ExtArgs>[]
      ngos: Prisma.$NgoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isCapital: boolean
      createdAt: Date
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts and returns the data updated in the database.
     * @param {DistrictUpdateManyAndReturnArgs} args - Arguments to update many Districts.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistrictUpdateManyAndReturnArgs>(args: SelectSubset<T, DistrictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
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
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends District$casesArgs<ExtArgs> = {}>(args?: Subset<T, District$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ngos<T extends District$ngosArgs<ExtArgs> = {}>(args?: Subset<T, District$ngosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the District model
   */
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'Int'>
    readonly name: FieldRef<"District", 'String'>
    readonly isCapital: FieldRef<"District", 'Boolean'>
    readonly createdAt: FieldRef<"District", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District updateManyAndReturn
   */
  export type DistrictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to delete.
     */
    limit?: number
  }

  /**
   * District.cases
   */
  export type District$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    where?: CaseRequestWhereInput
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    cursor?: CaseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseRequestScalarFieldEnum | CaseRequestScalarFieldEnum[]
  }

  /**
   * District.ngos
   */
  export type District$ngosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    where?: NgoWhereInput
    orderBy?: NgoOrderByWithRelationInput | NgoOrderByWithRelationInput[]
    cursor?: NgoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NgoScalarFieldEnum | NgoScalarFieldEnum[]
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
  }


  /**
   * Model CaseRequest
   */

  export type AggregateCaseRequest = {
    _count: CaseRequestCountAggregateOutputType | null
    _avg: CaseRequestAvgAggregateOutputType | null
    _sum: CaseRequestSumAggregateOutputType | null
    _min: CaseRequestMinAggregateOutputType | null
    _max: CaseRequestMaxAggregateOutputType | null
  }

  export type CaseRequestAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    districtId: number | null
    adoptedByNgoId: number | null
    campaignId: number | null
  }

  export type CaseRequestSumAggregateOutputType = {
    id: number | null
    amount: number | null
    districtId: number | null
    adoptedByNgoId: number | null
    campaignId: number | null
  }

  export type CaseRequestMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    amount: number | null
    category: $Enums.Category | null
    districtId: number | null
    documents: string | null
    status: $Enums.CaseStatus | null
    submittedAt: Date | null
    adoptedByNgoId: number | null
    campaignId: number | null
  }

  export type CaseRequestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    amount: number | null
    category: $Enums.Category | null
    districtId: number | null
    documents: string | null
    status: $Enums.CaseStatus | null
    submittedAt: Date | null
    adoptedByNgoId: number | null
    campaignId: number | null
  }

  export type CaseRequestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    amount: number
    category: number
    districtId: number
    documents: number
    status: number
    submittedAt: number
    adoptedByNgoId: number
    campaignId: number
    _all: number
  }


  export type CaseRequestAvgAggregateInputType = {
    id?: true
    amount?: true
    districtId?: true
    adoptedByNgoId?: true
    campaignId?: true
  }

  export type CaseRequestSumAggregateInputType = {
    id?: true
    amount?: true
    districtId?: true
    adoptedByNgoId?: true
    campaignId?: true
  }

  export type CaseRequestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    districtId?: true
    documents?: true
    status?: true
    submittedAt?: true
    adoptedByNgoId?: true
    campaignId?: true
  }

  export type CaseRequestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    districtId?: true
    documents?: true
    status?: true
    submittedAt?: true
    adoptedByNgoId?: true
    campaignId?: true
  }

  export type CaseRequestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    districtId?: true
    documents?: true
    status?: true
    submittedAt?: true
    adoptedByNgoId?: true
    campaignId?: true
    _all?: true
  }

  export type CaseRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseRequest to aggregate.
     */
    where?: CaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseRequests to fetch.
     */
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseRequests
    **/
    _count?: true | CaseRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseRequestMaxAggregateInputType
  }

  export type GetCaseRequestAggregateType<T extends CaseRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseRequest[P]>
      : GetScalarType<T[P], AggregateCaseRequest[P]>
  }




  export type CaseRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseRequestWhereInput
    orderBy?: CaseRequestOrderByWithAggregationInput | CaseRequestOrderByWithAggregationInput[]
    by: CaseRequestScalarFieldEnum[] | CaseRequestScalarFieldEnum
    having?: CaseRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseRequestCountAggregateInputType | true
    _avg?: CaseRequestAvgAggregateInputType
    _sum?: CaseRequestSumAggregateInputType
    _min?: CaseRequestMinAggregateInputType
    _max?: CaseRequestMaxAggregateInputType
  }

  export type CaseRequestGroupByOutputType = {
    id: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    districtId: number
    documents: string
    status: $Enums.CaseStatus
    submittedAt: Date
    adoptedByNgoId: number | null
    campaignId: number | null
    _count: CaseRequestCountAggregateOutputType | null
    _avg: CaseRequestAvgAggregateOutputType | null
    _sum: CaseRequestSumAggregateOutputType | null
    _min: CaseRequestMinAggregateOutputType | null
    _max: CaseRequestMaxAggregateOutputType | null
  }

  type GetCaseRequestGroupByPayload<T extends CaseRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CaseRequestGroupByOutputType[P]>
        }
      >
    >


  export type CaseRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    districtId?: boolean
    documents?: boolean
    status?: boolean
    submittedAt?: boolean
    adoptedByNgoId?: boolean
    campaignId?: boolean
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseRequest"]>

  export type CaseRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    districtId?: boolean
    documents?: boolean
    status?: boolean
    submittedAt?: boolean
    adoptedByNgoId?: boolean
    campaignId?: boolean
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseRequest"]>

  export type CaseRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    districtId?: boolean
    documents?: boolean
    status?: boolean
    submittedAt?: boolean
    adoptedByNgoId?: boolean
    campaignId?: boolean
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseRequest"]>

  export type CaseRequestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    districtId?: boolean
    documents?: boolean
    status?: boolean
    submittedAt?: boolean
    adoptedByNgoId?: boolean
    campaignId?: boolean
  }

  export type CaseRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "amount" | "category" | "districtId" | "documents" | "status" | "submittedAt" | "adoptedByNgoId" | "campaignId", ExtArgs["result"]["caseRequest"]>
  export type CaseRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }
  export type CaseRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }
  export type CaseRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptedByNgo?: boolean | CaseRequest$adoptedByNgoArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }

  export type $CaseRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseRequest"
    objects: {
      adoptedByNgo: Prisma.$NgoPayload<ExtArgs> | null
      district: Prisma.$DistrictPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      amount: number
      category: $Enums.Category
      districtId: number
      documents: string
      status: $Enums.CaseStatus
      submittedAt: Date
      adoptedByNgoId: number | null
      campaignId: number | null
    }, ExtArgs["result"]["caseRequest"]>
    composites: {}
  }

  type CaseRequestGetPayload<S extends boolean | null | undefined | CaseRequestDefaultArgs> = $Result.GetResult<Prisma.$CaseRequestPayload, S>

  type CaseRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseRequestCountAggregateInputType | true
    }

  export interface CaseRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseRequest'], meta: { name: 'CaseRequest' } }
    /**
     * Find zero or one CaseRequest that matches the filter.
     * @param {CaseRequestFindUniqueArgs} args - Arguments to find a CaseRequest
     * @example
     * // Get one CaseRequest
     * const caseRequest = await prisma.caseRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseRequestFindUniqueArgs>(args: SelectSubset<T, CaseRequestFindUniqueArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseRequestFindUniqueOrThrowArgs} args - Arguments to find a CaseRequest
     * @example
     * // Get one CaseRequest
     * const caseRequest = await prisma.caseRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestFindFirstArgs} args - Arguments to find a CaseRequest
     * @example
     * // Get one CaseRequest
     * const caseRequest = await prisma.caseRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseRequestFindFirstArgs>(args?: SelectSubset<T, CaseRequestFindFirstArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestFindFirstOrThrowArgs} args - Arguments to find a CaseRequest
     * @example
     * // Get one CaseRequest
     * const caseRequest = await prisma.caseRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseRequests
     * const caseRequests = await prisma.caseRequest.findMany()
     * 
     * // Get first 10 CaseRequests
     * const caseRequests = await prisma.caseRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseRequestWithIdOnly = await prisma.caseRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseRequestFindManyArgs>(args?: SelectSubset<T, CaseRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseRequest.
     * @param {CaseRequestCreateArgs} args - Arguments to create a CaseRequest.
     * @example
     * // Create one CaseRequest
     * const CaseRequest = await prisma.caseRequest.create({
     *   data: {
     *     // ... data to create a CaseRequest
     *   }
     * })
     * 
     */
    create<T extends CaseRequestCreateArgs>(args: SelectSubset<T, CaseRequestCreateArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseRequests.
     * @param {CaseRequestCreateManyArgs} args - Arguments to create many CaseRequests.
     * @example
     * // Create many CaseRequests
     * const caseRequest = await prisma.caseRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseRequestCreateManyArgs>(args?: SelectSubset<T, CaseRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseRequests and returns the data saved in the database.
     * @param {CaseRequestCreateManyAndReturnArgs} args - Arguments to create many CaseRequests.
     * @example
     * // Create many CaseRequests
     * const caseRequest = await prisma.caseRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseRequests and only return the `id`
     * const caseRequestWithIdOnly = await prisma.caseRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseRequest.
     * @param {CaseRequestDeleteArgs} args - Arguments to delete one CaseRequest.
     * @example
     * // Delete one CaseRequest
     * const CaseRequest = await prisma.caseRequest.delete({
     *   where: {
     *     // ... filter to delete one CaseRequest
     *   }
     * })
     * 
     */
    delete<T extends CaseRequestDeleteArgs>(args: SelectSubset<T, CaseRequestDeleteArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseRequest.
     * @param {CaseRequestUpdateArgs} args - Arguments to update one CaseRequest.
     * @example
     * // Update one CaseRequest
     * const caseRequest = await prisma.caseRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseRequestUpdateArgs>(args: SelectSubset<T, CaseRequestUpdateArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseRequests.
     * @param {CaseRequestDeleteManyArgs} args - Arguments to filter CaseRequests to delete.
     * @example
     * // Delete a few CaseRequests
     * const { count } = await prisma.caseRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseRequestDeleteManyArgs>(args?: SelectSubset<T, CaseRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseRequests
     * const caseRequest = await prisma.caseRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseRequestUpdateManyArgs>(args: SelectSubset<T, CaseRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseRequests and returns the data updated in the database.
     * @param {CaseRequestUpdateManyAndReturnArgs} args - Arguments to update many CaseRequests.
     * @example
     * // Update many CaseRequests
     * const caseRequest = await prisma.caseRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseRequests and only return the `id`
     * const caseRequestWithIdOnly = await prisma.caseRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseRequest.
     * @param {CaseRequestUpsertArgs} args - Arguments to update or create a CaseRequest.
     * @example
     * // Update or create a CaseRequest
     * const caseRequest = await prisma.caseRequest.upsert({
     *   create: {
     *     // ... data to create a CaseRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseRequest we want to update
     *   }
     * })
     */
    upsert<T extends CaseRequestUpsertArgs>(args: SelectSubset<T, CaseRequestUpsertArgs<ExtArgs>>): Prisma__CaseRequestClient<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestCountArgs} args - Arguments to filter CaseRequests to count.
     * @example
     * // Count the number of CaseRequests
     * const count = await prisma.caseRequest.count({
     *   where: {
     *     // ... the filter for the CaseRequests we want to count
     *   }
     * })
    **/
    count<T extends CaseRequestCountArgs>(
      args?: Subset<T, CaseRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseRequestAggregateArgs>(args: Subset<T, CaseRequestAggregateArgs>): Prisma.PrismaPromise<GetCaseRequestAggregateType<T>>

    /**
     * Group by CaseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseRequestGroupByArgs} args - Group by arguments.
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
      T extends CaseRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseRequestGroupByArgs['orderBy'] }
        : { orderBy?: CaseRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseRequest model
   */
  readonly fields: CaseRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoptedByNgo<T extends CaseRequest$adoptedByNgoArgs<ExtArgs> = {}>(args?: Subset<T, CaseRequest$adoptedByNgoArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    district<T extends DistrictDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrictDefaultArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaseRequest model
   */
  interface CaseRequestFieldRefs {
    readonly id: FieldRef<"CaseRequest", 'Int'>
    readonly title: FieldRef<"CaseRequest", 'String'>
    readonly description: FieldRef<"CaseRequest", 'String'>
    readonly amount: FieldRef<"CaseRequest", 'Int'>
    readonly category: FieldRef<"CaseRequest", 'Category'>
    readonly districtId: FieldRef<"CaseRequest", 'Int'>
    readonly documents: FieldRef<"CaseRequest", 'String'>
    readonly status: FieldRef<"CaseRequest", 'CaseStatus'>
    readonly submittedAt: FieldRef<"CaseRequest", 'DateTime'>
    readonly adoptedByNgoId: FieldRef<"CaseRequest", 'Int'>
    readonly campaignId: FieldRef<"CaseRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CaseRequest findUnique
   */
  export type CaseRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which CaseRequest to fetch.
     */
    where: CaseRequestWhereUniqueInput
  }

  /**
   * CaseRequest findUniqueOrThrow
   */
  export type CaseRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which CaseRequest to fetch.
     */
    where: CaseRequestWhereUniqueInput
  }

  /**
   * CaseRequest findFirst
   */
  export type CaseRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which CaseRequest to fetch.
     */
    where?: CaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseRequests to fetch.
     */
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseRequests.
     */
    cursor?: CaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseRequests.
     */
    distinct?: CaseRequestScalarFieldEnum | CaseRequestScalarFieldEnum[]
  }

  /**
   * CaseRequest findFirstOrThrow
   */
  export type CaseRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which CaseRequest to fetch.
     */
    where?: CaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseRequests to fetch.
     */
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseRequests.
     */
    cursor?: CaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseRequests.
     */
    distinct?: CaseRequestScalarFieldEnum | CaseRequestScalarFieldEnum[]
  }

  /**
   * CaseRequest findMany
   */
  export type CaseRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which CaseRequests to fetch.
     */
    where?: CaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseRequests to fetch.
     */
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseRequests.
     */
    cursor?: CaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseRequests.
     */
    skip?: number
    distinct?: CaseRequestScalarFieldEnum | CaseRequestScalarFieldEnum[]
  }

  /**
   * CaseRequest create
   */
  export type CaseRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseRequest.
     */
    data: XOR<CaseRequestCreateInput, CaseRequestUncheckedCreateInput>
  }

  /**
   * CaseRequest createMany
   */
  export type CaseRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseRequests.
     */
    data: CaseRequestCreateManyInput | CaseRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseRequest createManyAndReturn
   */
  export type CaseRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CaseRequests.
     */
    data: CaseRequestCreateManyInput | CaseRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseRequest update
   */
  export type CaseRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseRequest.
     */
    data: XOR<CaseRequestUpdateInput, CaseRequestUncheckedUpdateInput>
    /**
     * Choose, which CaseRequest to update.
     */
    where: CaseRequestWhereUniqueInput
  }

  /**
   * CaseRequest updateMany
   */
  export type CaseRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseRequests.
     */
    data: XOR<CaseRequestUpdateManyMutationInput, CaseRequestUncheckedUpdateManyInput>
    /**
     * Filter which CaseRequests to update
     */
    where?: CaseRequestWhereInput
    /**
     * Limit how many CaseRequests to update.
     */
    limit?: number
  }

  /**
   * CaseRequest updateManyAndReturn
   */
  export type CaseRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * The data used to update CaseRequests.
     */
    data: XOR<CaseRequestUpdateManyMutationInput, CaseRequestUncheckedUpdateManyInput>
    /**
     * Filter which CaseRequests to update
     */
    where?: CaseRequestWhereInput
    /**
     * Limit how many CaseRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseRequest upsert
   */
  export type CaseRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseRequest to update in case it exists.
     */
    where: CaseRequestWhereUniqueInput
    /**
     * In case the CaseRequest found by the `where` argument doesn't exist, create a new CaseRequest with this data.
     */
    create: XOR<CaseRequestCreateInput, CaseRequestUncheckedCreateInput>
    /**
     * In case the CaseRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseRequestUpdateInput, CaseRequestUncheckedUpdateInput>
  }

  /**
   * CaseRequest delete
   */
  export type CaseRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    /**
     * Filter which CaseRequest to delete.
     */
    where: CaseRequestWhereUniqueInput
  }

  /**
   * CaseRequest deleteMany
   */
  export type CaseRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseRequests to delete
     */
    where?: CaseRequestWhereInput
    /**
     * Limit how many CaseRequests to delete.
     */
    limit?: number
  }

  /**
   * CaseRequest.adoptedByNgo
   */
  export type CaseRequest$adoptedByNgoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    where?: NgoWhereInput
  }

  /**
   * CaseRequest without action
   */
  export type CaseRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    ngoId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    ngoId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    ngoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    ngoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    ngoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    ngoId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    ngoId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ngoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ngoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ngoId?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.UserRole
    ngoId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    role?: boolean
    ngoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    ngoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    ngoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    ngoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "ngoId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | User$ngoArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ngo: Prisma.$NgoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.UserRole
      ngoId: number | null
      createdAt: Date
      updatedAt: Date
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
    ngo<T extends User$ngoArgs<ExtArgs> = {}>(args?: Subset<T, User$ngoArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly ngoId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.ngo
   */
  export type User$ngoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    where?: NgoWhereInput
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
   * Model Ngo
   */

  export type AggregateNgo = {
    _count: NgoCountAggregateOutputType | null
    _avg: NgoAvgAggregateOutputType | null
    _sum: NgoSumAggregateOutputType | null
    _min: NgoMinAggregateOutputType | null
    _max: NgoMaxAggregateOutputType | null
  }

  export type NgoAvgAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type NgoSumAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type NgoMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameUrdu: string | null
    registrationNumber: string | null
    districtId: number | null
    categories: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    bankAccount: string | null
    ifsc: string | null
    accountHolder: string | null
    bankName: string | null
    upiId: string | null
    status: $Enums.NgoStatus | null
    rejectionReason: string | null
    documents: string | null
    createdAt: Date | null
    verifiedAt: Date | null
    updatedAt: Date | null
  }

  export type NgoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameUrdu: string | null
    registrationNumber: string | null
    districtId: number | null
    categories: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    bankAccount: string | null
    ifsc: string | null
    accountHolder: string | null
    bankName: string | null
    upiId: string | null
    status: $Enums.NgoStatus | null
    rejectionReason: string | null
    documents: string | null
    createdAt: Date | null
    verifiedAt: Date | null
    updatedAt: Date | null
  }

  export type NgoCountAggregateOutputType = {
    id: number
    name: number
    nameUrdu: number
    registrationNumber: number
    districtId: number
    categories: number
    email: number
    phone: number
    address: number
    website: number
    bankAccount: number
    ifsc: number
    accountHolder: number
    bankName: number
    upiId: number
    status: number
    rejectionReason: number
    documents: number
    createdAt: number
    verifiedAt: number
    updatedAt: number
    _all: number
  }


  export type NgoAvgAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type NgoSumAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type NgoMinAggregateInputType = {
    id?: true
    name?: true
    nameUrdu?: true
    registrationNumber?: true
    districtId?: true
    categories?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    upiId?: true
    status?: true
    rejectionReason?: true
    documents?: true
    createdAt?: true
    verifiedAt?: true
    updatedAt?: true
  }

  export type NgoMaxAggregateInputType = {
    id?: true
    name?: true
    nameUrdu?: true
    registrationNumber?: true
    districtId?: true
    categories?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    upiId?: true
    status?: true
    rejectionReason?: true
    documents?: true
    createdAt?: true
    verifiedAt?: true
    updatedAt?: true
  }

  export type NgoCountAggregateInputType = {
    id?: true
    name?: true
    nameUrdu?: true
    registrationNumber?: true
    districtId?: true
    categories?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    upiId?: true
    status?: true
    rejectionReason?: true
    documents?: true
    createdAt?: true
    verifiedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NgoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ngo to aggregate.
     */
    where?: NgoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ngos to fetch.
     */
    orderBy?: NgoOrderByWithRelationInput | NgoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NgoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ngos
    **/
    _count?: true | NgoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NgoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NgoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NgoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NgoMaxAggregateInputType
  }

  export type GetNgoAggregateType<T extends NgoAggregateArgs> = {
        [P in keyof T & keyof AggregateNgo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNgo[P]>
      : GetScalarType<T[P], AggregateNgo[P]>
  }




  export type NgoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NgoWhereInput
    orderBy?: NgoOrderByWithAggregationInput | NgoOrderByWithAggregationInput[]
    by: NgoScalarFieldEnum[] | NgoScalarFieldEnum
    having?: NgoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NgoCountAggregateInputType | true
    _avg?: NgoAvgAggregateInputType
    _sum?: NgoSumAggregateInputType
    _min?: NgoMinAggregateInputType
    _max?: NgoMaxAggregateInputType
  }

  export type NgoGroupByOutputType = {
    id: number
    name: string
    nameUrdu: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId: string | null
    status: $Enums.NgoStatus
    rejectionReason: string | null
    documents: string
    createdAt: Date
    verifiedAt: Date | null
    updatedAt: Date
    _count: NgoCountAggregateOutputType | null
    _avg: NgoAvgAggregateOutputType | null
    _sum: NgoSumAggregateOutputType | null
    _min: NgoMinAggregateOutputType | null
    _max: NgoMaxAggregateOutputType | null
  }

  type GetNgoGroupByPayload<T extends NgoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NgoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NgoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NgoGroupByOutputType[P]>
            : GetScalarType<T[P], NgoGroupByOutputType[P]>
        }
      >
    >


  export type NgoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrdu?: boolean
    registrationNumber?: boolean
    districtId?: boolean
    categories?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    upiId?: boolean
    status?: boolean
    rejectionReason?: boolean
    documents?: boolean
    createdAt?: boolean
    verifiedAt?: boolean
    updatedAt?: boolean
    user?: boolean | Ngo$userArgs<ExtArgs>
    campaigns?: boolean | Ngo$campaignsArgs<ExtArgs>
    campaignUpdates?: boolean | Ngo$campaignUpdatesArgs<ExtArgs>
    adoptedCases?: boolean | Ngo$adoptedCasesArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    _count?: boolean | NgoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ngo"]>

  export type NgoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrdu?: boolean
    registrationNumber?: boolean
    districtId?: boolean
    categories?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    upiId?: boolean
    status?: boolean
    rejectionReason?: boolean
    documents?: boolean
    createdAt?: boolean
    verifiedAt?: boolean
    updatedAt?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ngo"]>

  export type NgoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrdu?: boolean
    registrationNumber?: boolean
    districtId?: boolean
    categories?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    upiId?: boolean
    status?: boolean
    rejectionReason?: boolean
    documents?: boolean
    createdAt?: boolean
    verifiedAt?: boolean
    updatedAt?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ngo"]>

  export type NgoSelectScalar = {
    id?: boolean
    name?: boolean
    nameUrdu?: boolean
    registrationNumber?: boolean
    districtId?: boolean
    categories?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    upiId?: boolean
    status?: boolean
    rejectionReason?: boolean
    documents?: boolean
    createdAt?: boolean
    verifiedAt?: boolean
    updatedAt?: boolean
  }

  export type NgoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameUrdu" | "registrationNumber" | "districtId" | "categories" | "email" | "phone" | "address" | "website" | "bankAccount" | "ifsc" | "accountHolder" | "bankName" | "upiId" | "status" | "rejectionReason" | "documents" | "createdAt" | "verifiedAt" | "updatedAt", ExtArgs["result"]["ngo"]>
  export type NgoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Ngo$userArgs<ExtArgs>
    campaigns?: boolean | Ngo$campaignsArgs<ExtArgs>
    campaignUpdates?: boolean | Ngo$campaignUpdatesArgs<ExtArgs>
    adoptedCases?: boolean | Ngo$adoptedCasesArgs<ExtArgs>
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    _count?: boolean | NgoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NgoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }
  export type NgoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }

  export type $NgoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ngo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      campaignUpdates: Prisma.$CampaignUpdatePayload<ExtArgs>[]
      adoptedCases: Prisma.$CaseRequestPayload<ExtArgs>[]
      district: Prisma.$DistrictPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameUrdu: string | null
      registrationNumber: string
      districtId: number
      categories: string
      email: string
      phone: string
      address: string
      website: string | null
      bankAccount: string
      ifsc: string
      accountHolder: string
      bankName: string
      upiId: string | null
      status: $Enums.NgoStatus
      rejectionReason: string | null
      documents: string
      createdAt: Date
      verifiedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["ngo"]>
    composites: {}
  }

  type NgoGetPayload<S extends boolean | null | undefined | NgoDefaultArgs> = $Result.GetResult<Prisma.$NgoPayload, S>

  type NgoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NgoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NgoCountAggregateInputType | true
    }

  export interface NgoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ngo'], meta: { name: 'Ngo' } }
    /**
     * Find zero or one Ngo that matches the filter.
     * @param {NgoFindUniqueArgs} args - Arguments to find a Ngo
     * @example
     * // Get one Ngo
     * const ngo = await prisma.ngo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NgoFindUniqueArgs>(args: SelectSubset<T, NgoFindUniqueArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ngo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NgoFindUniqueOrThrowArgs} args - Arguments to find a Ngo
     * @example
     * // Get one Ngo
     * const ngo = await prisma.ngo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NgoFindUniqueOrThrowArgs>(args: SelectSubset<T, NgoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ngo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoFindFirstArgs} args - Arguments to find a Ngo
     * @example
     * // Get one Ngo
     * const ngo = await prisma.ngo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NgoFindFirstArgs>(args?: SelectSubset<T, NgoFindFirstArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ngo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoFindFirstOrThrowArgs} args - Arguments to find a Ngo
     * @example
     * // Get one Ngo
     * const ngo = await prisma.ngo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NgoFindFirstOrThrowArgs>(args?: SelectSubset<T, NgoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ngos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ngos
     * const ngos = await prisma.ngo.findMany()
     * 
     * // Get first 10 Ngos
     * const ngos = await prisma.ngo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ngoWithIdOnly = await prisma.ngo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NgoFindManyArgs>(args?: SelectSubset<T, NgoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ngo.
     * @param {NgoCreateArgs} args - Arguments to create a Ngo.
     * @example
     * // Create one Ngo
     * const Ngo = await prisma.ngo.create({
     *   data: {
     *     // ... data to create a Ngo
     *   }
     * })
     * 
     */
    create<T extends NgoCreateArgs>(args: SelectSubset<T, NgoCreateArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ngos.
     * @param {NgoCreateManyArgs} args - Arguments to create many Ngos.
     * @example
     * // Create many Ngos
     * const ngo = await prisma.ngo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NgoCreateManyArgs>(args?: SelectSubset<T, NgoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ngos and returns the data saved in the database.
     * @param {NgoCreateManyAndReturnArgs} args - Arguments to create many Ngos.
     * @example
     * // Create many Ngos
     * const ngo = await prisma.ngo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ngos and only return the `id`
     * const ngoWithIdOnly = await prisma.ngo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NgoCreateManyAndReturnArgs>(args?: SelectSubset<T, NgoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ngo.
     * @param {NgoDeleteArgs} args - Arguments to delete one Ngo.
     * @example
     * // Delete one Ngo
     * const Ngo = await prisma.ngo.delete({
     *   where: {
     *     // ... filter to delete one Ngo
     *   }
     * })
     * 
     */
    delete<T extends NgoDeleteArgs>(args: SelectSubset<T, NgoDeleteArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ngo.
     * @param {NgoUpdateArgs} args - Arguments to update one Ngo.
     * @example
     * // Update one Ngo
     * const ngo = await prisma.ngo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NgoUpdateArgs>(args: SelectSubset<T, NgoUpdateArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ngos.
     * @param {NgoDeleteManyArgs} args - Arguments to filter Ngos to delete.
     * @example
     * // Delete a few Ngos
     * const { count } = await prisma.ngo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NgoDeleteManyArgs>(args?: SelectSubset<T, NgoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ngos
     * const ngo = await prisma.ngo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NgoUpdateManyArgs>(args: SelectSubset<T, NgoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ngos and returns the data updated in the database.
     * @param {NgoUpdateManyAndReturnArgs} args - Arguments to update many Ngos.
     * @example
     * // Update many Ngos
     * const ngo = await prisma.ngo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ngos and only return the `id`
     * const ngoWithIdOnly = await prisma.ngo.updateManyAndReturn({
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
    updateManyAndReturn<T extends NgoUpdateManyAndReturnArgs>(args: SelectSubset<T, NgoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ngo.
     * @param {NgoUpsertArgs} args - Arguments to update or create a Ngo.
     * @example
     * // Update or create a Ngo
     * const ngo = await prisma.ngo.upsert({
     *   create: {
     *     // ... data to create a Ngo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ngo we want to update
     *   }
     * })
     */
    upsert<T extends NgoUpsertArgs>(args: SelectSubset<T, NgoUpsertArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoCountArgs} args - Arguments to filter Ngos to count.
     * @example
     * // Count the number of Ngos
     * const count = await prisma.ngo.count({
     *   where: {
     *     // ... the filter for the Ngos we want to count
     *   }
     * })
    **/
    count<T extends NgoCountArgs>(
      args?: Subset<T, NgoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NgoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ngo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NgoAggregateArgs>(args: Subset<T, NgoAggregateArgs>): Prisma.PrismaPromise<GetNgoAggregateType<T>>

    /**
     * Group by Ngo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgoGroupByArgs} args - Group by arguments.
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
      T extends NgoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NgoGroupByArgs['orderBy'] }
        : { orderBy?: NgoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NgoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNgoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ngo model
   */
  readonly fields: NgoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ngo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NgoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Ngo$userArgs<ExtArgs> = {}>(args?: Subset<T, Ngo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Ngo$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Ngo$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaignUpdates<T extends Ngo$campaignUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Ngo$campaignUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adoptedCases<T extends Ngo$adoptedCasesArgs<ExtArgs> = {}>(args?: Subset<T, Ngo$adoptedCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    district<T extends DistrictDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrictDefaultArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ngo model
   */
  interface NgoFieldRefs {
    readonly id: FieldRef<"Ngo", 'Int'>
    readonly name: FieldRef<"Ngo", 'String'>
    readonly nameUrdu: FieldRef<"Ngo", 'String'>
    readonly registrationNumber: FieldRef<"Ngo", 'String'>
    readonly districtId: FieldRef<"Ngo", 'Int'>
    readonly categories: FieldRef<"Ngo", 'String'>
    readonly email: FieldRef<"Ngo", 'String'>
    readonly phone: FieldRef<"Ngo", 'String'>
    readonly address: FieldRef<"Ngo", 'String'>
    readonly website: FieldRef<"Ngo", 'String'>
    readonly bankAccount: FieldRef<"Ngo", 'String'>
    readonly ifsc: FieldRef<"Ngo", 'String'>
    readonly accountHolder: FieldRef<"Ngo", 'String'>
    readonly bankName: FieldRef<"Ngo", 'String'>
    readonly upiId: FieldRef<"Ngo", 'String'>
    readonly status: FieldRef<"Ngo", 'NgoStatus'>
    readonly rejectionReason: FieldRef<"Ngo", 'String'>
    readonly documents: FieldRef<"Ngo", 'String'>
    readonly createdAt: FieldRef<"Ngo", 'DateTime'>
    readonly verifiedAt: FieldRef<"Ngo", 'DateTime'>
    readonly updatedAt: FieldRef<"Ngo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ngo findUnique
   */
  export type NgoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter, which Ngo to fetch.
     */
    where: NgoWhereUniqueInput
  }

  /**
   * Ngo findUniqueOrThrow
   */
  export type NgoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter, which Ngo to fetch.
     */
    where: NgoWhereUniqueInput
  }

  /**
   * Ngo findFirst
   */
  export type NgoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter, which Ngo to fetch.
     */
    where?: NgoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ngos to fetch.
     */
    orderBy?: NgoOrderByWithRelationInput | NgoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ngos.
     */
    cursor?: NgoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ngos.
     */
    distinct?: NgoScalarFieldEnum | NgoScalarFieldEnum[]
  }

  /**
   * Ngo findFirstOrThrow
   */
  export type NgoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter, which Ngo to fetch.
     */
    where?: NgoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ngos to fetch.
     */
    orderBy?: NgoOrderByWithRelationInput | NgoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ngos.
     */
    cursor?: NgoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ngos.
     */
    distinct?: NgoScalarFieldEnum | NgoScalarFieldEnum[]
  }

  /**
   * Ngo findMany
   */
  export type NgoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter, which Ngos to fetch.
     */
    where?: NgoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ngos to fetch.
     */
    orderBy?: NgoOrderByWithRelationInput | NgoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ngos.
     */
    cursor?: NgoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ngos.
     */
    skip?: number
    distinct?: NgoScalarFieldEnum | NgoScalarFieldEnum[]
  }

  /**
   * Ngo create
   */
  export type NgoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ngo.
     */
    data: XOR<NgoCreateInput, NgoUncheckedCreateInput>
  }

  /**
   * Ngo createMany
   */
  export type NgoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ngos.
     */
    data: NgoCreateManyInput | NgoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ngo createManyAndReturn
   */
  export type NgoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * The data used to create many Ngos.
     */
    data: NgoCreateManyInput | NgoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ngo update
   */
  export type NgoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ngo.
     */
    data: XOR<NgoUpdateInput, NgoUncheckedUpdateInput>
    /**
     * Choose, which Ngo to update.
     */
    where: NgoWhereUniqueInput
  }

  /**
   * Ngo updateMany
   */
  export type NgoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ngos.
     */
    data: XOR<NgoUpdateManyMutationInput, NgoUncheckedUpdateManyInput>
    /**
     * Filter which Ngos to update
     */
    where?: NgoWhereInput
    /**
     * Limit how many Ngos to update.
     */
    limit?: number
  }

  /**
   * Ngo updateManyAndReturn
   */
  export type NgoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * The data used to update Ngos.
     */
    data: XOR<NgoUpdateManyMutationInput, NgoUncheckedUpdateManyInput>
    /**
     * Filter which Ngos to update
     */
    where?: NgoWhereInput
    /**
     * Limit how many Ngos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ngo upsert
   */
  export type NgoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ngo to update in case it exists.
     */
    where: NgoWhereUniqueInput
    /**
     * In case the Ngo found by the `where` argument doesn't exist, create a new Ngo with this data.
     */
    create: XOR<NgoCreateInput, NgoUncheckedCreateInput>
    /**
     * In case the Ngo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NgoUpdateInput, NgoUncheckedUpdateInput>
  }

  /**
   * Ngo delete
   */
  export type NgoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
    /**
     * Filter which Ngo to delete.
     */
    where: NgoWhereUniqueInput
  }

  /**
   * Ngo deleteMany
   */
  export type NgoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ngos to delete
     */
    where?: NgoWhereInput
    /**
     * Limit how many Ngos to delete.
     */
    limit?: number
  }

  /**
   * Ngo.user
   */
  export type Ngo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Ngo.campaigns
   */
  export type Ngo$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Ngo.campaignUpdates
   */
  export type Ngo$campaignUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    where?: CampaignUpdateWhereInput
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    cursor?: CampaignUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignUpdateScalarFieldEnum | CampaignUpdateScalarFieldEnum[]
  }

  /**
   * Ngo.adoptedCases
   */
  export type Ngo$adoptedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseRequest
     */
    select?: CaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseRequest
     */
    omit?: CaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseRequestInclude<ExtArgs> | null
    where?: CaseRequestWhereInput
    orderBy?: CaseRequestOrderByWithRelationInput | CaseRequestOrderByWithRelationInput[]
    cursor?: CaseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseRequestScalarFieldEnum | CaseRequestScalarFieldEnum[]
  }

  /**
   * Ngo without action
   */
  export type NgoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ngo
     */
    select?: NgoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ngo
     */
    omit?: NgoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NgoInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
    ngoId: number | null
    goalAmount: number | null
    verifiedAmount: number | null
    pendingAmount: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
    ngoId: number | null
    goalAmount: number | null
    verifiedAmount: number | null
    pendingAmount: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    ngoId: number | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    goalAmount: number | null
    verifiedAmount: number | null
    pendingAmount: number | null
    deadline: Date | null
    imageUrl: string | null
    upiId: string | null
    bankAccount: string | null
    ifsc: string | null
    accountHolder: string | null
    bankName: string | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    ngoId: number | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    goalAmount: number | null
    verifiedAmount: number | null
    pendingAmount: number | null
    deadline: Date | null
    imageUrl: string | null
    upiId: string | null
    bankAccount: string | null
    ifsc: string | null
    accountHolder: string | null
    bankName: string | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    closedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    ngoId: number
    title: number
    description: number
    category: number
    goalAmount: number
    verifiedAmount: number
    pendingAmount: number
    deadline: number
    imageUrl: number
    upiId: number
    bankAccount: number
    ifsc: number
    accountHolder: number
    bankName: number
    status: number
    createdAt: number
    updatedAt: number
    closedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
    ngoId?: true
    goalAmount?: true
    verifiedAmount?: true
    pendingAmount?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
    ngoId?: true
    goalAmount?: true
    verifiedAmount?: true
    pendingAmount?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    ngoId?: true
    title?: true
    description?: true
    category?: true
    goalAmount?: true
    verifiedAmount?: true
    pendingAmount?: true
    deadline?: true
    imageUrl?: true
    upiId?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    ngoId?: true
    title?: true
    description?: true
    category?: true
    goalAmount?: true
    verifiedAmount?: true
    pendingAmount?: true
    deadline?: true
    imageUrl?: true
    upiId?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    ngoId?: true
    title?: true
    description?: true
    category?: true
    goalAmount?: true
    verifiedAmount?: true
    pendingAmount?: true
    deadline?: true
    imageUrl?: true
    upiId?: true
    bankAccount?: true
    ifsc?: true
    accountHolder?: true
    bankName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    closedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    ngoId: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount: number
    pendingAmount: number
    deadline: Date | null
    imageUrl: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status: $Enums.CampaignStatus
    createdAt: Date
    updatedAt: Date
    closedAt: Date | null
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ngoId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    goalAmount?: boolean
    verifiedAmount?: boolean
    pendingAmount?: boolean
    deadline?: boolean
    imageUrl?: boolean
    upiId?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
    updates?: boolean | Campaign$updatesArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ngoId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    goalAmount?: boolean
    verifiedAmount?: boolean
    pendingAmount?: boolean
    deadline?: boolean
    imageUrl?: boolean
    upiId?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ngoId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    goalAmount?: boolean
    verifiedAmount?: boolean
    pendingAmount?: boolean
    deadline?: boolean
    imageUrl?: boolean
    upiId?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    ngoId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    goalAmount?: boolean
    verifiedAmount?: boolean
    pendingAmount?: boolean
    deadline?: boolean
    imageUrl?: boolean
    upiId?: boolean
    bankAccount?: boolean
    ifsc?: boolean
    accountHolder?: boolean
    bankName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    closedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ngoId" | "title" | "description" | "category" | "goalAmount" | "verifiedAmount" | "pendingAmount" | "deadline" | "imageUrl" | "upiId" | "bankAccount" | "ifsc" | "accountHolder" | "bankName" | "status" | "createdAt" | "updatedAt" | "closedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
    updates?: boolean | Campaign$updatesArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      ngo: Prisma.$NgoPayload<ExtArgs>
      updates: Prisma.$CampaignUpdatePayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ngoId: number
      title: string
      description: string
      category: $Enums.Category
      goalAmount: number
      verifiedAmount: number
      pendingAmount: number
      deadline: Date | null
      imageUrl: string | null
      upiId: string
      bankAccount: string
      ifsc: string
      accountHolder: string
      bankName: string
      status: $Enums.CampaignStatus
      createdAt: Date
      updatedAt: Date
      closedAt: Date | null
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ngo<T extends NgoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NgoDefaultArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updates<T extends Campaign$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends Campaign$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly ngoId: FieldRef<"Campaign", 'Int'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly category: FieldRef<"Campaign", 'Category'>
    readonly goalAmount: FieldRef<"Campaign", 'Int'>
    readonly verifiedAmount: FieldRef<"Campaign", 'Int'>
    readonly pendingAmount: FieldRef<"Campaign", 'Int'>
    readonly deadline: FieldRef<"Campaign", 'DateTime'>
    readonly imageUrl: FieldRef<"Campaign", 'String'>
    readonly upiId: FieldRef<"Campaign", 'String'>
    readonly bankAccount: FieldRef<"Campaign", 'String'>
    readonly ifsc: FieldRef<"Campaign", 'String'>
    readonly accountHolder: FieldRef<"Campaign", 'String'>
    readonly bankName: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly closedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.updates
   */
  export type Campaign$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    where?: CampaignUpdateWhereInput
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    cursor?: CampaignUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignUpdateScalarFieldEnum | CampaignUpdateScalarFieldEnum[]
  }

  /**
   * Campaign.donations
   */
  export type Campaign$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    donorName: string | null
    amount: number | null
    utrLast4: string | null
    paymentTime: Date | null
    screenshotUrl: string | null
    status: $Enums.DonationStatus | null
    verifiedAt: Date | null
    reportedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    donorName: string | null
    amount: number | null
    utrLast4: string | null
    paymentTime: Date | null
    screenshotUrl: string | null
    status: $Enums.DonationStatus | null
    verifiedAt: Date | null
    reportedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    campaignId: number
    donorName: number
    amount: number
    utrLast4: number
    paymentTime: number
    screenshotUrl: number
    status: number
    verifiedAt: number
    reportedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    campaignId?: true
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    campaignId?: true
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    campaignId?: true
    donorName?: true
    amount?: true
    utrLast4?: true
    paymentTime?: true
    screenshotUrl?: true
    status?: true
    verifiedAt?: true
    reportedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    campaignId?: true
    donorName?: true
    amount?: true
    utrLast4?: true
    paymentTime?: true
    screenshotUrl?: true
    status?: true
    verifiedAt?: true
    reportedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    campaignId?: true
    donorName?: true
    amount?: true
    utrLast4?: true
    paymentTime?: true
    screenshotUrl?: true
    status?: true
    verifiedAt?: true
    reportedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    campaignId: number
    donorName: string | null
    amount: number
    utrLast4: string
    paymentTime: Date
    screenshotUrl: string | null
    status: $Enums.DonationStatus
    verifiedAt: Date | null
    reportedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    donorName?: boolean
    amount?: boolean
    utrLast4?: boolean
    paymentTime?: boolean
    screenshotUrl?: boolean
    status?: boolean
    verifiedAt?: boolean
    reportedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    donorName?: boolean
    amount?: boolean
    utrLast4?: boolean
    paymentTime?: boolean
    screenshotUrl?: boolean
    status?: boolean
    verifiedAt?: boolean
    reportedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    donorName?: boolean
    amount?: boolean
    utrLast4?: boolean
    paymentTime?: boolean
    screenshotUrl?: boolean
    status?: boolean
    verifiedAt?: boolean
    reportedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    campaignId?: boolean
    donorName?: boolean
    amount?: boolean
    utrLast4?: boolean
    paymentTime?: boolean
    screenshotUrl?: boolean
    status?: boolean
    verifiedAt?: boolean
    reportedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "donorName" | "amount" | "utrLast4" | "paymentTime" | "screenshotUrl" | "status" | "verifiedAt" | "reportedAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      donorName: string | null
      amount: number
      utrLast4: string
      paymentTime: Date
      screenshotUrl: string | null
      status: $Enums.DonationStatus
      verifiedAt: Date | null
      reportedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
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
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly campaignId: FieldRef<"Donation", 'Int'>
    readonly donorName: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Int'>
    readonly utrLast4: FieldRef<"Donation", 'String'>
    readonly paymentTime: FieldRef<"Donation", 'DateTime'>
    readonly screenshotUrl: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'DonationStatus'>
    readonly verifiedAt: FieldRef<"Donation", 'DateTime'>
    readonly reportedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model CampaignUpdate
   */

  export type AggregateCampaignUpdate = {
    _count: CampaignUpdateCountAggregateOutputType | null
    _avg: CampaignUpdateAvgAggregateOutputType | null
    _sum: CampaignUpdateSumAggregateOutputType | null
    _min: CampaignUpdateMinAggregateOutputType | null
    _max: CampaignUpdateMaxAggregateOutputType | null
  }

  export type CampaignUpdateAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    ngoId: number | null
  }

  export type CampaignUpdateSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    ngoId: number | null
  }

  export type CampaignUpdateMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    ngoId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type CampaignUpdateMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    ngoId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type CampaignUpdateCountAggregateOutputType = {
    id: number
    campaignId: number
    ngoId: number
    content: number
    createdAt: number
    _all: number
  }


  export type CampaignUpdateAvgAggregateInputType = {
    id?: true
    campaignId?: true
    ngoId?: true
  }

  export type CampaignUpdateSumAggregateInputType = {
    id?: true
    campaignId?: true
    ngoId?: true
  }

  export type CampaignUpdateMinAggregateInputType = {
    id?: true
    campaignId?: true
    ngoId?: true
    content?: true
    createdAt?: true
  }

  export type CampaignUpdateMaxAggregateInputType = {
    id?: true
    campaignId?: true
    ngoId?: true
    content?: true
    createdAt?: true
  }

  export type CampaignUpdateCountAggregateInputType = {
    id?: true
    campaignId?: true
    ngoId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CampaignUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignUpdate to aggregate.
     */
    where?: CampaignUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignUpdates to fetch.
     */
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignUpdates
    **/
    _count?: true | CampaignUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignUpdateMaxAggregateInputType
  }

  export type GetCampaignUpdateAggregateType<T extends CampaignUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignUpdate[P]>
      : GetScalarType<T[P], AggregateCampaignUpdate[P]>
  }




  export type CampaignUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignUpdateWhereInput
    orderBy?: CampaignUpdateOrderByWithAggregationInput | CampaignUpdateOrderByWithAggregationInput[]
    by: CampaignUpdateScalarFieldEnum[] | CampaignUpdateScalarFieldEnum
    having?: CampaignUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignUpdateCountAggregateInputType | true
    _avg?: CampaignUpdateAvgAggregateInputType
    _sum?: CampaignUpdateSumAggregateInputType
    _min?: CampaignUpdateMinAggregateInputType
    _max?: CampaignUpdateMaxAggregateInputType
  }

  export type CampaignUpdateGroupByOutputType = {
    id: number
    campaignId: number
    ngoId: number
    content: string
    createdAt: Date
    _count: CampaignUpdateCountAggregateOutputType | null
    _avg: CampaignUpdateAvgAggregateOutputType | null
    _sum: CampaignUpdateSumAggregateOutputType | null
    _min: CampaignUpdateMinAggregateOutputType | null
    _max: CampaignUpdateMaxAggregateOutputType | null
  }

  type GetCampaignUpdateGroupByPayload<T extends CampaignUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignUpdateGroupByOutputType[P]>
        }
      >
    >


  export type CampaignUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ngoId?: boolean
    content?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignUpdate"]>

  export type CampaignUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ngoId?: boolean
    content?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignUpdate"]>

  export type CampaignUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    ngoId?: boolean
    content?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignUpdate"]>

  export type CampaignUpdateSelectScalar = {
    id?: boolean
    campaignId?: boolean
    ngoId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CampaignUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "ngoId" | "content" | "createdAt", ExtArgs["result"]["campaignUpdate"]>
  export type CampaignUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }
  export type CampaignUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }
  export type CampaignUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    ngo?: boolean | NgoDefaultArgs<ExtArgs>
  }

  export type $CampaignUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignUpdate"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      ngo: Prisma.$NgoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      ngoId: number
      content: string
      createdAt: Date
    }, ExtArgs["result"]["campaignUpdate"]>
    composites: {}
  }

  type CampaignUpdateGetPayload<S extends boolean | null | undefined | CampaignUpdateDefaultArgs> = $Result.GetResult<Prisma.$CampaignUpdatePayload, S>

  type CampaignUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignUpdateCountAggregateInputType | true
    }

  export interface CampaignUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignUpdate'], meta: { name: 'CampaignUpdate' } }
    /**
     * Find zero or one CampaignUpdate that matches the filter.
     * @param {CampaignUpdateFindUniqueArgs} args - Arguments to find a CampaignUpdate
     * @example
     * // Get one CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignUpdateFindUniqueArgs>(args: SelectSubset<T, CampaignUpdateFindUniqueArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignUpdateFindUniqueOrThrowArgs} args - Arguments to find a CampaignUpdate
     * @example
     * // Get one CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateFindFirstArgs} args - Arguments to find a CampaignUpdate
     * @example
     * // Get one CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignUpdateFindFirstArgs>(args?: SelectSubset<T, CampaignUpdateFindFirstArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateFindFirstOrThrowArgs} args - Arguments to find a CampaignUpdate
     * @example
     * // Get one CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignUpdates
     * const campaignUpdates = await prisma.campaignUpdate.findMany()
     * 
     * // Get first 10 CampaignUpdates
     * const campaignUpdates = await prisma.campaignUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignUpdateWithIdOnly = await prisma.campaignUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignUpdateFindManyArgs>(args?: SelectSubset<T, CampaignUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignUpdate.
     * @param {CampaignUpdateCreateArgs} args - Arguments to create a CampaignUpdate.
     * @example
     * // Create one CampaignUpdate
     * const CampaignUpdate = await prisma.campaignUpdate.create({
     *   data: {
     *     // ... data to create a CampaignUpdate
     *   }
     * })
     * 
     */
    create<T extends CampaignUpdateCreateArgs>(args: SelectSubset<T, CampaignUpdateCreateArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignUpdates.
     * @param {CampaignUpdateCreateManyArgs} args - Arguments to create many CampaignUpdates.
     * @example
     * // Create many CampaignUpdates
     * const campaignUpdate = await prisma.campaignUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignUpdateCreateManyArgs>(args?: SelectSubset<T, CampaignUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignUpdates and returns the data saved in the database.
     * @param {CampaignUpdateCreateManyAndReturnArgs} args - Arguments to create many CampaignUpdates.
     * @example
     * // Create many CampaignUpdates
     * const campaignUpdate = await prisma.campaignUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignUpdates and only return the `id`
     * const campaignUpdateWithIdOnly = await prisma.campaignUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignUpdate.
     * @param {CampaignUpdateDeleteArgs} args - Arguments to delete one CampaignUpdate.
     * @example
     * // Delete one CampaignUpdate
     * const CampaignUpdate = await prisma.campaignUpdate.delete({
     *   where: {
     *     // ... filter to delete one CampaignUpdate
     *   }
     * })
     * 
     */
    delete<T extends CampaignUpdateDeleteArgs>(args: SelectSubset<T, CampaignUpdateDeleteArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignUpdate.
     * @param {CampaignUpdateUpdateArgs} args - Arguments to update one CampaignUpdate.
     * @example
     * // Update one CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateUpdateArgs>(args: SelectSubset<T, CampaignUpdateUpdateArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignUpdates.
     * @param {CampaignUpdateDeleteManyArgs} args - Arguments to filter CampaignUpdates to delete.
     * @example
     * // Delete a few CampaignUpdates
     * const { count } = await prisma.campaignUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignUpdateDeleteManyArgs>(args?: SelectSubset<T, CampaignUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignUpdates
     * const campaignUpdate = await prisma.campaignUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignUpdates and returns the data updated in the database.
     * @param {CampaignUpdateUpdateManyAndReturnArgs} args - Arguments to update many CampaignUpdates.
     * @example
     * // Update many CampaignUpdates
     * const campaignUpdate = await prisma.campaignUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignUpdates and only return the `id`
     * const campaignUpdateWithIdOnly = await prisma.campaignUpdate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignUpdate.
     * @param {CampaignUpdateUpsertArgs} args - Arguments to update or create a CampaignUpdate.
     * @example
     * // Update or create a CampaignUpdate
     * const campaignUpdate = await prisma.campaignUpdate.upsert({
     *   create: {
     *     // ... data to create a CampaignUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignUpdate we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpdateUpsertArgs>(args: SelectSubset<T, CampaignUpdateUpsertArgs<ExtArgs>>): Prisma__CampaignUpdateClient<$Result.GetResult<Prisma.$CampaignUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateCountArgs} args - Arguments to filter CampaignUpdates to count.
     * @example
     * // Count the number of CampaignUpdates
     * const count = await prisma.campaignUpdate.count({
     *   where: {
     *     // ... the filter for the CampaignUpdates we want to count
     *   }
     * })
    **/
    count<T extends CampaignUpdateCountArgs>(
      args?: Subset<T, CampaignUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignUpdateAggregateArgs>(args: Subset<T, CampaignUpdateAggregateArgs>): Prisma.PrismaPromise<GetCampaignUpdateAggregateType<T>>

    /**
     * Group by CampaignUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateGroupByArgs} args - Group by arguments.
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
      T extends CampaignUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignUpdateGroupByArgs['orderBy'] }
        : { orderBy?: CampaignUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignUpdate model
   */
  readonly fields: CampaignUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ngo<T extends NgoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NgoDefaultArgs<ExtArgs>>): Prisma__NgoClient<$Result.GetResult<Prisma.$NgoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampaignUpdate model
   */
  interface CampaignUpdateFieldRefs {
    readonly id: FieldRef<"CampaignUpdate", 'Int'>
    readonly campaignId: FieldRef<"CampaignUpdate", 'Int'>
    readonly ngoId: FieldRef<"CampaignUpdate", 'Int'>
    readonly content: FieldRef<"CampaignUpdate", 'String'>
    readonly createdAt: FieldRef<"CampaignUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignUpdate findUnique
   */
  export type CampaignUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter, which CampaignUpdate to fetch.
     */
    where: CampaignUpdateWhereUniqueInput
  }

  /**
   * CampaignUpdate findUniqueOrThrow
   */
  export type CampaignUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter, which CampaignUpdate to fetch.
     */
    where: CampaignUpdateWhereUniqueInput
  }

  /**
   * CampaignUpdate findFirst
   */
  export type CampaignUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter, which CampaignUpdate to fetch.
     */
    where?: CampaignUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignUpdates to fetch.
     */
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignUpdates.
     */
    cursor?: CampaignUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignUpdates.
     */
    distinct?: CampaignUpdateScalarFieldEnum | CampaignUpdateScalarFieldEnum[]
  }

  /**
   * CampaignUpdate findFirstOrThrow
   */
  export type CampaignUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter, which CampaignUpdate to fetch.
     */
    where?: CampaignUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignUpdates to fetch.
     */
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignUpdates.
     */
    cursor?: CampaignUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignUpdates.
     */
    distinct?: CampaignUpdateScalarFieldEnum | CampaignUpdateScalarFieldEnum[]
  }

  /**
   * CampaignUpdate findMany
   */
  export type CampaignUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter, which CampaignUpdates to fetch.
     */
    where?: CampaignUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignUpdates to fetch.
     */
    orderBy?: CampaignUpdateOrderByWithRelationInput | CampaignUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignUpdates.
     */
    cursor?: CampaignUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignUpdates.
     */
    skip?: number
    distinct?: CampaignUpdateScalarFieldEnum | CampaignUpdateScalarFieldEnum[]
  }

  /**
   * CampaignUpdate create
   */
  export type CampaignUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignUpdate.
     */
    data: XOR<CampaignUpdateCreateInput, CampaignUpdateUncheckedCreateInput>
  }

  /**
   * CampaignUpdate createMany
   */
  export type CampaignUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignUpdates.
     */
    data: CampaignUpdateCreateManyInput | CampaignUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignUpdate createManyAndReturn
   */
  export type CampaignUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignUpdates.
     */
    data: CampaignUpdateCreateManyInput | CampaignUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignUpdate update
   */
  export type CampaignUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignUpdate.
     */
    data: XOR<CampaignUpdateUpdateInput, CampaignUpdateUncheckedUpdateInput>
    /**
     * Choose, which CampaignUpdate to update.
     */
    where: CampaignUpdateWhereUniqueInput
  }

  /**
   * CampaignUpdate updateMany
   */
  export type CampaignUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignUpdates.
     */
    data: XOR<CampaignUpdateUpdateManyMutationInput, CampaignUpdateUncheckedUpdateManyInput>
    /**
     * Filter which CampaignUpdates to update
     */
    where?: CampaignUpdateWhereInput
    /**
     * Limit how many CampaignUpdates to update.
     */
    limit?: number
  }

  /**
   * CampaignUpdate updateManyAndReturn
   */
  export type CampaignUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * The data used to update CampaignUpdates.
     */
    data: XOR<CampaignUpdateUpdateManyMutationInput, CampaignUpdateUncheckedUpdateManyInput>
    /**
     * Filter which CampaignUpdates to update
     */
    where?: CampaignUpdateWhereInput
    /**
     * Limit how many CampaignUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignUpdate upsert
   */
  export type CampaignUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignUpdate to update in case it exists.
     */
    where: CampaignUpdateWhereUniqueInput
    /**
     * In case the CampaignUpdate found by the `where` argument doesn't exist, create a new CampaignUpdate with this data.
     */
    create: XOR<CampaignUpdateCreateInput, CampaignUpdateUncheckedCreateInput>
    /**
     * In case the CampaignUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateUpdateInput, CampaignUpdateUncheckedUpdateInput>
  }

  /**
   * CampaignUpdate delete
   */
  export type CampaignUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
    /**
     * Filter which CampaignUpdate to delete.
     */
    where: CampaignUpdateWhereUniqueInput
  }

  /**
   * CampaignUpdate deleteMany
   */
  export type CampaignUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignUpdates to delete
     */
    where?: CampaignUpdateWhereInput
    /**
     * Limit how many CampaignUpdates to delete.
     */
    limit?: number
  }

  /**
   * CampaignUpdate without action
   */
  export type CampaignUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignUpdate
     */
    select?: CampaignUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignUpdate
     */
    omit?: CampaignUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignUpdateInclude<ExtArgs> | null
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


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isCapital: 'isCapital',
    createdAt: 'createdAt'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const CaseRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    amount: 'amount',
    category: 'category',
    districtId: 'districtId',
    documents: 'documents',
    status: 'status',
    submittedAt: 'submittedAt',
    adoptedByNgoId: 'adoptedByNgoId',
    campaignId: 'campaignId'
  };

  export type CaseRequestScalarFieldEnum = (typeof CaseRequestScalarFieldEnum)[keyof typeof CaseRequestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    ngoId: 'ngoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NgoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameUrdu: 'nameUrdu',
    registrationNumber: 'registrationNumber',
    districtId: 'districtId',
    categories: 'categories',
    email: 'email',
    phone: 'phone',
    address: 'address',
    website: 'website',
    bankAccount: 'bankAccount',
    ifsc: 'ifsc',
    accountHolder: 'accountHolder',
    bankName: 'bankName',
    upiId: 'upiId',
    status: 'status',
    rejectionReason: 'rejectionReason',
    documents: 'documents',
    createdAt: 'createdAt',
    verifiedAt: 'verifiedAt',
    updatedAt: 'updatedAt'
  };

  export type NgoScalarFieldEnum = (typeof NgoScalarFieldEnum)[keyof typeof NgoScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    ngoId: 'ngoId',
    title: 'title',
    description: 'description',
    category: 'category',
    goalAmount: 'goalAmount',
    verifiedAmount: 'verifiedAmount',
    pendingAmount: 'pendingAmount',
    deadline: 'deadline',
    imageUrl: 'imageUrl',
    upiId: 'upiId',
    bankAccount: 'bankAccount',
    ifsc: 'ifsc',
    accountHolder: 'accountHolder',
    bankName: 'bankName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    closedAt: 'closedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    donorName: 'donorName',
    amount: 'amount',
    utrLast4: 'utrLast4',
    paymentTime: 'paymentTime',
    screenshotUrl: 'screenshotUrl',
    status: 'status',
    verifiedAt: 'verifiedAt',
    reportedAt: 'reportedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const CampaignUpdateScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    ngoId: 'ngoId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CampaignUpdateScalarFieldEnum = (typeof CampaignUpdateScalarFieldEnum)[keyof typeof CampaignUpdateScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'CaseStatus[]'
   */
  export type ListEnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'NgoStatus'
   */
  export type EnumNgoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NgoStatus'>
    


  /**
   * Reference to a field of type 'NgoStatus[]'
   */
  export type ListEnumNgoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NgoStatus[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'DonationStatus'
   */
  export type EnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus'>
    


  /**
   * Reference to a field of type 'DonationStatus[]'
   */
  export type ListEnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus[]'>
    


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


  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    isCapital?: BoolFilter<"District"> | boolean
    createdAt?: DateTimeFilter<"District"> | Date | string
    cases?: CaseRequestListRelationFilter
    ngos?: NgoListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isCapital?: SortOrder
    createdAt?: SortOrder
    cases?: CaseRequestOrderByRelationAggregateInput
    ngos?: NgoOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    isCapital?: BoolFilter<"District"> | boolean
    createdAt?: DateTimeFilter<"District"> | Date | string
    cases?: CaseRequestListRelationFilter
    ngos?: NgoListRelationFilter
  }, "id" | "name">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isCapital?: SortOrder
    createdAt?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"District"> | number
    name?: StringWithAggregatesFilter<"District"> | string
    isCapital?: BoolWithAggregatesFilter<"District"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"District"> | Date | string
  }

  export type CaseRequestWhereInput = {
    AND?: CaseRequestWhereInput | CaseRequestWhereInput[]
    OR?: CaseRequestWhereInput[]
    NOT?: CaseRequestWhereInput | CaseRequestWhereInput[]
    id?: IntFilter<"CaseRequest"> | number
    title?: StringFilter<"CaseRequest"> | string
    description?: StringFilter<"CaseRequest"> | string
    amount?: IntFilter<"CaseRequest"> | number
    category?: EnumCategoryFilter<"CaseRequest"> | $Enums.Category
    districtId?: IntFilter<"CaseRequest"> | number
    documents?: StringFilter<"CaseRequest"> | string
    status?: EnumCaseStatusFilter<"CaseRequest"> | $Enums.CaseStatus
    submittedAt?: DateTimeFilter<"CaseRequest"> | Date | string
    adoptedByNgoId?: IntNullableFilter<"CaseRequest"> | number | null
    campaignId?: IntNullableFilter<"CaseRequest"> | number | null
    adoptedByNgo?: XOR<NgoNullableScalarRelationFilter, NgoWhereInput> | null
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
  }

  export type CaseRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    districtId?: SortOrder
    documents?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    adoptedByNgoId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    adoptedByNgo?: NgoOrderByWithRelationInput
    district?: DistrictOrderByWithRelationInput
  }

  export type CaseRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    campaignId?: number
    AND?: CaseRequestWhereInput | CaseRequestWhereInput[]
    OR?: CaseRequestWhereInput[]
    NOT?: CaseRequestWhereInput | CaseRequestWhereInput[]
    title?: StringFilter<"CaseRequest"> | string
    description?: StringFilter<"CaseRequest"> | string
    amount?: IntFilter<"CaseRequest"> | number
    category?: EnumCategoryFilter<"CaseRequest"> | $Enums.Category
    districtId?: IntFilter<"CaseRequest"> | number
    documents?: StringFilter<"CaseRequest"> | string
    status?: EnumCaseStatusFilter<"CaseRequest"> | $Enums.CaseStatus
    submittedAt?: DateTimeFilter<"CaseRequest"> | Date | string
    adoptedByNgoId?: IntNullableFilter<"CaseRequest"> | number | null
    adoptedByNgo?: XOR<NgoNullableScalarRelationFilter, NgoWhereInput> | null
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
  }, "id" | "campaignId">

  export type CaseRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    districtId?: SortOrder
    documents?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    adoptedByNgoId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    _count?: CaseRequestCountOrderByAggregateInput
    _avg?: CaseRequestAvgOrderByAggregateInput
    _max?: CaseRequestMaxOrderByAggregateInput
    _min?: CaseRequestMinOrderByAggregateInput
    _sum?: CaseRequestSumOrderByAggregateInput
  }

  export type CaseRequestScalarWhereWithAggregatesInput = {
    AND?: CaseRequestScalarWhereWithAggregatesInput | CaseRequestScalarWhereWithAggregatesInput[]
    OR?: CaseRequestScalarWhereWithAggregatesInput[]
    NOT?: CaseRequestScalarWhereWithAggregatesInput | CaseRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CaseRequest"> | number
    title?: StringWithAggregatesFilter<"CaseRequest"> | string
    description?: StringWithAggregatesFilter<"CaseRequest"> | string
    amount?: IntWithAggregatesFilter<"CaseRequest"> | number
    category?: EnumCategoryWithAggregatesFilter<"CaseRequest"> | $Enums.Category
    districtId?: IntWithAggregatesFilter<"CaseRequest"> | number
    documents?: StringWithAggregatesFilter<"CaseRequest"> | string
    status?: EnumCaseStatusWithAggregatesFilter<"CaseRequest"> | $Enums.CaseStatus
    submittedAt?: DateTimeWithAggregatesFilter<"CaseRequest"> | Date | string
    adoptedByNgoId?: IntNullableWithAggregatesFilter<"CaseRequest"> | number | null
    campaignId?: IntNullableWithAggregatesFilter<"CaseRequest"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ngoId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ngo?: XOR<NgoNullableScalarRelationFilter, NgoWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ngoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ngo?: NgoOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    ngoId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ngo?: XOR<NgoNullableScalarRelationFilter, NgoWhereInput> | null
  }, "id" | "email" | "ngoId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ngoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    ngoId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NgoWhereInput = {
    AND?: NgoWhereInput | NgoWhereInput[]
    OR?: NgoWhereInput[]
    NOT?: NgoWhereInput | NgoWhereInput[]
    id?: IntFilter<"Ngo"> | number
    name?: StringFilter<"Ngo"> | string
    nameUrdu?: StringNullableFilter<"Ngo"> | string | null
    registrationNumber?: StringFilter<"Ngo"> | string
    districtId?: IntFilter<"Ngo"> | number
    categories?: StringFilter<"Ngo"> | string
    email?: StringFilter<"Ngo"> | string
    phone?: StringFilter<"Ngo"> | string
    address?: StringFilter<"Ngo"> | string
    website?: StringNullableFilter<"Ngo"> | string | null
    bankAccount?: StringFilter<"Ngo"> | string
    ifsc?: StringFilter<"Ngo"> | string
    accountHolder?: StringFilter<"Ngo"> | string
    bankName?: StringFilter<"Ngo"> | string
    upiId?: StringNullableFilter<"Ngo"> | string | null
    status?: EnumNgoStatusFilter<"Ngo"> | $Enums.NgoStatus
    rejectionReason?: StringNullableFilter<"Ngo"> | string | null
    documents?: StringFilter<"Ngo"> | string
    createdAt?: DateTimeFilter<"Ngo"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Ngo"> | Date | string | null
    updatedAt?: DateTimeFilter<"Ngo"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    campaigns?: CampaignListRelationFilter
    campaignUpdates?: CampaignUpdateListRelationFilter
    adoptedCases?: CaseRequestListRelationFilter
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
  }

  export type NgoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrdu?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    districtId?: SortOrder
    categories?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrderInput | SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrderInput | SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
    campaignUpdates?: CampaignUpdateOrderByRelationAggregateInput
    adoptedCases?: CaseRequestOrderByRelationAggregateInput
    district?: DistrictOrderByWithRelationInput
  }

  export type NgoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    registrationNumber?: string
    email?: string
    AND?: NgoWhereInput | NgoWhereInput[]
    OR?: NgoWhereInput[]
    NOT?: NgoWhereInput | NgoWhereInput[]
    name?: StringFilter<"Ngo"> | string
    nameUrdu?: StringNullableFilter<"Ngo"> | string | null
    districtId?: IntFilter<"Ngo"> | number
    categories?: StringFilter<"Ngo"> | string
    phone?: StringFilter<"Ngo"> | string
    address?: StringFilter<"Ngo"> | string
    website?: StringNullableFilter<"Ngo"> | string | null
    bankAccount?: StringFilter<"Ngo"> | string
    ifsc?: StringFilter<"Ngo"> | string
    accountHolder?: StringFilter<"Ngo"> | string
    bankName?: StringFilter<"Ngo"> | string
    upiId?: StringNullableFilter<"Ngo"> | string | null
    status?: EnumNgoStatusFilter<"Ngo"> | $Enums.NgoStatus
    rejectionReason?: StringNullableFilter<"Ngo"> | string | null
    documents?: StringFilter<"Ngo"> | string
    createdAt?: DateTimeFilter<"Ngo"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Ngo"> | Date | string | null
    updatedAt?: DateTimeFilter<"Ngo"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    campaigns?: CampaignListRelationFilter
    campaignUpdates?: CampaignUpdateListRelationFilter
    adoptedCases?: CaseRequestListRelationFilter
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
  }, "id" | "registrationNumber" | "email">

  export type NgoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrdu?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    districtId?: SortOrder
    categories?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrderInput | SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrderInput | SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: NgoCountOrderByAggregateInput
    _avg?: NgoAvgOrderByAggregateInput
    _max?: NgoMaxOrderByAggregateInput
    _min?: NgoMinOrderByAggregateInput
    _sum?: NgoSumOrderByAggregateInput
  }

  export type NgoScalarWhereWithAggregatesInput = {
    AND?: NgoScalarWhereWithAggregatesInput | NgoScalarWhereWithAggregatesInput[]
    OR?: NgoScalarWhereWithAggregatesInput[]
    NOT?: NgoScalarWhereWithAggregatesInput | NgoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ngo"> | number
    name?: StringWithAggregatesFilter<"Ngo"> | string
    nameUrdu?: StringNullableWithAggregatesFilter<"Ngo"> | string | null
    registrationNumber?: StringWithAggregatesFilter<"Ngo"> | string
    districtId?: IntWithAggregatesFilter<"Ngo"> | number
    categories?: StringWithAggregatesFilter<"Ngo"> | string
    email?: StringWithAggregatesFilter<"Ngo"> | string
    phone?: StringWithAggregatesFilter<"Ngo"> | string
    address?: StringWithAggregatesFilter<"Ngo"> | string
    website?: StringNullableWithAggregatesFilter<"Ngo"> | string | null
    bankAccount?: StringWithAggregatesFilter<"Ngo"> | string
    ifsc?: StringWithAggregatesFilter<"Ngo"> | string
    accountHolder?: StringWithAggregatesFilter<"Ngo"> | string
    bankName?: StringWithAggregatesFilter<"Ngo"> | string
    upiId?: StringNullableWithAggregatesFilter<"Ngo"> | string | null
    status?: EnumNgoStatusWithAggregatesFilter<"Ngo"> | $Enums.NgoStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"Ngo"> | string | null
    documents?: StringWithAggregatesFilter<"Ngo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ngo"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Ngo"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Ngo"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    ngoId?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: EnumCategoryFilter<"Campaign"> | $Enums.Category
    goalAmount?: IntFilter<"Campaign"> | number
    verifiedAmount?: IntFilter<"Campaign"> | number
    pendingAmount?: IntFilter<"Campaign"> | number
    deadline?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    upiId?: StringFilter<"Campaign"> | string
    bankAccount?: StringFilter<"Campaign"> | string
    ifsc?: StringFilter<"Campaign"> | string
    accountHolder?: StringFilter<"Campaign"> | string
    bankName?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    closedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    ngo?: XOR<NgoScalarRelationFilter, NgoWhereInput>
    updates?: CampaignUpdateListRelationFilter
    donations?: DonationListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    ngoId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    upiId?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    ngo?: NgoOrderByWithRelationInput
    updates?: CampaignUpdateOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    ngoId?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: EnumCategoryFilter<"Campaign"> | $Enums.Category
    goalAmount?: IntFilter<"Campaign"> | number
    verifiedAmount?: IntFilter<"Campaign"> | number
    pendingAmount?: IntFilter<"Campaign"> | number
    deadline?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    upiId?: StringFilter<"Campaign"> | string
    bankAccount?: StringFilter<"Campaign"> | string
    ifsc?: StringFilter<"Campaign"> | string
    accountHolder?: StringFilter<"Campaign"> | string
    bankName?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    closedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    ngo?: XOR<NgoScalarRelationFilter, NgoWhereInput>
    updates?: CampaignUpdateListRelationFilter
    donations?: DonationListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    ngoId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    upiId?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    ngoId?: IntWithAggregatesFilter<"Campaign"> | number
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    category?: EnumCategoryWithAggregatesFilter<"Campaign"> | $Enums.Category
    goalAmount?: IntWithAggregatesFilter<"Campaign"> | number
    verifiedAmount?: IntWithAggregatesFilter<"Campaign"> | number
    pendingAmount?: IntWithAggregatesFilter<"Campaign"> | number
    deadline?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    upiId?: StringWithAggregatesFilter<"Campaign"> | string
    bankAccount?: StringWithAggregatesFilter<"Campaign"> | string
    ifsc?: StringWithAggregatesFilter<"Campaign"> | string
    accountHolder?: StringWithAggregatesFilter<"Campaign"> | string
    bankName?: StringWithAggregatesFilter<"Campaign"> | string
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    campaignId?: IntFilter<"Donation"> | number
    donorName?: StringNullableFilter<"Donation"> | string | null
    amount?: IntFilter<"Donation"> | number
    utrLast4?: StringFilter<"Donation"> | string
    paymentTime?: DateTimeFilter<"Donation"> | Date | string
    screenshotUrl?: StringNullableFilter<"Donation"> | string | null
    status?: EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus
    verifiedAt?: DateTimeNullableFilter<"Donation"> | Date | string | null
    reportedAt?: DateTimeFilter<"Donation"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    donorName?: SortOrderInput | SortOrder
    amount?: SortOrder
    utrLast4?: SortOrder
    paymentTime?: SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    campaignId?: IntFilter<"Donation"> | number
    donorName?: StringNullableFilter<"Donation"> | string | null
    amount?: IntFilter<"Donation"> | number
    utrLast4?: StringFilter<"Donation"> | string
    paymentTime?: DateTimeFilter<"Donation"> | Date | string
    screenshotUrl?: StringNullableFilter<"Donation"> | string | null
    status?: EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus
    verifiedAt?: DateTimeNullableFilter<"Donation"> | Date | string | null
    reportedAt?: DateTimeFilter<"Donation"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    donorName?: SortOrderInput | SortOrder
    amount?: SortOrder
    utrLast4?: SortOrder
    paymentTime?: SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    campaignId?: IntWithAggregatesFilter<"Donation"> | number
    donorName?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    amount?: IntWithAggregatesFilter<"Donation"> | number
    utrLast4?: StringWithAggregatesFilter<"Donation"> | string
    paymentTime?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    screenshotUrl?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    status?: EnumDonationStatusWithAggregatesFilter<"Donation"> | $Enums.DonationStatus
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Donation"> | Date | string | null
    reportedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type CampaignUpdateWhereInput = {
    AND?: CampaignUpdateWhereInput | CampaignUpdateWhereInput[]
    OR?: CampaignUpdateWhereInput[]
    NOT?: CampaignUpdateWhereInput | CampaignUpdateWhereInput[]
    id?: IntFilter<"CampaignUpdate"> | number
    campaignId?: IntFilter<"CampaignUpdate"> | number
    ngoId?: IntFilter<"CampaignUpdate"> | number
    content?: StringFilter<"CampaignUpdate"> | string
    createdAt?: DateTimeFilter<"CampaignUpdate"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    ngo?: XOR<NgoScalarRelationFilter, NgoWhereInput>
  }

  export type CampaignUpdateOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    ngo?: NgoOrderByWithRelationInput
  }

  export type CampaignUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignUpdateWhereInput | CampaignUpdateWhereInput[]
    OR?: CampaignUpdateWhereInput[]
    NOT?: CampaignUpdateWhereInput | CampaignUpdateWhereInput[]
    campaignId?: IntFilter<"CampaignUpdate"> | number
    ngoId?: IntFilter<"CampaignUpdate"> | number
    content?: StringFilter<"CampaignUpdate"> | string
    createdAt?: DateTimeFilter<"CampaignUpdate"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    ngo?: XOR<NgoScalarRelationFilter, NgoWhereInput>
  }, "id">

  export type CampaignUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CampaignUpdateCountOrderByAggregateInput
    _avg?: CampaignUpdateAvgOrderByAggregateInput
    _max?: CampaignUpdateMaxOrderByAggregateInput
    _min?: CampaignUpdateMinOrderByAggregateInput
    _sum?: CampaignUpdateSumOrderByAggregateInput
  }

  export type CampaignUpdateScalarWhereWithAggregatesInput = {
    AND?: CampaignUpdateScalarWhereWithAggregatesInput | CampaignUpdateScalarWhereWithAggregatesInput[]
    OR?: CampaignUpdateScalarWhereWithAggregatesInput[]
    NOT?: CampaignUpdateScalarWhereWithAggregatesInput | CampaignUpdateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampaignUpdate"> | number
    campaignId?: IntWithAggregatesFilter<"CampaignUpdate"> | number
    ngoId?: IntWithAggregatesFilter<"CampaignUpdate"> | number
    content?: StringWithAggregatesFilter<"CampaignUpdate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaignUpdate"> | Date | string
  }

  export type DistrictCreateInput = {
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    cases?: CaseRequestCreateNestedManyWithoutDistrictInput
    ngos?: NgoCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id?: number
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    cases?: CaseRequestUncheckedCreateNestedManyWithoutDistrictInput
    ngos?: NgoUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseRequestUpdateManyWithoutDistrictNestedInput
    ngos?: NgoUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseRequestUncheckedUpdateManyWithoutDistrictNestedInput
    ngos?: NgoUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id?: number
    name: string
    isCapital?: boolean
    createdAt?: Date | string
  }

  export type DistrictUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseRequestCreateInput = {
    title: string
    description: string
    amount: number
    category: $Enums.Category
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    campaignId?: number | null
    adoptedByNgo?: NgoCreateNestedOneWithoutAdoptedCasesInput
    district: DistrictCreateNestedOneWithoutCasesInput
  }

  export type CaseRequestUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    districtId: number
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    adoptedByNgoId?: number | null
    campaignId?: number | null
  }

  export type CaseRequestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedByNgo?: NgoUpdateOneWithoutAdoptedCasesNestedInput
    district?: DistrictUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CaseRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    districtId?: IntFieldUpdateOperationsInput | number
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adoptedByNgoId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseRequestCreateManyInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    districtId: number
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    adoptedByNgoId?: number | null
    campaignId?: number | null
  }

  export type CaseRequestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    districtId?: IntFieldUpdateOperationsInput | number
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adoptedByNgoId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ngo?: NgoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    ngoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ngo?: NgoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ngoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    ngoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ngoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NgoCreateInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNgoInput
    campaigns?: CampaignCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestCreateNestedManyWithoutAdoptedByNgoInput
    district: DistrictCreateNestedOneWithoutNgosInput
  }

  export type NgoUncheckedCreateInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutNgoInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput
    district?: DistrictUpdateOneRequiredWithoutNgosNestedInput
  }

  export type NgoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type NgoCreateManyInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type NgoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NgoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    ngo: NgoCreateNestedOneWithoutCampaignsInput
    updates?: CampaignUpdateCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    ngoId: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    updates?: CampaignUpdateUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngo?: NgoUpdateOneRequiredWithoutCampaignsNestedInput
    updates?: CampaignUpdateUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: CampaignUpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    ngoId: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type CampaignUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonationCreateInput = {
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    campaignId: number
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
  }

  export type DonationUpdateInput = {
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: number
    campaignId: number
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateCreateInput = {
    content: string
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutUpdatesInput
    ngo: NgoCreateNestedOneWithoutCampaignUpdatesInput
  }

  export type CampaignUpdateUncheckedCreateInput = {
    id?: number
    campaignId: number
    ngoId: number
    content: string
    createdAt?: Date | string
  }

  export type CampaignUpdateUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutUpdatesNestedInput
    ngo?: NgoUpdateOneRequiredWithoutCampaignUpdatesNestedInput
  }

  export type CampaignUpdateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateCreateManyInput = {
    id?: number
    campaignId: number
    ngoId: number
    content: string
    createdAt?: Date | string
  }

  export type CampaignUpdateUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CaseRequestListRelationFilter = {
    every?: CaseRequestWhereInput
    some?: CaseRequestWhereInput
    none?: CaseRequestWhereInput
  }

  export type NgoListRelationFilter = {
    every?: NgoWhereInput
    some?: NgoWhereInput
    none?: NgoWhereInput
  }

  export type CaseRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NgoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NgoNullableScalarRelationFilter = {
    is?: NgoWhereInput | null
    isNot?: NgoWhereInput | null
  }

  export type DistrictScalarRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaseRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    districtId?: SortOrder
    documents?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    adoptedByNgoId?: SortOrder
    campaignId?: SortOrder
  }

  export type CaseRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    districtId?: SortOrder
    adoptedByNgoId?: SortOrder
    campaignId?: SortOrder
  }

  export type CaseRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    districtId?: SortOrder
    documents?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    adoptedByNgoId?: SortOrder
    campaignId?: SortOrder
  }

  export type CaseRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    districtId?: SortOrder
    documents?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    adoptedByNgoId?: SortOrder
    campaignId?: SortOrder
  }

  export type CaseRequestSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    districtId?: SortOrder
    adoptedByNgoId?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ngoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ngoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ngoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumNgoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NgoStatus | EnumNgoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNgoStatusFilter<$PrismaModel> | $Enums.NgoStatus
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CampaignUpdateListRelationFilter = {
    every?: CampaignUpdateWhereInput
    some?: CampaignUpdateWhereInput
    none?: CampaignUpdateWhereInput
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NgoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrdu?: SortOrder
    registrationNumber?: SortOrder
    districtId?: SortOrder
    categories?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    verifiedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NgoAvgOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
  }

  export type NgoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrdu?: SortOrder
    registrationNumber?: SortOrder
    districtId?: SortOrder
    categories?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    verifiedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NgoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrdu?: SortOrder
    registrationNumber?: SortOrder
    districtId?: SortOrder
    categories?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    documents?: SortOrder
    createdAt?: SortOrder
    verifiedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NgoSumOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
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

  export type EnumNgoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NgoStatus | EnumNgoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNgoStatusWithAggregatesFilter<$PrismaModel> | $Enums.NgoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNgoStatusFilter<$PrismaModel>
    _max?: NestedEnumNgoStatusFilter<$PrismaModel>
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

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NgoScalarRelationFilter = {
    is?: NgoWhereInput
    isNot?: NgoWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    upiId?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    upiId?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
    deadline?: SortOrder
    imageUrl?: SortOrder
    upiId?: SortOrder
    bankAccount?: SortOrder
    ifsc?: SortOrder
    accountHolder?: SortOrder
    bankName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
    ngoId?: SortOrder
    goalAmount?: SortOrder
    verifiedAmount?: SortOrder
    pendingAmount?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type EnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    donorName?: SortOrder
    amount?: SortOrder
    utrLast4?: SortOrder
    paymentTime?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
    reportedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    donorName?: SortOrder
    amount?: SortOrder
    utrLast4?: SortOrder
    paymentTime?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
    reportedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    donorName?: SortOrder
    amount?: SortOrder
    utrLast4?: SortOrder
    paymentTime?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    verifiedAt?: SortOrder
    reportedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    amount?: SortOrder
  }

  export type EnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationStatusFilter<$PrismaModel>
  }

  export type CampaignUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignUpdateAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
  }

  export type CampaignUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignUpdateSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    ngoId?: SortOrder
  }

  export type CaseRequestCreateNestedManyWithoutDistrictInput = {
    create?: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput> | CaseRequestCreateWithoutDistrictInput[] | CaseRequestUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutDistrictInput | CaseRequestCreateOrConnectWithoutDistrictInput[]
    createMany?: CaseRequestCreateManyDistrictInputEnvelope
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
  }

  export type NgoCreateNestedManyWithoutDistrictInput = {
    create?: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput> | NgoCreateWithoutDistrictInput[] | NgoUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: NgoCreateOrConnectWithoutDistrictInput | NgoCreateOrConnectWithoutDistrictInput[]
    createMany?: NgoCreateManyDistrictInputEnvelope
    connect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
  }

  export type CaseRequestUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput> | CaseRequestCreateWithoutDistrictInput[] | CaseRequestUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutDistrictInput | CaseRequestCreateOrConnectWithoutDistrictInput[]
    createMany?: CaseRequestCreateManyDistrictInputEnvelope
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
  }

  export type NgoUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput> | NgoCreateWithoutDistrictInput[] | NgoUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: NgoCreateOrConnectWithoutDistrictInput | NgoCreateOrConnectWithoutDistrictInput[]
    createMany?: NgoCreateManyDistrictInputEnvelope
    connect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CaseRequestUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput> | CaseRequestCreateWithoutDistrictInput[] | CaseRequestUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutDistrictInput | CaseRequestCreateOrConnectWithoutDistrictInput[]
    upsert?: CaseRequestUpsertWithWhereUniqueWithoutDistrictInput | CaseRequestUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: CaseRequestCreateManyDistrictInputEnvelope
    set?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    disconnect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    delete?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    update?: CaseRequestUpdateWithWhereUniqueWithoutDistrictInput | CaseRequestUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: CaseRequestUpdateManyWithWhereWithoutDistrictInput | CaseRequestUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
  }

  export type NgoUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput> | NgoCreateWithoutDistrictInput[] | NgoUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: NgoCreateOrConnectWithoutDistrictInput | NgoCreateOrConnectWithoutDistrictInput[]
    upsert?: NgoUpsertWithWhereUniqueWithoutDistrictInput | NgoUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: NgoCreateManyDistrictInputEnvelope
    set?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    disconnect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    delete?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    connect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    update?: NgoUpdateWithWhereUniqueWithoutDistrictInput | NgoUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: NgoUpdateManyWithWhereWithoutDistrictInput | NgoUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: NgoScalarWhereInput | NgoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CaseRequestUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput> | CaseRequestCreateWithoutDistrictInput[] | CaseRequestUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutDistrictInput | CaseRequestCreateOrConnectWithoutDistrictInput[]
    upsert?: CaseRequestUpsertWithWhereUniqueWithoutDistrictInput | CaseRequestUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: CaseRequestCreateManyDistrictInputEnvelope
    set?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    disconnect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    delete?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    update?: CaseRequestUpdateWithWhereUniqueWithoutDistrictInput | CaseRequestUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: CaseRequestUpdateManyWithWhereWithoutDistrictInput | CaseRequestUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
  }

  export type NgoUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput> | NgoCreateWithoutDistrictInput[] | NgoUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: NgoCreateOrConnectWithoutDistrictInput | NgoCreateOrConnectWithoutDistrictInput[]
    upsert?: NgoUpsertWithWhereUniqueWithoutDistrictInput | NgoUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: NgoCreateManyDistrictInputEnvelope
    set?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    disconnect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    delete?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    connect?: NgoWhereUniqueInput | NgoWhereUniqueInput[]
    update?: NgoUpdateWithWhereUniqueWithoutDistrictInput | NgoUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: NgoUpdateManyWithWhereWithoutDistrictInput | NgoUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: NgoScalarWhereInput | NgoScalarWhereInput[]
  }

  export type NgoCreateNestedOneWithoutAdoptedCasesInput = {
    create?: XOR<NgoCreateWithoutAdoptedCasesInput, NgoUncheckedCreateWithoutAdoptedCasesInput>
    connectOrCreate?: NgoCreateOrConnectWithoutAdoptedCasesInput
    connect?: NgoWhereUniqueInput
  }

  export type DistrictCreateNestedOneWithoutCasesInput = {
    create?: XOR<DistrictCreateWithoutCasesInput, DistrictUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutCasesInput
    connect?: DistrictWhereUniqueInput
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NgoUpdateOneWithoutAdoptedCasesNestedInput = {
    create?: XOR<NgoCreateWithoutAdoptedCasesInput, NgoUncheckedCreateWithoutAdoptedCasesInput>
    connectOrCreate?: NgoCreateOrConnectWithoutAdoptedCasesInput
    upsert?: NgoUpsertWithoutAdoptedCasesInput
    disconnect?: NgoWhereInput | boolean
    delete?: NgoWhereInput | boolean
    connect?: NgoWhereUniqueInput
    update?: XOR<XOR<NgoUpdateToOneWithWhereWithoutAdoptedCasesInput, NgoUpdateWithoutAdoptedCasesInput>, NgoUncheckedUpdateWithoutAdoptedCasesInput>
  }

  export type DistrictUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<DistrictCreateWithoutCasesInput, DistrictUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutCasesInput
    upsert?: DistrictUpsertWithoutCasesInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutCasesInput, DistrictUpdateWithoutCasesInput>, DistrictUncheckedUpdateWithoutCasesInput>
  }

  export type NgoCreateNestedOneWithoutUserInput = {
    create?: XOR<NgoCreateWithoutUserInput, NgoUncheckedCreateWithoutUserInput>
    connectOrCreate?: NgoCreateOrConnectWithoutUserInput
    connect?: NgoWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NgoUpdateOneWithoutUserNestedInput = {
    create?: XOR<NgoCreateWithoutUserInput, NgoUncheckedCreateWithoutUserInput>
    connectOrCreate?: NgoCreateOrConnectWithoutUserInput
    upsert?: NgoUpsertWithoutUserInput
    disconnect?: NgoWhereInput | boolean
    delete?: NgoWhereInput | boolean
    connect?: NgoWhereUniqueInput
    update?: XOR<XOR<NgoUpdateToOneWithWhereWithoutUserInput, NgoUpdateWithoutUserInput>, NgoUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutNgoInput = {
    create?: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
    connectOrCreate?: UserCreateOrConnectWithoutNgoInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutNgoInput = {
    create?: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput> | CampaignCreateWithoutNgoInput[] | CampaignUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutNgoInput | CampaignCreateOrConnectWithoutNgoInput[]
    createMany?: CampaignCreateManyNgoInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUpdateCreateNestedManyWithoutNgoInput = {
    create?: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput> | CampaignUpdateCreateWithoutNgoInput[] | CampaignUpdateUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutNgoInput | CampaignUpdateCreateOrConnectWithoutNgoInput[]
    createMany?: CampaignUpdateCreateManyNgoInputEnvelope
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
  }

  export type CaseRequestCreateNestedManyWithoutAdoptedByNgoInput = {
    create?: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput> | CaseRequestCreateWithoutAdoptedByNgoInput[] | CaseRequestUncheckedCreateWithoutAdoptedByNgoInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutAdoptedByNgoInput | CaseRequestCreateOrConnectWithoutAdoptedByNgoInput[]
    createMany?: CaseRequestCreateManyAdoptedByNgoInputEnvelope
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
  }

  export type DistrictCreateNestedOneWithoutNgosInput = {
    create?: XOR<DistrictCreateWithoutNgosInput, DistrictUncheckedCreateWithoutNgosInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutNgosInput
    connect?: DistrictWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutNgoInput = {
    create?: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
    connectOrCreate?: UserCreateOrConnectWithoutNgoInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUncheckedCreateNestedManyWithoutNgoInput = {
    create?: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput> | CampaignCreateWithoutNgoInput[] | CampaignUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutNgoInput | CampaignCreateOrConnectWithoutNgoInput[]
    createMany?: CampaignCreateManyNgoInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput = {
    create?: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput> | CampaignUpdateCreateWithoutNgoInput[] | CampaignUpdateUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutNgoInput | CampaignUpdateCreateOrConnectWithoutNgoInput[]
    createMany?: CampaignUpdateCreateManyNgoInputEnvelope
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
  }

  export type CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput = {
    create?: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput> | CaseRequestCreateWithoutAdoptedByNgoInput[] | CaseRequestUncheckedCreateWithoutAdoptedByNgoInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutAdoptedByNgoInput | CaseRequestCreateOrConnectWithoutAdoptedByNgoInput[]
    createMany?: CaseRequestCreateManyAdoptedByNgoInputEnvelope
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumNgoStatusFieldUpdateOperationsInput = {
    set?: $Enums.NgoStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutNgoNestedInput = {
    create?: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
    connectOrCreate?: UserCreateOrConnectWithoutNgoInput
    upsert?: UserUpsertWithoutNgoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNgoInput, UserUpdateWithoutNgoInput>, UserUncheckedUpdateWithoutNgoInput>
  }

  export type CampaignUpdateManyWithoutNgoNestedInput = {
    create?: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput> | CampaignCreateWithoutNgoInput[] | CampaignUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutNgoInput | CampaignCreateOrConnectWithoutNgoInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutNgoInput | CampaignUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: CampaignCreateManyNgoInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutNgoInput | CampaignUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutNgoInput | CampaignUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUpdateUpdateManyWithoutNgoNestedInput = {
    create?: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput> | CampaignUpdateCreateWithoutNgoInput[] | CampaignUpdateUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutNgoInput | CampaignUpdateCreateOrConnectWithoutNgoInput[]
    upsert?: CampaignUpdateUpsertWithWhereUniqueWithoutNgoInput | CampaignUpdateUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: CampaignUpdateCreateManyNgoInputEnvelope
    set?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    disconnect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    delete?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    update?: CampaignUpdateUpdateWithWhereUniqueWithoutNgoInput | CampaignUpdateUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: CampaignUpdateUpdateManyWithWhereWithoutNgoInput | CampaignUpdateUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
  }

  export type CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput = {
    create?: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput> | CaseRequestCreateWithoutAdoptedByNgoInput[] | CaseRequestUncheckedCreateWithoutAdoptedByNgoInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutAdoptedByNgoInput | CaseRequestCreateOrConnectWithoutAdoptedByNgoInput[]
    upsert?: CaseRequestUpsertWithWhereUniqueWithoutAdoptedByNgoInput | CaseRequestUpsertWithWhereUniqueWithoutAdoptedByNgoInput[]
    createMany?: CaseRequestCreateManyAdoptedByNgoInputEnvelope
    set?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    disconnect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    delete?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    update?: CaseRequestUpdateWithWhereUniqueWithoutAdoptedByNgoInput | CaseRequestUpdateWithWhereUniqueWithoutAdoptedByNgoInput[]
    updateMany?: CaseRequestUpdateManyWithWhereWithoutAdoptedByNgoInput | CaseRequestUpdateManyWithWhereWithoutAdoptedByNgoInput[]
    deleteMany?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
  }

  export type DistrictUpdateOneRequiredWithoutNgosNestedInput = {
    create?: XOR<DistrictCreateWithoutNgosInput, DistrictUncheckedCreateWithoutNgosInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutNgosInput
    upsert?: DistrictUpsertWithoutNgosInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutNgosInput, DistrictUpdateWithoutNgosInput>, DistrictUncheckedUpdateWithoutNgosInput>
  }

  export type UserUncheckedUpdateOneWithoutNgoNestedInput = {
    create?: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
    connectOrCreate?: UserCreateOrConnectWithoutNgoInput
    upsert?: UserUpsertWithoutNgoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNgoInput, UserUpdateWithoutNgoInput>, UserUncheckedUpdateWithoutNgoInput>
  }

  export type CampaignUncheckedUpdateManyWithoutNgoNestedInput = {
    create?: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput> | CampaignCreateWithoutNgoInput[] | CampaignUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutNgoInput | CampaignCreateOrConnectWithoutNgoInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutNgoInput | CampaignUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: CampaignCreateManyNgoInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutNgoInput | CampaignUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutNgoInput | CampaignUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput = {
    create?: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput> | CampaignUpdateCreateWithoutNgoInput[] | CampaignUpdateUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutNgoInput | CampaignUpdateCreateOrConnectWithoutNgoInput[]
    upsert?: CampaignUpdateUpsertWithWhereUniqueWithoutNgoInput | CampaignUpdateUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: CampaignUpdateCreateManyNgoInputEnvelope
    set?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    disconnect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    delete?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    update?: CampaignUpdateUpdateWithWhereUniqueWithoutNgoInput | CampaignUpdateUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: CampaignUpdateUpdateManyWithWhereWithoutNgoInput | CampaignUpdateUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
  }

  export type CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput = {
    create?: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput> | CaseRequestCreateWithoutAdoptedByNgoInput[] | CaseRequestUncheckedCreateWithoutAdoptedByNgoInput[]
    connectOrCreate?: CaseRequestCreateOrConnectWithoutAdoptedByNgoInput | CaseRequestCreateOrConnectWithoutAdoptedByNgoInput[]
    upsert?: CaseRequestUpsertWithWhereUniqueWithoutAdoptedByNgoInput | CaseRequestUpsertWithWhereUniqueWithoutAdoptedByNgoInput[]
    createMany?: CaseRequestCreateManyAdoptedByNgoInputEnvelope
    set?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    disconnect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    delete?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    connect?: CaseRequestWhereUniqueInput | CaseRequestWhereUniqueInput[]
    update?: CaseRequestUpdateWithWhereUniqueWithoutAdoptedByNgoInput | CaseRequestUpdateWithWhereUniqueWithoutAdoptedByNgoInput[]
    updateMany?: CaseRequestUpdateManyWithWhereWithoutAdoptedByNgoInput | CaseRequestUpdateManyWithWhereWithoutAdoptedByNgoInput[]
    deleteMany?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
  }

  export type NgoCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<NgoCreateWithoutCampaignsInput, NgoUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: NgoCreateOrConnectWithoutCampaignsInput
    connect?: NgoWhereUniqueInput
  }

  export type CampaignUpdateCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput> | CampaignUpdateCreateWithoutCampaignInput[] | CampaignUpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutCampaignInput | CampaignUpdateCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignUpdateCreateManyCampaignInputEnvelope
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CampaignUpdateUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput> | CampaignUpdateCreateWithoutCampaignInput[] | CampaignUpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutCampaignInput | CampaignUpdateCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignUpdateCreateManyCampaignInputEnvelope
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type NgoUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<NgoCreateWithoutCampaignsInput, NgoUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: NgoCreateOrConnectWithoutCampaignsInput
    upsert?: NgoUpsertWithoutCampaignsInput
    connect?: NgoWhereUniqueInput
    update?: XOR<XOR<NgoUpdateToOneWithWhereWithoutCampaignsInput, NgoUpdateWithoutCampaignsInput>, NgoUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignUpdateUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput> | CampaignUpdateCreateWithoutCampaignInput[] | CampaignUpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutCampaignInput | CampaignUpdateCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignUpdateUpsertWithWhereUniqueWithoutCampaignInput | CampaignUpdateUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignUpdateCreateManyCampaignInputEnvelope
    set?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    disconnect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    delete?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    update?: CampaignUpdateUpdateWithWhereUniqueWithoutCampaignInput | CampaignUpdateUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignUpdateUpdateManyWithWhereWithoutCampaignInput | CampaignUpdateUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignUpdateUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput> | CampaignUpdateCreateWithoutCampaignInput[] | CampaignUpdateUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignUpdateCreateOrConnectWithoutCampaignInput | CampaignUpdateCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignUpdateUpsertWithWhereUniqueWithoutCampaignInput | CampaignUpdateUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignUpdateCreateManyCampaignInputEnvelope
    set?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    disconnect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    delete?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    connect?: CampaignUpdateWhereUniqueInput | CampaignUpdateWhereUniqueInput[]
    update?: CampaignUpdateUpdateWithWhereUniqueWithoutCampaignInput | CampaignUpdateUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignUpdateUpdateManyWithWhereWithoutCampaignInput | CampaignUpdateUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutDonationsInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
  }

  export type EnumDonationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DonationStatus
  }

  export type CampaignUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    upsert?: CampaignUpsertWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutDonationsInput, CampaignUpdateWithoutDonationsInput>, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutUpdatesInput
    connect?: CampaignWhereUniqueInput
  }

  export type NgoCreateNestedOneWithoutCampaignUpdatesInput = {
    create?: XOR<NgoCreateWithoutCampaignUpdatesInput, NgoUncheckedCreateWithoutCampaignUpdatesInput>
    connectOrCreate?: NgoCreateOrConnectWithoutCampaignUpdatesInput
    connect?: NgoWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutUpdatesInput
    upsert?: CampaignUpsertWithoutUpdatesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutUpdatesInput, CampaignUpdateWithoutUpdatesInput>, CampaignUncheckedUpdateWithoutUpdatesInput>
  }

  export type NgoUpdateOneRequiredWithoutCampaignUpdatesNestedInput = {
    create?: XOR<NgoCreateWithoutCampaignUpdatesInput, NgoUncheckedCreateWithoutCampaignUpdatesInput>
    connectOrCreate?: NgoCreateOrConnectWithoutCampaignUpdatesInput
    upsert?: NgoUpsertWithoutCampaignUpdatesInput
    connect?: NgoWhereUniqueInput
    update?: XOR<XOR<NgoUpdateToOneWithWhereWithoutCampaignUpdatesInput, NgoUpdateWithoutCampaignUpdatesInput>, NgoUncheckedUpdateWithoutCampaignUpdatesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
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

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumNgoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NgoStatus | EnumNgoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNgoStatusFilter<$PrismaModel> | $Enums.NgoStatus
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

  export type NestedEnumNgoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NgoStatus | EnumNgoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NgoStatus[] | ListEnumNgoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNgoStatusWithAggregatesFilter<$PrismaModel> | $Enums.NgoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNgoStatusFilter<$PrismaModel>
    _max?: NestedEnumNgoStatusFilter<$PrismaModel>
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

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus
  }

  export type NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationStatusFilter<$PrismaModel>
  }

  export type CaseRequestCreateWithoutDistrictInput = {
    title: string
    description: string
    amount: number
    category: $Enums.Category
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    campaignId?: number | null
    adoptedByNgo?: NgoCreateNestedOneWithoutAdoptedCasesInput
  }

  export type CaseRequestUncheckedCreateWithoutDistrictInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    adoptedByNgoId?: number | null
    campaignId?: number | null
  }

  export type CaseRequestCreateOrConnectWithoutDistrictInput = {
    where: CaseRequestWhereUniqueInput
    create: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput>
  }

  export type CaseRequestCreateManyDistrictInputEnvelope = {
    data: CaseRequestCreateManyDistrictInput | CaseRequestCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type NgoCreateWithoutDistrictInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNgoInput
    campaigns?: CampaignCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoUncheckedCreateWithoutDistrictInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutNgoInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoCreateOrConnectWithoutDistrictInput = {
    where: NgoWhereUniqueInput
    create: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput>
  }

  export type NgoCreateManyDistrictInputEnvelope = {
    data: NgoCreateManyDistrictInput | NgoCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type CaseRequestUpsertWithWhereUniqueWithoutDistrictInput = {
    where: CaseRequestWhereUniqueInput
    update: XOR<CaseRequestUpdateWithoutDistrictInput, CaseRequestUncheckedUpdateWithoutDistrictInput>
    create: XOR<CaseRequestCreateWithoutDistrictInput, CaseRequestUncheckedCreateWithoutDistrictInput>
  }

  export type CaseRequestUpdateWithWhereUniqueWithoutDistrictInput = {
    where: CaseRequestWhereUniqueInput
    data: XOR<CaseRequestUpdateWithoutDistrictInput, CaseRequestUncheckedUpdateWithoutDistrictInput>
  }

  export type CaseRequestUpdateManyWithWhereWithoutDistrictInput = {
    where: CaseRequestScalarWhereInput
    data: XOR<CaseRequestUpdateManyMutationInput, CaseRequestUncheckedUpdateManyWithoutDistrictInput>
  }

  export type CaseRequestScalarWhereInput = {
    AND?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
    OR?: CaseRequestScalarWhereInput[]
    NOT?: CaseRequestScalarWhereInput | CaseRequestScalarWhereInput[]
    id?: IntFilter<"CaseRequest"> | number
    title?: StringFilter<"CaseRequest"> | string
    description?: StringFilter<"CaseRequest"> | string
    amount?: IntFilter<"CaseRequest"> | number
    category?: EnumCategoryFilter<"CaseRequest"> | $Enums.Category
    districtId?: IntFilter<"CaseRequest"> | number
    documents?: StringFilter<"CaseRequest"> | string
    status?: EnumCaseStatusFilter<"CaseRequest"> | $Enums.CaseStatus
    submittedAt?: DateTimeFilter<"CaseRequest"> | Date | string
    adoptedByNgoId?: IntNullableFilter<"CaseRequest"> | number | null
    campaignId?: IntNullableFilter<"CaseRequest"> | number | null
  }

  export type NgoUpsertWithWhereUniqueWithoutDistrictInput = {
    where: NgoWhereUniqueInput
    update: XOR<NgoUpdateWithoutDistrictInput, NgoUncheckedUpdateWithoutDistrictInput>
    create: XOR<NgoCreateWithoutDistrictInput, NgoUncheckedCreateWithoutDistrictInput>
  }

  export type NgoUpdateWithWhereUniqueWithoutDistrictInput = {
    where: NgoWhereUniqueInput
    data: XOR<NgoUpdateWithoutDistrictInput, NgoUncheckedUpdateWithoutDistrictInput>
  }

  export type NgoUpdateManyWithWhereWithoutDistrictInput = {
    where: NgoScalarWhereInput
    data: XOR<NgoUpdateManyMutationInput, NgoUncheckedUpdateManyWithoutDistrictInput>
  }

  export type NgoScalarWhereInput = {
    AND?: NgoScalarWhereInput | NgoScalarWhereInput[]
    OR?: NgoScalarWhereInput[]
    NOT?: NgoScalarWhereInput | NgoScalarWhereInput[]
    id?: IntFilter<"Ngo"> | number
    name?: StringFilter<"Ngo"> | string
    nameUrdu?: StringNullableFilter<"Ngo"> | string | null
    registrationNumber?: StringFilter<"Ngo"> | string
    districtId?: IntFilter<"Ngo"> | number
    categories?: StringFilter<"Ngo"> | string
    email?: StringFilter<"Ngo"> | string
    phone?: StringFilter<"Ngo"> | string
    address?: StringFilter<"Ngo"> | string
    website?: StringNullableFilter<"Ngo"> | string | null
    bankAccount?: StringFilter<"Ngo"> | string
    ifsc?: StringFilter<"Ngo"> | string
    accountHolder?: StringFilter<"Ngo"> | string
    bankName?: StringFilter<"Ngo"> | string
    upiId?: StringNullableFilter<"Ngo"> | string | null
    status?: EnumNgoStatusFilter<"Ngo"> | $Enums.NgoStatus
    rejectionReason?: StringNullableFilter<"Ngo"> | string | null
    documents?: StringFilter<"Ngo"> | string
    createdAt?: DateTimeFilter<"Ngo"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Ngo"> | Date | string | null
    updatedAt?: DateTimeFilter<"Ngo"> | Date | string
  }

  export type NgoCreateWithoutAdoptedCasesInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNgoInput
    campaigns?: CampaignCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateCreateNestedManyWithoutNgoInput
    district: DistrictCreateNestedOneWithoutNgosInput
  }

  export type NgoUncheckedCreateWithoutAdoptedCasesInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutNgoInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput
  }

  export type NgoCreateOrConnectWithoutAdoptedCasesInput = {
    where: NgoWhereUniqueInput
    create: XOR<NgoCreateWithoutAdoptedCasesInput, NgoUncheckedCreateWithoutAdoptedCasesInput>
  }

  export type DistrictCreateWithoutCasesInput = {
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    ngos?: NgoCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutCasesInput = {
    id?: number
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    ngos?: NgoUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutCasesInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutCasesInput, DistrictUncheckedCreateWithoutCasesInput>
  }

  export type NgoUpsertWithoutAdoptedCasesInput = {
    update: XOR<NgoUpdateWithoutAdoptedCasesInput, NgoUncheckedUpdateWithoutAdoptedCasesInput>
    create: XOR<NgoCreateWithoutAdoptedCasesInput, NgoUncheckedCreateWithoutAdoptedCasesInput>
    where?: NgoWhereInput
  }

  export type NgoUpdateToOneWithWhereWithoutAdoptedCasesInput = {
    where?: NgoWhereInput
    data: XOR<NgoUpdateWithoutAdoptedCasesInput, NgoUncheckedUpdateWithoutAdoptedCasesInput>
  }

  export type NgoUpdateWithoutAdoptedCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUpdateManyWithoutNgoNestedInput
    district?: DistrictUpdateOneRequiredWithoutNgosNestedInput
  }

  export type NgoUncheckedUpdateWithoutAdoptedCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput
  }

  export type DistrictUpsertWithoutCasesInput = {
    update: XOR<DistrictUpdateWithoutCasesInput, DistrictUncheckedUpdateWithoutCasesInput>
    create: XOR<DistrictCreateWithoutCasesInput, DistrictUncheckedCreateWithoutCasesInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutCasesInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutCasesInput, DistrictUncheckedUpdateWithoutCasesInput>
  }

  export type DistrictUpdateWithoutCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ngos?: NgoUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ngos?: NgoUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type NgoCreateWithoutUserInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestCreateNestedManyWithoutAdoptedByNgoInput
    district: DistrictCreateNestedOneWithoutNgosInput
  }

  export type NgoUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutNgoInput
    campaignUpdates?: CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoCreateOrConnectWithoutUserInput = {
    where: NgoWhereUniqueInput
    create: XOR<NgoCreateWithoutUserInput, NgoUncheckedCreateWithoutUserInput>
  }

  export type NgoUpsertWithoutUserInput = {
    update: XOR<NgoUpdateWithoutUserInput, NgoUncheckedUpdateWithoutUserInput>
    create: XOR<NgoCreateWithoutUserInput, NgoUncheckedCreateWithoutUserInput>
    where?: NgoWhereInput
  }

  export type NgoUpdateToOneWithWhereWithoutUserInput = {
    where?: NgoWhereInput
    data: XOR<NgoUpdateWithoutUserInput, NgoUncheckedUpdateWithoutUserInput>
  }

  export type NgoUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput
    district?: DistrictUpdateOneRequiredWithoutNgosNestedInput
  }

  export type NgoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type UserCreateWithoutNgoInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNgoInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNgoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
  }

  export type CampaignCreateWithoutNgoInput = {
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    updates?: CampaignUpdateCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutNgoInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    updates?: CampaignUpdateUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutNgoInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput>
  }

  export type CampaignCreateManyNgoInputEnvelope = {
    data: CampaignCreateManyNgoInput | CampaignCreateManyNgoInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpdateCreateWithoutNgoInput = {
    content: string
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutUpdatesInput
  }

  export type CampaignUpdateUncheckedCreateWithoutNgoInput = {
    id?: number
    campaignId: number
    content: string
    createdAt?: Date | string
  }

  export type CampaignUpdateCreateOrConnectWithoutNgoInput = {
    where: CampaignUpdateWhereUniqueInput
    create: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput>
  }

  export type CampaignUpdateCreateManyNgoInputEnvelope = {
    data: CampaignUpdateCreateManyNgoInput | CampaignUpdateCreateManyNgoInput[]
    skipDuplicates?: boolean
  }

  export type CaseRequestCreateWithoutAdoptedByNgoInput = {
    title: string
    description: string
    amount: number
    category: $Enums.Category
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    campaignId?: number | null
    district: DistrictCreateNestedOneWithoutCasesInput
  }

  export type CaseRequestUncheckedCreateWithoutAdoptedByNgoInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    districtId: number
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    campaignId?: number | null
  }

  export type CaseRequestCreateOrConnectWithoutAdoptedByNgoInput = {
    where: CaseRequestWhereUniqueInput
    create: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput>
  }

  export type CaseRequestCreateManyAdoptedByNgoInputEnvelope = {
    data: CaseRequestCreateManyAdoptedByNgoInput | CaseRequestCreateManyAdoptedByNgoInput[]
    skipDuplicates?: boolean
  }

  export type DistrictCreateWithoutNgosInput = {
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    cases?: CaseRequestCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutNgosInput = {
    id?: number
    name: string
    isCapital?: boolean
    createdAt?: Date | string
    cases?: CaseRequestUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutNgosInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutNgosInput, DistrictUncheckedCreateWithoutNgosInput>
  }

  export type UserUpsertWithoutNgoInput = {
    update: XOR<UserUpdateWithoutNgoInput, UserUncheckedUpdateWithoutNgoInput>
    create: XOR<UserCreateWithoutNgoInput, UserUncheckedCreateWithoutNgoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNgoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNgoInput, UserUncheckedUpdateWithoutNgoInput>
  }

  export type UserUpdateWithoutNgoInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutNgoInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutNgoInput, CampaignUncheckedUpdateWithoutNgoInput>
    create: XOR<CampaignCreateWithoutNgoInput, CampaignUncheckedCreateWithoutNgoInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutNgoInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutNgoInput, CampaignUncheckedUpdateWithoutNgoInput>
  }

  export type CampaignUpdateManyWithWhereWithoutNgoInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutNgoInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: IntFilter<"Campaign"> | number
    ngoId?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: EnumCategoryFilter<"Campaign"> | $Enums.Category
    goalAmount?: IntFilter<"Campaign"> | number
    verifiedAmount?: IntFilter<"Campaign"> | number
    pendingAmount?: IntFilter<"Campaign"> | number
    deadline?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    upiId?: StringFilter<"Campaign"> | string
    bankAccount?: StringFilter<"Campaign"> | string
    ifsc?: StringFilter<"Campaign"> | string
    accountHolder?: StringFilter<"Campaign"> | string
    bankName?: StringFilter<"Campaign"> | string
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    closedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
  }

  export type CampaignUpdateUpsertWithWhereUniqueWithoutNgoInput = {
    where: CampaignUpdateWhereUniqueInput
    update: XOR<CampaignUpdateUpdateWithoutNgoInput, CampaignUpdateUncheckedUpdateWithoutNgoInput>
    create: XOR<CampaignUpdateCreateWithoutNgoInput, CampaignUpdateUncheckedCreateWithoutNgoInput>
  }

  export type CampaignUpdateUpdateWithWhereUniqueWithoutNgoInput = {
    where: CampaignUpdateWhereUniqueInput
    data: XOR<CampaignUpdateUpdateWithoutNgoInput, CampaignUpdateUncheckedUpdateWithoutNgoInput>
  }

  export type CampaignUpdateUpdateManyWithWhereWithoutNgoInput = {
    where: CampaignUpdateScalarWhereInput
    data: XOR<CampaignUpdateUpdateManyMutationInput, CampaignUpdateUncheckedUpdateManyWithoutNgoInput>
  }

  export type CampaignUpdateScalarWhereInput = {
    AND?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
    OR?: CampaignUpdateScalarWhereInput[]
    NOT?: CampaignUpdateScalarWhereInput | CampaignUpdateScalarWhereInput[]
    id?: IntFilter<"CampaignUpdate"> | number
    campaignId?: IntFilter<"CampaignUpdate"> | number
    ngoId?: IntFilter<"CampaignUpdate"> | number
    content?: StringFilter<"CampaignUpdate"> | string
    createdAt?: DateTimeFilter<"CampaignUpdate"> | Date | string
  }

  export type CaseRequestUpsertWithWhereUniqueWithoutAdoptedByNgoInput = {
    where: CaseRequestWhereUniqueInput
    update: XOR<CaseRequestUpdateWithoutAdoptedByNgoInput, CaseRequestUncheckedUpdateWithoutAdoptedByNgoInput>
    create: XOR<CaseRequestCreateWithoutAdoptedByNgoInput, CaseRequestUncheckedCreateWithoutAdoptedByNgoInput>
  }

  export type CaseRequestUpdateWithWhereUniqueWithoutAdoptedByNgoInput = {
    where: CaseRequestWhereUniqueInput
    data: XOR<CaseRequestUpdateWithoutAdoptedByNgoInput, CaseRequestUncheckedUpdateWithoutAdoptedByNgoInput>
  }

  export type CaseRequestUpdateManyWithWhereWithoutAdoptedByNgoInput = {
    where: CaseRequestScalarWhereInput
    data: XOR<CaseRequestUpdateManyMutationInput, CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoInput>
  }

  export type DistrictUpsertWithoutNgosInput = {
    update: XOR<DistrictUpdateWithoutNgosInput, DistrictUncheckedUpdateWithoutNgosInput>
    create: XOR<DistrictCreateWithoutNgosInput, DistrictUncheckedCreateWithoutNgosInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutNgosInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutNgosInput, DistrictUncheckedUpdateWithoutNgosInput>
  }

  export type DistrictUpdateWithoutNgosInput = {
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseRequestUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutNgosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isCapital?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseRequestUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type NgoCreateWithoutCampaignsInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNgoInput
    campaignUpdates?: CampaignUpdateCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestCreateNestedManyWithoutAdoptedByNgoInput
    district: DistrictCreateNestedOneWithoutNgosInput
  }

  export type NgoUncheckedCreateWithoutCampaignsInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutNgoInput
    campaignUpdates?: CampaignUpdateUncheckedCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoCreateOrConnectWithoutCampaignsInput = {
    where: NgoWhereUniqueInput
    create: XOR<NgoCreateWithoutCampaignsInput, NgoUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignUpdateCreateWithoutCampaignInput = {
    content: string
    createdAt?: Date | string
    ngo: NgoCreateNestedOneWithoutCampaignUpdatesInput
  }

  export type CampaignUpdateUncheckedCreateWithoutCampaignInput = {
    id?: number
    ngoId: number
    content: string
    createdAt?: Date | string
  }

  export type CampaignUpdateCreateOrConnectWithoutCampaignInput = {
    where: CampaignUpdateWhereUniqueInput
    create: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignUpdateCreateManyCampaignInputEnvelope = {
    data: CampaignUpdateCreateManyCampaignInput | CampaignUpdateCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutCampaignInput = {
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
  }

  export type DonationUncheckedCreateWithoutCampaignInput = {
    id?: number
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationCreateManyCampaignInputEnvelope = {
    data: DonationCreateManyCampaignInput | DonationCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type NgoUpsertWithoutCampaignsInput = {
    update: XOR<NgoUpdateWithoutCampaignsInput, NgoUncheckedUpdateWithoutCampaignsInput>
    create: XOR<NgoCreateWithoutCampaignsInput, NgoUncheckedCreateWithoutCampaignsInput>
    where?: NgoWhereInput
  }

  export type NgoUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: NgoWhereInput
    data: XOR<NgoUpdateWithoutCampaignsInput, NgoUncheckedUpdateWithoutCampaignsInput>
  }

  export type NgoUpdateWithoutCampaignsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput
    district?: DistrictUpdateOneRequiredWithoutNgosNestedInput
  }

  export type NgoUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type CampaignUpdateUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignUpdateWhereUniqueInput
    update: XOR<CampaignUpdateUpdateWithoutCampaignInput, CampaignUpdateUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignUpdateCreateWithoutCampaignInput, CampaignUpdateUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignUpdateUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignUpdateWhereUniqueInput
    data: XOR<CampaignUpdateUpdateWithoutCampaignInput, CampaignUpdateUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignUpdateUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignUpdateScalarWhereInput
    data: XOR<CampaignUpdateUpdateManyMutationInput, CampaignUpdateUncheckedUpdateManyWithoutCampaignInput>
  }

  export type DonationUpsertWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
  }

  export type DonationUpdateManyWithWhereWithoutCampaignInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutCampaignInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    campaignId?: IntFilter<"Donation"> | number
    donorName?: StringNullableFilter<"Donation"> | string | null
    amount?: IntFilter<"Donation"> | number
    utrLast4?: StringFilter<"Donation"> | string
    paymentTime?: DateTimeFilter<"Donation"> | Date | string
    screenshotUrl?: StringNullableFilter<"Donation"> | string | null
    status?: EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus
    verifiedAt?: DateTimeNullableFilter<"Donation"> | Date | string | null
    reportedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type CampaignCreateWithoutDonationsInput = {
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    ngo: NgoCreateNestedOneWithoutCampaignsInput
    updates?: CampaignUpdateCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutDonationsInput = {
    id?: number
    ngoId: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    updates?: CampaignUpdateUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutDonationsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
  }

  export type CampaignUpsertWithoutDonationsInput = {
    update: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutDonationsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignUpdateWithoutDonationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngo?: NgoUpdateOneRequiredWithoutCampaignsNestedInput
    updates?: CampaignUpdateUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: CampaignUpdateUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutUpdatesInput = {
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    ngo: NgoCreateNestedOneWithoutCampaignsInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutUpdatesInput = {
    id?: number
    ngoId: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUpdatesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
  }

  export type NgoCreateWithoutCampaignUpdatesInput = {
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNgoInput
    campaigns?: CampaignCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestCreateNestedManyWithoutAdoptedByNgoInput
    district: DistrictCreateNestedOneWithoutNgosInput
  }

  export type NgoUncheckedCreateWithoutCampaignUpdatesInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    districtId: number
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutNgoInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutNgoInput
    adoptedCases?: CaseRequestUncheckedCreateNestedManyWithoutAdoptedByNgoInput
  }

  export type NgoCreateOrConnectWithoutCampaignUpdatesInput = {
    where: NgoWhereUniqueInput
    create: XOR<NgoCreateWithoutCampaignUpdatesInput, NgoUncheckedCreateWithoutCampaignUpdatesInput>
  }

  export type CampaignUpsertWithoutUpdatesInput = {
    update: XOR<CampaignUpdateWithoutUpdatesInput, CampaignUncheckedUpdateWithoutUpdatesInput>
    create: XOR<CampaignCreateWithoutUpdatesInput, CampaignUncheckedCreateWithoutUpdatesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutUpdatesInput, CampaignUncheckedUpdateWithoutUpdatesInput>
  }

  export type CampaignUpdateWithoutUpdatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngo?: NgoUpdateOneRequiredWithoutCampaignsNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUpdatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type NgoUpsertWithoutCampaignUpdatesInput = {
    update: XOR<NgoUpdateWithoutCampaignUpdatesInput, NgoUncheckedUpdateWithoutCampaignUpdatesInput>
    create: XOR<NgoCreateWithoutCampaignUpdatesInput, NgoUncheckedCreateWithoutCampaignUpdatesInput>
    where?: NgoWhereInput
  }

  export type NgoUpdateToOneWithWhereWithoutCampaignUpdatesInput = {
    where?: NgoWhereInput
    data: XOR<NgoUpdateWithoutCampaignUpdatesInput, NgoUncheckedUpdateWithoutCampaignUpdatesInput>
  }

  export type NgoUpdateWithoutCampaignUpdatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput
    district?: DistrictUpdateOneRequiredWithoutNgosNestedInput
  }

  export type NgoUncheckedUpdateWithoutCampaignUpdatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    districtId?: IntFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type CaseRequestCreateManyDistrictInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    adoptedByNgoId?: number | null
    campaignId?: number | null
  }

  export type NgoCreateManyDistrictInput = {
    id?: number
    name: string
    nameUrdu?: string | null
    registrationNumber: string
    categories: string
    email: string
    phone: string
    address: string
    website?: string | null
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    upiId?: string | null
    status?: $Enums.NgoStatus
    rejectionReason?: string | null
    documents?: string
    createdAt?: Date | string
    verifiedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CaseRequestUpdateWithoutDistrictInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedByNgo?: NgoUpdateOneWithoutAdoptedCasesNestedInput
  }

  export type CaseRequestUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adoptedByNgoId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseRequestUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adoptedByNgoId?: NullableIntFieldUpdateOperationsInput | number | null
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NgoUpdateWithoutDistrictInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type NgoUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutNgoNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutNgoNestedInput
    campaignUpdates?: CampaignUpdateUncheckedUpdateManyWithoutNgoNestedInput
    adoptedCases?: CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoNestedInput
  }

  export type NgoUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrdu?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumNgoStatusFieldUpdateOperationsInput | $Enums.NgoStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyNgoInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    goalAmount: number
    verifiedAmount?: number
    pendingAmount?: number
    deadline?: Date | string | null
    imageUrl?: string | null
    upiId: string
    bankAccount: string
    ifsc: string
    accountHolder: string
    bankName: string
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type CampaignUpdateCreateManyNgoInput = {
    id?: number
    campaignId: number
    content: string
    createdAt?: Date | string
  }

  export type CaseRequestCreateManyAdoptedByNgoInput = {
    id?: number
    title: string
    description: string
    amount: number
    category: $Enums.Category
    districtId: number
    documents?: string
    status?: $Enums.CaseStatus
    submittedAt?: Date | string
    campaignId?: number | null
  }

  export type CampaignUpdateWithoutNgoInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: CampaignUpdateUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: CampaignUpdateUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    goalAmount?: IntFieldUpdateOperationsInput | number
    verifiedAmount?: IntFieldUpdateOperationsInput | number
    pendingAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: StringFieldUpdateOperationsInput | string
    bankAccount?: StringFieldUpdateOperationsInput | string
    ifsc?: StringFieldUpdateOperationsInput | string
    accountHolder?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignUpdateUpdateWithoutNgoInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type CampaignUpdateUncheckedUpdateWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateUncheckedUpdateManyWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseRequestUpdateWithoutAdoptedByNgoInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    district?: DistrictUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CaseRequestUncheckedUpdateWithoutAdoptedByNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    districtId?: IntFieldUpdateOperationsInput | number
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseRequestUncheckedUpdateManyWithoutAdoptedByNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    districtId?: IntFieldUpdateOperationsInput | number
    documents?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CampaignUpdateCreateManyCampaignInput = {
    id?: number
    ngoId: number
    content: string
    createdAt?: Date | string
  }

  export type DonationCreateManyCampaignInput = {
    id?: number
    donorName?: string | null
    amount: number
    utrLast4: string
    paymentTime: Date | string
    screenshotUrl?: string | null
    status?: $Enums.DonationStatus
    verifiedAt?: Date | string | null
    reportedAt?: Date | string
  }

  export type CampaignUpdateUpdateWithoutCampaignInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ngo?: NgoUpdateOneRequiredWithoutCampaignUpdatesNestedInput
  }

  export type CampaignUpdateUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutCampaignInput = {
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    utrLast4?: StringFieldUpdateOperationsInput | string
    paymentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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