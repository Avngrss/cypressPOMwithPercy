import "@percy/cypress";


import { LoginPage } from '../pageObject/loginPage';
import { HomePage } from "../pageObject/homePage";
declare global {
    namespace Cypress {
      interface Chainable {
        loginUser(): Chainable<Element>;
      }
    }
  }
  
  Cypress.Commands.add('loginUser', () => {
    const loginPageInstance = new LoginPage
    const homePage = new HomePage
    homePage.visitHomePage()
    loginPageInstance.visit();
    loginPageInstance.login();
  });
