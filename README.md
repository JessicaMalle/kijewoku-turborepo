[![Turborepo](https://img.shields.io/badge/Turborepo-0A0A0A?logo=turborepo&logoColor=ffffff)](https://turborepo.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=ffffff)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://www.npmjs.com/package/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Handlebars.js](https://img.shields.io/badge/Handlebars.js-f7931e?logo=handlebars.js&logoColor=white)](https://handlebarsjs.com/)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/package/npm)

# 🩵🩷 Kijewoku Turborepo 
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
- **`storybook`**: Storybook for Kijewoku components 📚
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

### 📝 Commit Rules

When contributing to this project, please follow these commit message conventions:

- Avoid overly verbose descriptions or unnecessary details and NO UPPERCASE please. Commit message with a short sentence in imperative form, no more.

Important to add a prefix before message:
- ✨feat: Introduces a new feature.
- 🐞fix: Patches a bug.
- 📖docs: Updates documentation only.
- 🎠style: Changes that do not affect meaning (white-space, formatting, missing semicolons, etc.).
- 💎refactor: Code changes that neither fix a bug nor add a feature.
- 🧪test: Adds or updates tests.
- 🧹chore: Other changes that don't modify src or test files.
- 🏗️build: Changes that affect the build system or external dependencies.

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
