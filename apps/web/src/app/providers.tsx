"use client";

import {
  RainbowKitProvider,
  getDefaultConfig,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { anvil } from "viem/chains";
import { http, WagmiProvider } from "wagmi";

import { env } from "@eidolonkit/env/web";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const rainbowConfig = getDefaultConfig({
  appName: "EidolonKit",
  projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains: [anvil],
  ssr: true,
  transports: {
    [anvil.id]: http(),
  },
});

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => (
  // @ts-ignore
  <WagmiProvider config={rainbowConfig}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        theme={lightTheme({
          accentColor: "var(--colors-accent-default)",
          accentColorForeground: "var(--colors-accent-fg)",
        })}
      >
        {children}
      </RainbowKitProvider>
      {/* NB: by default, RQ dev tools are only included in `NODE_ENV=development` environments */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </WagmiProvider>
);

export default Providers;
