export class CartPage {
    public SubscriptionIncartPage(email: string) {
        cy.get('a').contains('Cart').click({force: true})
        cy.get('.single-widget').should('be.visible')
        cy.get('.single-widget h2').should('exist').and('contain.text', 'Subscription');
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed').should('be.visible')
    }
}