# Playwright Test Automation

End-to-end tests written with [Playwright](https://playwright.dev) in JavaScript.

## What is tested

- **Login feature** (`tests/manualGen.spec.js`): logs in with a valid username and password, then checks that the "Welcome to the Secure Area" message and the Logout link are visible.
- **Generated tests** (`tests/autoGen.spec.js`): tests recorded with Playwright's code generator.

## Tools used

- Playwright Test
- JavaScript (Node.js)

## How to run the tests

1. Install Node.js from nodejs.org
2. Download this project and open a terminal in its folder
3. Install the packages by running:

```
npm install
npx playwright install
```

4. Run the tests by running:

```
npx playwright test
```

5. See the report by running:

```
npx playwright show-report
```

## Author

Nya-glitch