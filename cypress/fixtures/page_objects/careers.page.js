class careersPage {
  get openPositionsBtn() {
    return cy.get(".btn-primary.w-button");
  }
  get engineeringListingsTbl() {
    return cy.get("#4002707006");
  }
  get emailInp() {
    return cy.get('[name="Email"]');
  }
  get companyInp() {
    return cy.get('[name="Company"]');
  }
  get commentInp() {
    return cy.get('[name="commentCapture"]');
  }
  get submitInp() {
    return cy.get('[type="submit"]');
  }
}
export default new careersPage();
