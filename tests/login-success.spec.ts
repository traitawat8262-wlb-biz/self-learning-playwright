import { test, expect } from '@playwright/test';

test('Add item to cart and submit order', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Log in
    await page.locator('[id="email"]').fill('example.Somchai@mail.com');
    await page.locator('[id="password"]').fill('password');
    await page.locator('[id="submit"]').click();

    // Verify login success
    await expect(page.locator('body')).toContainText('Click on any contact to view the Contact Details');
    await expect(page.getByRole('heading')).toContainText('Contact List');
    await expect(page.locator('[id="add-contact"]')).toContainText('Add a New Contact');
});


