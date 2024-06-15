# Eidolon Kit 🔮

> [!IMPORTANT]
> ‼️ This is a work in progress. The current version of the kit is not ready for production use. ‼️

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@eidolonkit/contracts`: a [Foundry](https://book.getfoundry.sh/) project for smart contract development
- `@eidolonkit/tailwind`: a [Tailwind](https://tailwindcss.com/) preset
- `@eidolonkit/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@eidolonkit/ui`: a component library shared by both `web` and `docs` applications

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Foundry](https://book.getfoundry.sh/) for smart contract development
- [Soldeer](https://soldeer.xyz/) for package management for Foundry projects
- [Tailwind](https://tailwindcss.com/) for styling
- [Park UI](https://park-ui.com/) for scaffolding the ui component library package
- [Biome](https://biomejs.dev/) for code linting and formatting
- [Knip](https://knip.dev/) for finding unused files, dependencies and exports
- [Husky](https://typicode.github.io/husky/), [Commitlint](https://commitlint.js.org/), and [Lint-Staged](https://github.com/okonet/lint-staged) for commit message and staged file linting
- [Renovate](https://www.mend.io/renovate/) for keeping all dependencies up to date

> [!NOTE]
> Prior to running any of the commands below, it is recommended to run `bun contracts:install` to install the appropriate dependencies for the contracts package.

> [!TIP]
> With the current configuration, you will have to have an encrypted private key (even for local development with anvil) using the generated JSON keystores from `cast wallet import --interactive`. More details can be found [here](https://github.com/foundry-rs/foundry/pull/5551).

### Build

To build all apps and packages, run the following command:

```
bun run build
```

### Develop

To develop all apps and packages, do the following:

1. In one terminal window, run:

```
anvil
```

2a. In another terminal window, run:

```
bun contracts:deploy
```

2b. Update `packages/contracts/wagmi.config.ts` to use appropriate deployment address for local anvil chain if necessary (address can be found in `packages/contracts/broadcast/Deploy.s.sol/31337/run-latest.json`).

3. Spin up remaining development servers:

```
bun dev
```

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
