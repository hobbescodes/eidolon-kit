import { env } from "@eidolonkit/env/web";

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: env.NEXT_PUBLIC_PONDER_GRAPHQL_API_URL,
  generates: {
    "./src/generated/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        commentDescriptions: true,
      },
    },
  },
};

export default config;
