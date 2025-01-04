# 🃏Kijewoku Turborepo 🃏
![kijewoku-logo.png](kijewoku-logo.png)
Welcome to the official **Kijewoku Turborepo**! 🚀

> Here is the current site (which is not yet in the monorepo: www.kijewoku.com)

## 🧐 What's Inside?

This Turborepo includes the following packages/apps:

### 🛠️ Scripts

- **`build`**: Runs the Turborepo build process 🔨.
- **`dev`**: Starts the development server for all apps and packages 🌐.
- **`lint`**: Lints the codebase using Biome 🧹.
- **`lint:fix`**: Fixes linting issues in the codebase using... Biome! 🩹.
- **`format`**: Formats the codebase using Prettier ✨.
- **`create-react-pkg`**: Generates a new React component package using Turbo 🎁.
- **`create-typecript-pkg`**: Generates a new typescript utilities package using Turbo 🎁.

> [!TIP]  
> Simply use the `turbo gen` command and select from all available generators 🧰.

### 📦 Apps and Packages

- **`web`**: Website for Kijewoku (Vite.js with React and TypeScript) 🌍
- **`@kijewoku/typescript-config`**: `tsconfig.json`s used throughout the monorepo 🔧

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/) 💻.

### 🛠️ Utilities

This Turborepo comes with some great tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking 📝
- [Biome](https://biomejs.dev/) for code linting and formatting ⚙️

### ⚡ Create React Package

To generate a new React component package, run the following command:

`npm run create-react-pkg`

### 🚀 Build

To build all apps and packages, run the following command:

`npm build`

### 🏗️ Develop

To develop all apps and packages, run the following command:

`npm dev`

### 🧑‍💻 Remote Caching

> [!TIP]  
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines 🔄.

By default, Turborepo will cache locally. To enable Remote Caching, create an account with Vercel. If you don’t have one, [create one here](https://vercel.com/signup?utm_source=turborepo-examples), then authenticate using:

`npx turbo login`

This will link your Turborepo to your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, link your Turborepo to your Remote Cache with:

`npx turbo link`

## 🔗 Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks) 📝
- [Caching](https://turbo.build/repo/docs/core-concepts/caching) 💾
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) 🔄
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering) 🎯
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration) ⚙️
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference) 🎮
