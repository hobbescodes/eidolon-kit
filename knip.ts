import type { KnipConfig } from "knip";

const knipConfig: KnipConfig = {
  rules: {
    unlisted: "warn",
  },
  ignore: ["**/*config*"],
  ignoreDependencies: ["postcss"],
  workspaces: {
    "packages/ui": {
      ignore: [
        "src/scripts/add-component.ts",
        // TODO: remove when more components are added that depend on create style context
        "src/lib/create-style-context.tsx",
      ],
      entry: ["**/index.ts", "**/index.tsx"],
    },
  },
};

export default knipConfig;
