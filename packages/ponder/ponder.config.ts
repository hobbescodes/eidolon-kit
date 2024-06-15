import { createConfig } from "@ponder/core";
import { http, zeroAddress } from "viem";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    ExampleContract: {
      network: "mainnet",
      abi: ExampleContractAbi,
      address: zeroAddress,
      startBlock: 1234567,
    },
  },
});
