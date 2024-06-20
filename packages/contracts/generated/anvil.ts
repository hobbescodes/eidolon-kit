import { getAddress, hexToNumber, zeroAddress } from "viem";

import anvilBroadcast from "../broadcast/Deploy.s.sol/31337/run-latest.json";

export const contractAddress = getAddress(
  anvilBroadcast.transactions[0]?.contractAddress ?? zeroAddress,
);
export const startBlock = hexToNumber(
  (anvilBroadcast.receipts[0]?.blockNumber as `0x${string}`) ?? "0x0",
);
