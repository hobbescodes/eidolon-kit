"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";

import { contractAddress } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { Button, NumberInput } from "@eidolonkit/ui";

import { Submit } from "components/core";
import { useCurrentNumber, useTransactionReceipt } from "lib/hooks";

const SetNumber = () => {
  const [number, setNumber] = useState<number>();

  const { isConnected } = useAccount();

  const { refetch } = useCurrentNumber();

  const { data: setNumberTxHash, writeContractAsync } = useWriteContract();

  const { isLoading } = useTransactionReceipt({
    hash: setNumberTxHash,
    onSuccess: refetch,
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
      <Submit isLoading={isLoading}>
        <Button
          disabled={isLoading || !isConnected || !number}
          onClick={handleSetNumber}
        >
          Set
        </Button>
      </Submit>
    </div>
  );
};

export default SetNumber;
