import { PagesHome } from "../pageObjects/home.page";

const pHome = new PagesHome;
const wordForSearch = 'proje';

describe('Redmine link buttons validation', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_HOME_PAGE'));
        cy.injectAxe();
    })

    it('Validate the Projects page from the Home page', function() {
        pHome.clickProjectsBtn();
        pHome.currentlyUrl.should('contain', 'projects');
        cy.checkA11y();
    });

    it.skip('Validate the Help page from the Home page', function() {
        pHome.clickHelpBtn();
        pHome.currentlyUrl.should('contain', 'help');
    });

    it('Validate the Home page from the Projects page', function() {
        pHome.clickProjectsBtn();
        pHome.clickHomeBtn();
        pHome.currentlyUrl.should('eq', 'https://www.redmine.org/')
        cy.checkA11y()
    });

    it('Validate the Overview page from the Home page', function() {
        pHome.clickOverviewBtn();
        pHome.currentlyUrl.should('contain', 'projects/redmine');
    })

    it('Validate the Download page from the Home page', function() {
        pHome.clickDownloadBtn();
        pHome.currentlyUrl.should('contain', 'Download');
    })

    it('Validate the Activity page from the Home page', function() {
        pHome.clickActivityBtn();
        pHome.currentlyUrl.should('contain', 'activity');
    })

    it('Validate the Roadmap page from the Home page', function() {
        pHome.clickRoadmapBtn();
        pHome.currentlyUrl.should('contain', 'roadmap');
    })

    it('Validate the Issues page from the Home page', function() {
        pHome.clickIssuesBtn();
        pHome.currentlyUrl.should('contain', 'issues');
    })

    it('Validate the News page from the Home page', function() {
        pHome.clickNewsBtn();
        pHome.currentlyUrl.should('contain', 'news');
    })

    it('Validate the Wiki page from the Home page', function() {
        pHome.clickWikiBtn();
        pHome.currentlyUrl.should('contain', 'wiki');
    })

    it('Validate the Forum page from the Home page', function() {
        pHome.clickForumBtn();
        pHome.currentlyUrl.should('contain', 'boards');
    })

    it('Validate the Repository page from the Home page', function() {
        pHome.clickRepositoryBtn();
        pHome.currentlyUrl.should('contain', 'repository');
    })

    it('Validate the Search page from the Main', function() {
        pHome.clickSearchBtn();
        pHome.currentlyUrl.should('contain', 'search');
    })

    it('Check the search function from the Home page', function() {
        pHome.typeInSearchInput(wordForSearch);
        pHome.searchedWord.each((word) => {
            expect(word.text().toLowerCase()).eq(wordForSearch);
        })
    })   
})