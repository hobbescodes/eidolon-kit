"use client";

import { useReadContract } from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";

const useCurrentNumber = () => {
  const result = useReadContract({
    address: contractAddress,
    abi: counterAbi,
    functionName: "number",
  });

  return result;
};

export default useCurrentNumber;
