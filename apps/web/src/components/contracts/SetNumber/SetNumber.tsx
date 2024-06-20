"use client";

import { Button, Input } from "@eidolonkit/ui";

const SetNumber = () => {
  return (
    <div className="flex items-center gap-2 max-w-xs">
      <Input id="number" placeholder="Enter a number..." className="flex-1" />
      <Button>Set</Button>
    </div>
  );
};

export default SetNumber;
