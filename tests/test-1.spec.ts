import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ultimateqa.com/complicated-page');
  await page.locator('.et_pb_button').first().click();
  await page.locator('div:nth-child(2) > .et_pb_button').first().click();
  await page.locator('div:nth-child(3) > .et_pb_button').first().click();
  await page.locator('div:nth-child(2) > div > .et_pb_button').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > .et_pb_button').click();
  await page.getByTitle('Follow on Twitter').first().click();
  

  // Click the button using the provided XPath
  await page.locator('xpath=//*[@id="post-579"]/div/div/div/div/div[3]/div[1]/div[1]/a').click();
  
});