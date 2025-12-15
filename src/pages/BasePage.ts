import { Page } from '@playwright/test';

export default class BasePage{
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }
     async navigateTo(url: string){
        return await this.page.goto(url);
     }
     async click(selector: string){
        await this.page.click(selector);
     }
     async type(selector: string, text: string){
        await this.page.fill(selector, text);
     }
     async getText(selector: string): Promise<string>{
        return await this.page.textContent(selector) || ''; 
     }
}

