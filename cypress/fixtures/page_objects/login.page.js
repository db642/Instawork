class SignUpPage {
  get emailInp() {
    return cy.get('[name="email"]');
  }
  get passwordInp() {
    return cy.get('[name="password"]');
  }

  get loginBtn() {
    return cy.get('[type="submit"]');
  }

  login(Email, Password) {
    this.emailInp.type(Email);
    this.passwordInp.type(Password);
    this.loginBtn.click();
  }
}

export default new SignUpPage();
