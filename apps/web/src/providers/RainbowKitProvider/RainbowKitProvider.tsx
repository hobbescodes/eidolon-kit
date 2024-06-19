import { RainbowKitProvider as RootRainbowKitProvider } from "@rainbow-me/rainbowkit";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RainbowKitProvider = ({ children }: Props) => (
  <RootRainbowKitProvider>{children}</RootRainbowKitProvider>
);

export default RainbowKitProvider;
