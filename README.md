# estJan Playwright Tests

Automated test suite for [estJan.com](https://www.estjan.com) built with Playwright and TypeScript.

## What's Tested

**Login**
- Successful login with valid credentials
- Error shown with invalid credentials
- Error shown when fields are empty

**Register**
- Successful registration with a new email
- Error shown when registering with an existing email
- Error shown when email field is empty

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript

## Run Tests
```bash
npx playwright test
```

Run a specific file:
```bash
npx playwright test login.spec.ts
npx playwright test register.spec.ts
```