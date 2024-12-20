import { ContactUsForm } from '../../pageObject/contactUsPage'
import { LoginPage } from '../../pageObject/loginPage';
import { HomePage } from '../../pageObject/homePage';

describe("Contact us form", () => {
    const contactUsPage = new ContactUsForm
    const loginPage = new LoginPage
    const homePage = new HomePage

    it("Page 'Contact Us' is visible", () => {
        homePage.visitHomePage()
        loginPage.visit()
        contactUsPage.verifyContactUsPage()
        cy.percySnapshot()
    })

    it("Add feedback in the contact us form", () => {
        homePage.visitHomePage()
        loginPage.visit()
        contactUsPage.addFeedback()
        cy.percySnapshot()
    })
})