"use client";

import { useQuery } from "@tanstack/react-query";
import { anvil } from "wagmi/chains";

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
  const result = useQuery({
    queryKey: ["currentNumber", anvil.id],
    queryFn: () =>
      fetchgql({
        query: CurrentNumberQuery,
        variables: {
          id: anvil.id.toString(),
        },
      }),
    select: (data) => data?.counter?.value,
  });

  return result;
};

export default useCurrentNumber;
