import careersPage from "../fixtures/page_objects/careers.page";
import jobListingForm from "../fixtures/page_objects/jobListing.form";
import navigation from "../fixtures/page_objects/navigation";
import jobListings from "../fixtures/test_data/jobListings.json";
import questionAnswers from "../fixtures/test_data/questionAnswers.json";
import { generateUserData } from "../helpers/fakerData";
let userData;
userData = generateUserData();

describe("careers", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("verifies QA job listings exists", () => {
    navigation.resoursesTab.click();
    navigation.careersTab.click();
    careersPage.openPositionsBtn.click();
    careersPage.engineeringListingsTbl.contains(jobListings.QA).click();
    jobListingForm.header.contains(jobListings.QA);
    jobListingForm.firstNameInp.type(userData.firstName);
    jobListingForm.lastNameInp.type(userData.lastName);
    jobListingForm.emailInp.type(userData.email);
    jobListingForm.linkedinInp.type(userData.linkedin);
    jobListingForm.hybridWorkDdl.click();
    jobListingForm.YesNoLst.contains(questionAnswers.Yes).click();
    jobListingForm.workInUSDdl.click();
    jobListingForm.YesNoLst.contains(questionAnswers.Yes).click();
    jobListingForm.visaSponsorshipDdl.click();
    jobListingForm.YesNoLst.contains(questionAnswers.No).click();
    //cy.get('submit_app').click() commenting out to spare the team from spam unless I'm hired.
  });
});
