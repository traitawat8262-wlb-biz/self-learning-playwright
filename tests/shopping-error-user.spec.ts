import { test, expect } from '@playwright/test';

test('Add item to cart and submit order', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Log in
    await page.locator('[id="user-name"]').fill('error_user');
    await page.fill('#password', 'secret_sauce');
    await page.locator('[id="login-button"]').click();

    // Add fail item to cart
    await page.click('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');

    // Verify cart not have shopping cart badge
    expect(page.locator('.shopping_cart_badge')).toBeHidden();

});

function locator(arg0: string): string {
    throw new Error('Function not implemented.');
}
