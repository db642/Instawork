import navigation from "../fixtures/page_objects/navigation";
import signUpPage from "../fixtures/page_objects/signUp.page";
import { generateUserData } from "../helpers/fakerData";
let userData;
userData = generateUserData();

describe("signing up", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sign up", () => {
    navigation.signUpBtn.click();
    navigation.signUpLikeBizBtn.click();
    signUpPage.register(
      userData.firstName,
      userData.lastName,
      userData.company,
      userData.phoneNumber,
      userData.email,
      userData.password
    );
  });
});
