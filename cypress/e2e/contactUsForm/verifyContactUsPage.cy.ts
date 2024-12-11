import { ContactUsForm } from '../../pageObject/contactUsPage'
import { loginPage } from '../../pageObject/loginPage';

describe.only("Contact us form", () => {
    const contactUsPage = new ContactUsForm()
    const LoginPage = new loginPage();
    it("Page 'Contact Us' is visible", () => {
        LoginPage.visit()
        contactUsPage.verifyContactUsPage()
        cy.percySnapshot()
    })
})