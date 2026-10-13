import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

test('TC01: Access application url', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoURL();
  await expect(loginPage.verifyLoginPageTitle())
  .toHaveText('Swag Labs');
});

test('TC02: valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoURL();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(loginPage.verifyProdPageTitle()).toHaveText('Products');
});

test('TC03: invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoURL();
  await loginPage.login('standard_user', 'wrongpassword');

  await expect(loginPage.verifyErrorMsg()).toBeVisible();
});