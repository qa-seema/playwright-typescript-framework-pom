import { expect } from "@playwright/test";

export class CartPage {
    page: any;

    constructor(page: any) {
        this.page = page;
    }
    loc_cart_items: string = '.cart_item';
    loc_inventory_items = '.inventory_item';
    loc_product_name = '.inventory_item_name';
    loc_product_price = '.inventory_item_price';
    loc_prod_remove = '[data-test="remove-sauce-labs-backpack"]';
    loc_btn_checkout: string = '[data-test="checkout"]';
  



    async verifyCartCount(){
        await expect(this.page.locator(this.loc_cart_items)).toHaveCount(2);
    }

     async verifyCartList() {
        
        // Verify first product
        await expect(
            this.page.locator(this.loc_product_name).nth(0)
        ).toHaveText('Sauce Labs Backpack');

        await expect(
            this.page.locator(this.loc_product_price).nth(0)
        ).toHaveText('$29.99');

        // Verify second product
        await expect(
            this.page.locator(this.loc_product_name).nth(1)
        ).toHaveText('Sauce Labs Fleece Jacket');

        await expect(
            this.page.locator(this.loc_product_price).nth(1)
        ).toHaveText('$49.99');
    }

async removeItemAndVerifyCartList(){
      await this.page.locator(this.loc_prod_remove).click();

        await expect(this.page.locator(this.loc_cart_items))
            .toHaveCount(1);

        await expect(
            this.page.locator(this.loc_product_name)
        ).toHaveText('Sauce Labs Fleece Jacket');
}

    async clickCheckoutButton(){
        await this.page.locator(this.loc_btn_checkout).click();
    }

   


}
