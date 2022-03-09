import { PagesLogin } from "./login.page";

const addTheBlockBtn: string = ".icon-add";
const backFromConstructorBtn: string = ".icon-cancel";
const listOfBlocksBtn: string = "#block-select";
const personalisePageBtn: string = "[href='/my/page_layout']";
const blocksOnThePage: string = ".mypage-box";

export class PagesMyPage extends PagesLogin{

    public get blocksOnPage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(blocksOnThePage);
    } 

    public clickAddBlockBtn() {
        this.clickBtn(addTheBlockBtn);
    }

    public clickBackFromContructorBtn() {
        this.clickBtn(backFromConstructorBtn);
    }

    public clickPersonalisePageBtn() {
        this.clickBtn(personalisePageBtn);
    }

    public removeBlock(blockName: string) {
        cy.get(`[href='/my/remove_block?block=${blockName}']`).click();
    }

    public removeLatestNewsBlock() {
        this.removeBlock('news');
    }

    public removeIssuesAssignedToMeBlock() {
        this.removeBlock('issuesassignedtome');
    }

    public removeReportedIssuesBlock() {
        this.removeBlock('issuesreportedbyme');
    }

    public removeWatchedIssuesBlock() {
        this.removeBlock('issueswatched');
    }

    public removeCalendarBlock() {
        this.removeBlock('calendar');
    }

    public removeDocumentsBlock() {
        this.removeBlock('documents');
    }

    public removeSpentTimeBlock() {
        this.removeBlock('timelog');
    }

    public addLatestNewsBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'news');
        this.clickAddBlockBtn();
    }

    public addIssuesAssignedToMeBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'issuesassignedtome');
        this.clickAddBlockBtn();
    }

    public addReportedIssuesBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'issuesreportedbyme');
        this.clickAddBlockBtn();
    }

    public addWatchedIssuesBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'issueswatched');
        this.clickAddBlockBtn();
    }

    public addCalendarBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'calendar');
        this.clickAddBlockBtn();
    }

    public addDocumentsBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'documents');
        this.clickAddBlockBtn();
    }

    public addSpentTimeBlock() {
        this.selectFromDropdown(listOfBlocksBtn, 'timelog');
        this.clickAddBlockBtn();
    }
    
}