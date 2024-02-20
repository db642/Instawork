class SignUpPage {
  get firstNameInp() {
    return cy.get('[placeholder="First name"]');
  }
  get lastNameInp() {
    return cy.get('[placeholder="Last name"]');
  }
  get companyInp() {
    return cy.get('[placeholder="Company"]');
  }
  get phoneNumberInp() {
    return cy.get('[placeholder="Phone number"]');
  }
  get emailInp() {
    return cy.get('[placeholder="Email address"]');
  }
  get passwordInp() {
    return cy.get('[placeholder="Password"]');
  }
  get signUpforFreeBtn() {
    return cy.get("#business-signup");
  }
  register(Firstname, LastName, Company, Phone, Email, Password) {
    this.firstNameInp.type(Firstname);
    this.lastNameInp.type(LastName);
    this.companyInp.type(Company);
    this.phoneNumberInp.type(Phone);
    this.emailInp.type(Email);
    this.passwordInp.type(Password);
    this.signUpforFreeBtn.click();
  }
}

export default new SignUpPage();
