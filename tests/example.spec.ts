import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://merathdcstg.moj.gov.sa/login');

  // Expect a title "to contain" a substring.
  console.log("SDSD")
  // await expect(page).toHaveTitle(/Playwright/);
});
