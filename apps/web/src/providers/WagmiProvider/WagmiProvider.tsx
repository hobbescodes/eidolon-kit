"use client";

import { WagmiProvider as RootWagmiProvider } from "wagmi";

import { rainbowConfig } from "@eidolonkit/rainbow/config";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const WagmiProvider = ({ children }: Props) => (
  <RootWagmiProvider config={rainbowConfig}>{children}</RootWagmiProvider>
);

export default WagmiProvider;
