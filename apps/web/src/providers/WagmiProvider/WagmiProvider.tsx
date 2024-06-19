"use client";

import { WagmiProvider as RootWagmiProvider } from "wagmi";

import wagmiConfig from "../../../wagmi.config";

import type { ReactNode } from "react";
import type { State } from "wagmi";

interface Props {
  children: ReactNode;
  initialState?: State;
}

const WagmiProvider = ({ children, initialState }: Props) => (
  <RootWagmiProvider config={wagmiConfig} initialState={initialState}>
    {children}
  </RootWagmiProvider>
);

export default WagmiProvider;
