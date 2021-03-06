# Event Tracking Browser

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Known Vulnerabilities](https://snyk.io/test/github/AnasRezk/event-tracking-browser/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AnasRezk/event-tracking-browser?targetFile=package.json)
[![Travis](https://img.shields.io/travis/anasrezk/event-tracking-browser.svg)](https://travis-ci.org/github/AnasRezk/event-tracking-browser)
[![Coverage Status](https://coveralls.io/repos/github/AnasRezk/event-tracking-browser/badge.svg?branch=master)](https://coveralls.io/github/AnasRezk/event-tracking-browser?branch=master)
[![Dev Dependencies](https://david-dm.org/anasrezk/event-tracking-browser/dev-status.svg)](https://david-dm.org/AnasRezk/event-tracking-browser?type=dev)

A project for tracking ptoject.

## Usage

```bash
yarn add event-tracking-browser

or

npm install event-tracking-browser
```

### Features

-   **[RollupJS](https://rollupjs.org/)** for multiple optimized bundles following the [standard convention](http://2ality.com/2017/04/setting-up-multi-platform-packages.html) and [Tree-shaking](https://anasrezk.github.io/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/)
-   Tests, coverage and interactive watch mode using **[Jest](http://facebook.github.io/jest/)**
-   **[Prettier](https://github.com/prettier/prettier)** and **[TSLint](https://palantir.github.io/tslint/)** for code formatting and consistency
-   **Docs automatic generation and deployment** to `gh-pages`, using **[TypeDoc](http://typedoc.org/)**
-   Automatic types `(*.d.ts)` file generation
-   **[Travis](https://travis-ci.org)** integration and **[Coveralls](https://coveralls.io/)** report
-   (Optional) **Automatic releases and changelog**, using [Semantic release](https://github.com/semantic-release/semantic-release), [Commitizen](https://github.com/commitizen/cz-cli), [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog) and [Husky](https://github.com/typicode/husky) (for the git hooks)

### NPM scripts

-   `npm t`: Run test suite
-   `npm start`: Run `npm run build` in watch mode
-   `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.githubio/jest/docs/cli.html#watch)
-   `npm run test:prod`: Run linting and generate coverage
-   `npm run build`: Generate bundles and typings, create docs
-   `npm run lint`: Lints code
-   `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
