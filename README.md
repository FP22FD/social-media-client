# social-media-client

## improvements

- script "start" now supports multi OS via the package `npm-run-all`
- type checking via [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig).
  - Jest types: ref. <https://stackoverflow.com/a/69845145>.
  - cypress types: ref. <https://docs.cypress.io/guides/tooling/typescript-support#Configure-tsconfigjson>.
  - DOM (for example `document`, `fetch`) and ES2015 (for example `Promise<T>`) `types` has been included.

## badges

[![Automated Unit Testing](https://github.com/FP22FD/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/FP22FD/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/FP22FD/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/FP22FD/social-media-client/actions/workflows/e2e-test.yml)
