# Event Tracking Browser

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/anasrezk/event-tracking-browser.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/anasrezk/event-tracking-browser.svg)](https://travis-ci.org/github/AnasRezk/event-tracking-browser)
[![Coveralls](https://img.shields.io/coveralls/anasrezk/event-tracking-browser.svg)](https://coveralls.io/github/AnasRezk/event-tracking-browser)
[![Dev Dependencies](https://david-dm.org/anasrezk/event-tracking-browser/dev-status.svg)](https://david-dm.org/AnasRezk/event-tracking-browser?type=dev)

A project for tracking ptoject.

## Usage

```bash
git clone https://github.com/anasrezk/event-tracking-browser.git

yarn
```

### Features

-   **[RollupJS](https://rollupjs.org/)** for multiple optimized bundles following the [standard convention](http://2ality.com/2017/04/setting-up-multi-platform-packages.html) and [Tree-shaking](https://anasrezk.github.io/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/)
-   Tests, coverage and interactive watch mode using **[Jest](http://facebook.github.io/jest/)**
-   **[Prettier](https://github.com/prettier/prettier)** and **[TSLint](https://palantir.github.io/tslint/)** for code formatting and consistency
-   **Docs automatic generation and deployment** to `gh-pages`, using **[TypeDoc](http://typedoc.org/)**
-   Automatic types `(*.d.ts)` file generation
-   **[Travis](https://travis-ci.org)** integration and **[Coveralls](https://coveralls.io/)** report
-   (Optional) **Automatic releases and changelog**, using [Semantic release](https://github.com/semantic-release/semantic-release), [Commitizen](https://github.com/commitizen/cz-cli), [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog) and [Husky](https://github.com/typicode/husky) (for the git hooks)

### Importing library

```javascript
import EventTracker from 'event-tracking-browser';
```

### NPM scripts

-   `npm t`: Run test suite
-   `npm start`: Run `npm run build` in watch mode
-   `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.githubio/jest/docs/cli.html#watch)
-   `npm run test:prod`: Run linting and generate coverage
-   `npm run build`: Generate bundles and typings, create docs
-   `npm run lint`: Lints code
-   `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
