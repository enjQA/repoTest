import { PagesRegister } from "./register.page";

const loginBtn: string = "[name='login']";
const loginInput: string = "#username";
const passwordInput: string = "#password";
const errorLoginOrPasswordNotice: string = "#flash_error";
const loggedInAsText: string = "#loggedas";

export class PagesLogin extends PagesRegister {

    public get errorCredentialsNotice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(errorLoginOrPasswordNotice); 
    }

    public get loggedInText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(loggedInAsText);
    }

    public fillLoginInput(login: string) {
        this.fillInput(loginInput, login);
    }

    public fillPasswordInput(password: string) {
        this.fillInput(passwordInput, password);
    }

    public clickLoginBtn() {
        this.clickBtn(loginBtn);
    }

    public loginToAccount(login: string, password: string) {
        this.fillLoginInput(login);
        this.fillPasswordInput(password);
        this.clickLoginBtn();
    }
}