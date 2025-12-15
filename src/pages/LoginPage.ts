import BasePage from "./BasePage";

export default class LoginPage extends BasePage{

    loginWindow = '#login2'
    usernameInput = '#loginusername';
    passwordInput = '#loginpassword';
    loginButton = '//button[contains(text(), "Log in")]';
    errorMessage = '';

    async open(){
        await this.navigateTo("https://demoblaze.com/");
        await this.click(this.loginButton);
    }
    async clickLogin(){
        await this.click(this.loginButton);
    }
    async enterUsername(username: string){
        await this.type(this.usernameInput, username);
    }
    async enterPassword(password: string){
        await this.type(this.passwordInput, password);
    }
    async login(username: string, password: string){
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
    }
    async getErrorMessage(): Promise<string>{
        return await this.getText(this.errorMessage);
    }
}