export class ProductPage {
  public visitProductsPage() {
    cy.visit("/products");
  }

  public AllProduct() {
    cy.get("a").contains("Products").click();
    cy.url().should("contain", "/products");
    cy.get(".features_items").should("be.visible");
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      const responseBody = JSON.parse(response.body);
      console.log(responseBody);
      if (responseBody && responseBody.responseCode) {
        expect(responseBody.responseCode).to.eq(200);
      } else {
        throw new Error("Not found any items");
      }
    });
  }

  public getProductDetail() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
    cy.url().should("contain", "/product_details/1");
    cy.get(".product-information > h2").should("be.visible");
    cy.get(".product-information > :nth-child(3)").should("be.visible");
    cy.get(":nth-child(6) > b").should("be.visible");
    cy.get(":nth-child(7) > b").should("be.visible");
    cy.get(":nth-child(8) > b").should("be.visible");
  }

  public searchProduct(product: string) {
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
    cy.get(".features_items").should("be.visible");
    cy.get("h2")
      .should("be.visible")
      .should("contain.text", "Searched Products");
    cy.url().should("contain", "/products?search=blue");
  }

  public searchNotExistedProduct(product: string) {
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
    cy.get(".features_items").should(
      "not.have.descendants",
      ".single-products"
    );
  }

  public addReviewOnProduct() {
    cy.fixture('formData.json').then((data) => {
        cy.get('#name').type(data.username)
        cy.get('#email').type(data.email)
        cy.get('#review').type(data.message)
        cy.get('#button-review').click()
        cy.get('div.alert-success.alert').should('contain.text', 'Thank you for your review.')
    })
  }

  public addRecommendedItem() {
    cy.get('#recommended-item-carousel').scrollIntoView().should('be.visible')
    cy.get('.carousel-inner .item.active').find('a.btn.btn-default.add-to-cart').first().click()
    cy.get('#cartModal').should('exist').and('be.visible').find('a').contains('View Cart').click()
    cy.url().should('contain', '/view_cart')
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  }
}
