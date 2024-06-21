"use client";

import { useQuery } from "@tanstack/react-query";
import { useChainId } from "wagmi";

import { fetchgql, graphql } from "lib/utils";

const CurrentNumberQuery = graphql(`
  query Counter($id: String!) {
    counter(id: $id) {
      id
      value
    }
  }
  `);

const useCurrentNumber = () => {
  // !NB: defaults to first chain from `chains` in config
  const chainId = useChainId();

  const result = useQuery({
    queryKey: ["currentNumber", { chainId }],
    queryFn: () =>
      fetchgql({
        query: CurrentNumberQuery,
        variables: {
          id: chainId.toString(),
        },
      }),
    select: (data) => data?.counter?.value,
  });

  return result;
};

export default useCurrentNumber;
