export class ContactUsForm {
    public addFeedback() {
        cy.get('a').contains(' Contact us').click()
        cy.contains('Contact us').should('be.visible')
        cy.fixture('userData').then((user) => {
            cy.get('[data-qa="name"]').type(user.username)
            cy.get('[data-qa="email"]').type(user.email)
            cy.get('[data-qa="subject"]').type(user.subject)
            cy.get('[data-qa="message"]').type(user.message)
            cy.get('input[name="upload_file"]').selectFile(user.image)
            cy.get('[data-qa="submit-button"]').click()
            cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
            cy.get('a').contains('Home').click()
            cy.url().should('contain', 'https://automationexercise.com/')
        })    
    }
}