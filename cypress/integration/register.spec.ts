import { PagesRegister } from "../pageObjects/register.page";

const pRegister = new PagesRegister;

describe('Register redmine.org', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_REGISTER_PAGE'));
    })

    it('Negative test. Registration without the At Sign and Domaine name in email string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomEmailWithoutAtSignAndDomain);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', 'Email is invalid');
    })
    
    it('Negative test. Registration without the At Sign in email string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomEmailWithoutAtSign);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', 'Email is invalid');
    })

    it('Negative test. Registration without the Domaine name in email string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomEmailWithoutDomain);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', 'Email is invalid');
    })

    it('Negative test. Registration with an empty email string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.leaveEmailInputEmpty();
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', "Email can't be blank");
    })

    it('Negative test. Registration with an empty login string', function() {
        pRegister.leaveRegisterLoginInputEmpty();
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomValidMail);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', "Login can't be blank");
    })

    it('Negative test. Registration with an empty password string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.leaveRegisterPasswordInputEmpty();
        pRegister.leavePasswordConfirmationInputEmpty();
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomValidMail);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', "Password is too short");
    })

    it('Negative test. Registration with an empty First name string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.leaveFirstNameInputEmpty();
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomValidMail);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', "First name can't be blank");
    })

    it('Negative test. Registration with an empty Last name string', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.leaveLastNameInputEmpty();
        pRegister.fillEmailInput(pRegister.randomValidMail);
        pRegister.clickSubmitBtn(); 
        pRegister.errorNoticeMessage.should('exist').and('contain', "Last name can't be blank");
    })

    it('Positive test. Registration with the valid credentials', function() {
        pRegister.fillRegisterLoginInput(pRegister.randomLogin);
        pRegister.fillRegisterPasswordInput(pRegister.validPassword);
        pRegister.fillPasswordConfirmationInput(pRegister.validPassword);
        pRegister.fillFirstNameInput(pRegister.randomFirstName);
        pRegister.fillLastNameInput(pRegister.randomLastName);
        pRegister.fillEmailInput(pRegister.randomValidMail);
        pRegister.clickSubmitBtn(); 
        pRegister.successNoticeMessage.should('exist').and('contain', 'Account was successfully created');
    })
})