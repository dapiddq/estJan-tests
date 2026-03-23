import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.fill('input[name="username"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'testpassword123');
    await page.click('button[name="login"]');

    await expect(page).toHaveURL(/my-account/);
    await expect(page.locator('.woocommerce-MyAccount-navigation')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.fill('input[name="username"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'testinvalidpassword123');
    await page.click('button[name="login"]');

    await expect(page.locator('.wc-block-components-notice-banner.is-error')).toBeVisible();
  });

  test('should show error when fields are empty', async ({ page }) => {
    await page.goto('https://www.estjan.com/my-account/');

    await page.click('button[name="login"]');

    await expect(page.locator('.wc-block-components-notice-banner.is-error')).toBeVisible();
  });

});
