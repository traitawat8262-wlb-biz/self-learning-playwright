import { test, expect } from '@playwright/test';

test('Add item to cart and submit order', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Log in
    await page.locator('[id="user-name"]').fill('locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.locator('[id="login-button"]').click();

    // Verify order completion
    const confirmationMessage = await page.textContent('.error-message-container');
    expect(confirmationMessage).toBe('Epic sadface: Sorry, this user has been locked out.');
});

function locator(arg0: string): string {
    throw new Error('Function not implemented.');
}
