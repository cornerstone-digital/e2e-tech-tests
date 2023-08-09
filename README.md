# MMT Automated Testing Tech Test

## Prerequisites

1. Install NodeJS 18.15.0 or greater
2. Install PNPM Globally

```bash
npm install -g pnpm
```

## Installation

1. Clone repository
2. Run `pnpm install`

## Tasks

In order to test your knowledge of automation testing we have a couple of test scenarios which we would like you to write. Details of the test scenarios can be found below:

### API Testing

Utilising JSON Placeholder as a backend, we have some simple API tests which we would like you to complete.

You can find the tests which need need completing in one of these locations:

Cypress: `packages/cypress-tests/cypress/e2e/api-spec.cy.ts` \
Playwright: `packages/playwright-tests/tests/api-sepc.spec.ts`

### Browser Testing

Using <http://www.caesars.com> as a base. We have a simple browser based test which we would like you to complete.

You can find the tests which need need completing in one of these locations:

Cypress: `packages/cypress-tests/cypress/e2e/caesars.com.spec.cy.ts` \
Playwright: `packages/playwright-tests/tests/caesars.com.spec.ts`

## Submitting your code

1. Create a branch from `main` using the following branch structure

```
submissions/firstname-lastname
```

2. Using the framework of your choice (Playwright preferred) write the tests
3. Commit and push your work on your branch
4. Create a PR back into `main` with a short description of approach taken
