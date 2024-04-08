# social-media-client

<!-- A simple overview of use/purpose. -->

Noroff Course Assignment for workflow.
The example repository project was forked to my GitHub account and all tests was done not in a group.

## Description

<!-- An in-depth paragraph about your project and overview of use. -->

The main purpose of this CA is to learn how we can reduce the number of repetitive tasks during software development.

- create, configure and automate our environment with workflows for automated tests with:

  - `Git command line`
  - `GitHub Actions`
  - `Environment Secrets`
  - `Vite bundler`

- examine informalised `test set`, `formalised testing` strategies, and the use of tools to automate and improve the quality of testing process:
- `Manual testing` using devTools as console statements, breakpoints, network tab, etc
- `Unit testing` using `Jest` and Mocha framework
- `End-to-end testing` (e2e testing) or Integration test using `Cypress` framework

Assignment:

- [Brief](docs/brief.pdf)

## Process

1. Configure the project with `eslint`, `prettier`, `commit hooks`, etc
2. Configure the project with `GitHub Actions` for build/deploy
3. Configure the project for `Jest` and `Cypress`
4. Create a Pull Request from workflow branch into the default branch
5. Create tests to cover some required test cases:

- `3A testing`: Arrange, Act and Assert pattern

- `Unit testing` using `Jest` `Mock` objects for fetch and `Stub` for local storage:

  - the login function stores a token when provided with valid credentials, using `@jest-environment node`
  - the logout function clears the token from browser storage, using `@jest-environment node`
  - the auth function remove/add the class logged-in if user authenticated or not, `DOM` testing using `@jest-environment jsdom`

  Notes: test files are organized using `Vertical Slices`.

- `End-to-end testing` using `Cypress`:

  - The user can log in with the login form with valid credentials
  - The user cannot submit the login form with invalid credentials and is shown a message
  - The user can log out with the logout button

## Live app

This project is deployed on GitHub [Pages](https://fp22fd.github.io/social-media-client/).

## Improvements over the Forked repo

- script "start" now supports multi OS via the package `npm-run-all`
- .env file to manage secrets, using `dotenv` package
- type checking via [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig).

  - Jest types: [ref](<https://fp22fd.github.io/social-media-client/](https://stackoverflow.com/a/69845145)>).
  - Cypress types: [ref](https://docs.cypress.io/guides/tooling/typescript-support#Configure-tsconfigjson).
  - DOM (for example `document`, `fetch`) and ES2015 (for example `Promise<T>`) `types` has been included.

- Jest: DOM testing via
  > npm install -D jest-environment-jsdom

## Usage Instructions: .env.example

1. Register an account or sign up [here](https://fp22fd.github.io/social-media-client/)
2. Specify the `APP_HOME_URL` (for example `https://fp22fd.github.io/social-media-client/` or `/` for localhost)
3. Specify `USER_EMAIL` (ending with `@noroff.no`) and `USER_PASSWORD` of an existing user
4. Optionally set the delay option to `true`

## Workflow badges

[![Automated Unit Testing](https://github.com/FP22FD/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/FP22FD/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/FP22FD/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/FP22FD/social-media-client/actions/workflows/e2e-test.yml)
