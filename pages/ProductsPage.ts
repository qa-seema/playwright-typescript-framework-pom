
import { expect } from "@playwright/test";
export class ProductsPage {
    page: any;

    constructor(page: any) {
        this.page = page;
    }

    loc_page_title: string = '[data-test="title"]';
    loc_inv_list: string = '.inventory_item';
    loc_prod_backpack: string = '[data-test="add-to-cart-sauce-labs-backpack"]';
    loc_prod_backpack_remove= '[data-test="remove-sauce-labs-backpack"]';
    loc_prod_jacket: string = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    loc_cart_badge: string = '.shopping_cart_badge';



    async verifyInventoryCount() {
         await expect(
             this.page.locator(this.loc_inv_list)
        ).toHaveCount(6);
    }

    async addProductsToCart(products: string[]) {
        for (const product of products) {
            await this.page.locator(product).click();
        }
    }
    async addProductsAndVerifyCount() {
        await this.addProductsToCart([
            this.loc_prod_backpack,
            this.loc_prod_jacket
        ]);

         expect( await
            this.page.locator(this.loc_cart_badge)
        ).toHaveText('2');
    }
     async removeProductsToCart(products: string[]) {
        for (const product of products) {
            await this.page.locator(product).click();
        }
    }
async removeProductsAndVerifyCount() {
        await this.removeProductsToCart([
            this.loc_prod_backpack_remove,
        ]);

        await expect(
            this.page.locator(this.loc_cart_badge)
        ).toHaveText('1');
    }
    
    async openCart(){
         await this.page.locator('.shopping_cart_link').click();
    }
}