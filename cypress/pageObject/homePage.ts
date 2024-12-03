export default class HomePage {
    public logout() {
        cy.get('a').contains('Logout').click()
        cy.url().should('include', '/login')
    } 
}