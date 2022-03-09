import { PagesLogin } from "./login.page";

const changePasswordBtn: string = "[href='/my/password']";
const newPasswordInput: string = "#new_password";
const newPasswordConfirmationInput: string = "#new_password_confirmation";
const applyBtn: string = "[value='Apply']";
const saveBtn: string = "[value='Save']";
const myAccountBtn: string = ".my-account";
const loggedInAccountProfileBtn: string = "div>.user.active";
const userPublicProfileData: string = "#content";

export class PagesMyAccount extends PagesLogin {

    public get userProfilePublicInfo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(userPublicProfileData);
    }

    public clickChangePasswordBtn() {
        this.clickBtn(changePasswordBtn);
    }

    public fillNewPasswordInput(newPassword: string) {
        this.fillInput(newPasswordInput, newPassword);
    }

    public fillNewPasswordConfirmationInput(newPasswordConfirmation: string) {
        this.fillInput(newPasswordConfirmationInput, newPasswordConfirmation);
    }

    public clickApplyBtn() {
        this.clickBtn(applyBtn);
    }

    public clickSaveBtn() {
        this.clickBtn(saveBtn);
    }

    public clickMyAccountBtn() {
        this.clickBtn(myAccountBtn);
    }

    public clickLoggedInUserBtn() {
        this.clickBtn(loggedInAccountProfileBtn);
    }

}