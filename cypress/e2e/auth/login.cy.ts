import { loginPage } from '../../pageObject/loginPage';

describe('login into application', () => {
  const LoginPage = new loginPage();

  beforeEach(() => {
    LoginPage.visit()
  })

  it('login with correct data', () => {
    LoginPage.login()
    cy.percySnapshot()
  })

  it('login into application with incorrect data', () => {
    LoginPage.incorrectLogin("incorrectEmail@gmail.com", "incorrectPassword")
    cy.percySnapshot()
  })
})