"use client";

import { useEffect } from "react";
import { useWaitForTransactionReceipt } from "wagmi";

interface Props {
  hash?: `0x${string}`;
  onSuccess?: () => void;
}

const useTransactionReceipt = ({ hash, onSuccess }: Props) => {
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: !!hash,
    },
  });

  // biome-ignore lint: do not re-run on callback changes
  useEffect(() => {
    if (isSuccess) {
      onSuccess?.();
    }
  }, [isSuccess]);

  return {
    isLoading,
  };
};

export default useTransactionReceipt;
