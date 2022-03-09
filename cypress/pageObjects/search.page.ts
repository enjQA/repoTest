import { PagesGeneral } from "./general.page";

const searchInput: string = "#search-input";
const issues: string = "#issues+a";
const news: string = "#news+a";
const changesets: string = "#changesets+a";
const wikiPages: string = "#wiki_pages+a";
const messages: string = "#messages+a";
const projects: string = "#projects+a";
const redminePlugins: string = "#redmine_plugins+a";
const issuesBlock: string = ".issue";
const newsBlock: string = ".news";
const messageBlock: string = ".message";
const replyBlock: string = ".reply";
const changesetsBlock: string = ".changeset";
const wikiPagesBlock: string = ".wiki-page";
const projectsBlock: string = ".project";
const redminePluginsBlock: string = ".plugin";
const searchResultsFromIssues: string = `search-results>dt${issuesBlock}`;
const searchResultsFromNews: string = `search-results>dt${newsBlock}`;
const searchResultsFromChangesets: string = `search-results>dt${changesetsBlock}`;
const searchResultsFromWikiPages: string = `search-results>dt${wikiPagesBlock}`;
const searchResultsFromProjects: string = `search-results>dt${projectsBlock}`;
const searchResultsFromRedminePlugins: string = `search-results>dt${redminePluginsBlock}`;
const titleOnly: string = "#titles_only";
const projectsDropdown: string = "#scope";
const submitBtn: string = "[name='commit']";
const higlightedWordInTitles: string = "dt>a>.highlight";
const highlightedWordInDescription: string = "dd>span>.highlight";
const searchResults: string = "#search-results";
const activeCheckboxes: string = '[checked="checked"]';

export class PagesSearch  extends PagesGeneral {

    public get resultsFromMessageBlock(): string {
        return messageBlock
    }

    public get resultsFromReplyBlock(): string {
        return replyBlock
    }

    public get searchResultsBlock(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResults);
    }

    public get searchedWordInTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(higlightedWordInTitles);
    }

    public get searchedWordInDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(highlightedWordInDescription);
    }

    public get searchResultsFromIssues(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromIssues);
    }

    public get searchResultsFromNews(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromNews);
    }

    public get searchResultsFromChangeSets(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromChangesets);
    }

    public get searchResultsFromWikiPages(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromWikiPages);
    }

    public get searchResultsFromProjects(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromProjects);
    }
    
    public get searchResultsFromRedminePlugins(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(searchResultsFromRedminePlugins);
    }

    public disableAllActiveCheckbox() {
        cy.get(activeCheckboxes).each(($el) => {
            cy.wrap($el).uncheck();
        })
    }

    public leaveSearchInputEmpty() {
        this.clearInput(searchInput);
    }

    public typeInSearchInput(searchValue: string) {
        this.fillInput(searchInput, searchValue)
    }

    public clickForSearchInIssues() {
        this.clickBtn(issues);
    }

    public clickForSearchInNews() {
        this.clickBtn(news);
    }

    public clickForSearchInChangesets() {
        this.clickBtn(changesets);
    }

    public clickForSearchInWikiPages() {
        this.clickBtn(wikiPages);
    }

    public clickForSearchInMessages() {
        this.clickBtn(messages);
    }

    public clickForSearchInProjects() {
        this.clickBtn(projects);
    }

    public clickForSearchInRedminePlugins() {
        this.clickBtn(redminePlugins);
    }

    public selectSearchInAllProjects() {
        cy.get(projectsDropdown).select('All Projects');
    }

    public selectSearchInRedmineOnly() {
        cy.get(projectsDropdown).select('Redmine');
    }

    public selectSearchInRedmineAndItsSubprojects() {
        cy.get(projectsDropdown).select('Redmine and its subprojects');
    }

    public clickSearchInTitlesOnly() {
        this.clickBtn(titleOnly);
    }

    public clickSubmitBtn() {
        this.clickBtn(submitBtn);
    }

    public resultsFromProjectsQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromProjects.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public resultsFromIssuesQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromIssues.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public resultsFromNewsQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromNews.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public resultsFromChangeSetsQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromChangeSets.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public resultsFromWikiPagesQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromWikiPages.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public resultsFromRedminePluginsQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.searchResultsFromRedminePlugins.then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }

    public allSearchResultsOnPageQuantity(): Promise<number> {
        return new Promise<number>((resolve) => {
            cy.get('dl>dt').then(($el) => {
                let elementsOnPage: any = $el.length;
                resolve(elementsOnPage);
            });
        })
    }
}