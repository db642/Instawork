class navigation {
  get resoursesTab() {
    return cy.contains("Resources");
  }
  get careersTab() {
    return cy.contains("Careers");
  }
  get loginBtn() {
    return cy.get('[data-w-id="3e5585e2-afa9-efb7-8087-b8a36c33a759"]');
  }
  get signUpBtn() {
    return cy.get('[data-w-id="fa9da164-e8d5-82ad-ffaf-6e3a586a96f4"]');
  }
  get signUpLikeBizBtn() {
    return cy.get("#modal-biz");
  }
}
export default new navigation();
