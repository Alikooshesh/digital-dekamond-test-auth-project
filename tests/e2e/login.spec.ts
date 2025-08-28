import { test, expect } from '@playwright/test';
test('login → dashboard → logout', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByText('Welcome Back!')).toBeVisible();
  await page.getByLabel('Phone Number').fill('09123456789');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/dashboard');
  await expect(page.getByText(/Hello /)).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).last().click();
  await page.waitForURL('**/login');
});
