"use client";

import { useEffect } from "react";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { Button } from "@eidolonkit/ui";

import { useCurrentNumber } from "lib/hooks";
import { cn } from "lib/utils";

import type { ButtonProps } from "@eidolonkit/ui";

const Increment = ({ className, ...rest }: ButtonProps) => {
  const { isConnected } = useAccount();

  const { refetch } = useCurrentNumber();

  const { data: incrementTxHash, writeContract } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: incrementTxHash,
    query: {
      enabled: !!incrementTxHash,
    },
  });

  const increment = () =>
    writeContract({
      address: contractAddress,
      abi: counterAbi,
      functionName: "increment",
      // TODO: refactor to remove this. Flaky RPC issues. Could try: https://github.com/foundry-rs/foundry/pull/4324
      gas: 100000n,
    });

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <Button
      onClick={increment}
      disabled={isLoading || !isConnected}
      className={cn(className, isLoading && "animate-pulse")}
      {...rest}
    >
      Increment
    </Button>
  );
};

export default Increment;
