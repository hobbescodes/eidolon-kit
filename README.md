# Eidolon Kit 🔮

> [!IMPORTANT]
> ‼️ This is a work in progress. The current version of the kit is not ready for production use. ‼️

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Apps

- `ponder` a [Ponder](https://ponder.sh/) app
- `web`: a [Next.js](https://nextjs.org/) app

#### Packages

- `packages/config`
  - `@eidolonkit/env`: a package for managing environment variables using [T3 Env](https://env.t3.gg/)
  - `@eidolonkit/tailwind`: a [Tailwind](https://tailwindcss.com/) preset
  - `@eidolonkit/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@eidolonkit/contracts`: a [Foundry](https://book.getfoundry.sh/) project for smart contract development
- `@eidolonkit/ui`: a component library for use in react based applications

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Foundry](https://book.getfoundry.sh/) for smart contract development
- [Soldeer](https://soldeer.xyz/) for package management for Foundry projects
- [Viem](https://viem.sh/) for connection to Ethereum through type-safe modules
- [Wagmi](https://wagmi.sh/) for connection to Ethereum through a collection of type safe react hooks
- [RainbowKit](https://rainbowkit.com/) for wallet connection
- [Ponder](https://ponder.sh/) for rapid API development on top of any EVM smart contract
- [Vocs](https://vocs.dev/) for documentation site generation
- [Tailwind](https://tailwindcss.com/) for styling
- [Park UI](https://park-ui.com/) for scaffolding the ui component library package
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing react components
- [Biome](https://biomejs.dev/) for code linting and formatting
- [Knip](https://knip.dev/) for finding unused files, dependencies and exports
- [Github Actions](https://github.com/features/actions) for CI/CD
- [Husky](https://typicode.github.io/husky/), [Commitlint](https://commitlint.js.org/), and [Lint-Staged](https://github.com/okonet/lint-staged) for commit message and staged file linting
- [Renovate](https://www.mend.io/renovate/) for keeping all dependencies up to date

> [!NOTE]
> Prior to running any of the commands from `Build` or `Develop`, it is required to install all necessary dependencies and add appropriate environment variables.

> [!TIP]
> With the current configuration, you will have to have an encrypted private key (even for local development with anvil) using the generated JSON keystores from `cast wallet import --interactive`. More details can be found [here](https://github.com/foundry-rs/foundry/pull/5551).

### Install Dependencies

```
bun install && bun contracts:install
```

### Add Environment Variables

1) First, create a `.env` file in the `packages/contracts` directory and add the appropriate environment variables.

```
cp ./packages/contracts/.env.template ./packages/contracts/.env
```

2) Next, create a `.env.local` file in the `apps/web` directory and add the appropriate environment variables.

```
cp ./apps/web/.env.local.template ./apps/web/.env.local
```

### Build

To build all apps and packages, run the following command:

```
bun run build
```

### Develop

To develop all apps and packages, do the following:

1. In one terminal window, run:

```
bun anvil
```

2. In another terminal window, run:

```
bun contracts:deploy
```

3. Spin up remaining development servers:

```
bun dev
```

> [!TIP]
> If you do not want the `dev` command to include spinning up the docs servers, you can update the `dev` script in the root `package.json` to `turbo run dev`

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
bunx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
bunx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
