import '../../support/commands'
import { HomePage } from '../../pageObject/homePage'

describe('Logout from the app', () => {
    const homePage = new HomePage
    it('logout user from the application ', () => {
        cy.loginUser()
        homePage.logout()
    })
})