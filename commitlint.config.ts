import { RuleConfigSeverity } from "@commitlint/types";

import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  defaultIgnores: true,
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build", // build system, dependencies, tooling
        "chore", // maintenance
        "ci", // continuous integration
        "docs", // update documentation
        "feat", // add a feature (option 1 of 2)
        "feature", // add a feature (option 2 of 2)
        "fix", // fix a bug
        "perf", // performance improvement
        "refactor", // change project/code structure
        "style", // formatting, visual changes
        "test", // update tests (unit, integration, E2E, etc.)
      ],
    ],
  },
};

export default commitlintConfig;
