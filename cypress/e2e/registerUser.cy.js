import { loginPage } from "../support/pageObject/loginPage";

describe("Register user", () => {
  const LoginPage = new loginPage();
  it.only("Register user with correct data", () => {
    LoginPage.visit();
    LoginPage.registerUser();
    cy.percySnapshot();
  });
});
