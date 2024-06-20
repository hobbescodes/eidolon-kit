"use client";

import { useCurrentNumber } from "lib/hooks";

const CurrentNumber = () => {
  const { data: number, isLoading, isError } = useCurrentNumber();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error fetching current number</p>;

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-lg font-semibold">Current number:</p>
      <p className="text-xl font-semibold text-accent-text px-4 py-3 bg-[var(--colors-accent-3)] rounded-md border border-accent-text">
        {Number(number)}
      </p>
    </div>
  );
};

export default CurrentNumber;
