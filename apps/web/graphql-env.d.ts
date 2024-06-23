/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: "Query";
  mutation: never;
  subscription: never;
  types: {
    BigInt: unknown;
    Boolean: unknown;
    Counter: {
      kind: "OBJECT";
      name: "Counter";
      fields: {
        id: {
          name: "id";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
        };
        value: {
          name: "value";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          };
        };
      };
    };
    CounterFilter: {
      kind: "INPUT_OBJECT";
      name: "CounterFilter";
      isOneOf: false;
      inputFields: [
        {
          name: "AND";
          type: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "CounterFilter";
              ofType: null;
            };
          };
          defaultValue: null;
        },
        {
          name: "OR";
          type: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "INPUT_OBJECT";
              name: "CounterFilter";
              ofType: null;
            };
          };
          defaultValue: null;
        },
        {
          name: "id";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_contains";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_ends_with";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "id_not";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_not_contains";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_not_ends_with";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_not_in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "String"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "id_not_starts_with";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "id_starts_with";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_gt";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_gte";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          };
          defaultValue: null;
        },
        {
          name: "value_lt";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_lte";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_not";
          type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          defaultValue: null;
        },
        {
          name: "value_not_in";
          type: {
            kind: "LIST";
            name: never;
            ofType: { kind: "SCALAR"; name: "BigInt"; ofType: null };
          };
          defaultValue: null;
        },
      ];
    };
    CounterPage: {
      kind: "OBJECT";
      name: "CounterPage";
      fields: {
        items: {
          name: "items";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: {
              kind: "LIST";
              name: never;
              ofType: {
                kind: "NON_NULL";
                name: never;
                ofType: { kind: "OBJECT"; name: "Counter"; ofType: null };
              };
            };
          };
        };
        pageInfo: {
          name: "pageInfo";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
          };
        };
      };
    };
    Int: unknown;
    PageInfo: {
      kind: "OBJECT";
      name: "PageInfo";
      fields: {
        endCursor: {
          name: "endCursor";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        hasNextPage: {
          name: "hasNextPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
        };
        hasPreviousPage: {
          name: "hasPreviousPage";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
          };
        };
        startCursor: {
          name: "startCursor";
          type: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
    Query: {
      kind: "OBJECT";
      name: "Query";
      fields: {
        counter: {
          name: "counter";
          type: { kind: "OBJECT"; name: "Counter"; ofType: null };
        };
        counters: {
          name: "counters";
          type: {
            kind: "NON_NULL";
            name: never;
            ofType: { kind: "OBJECT"; name: "CounterPage"; ofType: null };
          };
        };
      };
    };
    String: unknown;
  };
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
