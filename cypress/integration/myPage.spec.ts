import { PagesMyPage } from "../pageObjects/myPage.page";

const pMyPage = new PagesMyPage;

describe('Actions on the Redmine My Page as a logged in user', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_LOGIN_PAGE'));
        cy.fixture('loginCredentials').then((creds) => {
            pMyPage.loginToAccount(creds.Login, creds.Password);
        })
    })

    it('User should add Latest News block from the block list on the Redmine user page', function() {
        pMyPage.blocksOnPage.should('not.exist');
        pMyPage.clickPersonalisePageBtn();
        pMyPage.addLatestNewsBlock();
        pMyPage.clickAddBlockBtn();
        pMyPage.clickBackFromContructorBtn();
        pMyPage.blocksOnPage.should('exist').and('contain', 'Latest news');
    })

    it('User should add all blocks from the block list on the Redmine user page except News block', function() {
        pMyPage.clickPersonalisePageBtn();
        pMyPage.addIssuesAssignedToMeBlock();
        pMyPage.addReportedIssuesBlock();
        pMyPage.addWatchedIssuesBlock();
        pMyPage.addCalendarBlock();
        pMyPage.addDocumentsBlock();
        pMyPage.addSpentTimeBlock();
        pMyPage.clickBackFromContructorBtn();
        pMyPage.blocksOnPage.its('length').should('eq', 7);
    })

    it('User should remove all added blocks from the Redmine user page', function() {
        pMyPage.clickPersonalisePageBtn();
        pMyPage.removeSpentTimeBlock();
        pMyPage.removeDocumentsBlock();
        pMyPage.removeCalendarBlock();
        pMyPage.removeWatchedIssuesBlock();
        pMyPage.removeReportedIssuesBlock();
        pMyPage.removeIssuesAssignedToMeBlock();
        pMyPage.removeLatestNewsBlock();
        pMyPage.clickBackFromContructorBtn();
        pMyPage.blocksOnPage.should('not.exist');
    })
})