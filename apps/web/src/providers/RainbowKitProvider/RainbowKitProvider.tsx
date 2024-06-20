import { RainbowKitProvider as RootRainbowKitProvider } from "@eidolonkit/rainbow/kit";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RainbowKitProvider = ({ children }: Props) => (
  <RootRainbowKitProvider>{children}</RootRainbowKitProvider>
);

export default RainbowKitProvider;
