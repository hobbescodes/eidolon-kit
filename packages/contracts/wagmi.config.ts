import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "generated/wagmi.ts",
  plugins: [
    foundry({
      include: ["Counter.json"],
      // NB: addresses currently need to be manually updated for local development. Although, hot contract redeployment does seem to be on the roadmap for wagmi. See, https://github.com/wevm/wagmi/discussions/1968#discussioncomment-5236554
      deployments: {
        Counter: {
          31337: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        },
      },
    }),
  ],
});
