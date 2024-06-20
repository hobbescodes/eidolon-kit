"use client";

import { Spinner } from "components/core";
import { useCurrentNumber } from "lib/hooks";

const CurrentNumber = () => {
  const { data: number, isLoading, isError } = useCurrentNumber();

  if (isError)
    return (
      <p className="text-red-600 font-semibold">
        Error fetching current number
      </p>
    );

  return (
    <div className="flex flex-col gap-4 items-center">
      {isError ? (
        <p className="text-red-600 font-semibold">
          Error fetching current number
        </p>
      ) : (
        <>
          <p className="text-lg font-semibold">Current number:</p>
          <div className="flex items-center text-xl font-semibold p-4 text-accent-text bg-[var(--colors-accent-3)] rounded-md border border-accent-text">
            {isLoading ? (
              <Spinner className="h-7 w-7" />
            ) : (
              <p className="w-7 text-center">{Number(number)}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentNumber;
