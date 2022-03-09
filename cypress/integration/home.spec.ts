import { PagesHome } from "../pageObjects/home.page";

const pHome = new PagesHome;
const wordForSearch = 'proje';

describe('Redmine link buttons validation', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('REDMINE_HOME_PAGE'));
    })

    it('Validate the Projects page from the Home page', function() {
        pHome.clickProjectsBtn();
        pHome.currentlyUrl.should('contain', 'projects');
    });

    it.skip('Validate the Help page from the Home page', function() {
        pHome.clickHelpBtn();
        pHome.currentlyUrl.should('contain', 'help');
    });

    it('Validate the Home page from the Projects page', function() {
        pHome.clickProjectsBtn();
        pHome.clickHomeBtn();
        pHome.currentlyUrl.should('eq', 'https://www.redmine.org/')
    });

    it('Validate the Overview page from the Home page', function() {
        pHome.clickOverviewBtn();
        pHome.selectedOverviewBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'projects/redmine');
    })

    it('Validate the Download page from the Home page', function() {
        pHome.clickDownloadBtn();
        pHome.selectedDownloadBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'Download');
    })

    it('Validate the Activity page from the Home page', function() {
        pHome.clickActivityBtn();
        pHome.selectedActivityBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'activity');
    })

    it('Validate the Roadmap page from the Home page', function() {
        pHome.clickRoadmapBtn();
        pHome.selectedRoadmapBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'roadmap');
    })

    it('Validate the Issues page from the Home page', function() {
        pHome.clickIssuesBtn();
        pHome.selectedIssueBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'issues');
    })

    it('Validate the News page from the Home page', function() {
        pHome.clickNewsBtn();
        pHome.selectedNewsBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'news');
    })

    it('Validate the Wiki page from the Home page', function() {
        pHome.clickWikiBtn();
        pHome.selectedWikiBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'wiki');
    })

    it('Validate the Forum page from the Home page', function() {
        pHome.clickForumBtn();
        pHome.selectedForumBtn.should('be.visible');
        pHome.currentlyUrl.should('contain', 'boards');
    })

    it('Validate the Repository page from the Home page', function() {
        pHome.clickRepositoryBtn();
        pHome.selectedRepositoryBtn.should('exist');
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