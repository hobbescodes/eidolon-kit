import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { anvil } from "wagmi/chains";

import { env } from "@eidolonkit/env/web";

const wagmiConfig = getDefaultConfig({
  appName: "EidolonKit",
  projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains: [anvil],
  ssr: true,
  transports: {
    [anvil.id]: http(),
  },
});

export default wagmiConfig;
