import { $ } from "bun";

import { env } from "@eidolonkit/env/blockchain";

const main = async () => {
  await $`forge create ./src/Counter.sol:Counter --rpc-url http://localhost:8545 --account ${env.KEYSTORE_ACCOUNT}`;
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
