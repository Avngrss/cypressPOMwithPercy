import { loginPage } from "../../pageObject/loginPage";

describe("Register user", () => {
  const LoginPage = new loginPage();
  it("Register user with correct data", () => {
    LoginPage.visit();
    LoginPage.registerUser();
    cy.percySnapshot();
  });

  it.only("Registration user with exsisted email", () => {
    LoginPage.visit();
    LoginPage.registerWithExistedEmail()
    cy.percySnapshot()
  })
});
