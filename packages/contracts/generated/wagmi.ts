//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const counterAbi = [
  {
    type: "function",
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "number",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newNumber", internalType: "uint256", type: "uint256" }],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

/**
 *
 */
export const counterAddress = {
  31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
} as const;

/**
 *
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const;
