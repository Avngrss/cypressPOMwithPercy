export default class ProductPage {

    public AllProduct() {
        cy.get('a').contains('Products').click()
        cy.url().should('contain', '/products')
        cy.get('.features_items').should('be.visible')
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            const responseBody = JSON.parse(response.body);
            console.log(responseBody);
            if (responseBody && responseBody.responseCode) {
                expect(responseBody.responseCode).to.eq(200);
              } else {
                throw new Error('Not found any items');
              }
        })
    }

    public getProductDetail() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.url().should('contain', '/product_details/1')
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(6) > b').should('be.visible')
        cy.get(':nth-child(7) > b').should('be.visible')
        cy.get(':nth-child(8) > b').should('be.visible')
    }

    public searchProduct() {
        
    }
}