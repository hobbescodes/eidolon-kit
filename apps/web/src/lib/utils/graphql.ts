import { initGraphQLTada } from "gql.tada";

import type { introspection } from "../../../graphql-env.d.ts";

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    BigInt: bigint;
    Boolean: boolean;
    Int: number;
    String: string;
  };
}>();

export { readFragment } from "gql.tada";
