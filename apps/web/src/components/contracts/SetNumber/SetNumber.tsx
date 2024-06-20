"use client";

import { useEffect, useState } from "react";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { Button, NumberInput } from "@eidolonkit/ui";

import { useCurrentNumber } from "lib/hooks";
import { cn } from "lib/utils";

const SetNumber = () => {
  const [number, setNumber] = useState<number>();

  const { isConnected } = useAccount();

  const { refetch } = useCurrentNumber();

  const { data: setNumberTxHash, writeContractAsync } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: setNumberTxHash,
    query: {
      enabled: !!setNumberTxHash,
    },
  });

  const handleSetNumber = async () => {
    if (!number) return;

    await writeContractAsync({
      address: contractAddress,
      abi: counterAbi,
      functionName: "setNumber",
      args: [BigInt(number)],
    });

    setNumber(undefined);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <div className="flex items-center gap-2 max-w-xs">
      <NumberInput
        id="number"
        className="flex-1"
        placeholder="Set number..."
        allowOverflow={false}
        min={0}
        formatOptions={{
          maximumFractionDigits: 0,
        }}
        disabled={isLoading || !isConnected}
        value={number ?? ""}
        // @ts-ignore - TODO: fix TS issues with imported components from ui package
        onValueChange={({ valueAsNumber }) => setNumber(valueAsNumber)}
      />
      <Button
        className={cn(isLoading && "animate-pulse")}
        disabled={isLoading || !isConnected || !number}
        onClick={handleSetNumber}
      >
        Set
      </Button>
    </div>
  );
};

export default SetNumber;
