# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

> 참조(Create Nuxt 3 Project) : npx nuxi@latest init example-nuxt

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## typescript support in nuxt

https://nuxt.com/docs/guide/concepts/typescript#stricter-checks

## eslint 및 prettier

- [Nuxt 제공하는 eslint](https://nuxt.com/docs/community/contribution#use-eslint)
  - Nuxt에서는 eslint만 사용하면 된다고 하지만 prettier도 같이 사용하는 것이 논의되고 있다고 함 (https://nuxt.com/docs/community/contribution#no-prettier)
  - 이 프로젝트에서는 prettier도 같이 사용하는 것으로 설정

### install

```bash
# https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/index.js
# https://github.com/prettier/eslint-plugin-prettier
yarn add -D @nuxtjs/eslint-config-typescript eslint eslint-plugin-prettier prettier eslint-config-prettier
```

### setup
- .eslintrc 및 .prettierrc 파일 확인

## Directories
- [디렉토리 설명](./Directories.md)

## VS Code Plugins
- Volar
- ESLint
- EditorConfig for VS Code
- Vue VSCode Snippets
- vscode-icons
