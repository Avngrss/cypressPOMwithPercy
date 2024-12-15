import { LoginPage } from '../../pageObject/loginPage';
import { HomePage }  from '../../pageObject/homePage';

describe('login into application', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage()

  beforeEach(() => {
    homePage.visitHomePage()
    loginPage.visit()
  })

  it('login with correct data', () => {
    loginPage.login()
    cy.percySnapshot()
  })

  it('login into application with incorrect data', () => {
    loginPage.incorrectLogin("incorrectEmail@gmail.com", "incorrectPassword")
    cy.percySnapshot()
  })
})