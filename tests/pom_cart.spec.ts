import { test } from '../fixtures/fixtures.ts';
import { ProductsPage } from '../pages/ProductsPage.ts';
import { CartPage } from '../pages/CartPage.ts';

test('TC07: Verify products in cart', async ({ authenticatedPage }) => {
    const productsPage = new ProductsPage(authenticatedPage);
    const cartPage = new CartPage(authenticatedPage);

    await productsPage.addProductsAndVerifyCount();
    await productsPage.openCart();
    await cartPage.verifyCartCount();
    await cartPage.verifyCartList();
});

test('TC08: remove items & verify products from cart', async ({ authenticatedPage }) => {
    const productsPage = new ProductsPage(authenticatedPage);
    const cartPage = new CartPage(authenticatedPage);

    await productsPage.addProductsAndVerifyCount();
    await productsPage.openCart();
    await cartPage.verifyCartCount();
    await cartPage.verifyCartList();
    await cartPage.removeItemAndVerifyCartList();
});