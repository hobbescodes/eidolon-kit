import { GraphQLClient } from "graphql-request";

import { env } from "@eidolonkit/env/web";

import type { TadaDocumentNode } from "gql.tada";
import type { Variables } from "graphql-request";

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

interface Props<TData, TVariables> {
  query: TadaDocumentNode<TData, TVariables, void>;
  variables?: TVariables;
  options?: (HeadersInit & FetchOptions) | FetchOptions;
}

const fetchgql = async <TData, TVariables>({
  query,
  variables,
  options,
}: Props<TData, TVariables>): Promise<TData> => {
  const { next, cache, ...restOptions } = options || {};

  const client = new GraphQLClient(env.NEXT_PUBLIC_PONDER_API_URL, {
    headers: {
      "Content-Type": "application/json",
      ...restOptions,
    },
    next,
    cache: cache ?? "default",
  });

  return client.request(query, variables as Variables);
};

export default fetchgql;
