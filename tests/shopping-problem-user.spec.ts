import { test, expect } from '@playwright/test';

test('Add item to cart and submit order', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Log in
    await page.locator('[id="user-name"]').fill('problem_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify image
    const imageSrc = await page.getAttribute('img[alt="Sauce Labs Backpack"]', 'src');
    expect(imageSrc).toBe('/static/media/sl-404.168b1cce.jpg');
});

function locator(arg0: string): string {
    throw new Error('Function not implemented.');
}
