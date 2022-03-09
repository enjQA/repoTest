export class PagesGeneral {

    public fillInput(inputName: string, value: string) {
        cy.get(inputName).clear().type(value);
    }

    public randomString(): string {
        return Math.random().toString(36).substring(2,9);
    }

    public clickBtn(locator: string) {
        cy.get(locator).click();
    }

    public clearInput(locator: string) {
        cy.get(locator).clear();
    }

    public selectFromDropdown(locator: string, value: string) {
        cy.get(locator).select(value);
    }

    public moveToPreviousPage() {
        cy.go('back');
    }

}