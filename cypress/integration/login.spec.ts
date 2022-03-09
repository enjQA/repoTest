import { PagesLogin } from "../pageObjects/login.page";

const pLogin = new PagesLogin;
let credentials: any;

describe('Login redmine.org', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_LOGIN_PAGE'));
        cy.fixture('loginCredentials').then((creds) => {
            credentials = creds;
          })
    })

    it('Negative test. Signing in with the invalid login', function() {
        pLogin.fillLoginInput(credentials.invalidLogin);
        pLogin.fillPasswordInput(credentials.Password);
        pLogin.clickLoginBtn();
        pLogin.errorCredentialsNotice.should('exist');
    })

    it('Negative test. Signing in with the invalid password', function() {
        pLogin.fillLoginInput(credentials.Login);
        pLogin.fillPasswordInput(credentials.invalidPassword);
        pLogin.clickLoginBtn();
        pLogin.errorCredentialsNotice.should('exist');
    })

    it('Positive test. Signing in with the valid credentials', function() {
        pLogin.fillLoginInput(credentials.Login);
        pLogin.fillPasswordInput(credentials.Password);
        pLogin.clickLoginBtn();
        pLogin.loggedInText.should('exist');
    })
})