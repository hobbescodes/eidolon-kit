import type { KnipConfig } from "knip";

const knipConfig: KnipConfig = {
  rules: {
    binaries: "off",
    unlisted: "warn",
  },
  ignore: ["**/*config*"],
  ignoreDependencies: ["@commitlint/cz-commitlint", "postcss"],
  workspaces: {
    "apps/ponder": {
      entry: ["src/**/*.ts"],
      ignore: ["ponder.schema.ts"],
    },
    "packages/contracts": {
      entry: ["**/*.ts"],
    },
    "packages/ui": {
      ignore: [
        "src/scripts/add-component.ts",
        // TODO: remove when more components are added that depend on create style context
        "src/lib/create-style-context.tsx",
      ],
      entry: ["**/index.ts", "**/index.tsx", "**/*.test.tsx", "setup.ts"],
    },
  },
};

export default knipConfig;
