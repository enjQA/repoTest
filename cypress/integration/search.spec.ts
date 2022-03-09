import { PagesSearch } from "../pageObjects/search.page";

const pSearch = new PagesSearch;

describe('User should use Search correctly', function() {
    before(() => {
        pSearch.visitRedmineSearchPage();
        pSearch.selectSearchInAllProjects();
        pSearch.clickSubmitBtn()
    })

    it('User try to find with no type in search input', function() {
        pSearch.disableAllActiveCheckbox();
        pSearch.leaveSearchInputEmpty();
        pSearch.selectSearchInAllProjects();
        pSearch.clickSubmitBtn()
        pSearch.searchResultsBlock.should('not.exist');
    })

    it('User can search word in Titles only correctly', function() {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('word');
        pSearch.selectSearchInAllProjects();
        pSearch.clickSearchInTitlesOnly()
        pSearch.clickSubmitBtn();
        pSearch.searchedWordInTitle.each((word) => {
            expect(word.text().toLowerCase()).eq('word')
        })
    })

    it('User can search word in Description correctly', function() {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickSubmitBtn();
        pSearch.searchedWordInDescription.each((word) => {
            expect(word.text().toLowerCase()).eq('project')
        })
    })

    it('User can search string at Issues page only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInIssues();
        expect(await pSearch.resultsFromIssuesQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })

    it('User can search string at News page only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInNews();
        expect(await pSearch.resultsFromNewsQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })

    it('User can search string at Changesets page only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInChangesets();
        expect(await pSearch.resultsFromChangeSetsQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })

    it('User can search string at Wiki pages only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInWikiPages();
        expect(await pSearch.resultsFromWikiPagesQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })

    it('User can search string at Messages page only', function() {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInMessages();
        pSearch.searchResult.each((result) => {
            if(result.has(pSearch.resultsFromMessageBlock)) {
                expect(result).be.exist;
            } else {
                if(result.has(pSearch.resultsFromReplyBlock)) {
                    expect(result).be.exist;
                } else {
                    throw 'Error. Result not from Message block';
                }
            }
        });
    });

    it('User can search string at Projects page only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInProjects();
        expect(await pSearch.resultsFromProjectsQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })

    it('User can search string at Plugins page only', async() => {
        pSearch.disableAllActiveCheckbox();
        pSearch.typeInSearchInput('project');
        pSearch.selectSearchInAllProjects();
        pSearch.clickForSearchInRedminePlugins();
        expect(await pSearch.resultsFromRedminePluginsQuantity()).eq(await pSearch.allSearchResultsOnPageQuantity());
    })
})
