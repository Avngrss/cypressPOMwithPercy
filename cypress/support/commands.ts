import "@percy/cypress";
import '@shelex/cypress-allure-plugin';

import { loginPage } from '../pageObject/loginPage';
declare global {
    namespace Cypress {
      interface Chainable {
        loginUser(): Chainable<Element>;
      }
    }
  }
  
  Cypress.Commands.add('loginUser', () => {
    const loginPageInstance = new loginPage();
    loginPageInstance.visit();
    loginPageInstance.login();
  });
