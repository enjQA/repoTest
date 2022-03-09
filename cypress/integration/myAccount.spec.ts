import { PagesMyAccount } from "../pageObjects/myAccount.page";

const pMyAccount = new PagesMyAccount;
const randomFirstName: string = pMyAccount.randomString();
let credentials: any;

describe('Actions on the Redmine My Account page', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_LOGIN_PAGE'));
        cy.fixture('loginCredentials').then((creds) => {
            credentials = creds;
            pMyAccount.loginToAccount(credentials.Login, credentials.Password);
        })
        pMyAccount.clickMyAccountBtn();
    })

    it('Negative test. User change account first name to empty', function() {
        pMyAccount.leaveFirstNameInputEmpty();
        pMyAccount.clickSaveBtn();
        pMyAccount.errorNoticeMessage.should('exist').and('contain', "First name can't be blank");
    })

    it('Positive test. User change account first name to other word with minimum one symbol', function() {
        pMyAccount.fillFirstNameInput(randomFirstName);
        pMyAccount.clickSaveBtn();
        pMyAccount.successNoticeMessage.should('exist').and('contain', 'Account was successfully updated');
    })

    it('User should see his public profile after click on his Username button', function() {
        pMyAccount.clickLoggedInUserBtn();
        pMyAccount.userProfilePublicInfo.should('contain', randomFirstName);
    })

    it('Negative test. User change account password with wrong currently password', function() {
        pMyAccount.clickChangePasswordBtn();;
        pMyAccount.fillPasswordInput(credentials.invalidPassword);
        pMyAccount.fillNewPasswordInput(credentials.newPassword);
        pMyAccount.fillNewPasswordConfirmationInput(credentials.newPassword);
        pMyAccount.clickApplyBtn();
        pMyAccount.errorCredentialsNotice.should('exist').and('contain', 'Wrong password');
    })

    it('Positive test. User change account password with valid password to any other with minimum four symbols', function() {
        pMyAccount.clickChangePasswordBtn();
        pMyAccount.fillPasswordInput(credentials.Password);
        pMyAccount.fillNewPasswordInput(credentials.newPassword);
        pMyAccount.fillNewPasswordConfirmationInput(credentials.newPassword);
        pMyAccount.clickApplyBtn();
        pMyAccount.successNoticeMessage.should('exist').and('contain', 'Password was successfully updated');
        pMyAccount.clickChangePasswordBtn();
        pMyAccount.fillPasswordInput(credentials.newPassword);
        pMyAccount.fillNewPasswordInput(credentials.Password);
        pMyAccount.fillNewPasswordConfirmationInput(credentials.Password);
        pMyAccount.clickApplyBtn();
    })
})