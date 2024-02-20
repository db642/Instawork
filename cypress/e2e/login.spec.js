import loginPage from "../fixtures/page_objects/login.page";
import navigation from "../fixtures/page_objects/navigation";
import { generateUserData } from "../helpers/fakerData";
let userData;
userData = generateUserData();
let message;
describe("Login in", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("../fixtures/test_data/loginErrorMessage.json").then((data) => {
      message = data;
    });
  });

  it("Should not login without filling in required fields in business account", () => {
    navigation.loginBtn.click();
    loginPage.login(userData.email, userData.password);
    cy.contains(message.invalidEmailorPassword).should("exist");
  });
});
