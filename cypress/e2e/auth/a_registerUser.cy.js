import { LoginPage } from "../../pageObject/loginPage";
import { HomePage } from "../../pageObject/homePage";

describe("Register user", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visitHomePage();
    loginPage.visit();
  });

  it("Register user with correct data", () => {
    loginPage.registerUser();
    cy.percySnapshot();
  });

  it("Registration user with exsisted email", () => {
    loginPage.registerWithExistedEmail();
    cy.percySnapshot();
  });
});
