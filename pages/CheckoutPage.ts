import { expect } from "@playwright/test";

export class CheckoutPage {
    page: any;

    constructor(page: any) {
        this.page = page;
    }

    loc_tb_fname: string = '[data-test="firstName"]';
    loc_tb_lname: string = '[data-test="lastName"]';
    loc_tb_postalcode: string = '[data-test="postalCode"]';
    loc_btn_continue: string = '[data-test="continue"]';
    loc_list_inventory_items:string = '.inventory_item_name';
    loc_txt_payment_info:string = '[data-test="payment-info-label"]';
    loc_txt_shipping_info:string = '[data-test="shipping-info-label"]';
      loc_btn_finish:string = '[data-test="finish"]';
      loc_hdr_info:string = '[data-test="complete-header"]';
      loc_txt_complete: string = '[data-test="title"]';


  async setCutomerInfo(firstName: string, lastname:string, postalCode:string){
        await this.setFirstName(firstName);
        await this.setLastName(lastname);
        await this.setPostalCode(postalCode);
     }

     async setFirstName(firstname:string) {
        await this.page.locator(this.loc_tb_fname).fill(firstname);
    }
     async setLastName(lastname:string) {
        await this.page.locator(this.loc_tb_lname).fill(lastname);
    }
        async setPostalCode(postalcode:string) {
        await this.page.locator(this.loc_tb_postalcode).fill(postalcode);
    }
   

     async clickContinueButton(){
        await this.page.locator(this.loc_btn_continue).click();
     }

     async verifyCheckoutOverview(){
        await expect(
            this.page.locator(this.loc_list_inventory_items)
        ).toContainText([
            'Sauce Labs Backpack',
            'Sauce Labs Fleece Jacket'
        ]);
     }
     async verifyPaymentInformation(){
        await expect(
            this.page.locator(this.loc_txt_payment_info)
        ).toBeVisible();
     }

     async verifyShippingInformation(){
        // Verify shipping information
        await expect(
            this.page.locator(this.loc_txt_shipping_info)
        ).toBeVisible();
     }
      async clickFinishButton(){
         // Finish order
        await this.page.locator(this.loc_btn_finish).click();
    }

    async verifyOrderConfirmation(){
          await expect(
            this.page.locator(this.loc_hdr_info)
        ).toHaveText('Thank you for your order!');

        await expect(
            this.page.locator(this.loc_txt_complete)
        ).toHaveText('Checkout: Complete!');
    }
}
