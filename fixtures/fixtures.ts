import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: './playwright/.auth/user.json',
    });

    const page = await context.newPage();

    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]'))
      .toHaveText('Products');

    await use(page);

    await context.close();
  },
});

export { expect };