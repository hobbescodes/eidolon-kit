"use client";

import { useAccount } from "wagmi";

import { Button, Input } from "@eidolonkit/ui";

const SetNumber = () => {
  const { isConnected } = useAccount();

  return (
    <div className="flex items-center gap-2 max-w-xs">
      <Input
        id="number"
        placeholder="Enter a number..."
        className="flex-1"
        disabled={!isConnected}
      />
      <Button disabled={!isConnected}>Set</Button>
    </div>
  );
};

export default SetNumber;
