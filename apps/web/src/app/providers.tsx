"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WagmiProvider } from "wagmi";

import { rainbowConfig } from "@eidolonkit/rainbow/config";
import { RainbowKitProvider } from "@eidolonkit/rainbow/kit";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => (
  <WagmiProvider config={rainbowConfig}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>{children}</RainbowKitProvider>
      {/* NB: by default, RQ dev tools are only included in `NODE_ENV=development` environments */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </WagmiProvider>
);

export default Providers;
