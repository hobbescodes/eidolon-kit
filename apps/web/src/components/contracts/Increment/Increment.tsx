"use client";

import { useWriteContract } from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { Button } from "@eidolonkit/ui";

const Increment = () => {
  const { writeContract } = useWriteContract();

  const increment = () =>
    writeContract({
      address: contractAddress,
      abi: counterAbi,
      functionName: "increment",
    });

  return <Button onClick={increment}>Increment</Button>;
};

export default Increment;
