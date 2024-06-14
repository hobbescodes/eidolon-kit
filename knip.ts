import type { KnipConfig } from "knip";

const knipConfig: KnipConfig = {
  rules: {
    unlisted: "warn"
  },
  ignore: [
    "**/*config*"
  ],
  // TODO: remove when UI package is revamped and ready
  ignoreDependencies: [
    "postcss"
  ],
  workspaces: {
    "packages/ui": {
      // TODO: remove when UI package is revamped and ready
      ignoreDependencies: ["@turbo/gen"]
    }
  }
}

export default knipConfig;
