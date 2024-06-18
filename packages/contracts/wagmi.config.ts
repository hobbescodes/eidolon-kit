import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "generated/wagmi.ts",
  plugins: [
    foundry({
      include: ["Counter.sol/**"],
    }),
  ],
});
