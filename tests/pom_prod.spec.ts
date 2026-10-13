import { test } from '../fixtures/fixtures.ts';
import { ProductsPage } from '../pages/ProductsPage.ts';

test('TC04: verify products count', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  await productsPage.verifyInventoryCount();
});

test('TC05: Add products to cart & verify cart badge', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  await productsPage.addProductsAndVerifyCount();
});

test('TC06: remove product from cart & verify count', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  await productsPage.addProductsAndVerifyCount();
  await productsPage.removeProductsAndVerifyCount();
});