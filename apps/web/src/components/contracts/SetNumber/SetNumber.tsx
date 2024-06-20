"use client";

import { useAccount } from "wagmi";

import { Button, NumberInput } from "@eidolonkit/ui";

const SetNumber = () => {
  const { isConnected } = useAccount();

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
        disabled={!isConnected}
      />
      <Button disabled={!isConnected}>Set</Button>
    </div>
  );
};

export default SetNumber;
