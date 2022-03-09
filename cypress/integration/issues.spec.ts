import { PagesIssues } from "../pageObjects/issues.page";

const pIssues = new PagesIssues;

describe('User can use filters for issues finding', function() {
    before(() => {
        cy.visit(Cypress.env('REDMINE_HOME_PAGE'));
        pIssues.clickIssuesBtn();
        pIssues.clickClearFiltersBtn();
    })

    it('User can add all the filters', function() {
        pIssues.selectTrackerFilterWithOperatorValue('is');
        pIssues.selectPriorityFilterWithOperatorValue('is');
        pIssues.selectAuthorFilterWithOperatorValue('is');
        pIssues.selectAssigneeFilterWithOperatorValue('is');
        pIssues.selectAssigneeRoleFilterWithOperatorValue('is');
        pIssues.selectTargetVersionFilterWithOperatorValue('is');
        pIssues.selectCategoryFilterWithOperatorValue('is');
        pIssues.selectSubjectFilterWithOperatorValue('all');
        pIssues.selectCreatedFilterWithOperatorValue('is');
        pIssues.selectUpdatedFilterWithOperatorValue('is');
        pIssues.selectClosedFilterWithOperatorValue('is');
        pIssues.selectStartDateFilterWithOperatorValue('is');
        pIssues.selectDueDateFilterWithOperatorValue('is');
        pIssues.selectEstimatedTimeFilterWithOperatorValue('is');
        pIssues.selectPercentDoneFilterWithOperatorValue('is');
        pIssues.selectResolutionFilterWithOperatorValue('is');
        pIssues.selectAffectedVersionFilterWithOperatorValue('is');
        pIssues.selectRelatedToFilterWithOperatorValue('is');
        pIssues.selectDuplicatesFilterWithOperatorValue('is');
        pIssues.selectDuplicatedByFilterWithOperatorValue('is');
        pIssues.selectBlocksFilterWithOperatorValue('is');
        pIssues.selectBlockedByFilterWithOperatorValue('is');
        pIssues.selectPrecedesFilterWithOperatorValue('is');
        pIssues.selectFollowsFilterWithOperatorValue('is');
        pIssues.selectCopiedToFilterWithOperatorValue('is');
        pIssues.selectCopiedFromFilterWithOperatorValue('is');
        pIssues.filterBlock.its('length').should('eq', 27);
    })

    it('User can use Status filter correctly', async() => {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('is', 'New')
        pIssues.clickApplyBtn();
        pIssues.statusBlockResult.each((result) => {
            expect(result.text()).eq('New');
        })
    })

    it.only('User can use Tracker filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectTrackerFilterWithOperatorValue('is');
        pIssues.selectSearchValueInTrackerFilter('Defect');
        pIssues.clickApplyBtn();
        pIssues.trackerBlockResult.each((result) => {
            expect(result.text()).eq('Defect');
        })
    })

    it('User can use Updated filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectUpdatedFilterWithOperatorValue('>=');
        pIssues.selectDateValueInUpdatedFilter('Jan', '2022', '1');
        pIssues.clickApplyBtn();
        pIssues.updatedDate('2021').should('not.exist');
    })

    it('User can use Subject filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectSubjectFilterWithOperatorValue('contains');
        pIssues.typeSearchValueInSubjectFilter('copy')
        pIssues.clickApplyBtn();
        pIssues.subjectBlockResult.each((result) => {
            expect(result.text().toLowerCase()).eq('copy');
        })
    })
    
    it('User can use Category filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectCategoryFilterWithOperatorValue('is');
        pIssues.selectSearchValueInCategoryFilter('Feeds');
        pIssues.clickApplyBtn();
        pIssues.categoryBlockResult.each((result) => {
            expect(result.text()).eq('Feeds');
        })
    })

    it('User can use Author filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectAuthorFilterWithOperatorValue('is');
        pIssues.selectSearchValueInAuthorFilter('Go MAEDA');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.authorName.should('contain', 'Go MAEDA');
        pIssues.moveToPreviousPage();
    })

    it('User can use Percent Done filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectPercentDoneFilterWithOperatorValue('is');
        pIssues.typeSearchValueInPercentDoneFilter('30', '');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.percentDoneRatio(30).should('exist');
        pIssues.moveToPreviousPage();
    })

    it('User can use Priority filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectPriorityFilterWithOperatorValue('is');
        pIssues.selectSearchValueInPriorityFilter('Urgent');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.priority.should('contain', 'Urgent');
        pIssues.moveToPreviousPage();
    })

    it('User can use Assigned to filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectAssigneeFilterWithOperatorValue('is');
        pIssues.selectSearchValueInAssigneeFilter('Holger Just');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.assigneeTo.should('contain', 'Holger Just');
        pIssues.moveToPreviousPage();
    })

    it('User can use Resolution filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectResolutionFilterWithOperatorValue('is');
        pIssues.selectSearchValueInResolutionFilter('Invalid');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.resolution.should('contain', 'Invalid');
        pIssues.moveToPreviousPage();
    })

    it('User can use Target Version filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectTargetVersionFilterWithOperatorValue('is');
        pIssues.selectSearchValueInTargetVersionFilter('Redmine - 0.7.1');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.targetVersion.should('contain', '0.7.1');
        pIssues.moveToPreviousPage();
    })

    it('User can use Affected Version filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectAffectedVersionFilterWithOperatorValue('is');
        pIssues.selectSearchValueInAffectedVersionFilter('0.7.2');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.affectedVersion.should('contain', '0.7.2');
        pIssues.moveToPreviousPage();
    })

    it('User can use Created filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectCreatedFilterWithOperatorValue('is');
        pIssues.selectDateValueInCreatedFilter('Jan', '2022', '1');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.dateOfCreting.should('contain', '2022-01-01');
        pIssues.moveToPreviousPage();
    })

    it.only('User can use Closed filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectClosedFilterWithOperatorValue('is');
        pIssues.selectDateValueInClosedFilter('Jan', '2022', '2');
        pIssues.clickApplyBtn();
        pIssues.statusBlockResult.each((result) => {
            expect(result.text()).eq('Closed');
        });
        pIssues.updatedBlockResult.each((result) => {
            expect(result.text()).contain('2022-01-02')
        });
    })

    it('User can use Start date filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectStartDateFilterWithOperatorValue('is');
        pIssues.selectDateValueInStartDateFilter('Oct', '2015', '24');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.startDate.should('contain', '2015-10-24');
        pIssues.moveToPreviousPage();
    })

    it('User can use Due date filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectDueDateFilterWithOperatorValue('is');
        pIssues.selectDateValueInDueDateFilter('Feb', '2020', '21');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.dueDate.should('contain', '2020-02-21');
        pIssues.moveToPreviousPage();
    })

    it('User can use Estimated time filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectEstimatedTimeFilterWithOperatorValue('is');
        pIssues.typeSearchValueInEstimatedTimeFilter('24', '');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.estimatedTime.should('contain', '24')
        pIssues.moveToPreviousPage();
    })

    it('User can use Related to filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectRelatedToFilterWithOperatorValue('is');
        pIssues.typeSearchValueInRelatedToFilter('31573');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', '#31573');
        pIssues.moveToPreviousPage();
    })

    it('User can use Duplicates filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectDuplicatesFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInDuplicatesFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'duplicates');
        pIssues.moveToPreviousPage();
    })

    it('User can use Duplicated by filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectDuplicatedByFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueDuplicatedByFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'duplicated by');
        pIssues.moveToPreviousPage();
    })

    it('User can use Blocks filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectBlocksFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInBlocksFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'blocks');
        pIssues.moveToPreviousPage();
    })

    it('User can use Blocked by filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectBlockedByFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInBlockedByFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'blocked by')
        pIssues.moveToPreviousPage();
    })

    it('User can use Precedes filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectPrecedesFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInPrecedesFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'precedes')
        pIssues.moveToPreviousPage();
    })

    it('User can use Follows filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectFollowsFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInFollowsFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'follows')
        pIssues.moveToPreviousPage();
    })

    it('User can use Copied to filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectCopiedToFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInCopiedToFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'copied to')
        pIssues.moveToPreviousPage();
    })

    it('User can use Copied from filter correctly', function() {
        pIssues.clickClearFiltersBtn();
        pIssues.selectStatusParametrs('all', '')
        pIssues.selectCopiedFromFilterWithOperatorValue('any issues in project');
        pIssues.selectSearchValueInCopiedFromTrackerFilter('Redmine');
        pIssues.clickApplyBtn();
        pIssues.clickFirstFilterResult();
        pIssues.relatedIssue.should('contain', 'copied from')
        pIssues.moveToPreviousPage();
    })
})