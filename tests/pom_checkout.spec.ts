import { test } from '../fixtures/fixtures.ts';
import { ProductsPage } from '../pages/ProductsPage.ts';
import { CartPage } from '../pages/CartPage.ts';
import { CheckoutPage } from '../pages/CheckoutPage.ts';

test('TC09: complete checkout successfully', async ({ authenticatedPage }) => {
    const productsPage = new ProductsPage(authenticatedPage);
    const cartPage = new CartPage(authenticatedPage);
    const checkoutPage = new CheckoutPage(authenticatedPage);

    await productsPage.addProductsAndVerifyCount();
    await productsPage.openCart();
    await cartPage.clickCheckoutButton();

    // Customer information
    await checkoutPage.setCutomerInfo('Apple', 'Banana', '12345');
    await checkoutPage.clickContinueButton();

    await checkoutPage.verifyCheckoutOverview();
    await checkoutPage.verifyPaymentInformation();

    await checkoutPage.clickFinishButton();
    await checkoutPage.verifyOrderConfirmation();
});