# futurama-prep

This template should help get you started developing with Vue 3 in Vite.

## Project

This project is a simple preparation project.

It uses the [Futurama API](https://futuramaapi.com/) to fetch seasons, episodes and characters from the TV show "Futurama".

You can set some bookmarks to save your favorite seasons and episodes, but only temporarily, as they are stored in the Pinia state management store.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vue Reference](https://vuejs.org/).

See [Vue Router Reference](https://router.vuejs.org/).

See [Pinia Reference](https://pinia.vuejs.org/).

See [Vite Configuration Reference](https://vite.dev/config/).


## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
