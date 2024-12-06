import { ContactUsForm } from '../../pageObject/contactUsPage'
import { loginPage } from '../../pageObject/loginPage';

describe("Contact us form", () => {
    const contactUsPage = new ContactUsForm()
    const LoginPage = new loginPage();
    it("Add feedback in the contact us form", () => {
        LoginPage.visit()
        contactUsPage.addFeedback()
        cy.percySnapshot()
    })
})