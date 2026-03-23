import { test, expect } from '@playwright/test';

const randomEmail = `testuser_${Date.now()}@mailinator.com`;

test.describe('Register', () => {

  test('should register successfully with valid details', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.fill('input[name="email"]', randomEmail);
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[name="register"]');

    await expect(page).toHaveURL(/my-account/);
    await expect(page.locator('text=Logout')).toBeVisible();
  });

  test('should show error when registering with existing email', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.fill('input[name="email"]', 'your@email.com'); // use an email already registered
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[name="register"]');

    await expect(page.locator('.woocommerce-error')).toBeVisible();
  });

  test('should show error when email field is empty', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[name="register"]');

    await expect(page.locator('.woocommerce-error')).toBeVisible();
  });

});
