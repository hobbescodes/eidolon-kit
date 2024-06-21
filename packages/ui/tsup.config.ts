import { defineConfig as defineTsupConfig } from "tsup";

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig(async (opts) => ({
  entry: {
    ui: "src/components/index.ts",
  },
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  minify: !opts.watch,
  dts: true,
  outDir: "dist",
  tsconfig: "tsconfig.build.json",
}));

export default tsupConfig;
