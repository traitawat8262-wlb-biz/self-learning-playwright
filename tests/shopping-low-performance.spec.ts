import { test, expect } from '@playwright/test';

test('Add item to cart and submit order', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Log in
    await page.locator('[id="user-name"]').fill('performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item to cart
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

    // Go to cart
    await page.click('.shopping_cart_link');

    // Proceed to checkout
    await page.click('button[data-test="checkout"]');

    // Fill in checkout information
    await page.fill('input[id="first-name"]', 'John');
    await page.fill('input[data-test="lastName"]', 'Doe');
    await page.fill('input[data-test="postalCode"]', '12345');
    await page.click('input[data-test="continue"]');

    // Finish the order
    await page.click('button[data-test="finish"]');

    // Verify order completion
    const confirmationMessage = await page.textContent('.complete-header');
    expect(confirmationMessage).toBe('Thank you for your order!');
});

function locator(arg0: string): string {
    throw new Error('Function not implemented.');
}
