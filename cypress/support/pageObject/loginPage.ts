export class loginPage {
    public visit() {
        cy.visit('/login');
    }

    public login() {
        cy.get('.login-form > h2').should('be.visible').should('contain', 'Login to your account')
        cy.fixture('userData.json').
        then((user) => {
            cy.get('[data-qa="login-email"]').type(user.email)
            cy.get('[data-qa="login-password"]').type(user.password)
            cy.get('[data-qa="login-button"]').click()
            cy.contains(`Logged in as ${user.username}`).should('be.visible')
        })
    }
}