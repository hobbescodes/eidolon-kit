import { createConfig } from "@ponder/core";
import { http, getAddress, hexToNumber } from "viem";

import anvilBroadcast from "@eidolonkit/contracts/anvil";
import { counterAbi } from "@eidolonkit/contracts/wagmi";
import { env } from "@eidolonkit/env/blockchain";

const address = getAddress(anvilBroadcast.transactions[0]!.contractAddress);
const startBlock = hexToNumber(
  anvilBroadcast.receipts[0]!.blockNumber as `0x${string}`,
);

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
      address,
      startBlock,
    },
  },
});
