import { createConfig } from "@ponder/core";
import { http } from "viem";

import { counterAbi, counterAddress } from "@eidolonkit/contracts/wagmi";
import { env } from "@eidolonkit/env/blockchain";

export default createConfig({
  networks: {
    localhost: {
      chainId: 31337,
      transport: http(env.RPC_URL),
    },
  },
  contracts: {
    Counter: {
      network: "localhost",
      abi: counterAbi,
      address: counterAddress[31337],
    },
  },
});
