import { loginPage } from '../support/pageObject/loginPage';

describe('login into application', () => {
  const LoginPage = new loginPage();
  it('login with correct data', () => {
    LoginPage.visit()
    LoginPage.login()
    cy.percySnapshot()
  })

  it('login into application with incorrect data', () => {
    LoginPage.visit()
    LoginPage.incorrectLogin("incorrectEmail@gmail.com", "incorrectPassword")
    cy.percySnapshot()
  })
})