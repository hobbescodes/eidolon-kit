import { appendFile, mkdir, unlink } from "node:fs/promises";
import { parseArgs } from "node:util";
import { $ } from "bun";

const componentsDirectory = "./src/components";

const main = async () => {
  const args = parseArgs({
    args: Bun.argv,
    options: {
      component: {
        type: "string",
      },
    },
    strict: true,
    allowPositionals: true,
  });

  const component = args.values.component;

  // NB: check if appropriate args are provided
  if (!component) {
    console.error("Please provide a component name");
    process.exit(1);
  }

  const componentDirectory = `${componentsDirectory}/${component}`;
  const originalPath = `${componentDirectory}.tsx`;

  // NB: check if the component already exists
  const path = `${componentDirectory}/index.tsx`;
  const file = Bun.file(path);

  const exists = await file.exists();

  if (exists) {
    console.error(`Component: ${component} already exists`);
    process.exit(1);
  }

  try {
    // NB: add the component to the primitives folder
    await $`bunx @park-ui/cli add ${component}`;

    // NB: create the component folder
    await mkdir(`${componentDirectory}`, { recursive: true });

    // NB: move the component from the primitives folder to the component folder
    const file = Bun.file(originalPath);
    await Bun.write(`${componentDirectory}/index.tsx`, file);
    await unlink(originalPath);

    // NB: add the component exports to the index file
    await appendFile(
      `${componentsDirectory}/index.ts`,
      `export * from "./${component}";\n`,
      "utf-8",
    );
    console.log(`Component: ${component} added to index file`);

    // NB: rebuild the package
    // await $`bun run build`;
    // console.log(`Component: ${component} added to dist folder`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
