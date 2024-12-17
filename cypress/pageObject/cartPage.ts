export class CartPage {
    public SubscriptionIncartPage(email: string) {
        cy.get('a').contains('Cart').click({force: true})
        cy.get('.single-widget').should('be.visible')
        cy.get('.single-widget h2').should('exist').and('contain.text', 'Subscription');
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed').should('be.visible')
    }

    public addProductInCart() {
        cy.get('a').contains('Product').click()
        cy.get('.single-products').first().trigger('mouseover')
        cy.get('a.btn.btn-default.add-to-cart').first().should('be.visible').click()
        cy.get('button.btn.btn-success.close-modal.btn-block').click()
        cy.get('.single-products').first().trigger('mouseover')
        cy.wait(2000)
        cy.get('a.btn.btn-default.add-to-cart').first().should('be.visible').click()
        cy.get('a').contains('View Cart').click()
        cy.get('#cart_info_table').within(() => {
            cy.get('td.cart_price p').should('have.text', 'Rs. 500');
            cy.get('td.cart_quantity button').should('have.text', '2');
            cy.get('td.cart_total p.cart_total_price').should('have.text', 'Rs. 1000');
        })
    }

    public verifyProductQuntity() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.url().should('contain', '/product_details/1')
        cy.get('#quantity').should("be.visible").clear().type('4')
        cy.get('button.btn.btn-default.cart').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('a').contains('View Cart').click()
        cy.get('#cart_info_table').within(() => {
            cy.get('td.cart_quantity button').should('have.text', '4');
        })
    }

    public deleteProduct() {
        cy.get('.cart_quantity_delete').click()
        cy.contains('empty')
    }
}