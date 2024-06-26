import { $ } from "bun";

import { env } from "@eidolonkit/env/blockchain";

const main = async () => {
  await $`forge script script/Deploy.s.sol:DeployScript --rpc-url ${env.RPC_URL} --account ${env.KEYSTORE_ACCOUNT} --broadcast`;
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
