import { createConfig } from "@ponder/core";
import { http } from "viem";

import { contractAddress, startBlock } from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { env } from "@eidolonkit/env/blockchain";

export default createConfig({
  networks: {
    anvil: {
      chainId: 31337,
      transport: http(env.RPC_URL),
      disableCache: true,
    },
  },
  contracts: {
    Counter: {
      network: "anvil",
      abi: counterAbi,
      address: contractAddress,
      startBlock,
      includeCallTraces: true,
    },
  },
});
