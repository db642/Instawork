class jobListingForm {
  get header() {
    return cy.get("#header");
  }
  get firstNameInp() {
    return cy.get('[name="job_application[first_name]"]');
  }
  get lastNameInp() {
    return cy.get("#last_name");
  }
  get emailInp() {
    return cy.get("#email");
  }
  get linkedinInp() {
    return cy.get("#job_application_answers_attributes_0_text_value");
  }
  get hybridWorkDdl() {
    return cy.get("#s2id_job_application_answers_attributes_2_boolean_value");
  }
  get workInUSDdl() {
    return cy.get("#s2id_job_application_answers_attributes_3_boolean_value");
  }
  get visaSponsorshipDdl() {
    return cy.get("#s2id_job_application_answers_attributes_4_boolean_value");
  }
  get YesNoLst() {
    return cy.get('[role="listbox"]');
  }
}

export default new jobListingForm();
