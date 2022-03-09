import { PagesGeneral } from "./general.page";

const newsBtn: string = ".news";
const projectsBtn: string = ".projects";
const helpBtn: string = ".help";
const homeBtn: string = ".home";
const overviewBtn: string = ".overview";
const downloadBtn: string = ".download";
const activityBtn: string = ".activity";
const roadmapBtn: string = ".roadmap";
const issuesBtn: string = ".issues";
const wikiBtn: string = "a.wiki";
const forumBtn: string = ".boards";
const highlighedWords: string = ".highlight"
const repositoryBtn: string = ".repository";
const searchBtn: string = "[href*='search']";
const searchInput: string = "#q"

export class PagesHome extends PagesGeneral {

    public get searchedWord(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(highlighedWords);
    }

    public get currentlyUrl(): Cypress.Chainable<string> {
        return cy.url()
    }

    public get selectedOverviewBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${overviewBtn} selected"]`);
    }

    public get selectedDownloadBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${downloadBtn} selected"]`);
    }

    public get selectedActivityBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${activityBtn} selected"]`);
    }
    
    public get selectedRoadmapBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${roadmapBtn} selected"]`);
    }

    public get selectedIssueBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${issuesBtn} selected"]`);
    }

    public get selectedWikiBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${wikiBtn} selected"]`);
    }

    public get selectedForumBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${forumBtn} selected"]`);
    }

    public get selectedRepositoryBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${repositoryBtn}.selected`);
    }
    
    public get selectedNewsBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${newsBtn} selected"]`);
    }

    public typeInSearchInput(value) {
        this.fillInput(searchInput, value + '{enter}')
    }

    public clickNewsBtn() {
        this.clickBtn(newsBtn);
    }

    public clickProjectsBtn() {
        this.clickBtn(projectsBtn);
    }

    public clickHelpBtn() {
        this.clickBtn(helpBtn);
    }

    public clickHomeBtn() {
        this.clickBtn(homeBtn);
    }

    public clickOverviewBtn() {
        this.clickBtn(overviewBtn);
    }

    public clickDownloadBtn() {
        this.clickBtn(downloadBtn);
    }

    public clickActivityBtn() {
        this.clickBtn(activityBtn);
    }

    public clickRoadmapBtn() {
        this.clickBtn(roadmapBtn);
    }

    public clickIssuesBtn() {
        this.clickBtn(issuesBtn);
    }

    public clickWikiBtn() {
        this.clickBtn(wikiBtn);
    }

    public clickForumBtn() {
        this.clickBtn(forumBtn);
    }

    public clickRepositoryBtn() {
        this.clickBtn(repositoryBtn);
    }

    public clickSearchBtn() {
        this.clickBtn(searchBtn);
    }

    public clickSearchInput() {
        this.clickBtn(searchInput);
    }
}