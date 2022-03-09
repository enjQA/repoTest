import { PagesGeneral } from "./general.page";

const loginInput: string = "#user_login";
const passwordInput: string = "#user_password";
const passwordConfirmationInput: string = "#user_password_confirmation";
const firstNameInput: string = "#user_firstname";
const lastNameInput: string = "#user_lastname";
const emailInput: string = "#user_mail";
const submitBtn: string = "[name='commit']";
const errorDataNotice: string = "#errorExplanation";
const successNotice: string = "#flash_notice";

export class PagesRegister extends PagesGeneral {

    public get errorNoticeMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(errorDataNotice);
    }
    
    public get successNoticeMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(successNotice);
    }

    public get randomLogin(): string {
        return this.randomString();
    }

    public get validPassword(): string {
        return '1234';
    }

    public get randomFirstName(): string {
        return this.randomString();
    }
    
    public get randomLastName(): string {
        return this.randomString();
    }

    public get randomEmailWithoutAtSignAndDomain(): string {
        return this.randomString();
    }

    public get randomEmailWithoutAtSign(): string {
        return this.randomString() + 'mail.com';
    }

    public get randomEmailWithoutDomain(): string {
        return this.randomString() + '@';
    }

    public get randomValidMail(): string {
        return this.randomString() + '@mail.com';
    }

    public fillRegisterLoginInput(login: string) {
        this.fillInput(loginInput, login);
    }

    public leaveRegisterLoginInputEmpty() {
        this.clearInput(loginInput);
    }

    public fillRegisterPasswordInput(password: string) {
        this.fillInput(passwordInput, password);
    }

    public leaveRegisterPasswordInputEmpty() {
        this.clearInput(passwordInput);
    }

    public fillPasswordConfirmationInput(password: string) {
        this.fillInput(passwordConfirmationInput, password);
    }

    public leavePasswordConfirmationInputEmpty() {
        this.clearInput(passwordConfirmationInput);
    }

    public fillFirstNameInput(firstName: string) {
        this.fillInput(firstNameInput, firstName);
    }

    public leaveFirstNameInputEmpty() {
        this.clearInput(firstNameInput);
    }

    public fillLastNameInput(lastName: string) {
        this.fillInput(lastNameInput, lastName);
    }

    public leaveLastNameInputEmpty() {
        this.clearInput(lastNameInput);
    }

    public fillEmailInput(email: string) {
        this.fillInput(emailInput, email);
    }

    public leaveEmailInputEmpty() {
        this.clearInput(emailInput);
    }

    public clickSubmitBtn() {
        this.clickBtn(submitBtn);
    }

}