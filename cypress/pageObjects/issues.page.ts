/// <reference types="cypress-xpath" />

import { PagesHome } from "./home.page";

const addFilterBtn: string = "#add_filter_select";
const clearFiltersBtn: string = ".icon-reload";
const filterBlock: string = ".filter";
const selectMonth: string = ".ui-datepicker-month";
const selectYear: string = "[data-handler='selectYear']";
const applyBtn: string = ".icon-checked";
const updatedDateBtn: string = "#values_updated_on_1+.ui-datepicker-trigger";
const createdDateBtn: string = "#values_created_on_1+.ui-datepicker-trigger";
const closedDateBtn: string = "#values_closed_on_1+.ui-datepicker-trigger";
const dueDateBtn: string = "#values_due_date_1+.ui-datepicker-trigger";
const startDateBtn: string = "#values_start_date_1+.ui-datepicker-trigger";
const subjectValue: string = "#values_subject";
const firstFilterResult: string = ".hascontextmenu:first-child>.subject>a";
const authorName: string = ".author";
const percentDoneValue: string = "#values_done_ratio";
const relatedToValue: string = "#values_relates";
const estimatedTimeValue: string = "#values_estimated_hours";
const priority: string = "td.priority";
const assignedToUser: string = ".assigned-to>.user.active";
const resolution: string = "td.cf_2";
const targetVersion: string = "td.fixed-version>a";
const affectedVersion: string = "td.cf_4>a";
const relatedIssues: string = "td.subject";
const estimatedTime: string = "td.estimated-hours";
const startDate: string = "td.start-date";
const dueDate: string = "td.due-date";
const statusBlock: string = ".status";
const trackerBlock: string = ".tracker";
const subjectBlock: string = ".subject";
const updatedBlock: string = ".updated_on";
const categoryBlock: string = ".category";
const statusOperator: string = "status_id";
const trackerOperator: string = "tracker_id";
const priorityOperator: string = "priority_id";
const authorOperator: string = "author_id";
const assigneeOperator: string = "assigned_to_id";
const assigneeRoleOperator: string = "assigned_to_role";
const targetVersionOperator: string = "fixed_version_id";
const categoryOperator: string = "category_id";
const subjectOperator: string = "subject";
const createdOperator: string = "created_on";
const updatedOperator: string = "updated_on";
const closedOperator: string = "closed_on";
const startDateOperator: string = "start_date";
const dueDateOperator: string = "due_date";
const estimatedTimeOperator: string = "estimated_hours";
const percentDoneOperator: string = "done_ratio";
const resolutionOperator: string = "cf_2";
const affectedVersionOperator: string = "cf_4";
const relatedToOperator: string = "relates";
const duplicatesOperator: string = "duplicates";
const duplicatedByOperator: string = "duplicated";
const blocksOperator: string = "blocks";
const blockedByOperator: string = "blocked";
const precedesOperator: string = "precedes";
const followsOperator: string = "follows";
const copiedToOperator: string = "copied_to";
const copiedFromOperator: string = "copied_from";
const creatingDate: string = "div.subject+.author>a[title]";
const statusValueIs: string = "#operators_status_id>[value='=']";
const statusValueIsNot:  string = "#operators_status_id>[value='!']";
const statusSelectedValue: string = "#operators_status_id>option[selected='selected']";

export class PagesIssues extends PagesHome{

    public get priority(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(priority);
    } 

    public get resolution(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(resolution);
    }

    public get targetVersion(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(targetVersion);
    }

    public get affectedVersion(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(affectedVersion);
    }

    public get startDate(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(startDate);
    }

    public get dueDate(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(dueDate);
    }
    public get relatedIssue(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(relatedIssues);
    }

    public get estimatedTime(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(estimatedTime);
    }

    public get assigneeTo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(assignedToUser)
    }

    public get authorName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(authorName);
    }

    public get statusBlockResult(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(statusBlock);
    }

    public get trackerBlockResult(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(trackerBlock);
    }

    public get subjectBlockResult(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(subjectBlock);
    }

    public get updatedBlockResult(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(updatedBlock);
    }

    public get categoryBlockResult(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(categoryBlock);
    }

    public get dateOfCreting(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(creatingDate).first();
    }

    public get filterBlock(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(filterBlock);
    }

    public getDay(day: string) {
        return cy.xpath(`//a[@class='ui-state-default' and text()=${day}]`)
    }

    public selectFilterOperator(operatorName: string, value: string) {
        cy.get('#operators_' + operatorName).select(value);
    }

    public selectValueOperator(operatorName: string, value: string) {
        cy.get('#values_' + operatorName + '_1').select(value);
    }

    public clickApplyBtn() {
        this.clickBtn(applyBtn);
    }

    public clickClearFiltersBtn() {
        this.clickBtn(clearFiltersBtn);
    }

    public selectStatusParametrs(operatorValue: string, searchValue: string) {
        this.selectFilterOperator(statusOperator, operatorValue);
        switch(cy.get(statusSelectedValue)) {
            case cy.get(statusValueIs):
            case cy.get(statusValueIsNot):
                this.selectValueOperator(statusOperator, searchValue);
                break;
            default: 
                break;
        }
    }

    public clickFirstFilterResult() {
        this.clickBtn(firstFilterResult);
    }

    public selectFilterFromDropdown(value: string) {
        cy.get(addFilterBtn).select(value)
    }

    public selectTrackerFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Tracker');
        this.selectFilterOperator(trackerOperator, operatorValue);
    }

    public selectSearchValueInTrackerFilter(searchValue: string) {
        this.selectValueOperator(trackerOperator, searchValue);    
    }

    public selectPriorityFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Priority');
        this.selectFilterOperator(priorityOperator, operatorValue);
    }

    public selectSearchValueInPriorityFilter(searchValue: string) {
        this.selectValueOperator(priorityOperator, searchValue);    
    }

    public selectAuthorFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Author');
        this.selectFilterOperator(authorOperator, operatorValue);
    }

    public selectSearchValueInAuthorFilter(searchValue: string) {
        this.selectValueOperator(authorOperator, searchValue);    
    }

    public selectAssigneeFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Assignee');
        this.selectFilterOperator(assigneeOperator, operatorValue);
    }

    public selectSearchValueInAssigneeFilter(searchValue: string) {
        this.selectValueOperator(assigneeOperator, searchValue);    
    }

    public selectAssigneeRoleFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown("Assignee's role");
        this.selectFilterOperator(assigneeRoleOperator, operatorValue);
    }

    public selectTargetVersionFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Target version');
        this.selectFilterOperator(targetVersionOperator, operatorValue);
    }

    public selectSearchValueInTargetVersionFilter(searchValue: string) {
        this.selectValueOperator(targetVersionOperator, searchValue);    
    }

    public selectCategoryFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Category');
        this.selectFilterOperator(categoryOperator, operatorValue);
    }

    public selectSearchValueInCategoryFilter(searchValue: string) {
        this.selectValueOperator(categoryOperator, searchValue);    
    }

    public selectSubjectFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Subject');
        this.selectFilterOperator(subjectOperator, operatorValue);
    }

    public typeSearchValueInSubjectFilter(searchValue: string) {
        this.fillInput(subjectValue, searchValue);
    }

    public selectCreatedFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Created');
        this.selectFilterOperator(createdOperator, operatorValue);
    }

    public selectDateValueInCreatedFilter(month: string, year: string, day: string) {
        this.clickBtn(createdDateBtn);
        cy.get(selectMonth).select(month);
        cy.get(selectYear).select(year);
        this.getDay(day).click();
    }

    public selectUpdatedFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Updated');
        this.selectFilterOperator(updatedOperator, operatorValue);
    }

    public updatedDate(date: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.updated_on', date);
    }

    public selectDateValueInUpdatedFilter(month: string, year: string, day: string) {
        this.clickBtn(updatedDateBtn);
        cy.get(selectMonth).select(month);
        cy.get(selectYear).select(year);
        this.getDay(day).click();
    }

    public selectClosedFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Closed');
        this.selectFilterOperator(closedOperator, operatorValue);
    }

    public selectDateValueInClosedFilter(month: string, year: string, day: string) {
        this.clickBtn(closedDateBtn);
        cy.get(selectMonth).select(month);
        cy.get(selectYear).select(year);
        this.getDay(day).click();
    }

    public selectStartDateFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Start date');
        this.selectFilterOperator(startDateOperator, operatorValue);
    }

    public selectDateValueInStartDateFilter(month: string, year: string, day: string) {
        this.clickBtn(startDateBtn);
        cy.get(selectMonth).select(month);
        cy.get(selectYear).select(year);
        this.getDay(day).click();
    }

    public selectDueDateFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Due date');
        this.selectFilterOperator(dueDateOperator, operatorValue);
    }

    public selectDateValueInDueDateFilter(month: string, year: string, day: string) {
        this.clickBtn(dueDateBtn);
        cy.get(selectMonth).select(month);
        cy.get(selectYear).select(year);
        this.getDay(day).click();
    }

    public selectEstimatedTimeFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Estimated time');
        this.selectFilterOperator(estimatedTimeOperator, operatorValue);
    }

    public typeSearchValueInEstimatedTimeFilter(firstSearchValue: string, secondSearchValue: string) {
        this.fillInput(`${estimatedTimeValue}_1`, firstSearchValue);
        if(cy.get(`${estimatedTimeValue}_2`).should('exist')) {
        this.fillInput(`${estimatedTimeValue}_2`, secondSearchValue);
        }
    }

    public selectPercentDoneFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('% Done');
        this.selectFilterOperator(percentDoneOperator, operatorValue);
    }

    public typeSearchValueInPercentDoneFilter(firstSearchValue: string, secondSearchValue: string) {
        this.fillInput(`${percentDoneValue}_1`, firstSearchValue);
        if(cy.get(`${percentDoneValue}_2`).should('exist')) {
        this.fillInput(`${percentDoneValue}_2`, secondSearchValue);
        }
    }

    public percentDoneRatio(value: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.progress-${value}`);
    }

    public selectResolutionFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Resolution');
        this.selectFilterOperator(resolutionOperator, operatorValue);
    }

    public selectSearchValueInResolutionFilter(searchValue: string) {
        this.selectValueOperator(resolutionOperator, searchValue);    
    }

    public selectAffectedVersionFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('Affected version');
        this.selectFilterOperator(affectedVersionOperator, operatorValue);
    }

    public selectSearchValueInAffectedVersionFilter(searchValue: string) {
        this.selectValueOperator(affectedVersionOperator, searchValue);    
    }

    public selectRelatedToFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('related to');
        this.selectFilterOperator(relatedToOperator, operatorValue);
    }

    public typeSearchValueInRelatedToFilter(searchValue: string) {
        this.fillInput(relatedToValue, searchValue);
    }

    public selectSearchValueInRelatedToFilter(searchValue: string) {
        this.selectValueOperator(relatedToOperator, searchValue);    
    }

    public selectDuplicatesFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('duplicates');
        this.selectFilterOperator(duplicatesOperator, operatorValue);
    }

    public selectSearchValueInDuplicatesFilter(searchValue: string) {
        this.selectValueOperator(duplicatesOperator, searchValue);    
    }

    public selectDuplicatedByFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('duplicated by');
        this.selectFilterOperator(duplicatedByOperator, operatorValue);
    }

    public selectSearchValueDuplicatedByFilter(searchValue: string) {
        this.selectValueOperator(duplicatedByOperator, searchValue);    
    }

    public selectBlocksFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('blocks');
        this.selectFilterOperator(blocksOperator, operatorValue);
    }

    public selectSearchValueInBlocksFilter(searchValue: string) {
        this.selectValueOperator(blocksOperator, searchValue);    
    }

    public selectBlockedByFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('blocked by');
        this.selectFilterOperator(blockedByOperator, operatorValue);
    }

    public selectSearchValueInBlockedByFilter(searchValue: string) {
        this.selectValueOperator(blockedByOperator, searchValue);    
    }

    public selectPrecedesFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('precedes');
        this.selectFilterOperator(precedesOperator, operatorValue);
    }

    public selectSearchValueInPrecedesFilter(searchValue: string) {
        this.selectValueOperator(precedesOperator, searchValue);    
    }

    public selectFollowsFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('follows');
        this.selectFilterOperator(followsOperator, operatorValue);
    }

    public selectSearchValueInFollowsFilter(searchValue: string) {
        this.selectValueOperator(followsOperator, searchValue);    
    }

    public selectCopiedToFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('copied to');
        this.selectFilterOperator(copiedToOperator, operatorValue);
    }

    public selectSearchValueInCopiedToFilter(searchValue: string) {
        this.selectValueOperator(copiedToOperator, searchValue);    
    }

    public selectCopiedFromFilterWithOperatorValue(operatorValue: string) {
        this.selectFilterFromDropdown('copied from');
        this.selectFilterOperator(copiedFromOperator, operatorValue);
    }

    public selectSearchValueInCopiedFromTrackerFilter(searchValue: string) {
        this.selectValueOperator(copiedFromOperator, searchValue);    
    }

}