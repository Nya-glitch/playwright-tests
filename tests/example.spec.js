// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Getting started' }).click();
  await page.getByRole('link', { name: 'Configuration', exact: true }).click();
  await page.getByRole('link', { name: 'Configuration (use)', exact: true }).click();
  await page.getByRole('link', { name: 'Browsers' }).click();
  await page.getByRole('link', { name: 'Chrome extensions', exact: true }).click();
  await page.getByRole('link', { name: 'Downloads' }).click();

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});