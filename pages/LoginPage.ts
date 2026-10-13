import { type Page } from '@playwright/test';

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    loc_url = 'https://www.saucedemo.com/';
    loc_tb_username = '[data-test="username"]';
    loc_tb_password = '[data-test="password"]';
    loc_btn_login = '[data-test="login-button"]';
    loc_err_msg = '[data-test="error"]';
    loc_prod_page_title = '[data-test="title"]';
    loc_login_page_title = '//div[text()="Swag Labs"]';

    async gotoURL() {
        await this.page.goto(this.loc_url);
    }

    async login(username: string, password: string) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async setUsername(username: string) {
        await this.page.locator(this.loc_tb_username).fill(username);
    }

    async setPassword(password: string) {
        await this.page.locator(this.loc_tb_password).fill(password);
    }

    async clickLogin() {
        await this.page.locator(this.loc_btn_login).click();
    }

    verifyErrorMsg() {
        return this.page.locator(this.loc_err_msg);
    }

    verifyProdPageTitle() {
        return this.page.locator(this.loc_prod_page_title);
    }

    verifyLoginPageTitle() {
        return this.page.locator(this.loc_login_page_title);
    }
}