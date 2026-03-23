estJan Playwright Tests
Automated test suite for estJan.com built with Playwright and TypeScript.
What's Tested
Login

Successful login with valid credentials
Error shown with invalid credentials
Error shown when fields are empty

Register

Successful registration with a new email
Error shown when registering with an existing email
Error shown when email field is empty

Tech Stack

Playwright
TypeScript

Run Tests
bashnpx playwright test
Run a specific file:
bashnpx playwright test login.spec.ts
npx playwright test register.spec.ts