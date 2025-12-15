import{ Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import LoginPage from "../../pages/LoginPage.js";

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('the user is on login page', async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.open();
});

Given('the user clicks the login button', async function () {
    await loginPage.clickLogin();
});

// Scenerio 1
When('user enters the valid username', async function () {
    await loginPage.enterUsername('akashdeep1994');
});

When('user enters the valid password', async function () {
    await loginPage.enterPassword('1807')
});

Then('user should be redirected to home page', async function () {
    await expect(page).toHaveURL("https://demoblaze.com/");
});

// Scenerio 2
When('user enters invalid username', async function () {
    await loginPage.enterUsername('akashdeep1234')
});

When('user enters invalid password', async function () {
   await loginPage.enterPassword('1234')
});

Then('popup should appear with error message', async function () {
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        await page.pause();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close();
   });

// Scenerio 3
When('user leaves empty username field', async function () {
    await loginPage.enterUsername('');
});

When('user leaves empty password field', async function () {
    await loginPage.enterPassword('');
});

Then('popup should appear with error message', async function () {
   
});



