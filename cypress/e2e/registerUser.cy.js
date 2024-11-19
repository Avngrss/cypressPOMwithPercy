import { loginPage } from "../support/pageObject/loginPage";

describe("Register user", () => {
  const LoginPage = new loginPage();
  it("Register user with correct data", () => {
    LoginPage.visit();
    LoginPage.registerUser();
    cy.percySnapshot();
  });
});
