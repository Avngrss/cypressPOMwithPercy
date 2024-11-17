import { loginPage } from '../support/pageObject/loginPage';

describe('login into application with correct data', () => {
  const LoginPage = new loginPage();
  it('login with correct data', () => {
    LoginPage.visit()
    cy.percySnapshot()
    LoginPage.login()
    cy.percySnapshot()
  })
})