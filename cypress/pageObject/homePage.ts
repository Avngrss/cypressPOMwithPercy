export  class HomePage {

    public visitHomePage() {
        cy.visit('/')
    }

    public logout() {
        cy.get('a').contains('Logout').click()
        cy.url().should('include', '/login')
    } 

    public SubscriptionInHomePage(email: string) {
        cy.get('#footer').scrollIntoView()
        cy.get('#footer').should('be.visible')
        cy.get('.single-widget').should('be.visible')
        cy.get('.single-widget h2').should('exist').and('contain.text', 'Subscription');
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed').should('be.visible')
    }
}