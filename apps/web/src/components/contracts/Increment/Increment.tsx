"use client";

import { useAccount, useWriteContract } from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { Button } from "@eidolonkit/ui";

import { Submit } from "components/core";
import { useCurrentNumber, useTransactionReceipt } from "lib/hooks";

import type { ButtonProps } from "@eidolonkit/ui";

const Increment = ({ ...props }: ButtonProps) => {
  const { isConnected } = useAccount();

  const { refetch } = useCurrentNumber();

  const { data: incrementTxHash, writeContract } = useWriteContract();

  const { isLoading } = useTransactionReceipt({
    hash: incrementTxHash,
    onSuccess: refetch,
  });

  const increment = () =>
    writeContract({
      address: contractAddress,
      abi: counterAbi,
      functionName: "increment",
    });

  return (
    <Submit isLoading={isLoading} className="w-full">
      <Button
        onClick={increment}
        disabled={isLoading || !isConnected}
        {...props}
      >
        Increment
      </Button>
    </Submit>
  );
};

export default Increment;
