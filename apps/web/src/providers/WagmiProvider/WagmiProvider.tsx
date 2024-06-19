"use client";

import { WagmiProvider as RootWagmiProvider } from "wagmi";

import wagmiConfig from "../../../wagmi.config";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const WagmiProvider = ({ children }: Props) => (
  <RootWagmiProvider config={wagmiConfig}>{children}</RootWagmiProvider>
);

export default WagmiProvider;
