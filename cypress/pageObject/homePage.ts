export class HomePage {
  public visitHomePage() {
    cy.visit("/");
  }

  public logout() {
    cy.get("a").contains("Logout").click();
    cy.url().should("include", "/login");
  }

  public SubscriptionInHomePage(email: string) {
    cy.get("#footer").scrollIntoView().should("be.visible");
    cy.get(".single-widget").should("be.visible");
    cy.get(".single-widget h2")
      .should("exist")
      .and("contain.text", "Subscription");
    cy.get("#susbscribe_email").type(email);
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed").should("be.visible");
  }

  public ViewCategoryProduct(id: string, category: string, title: string) {
    cy.get("#accordian").should("be.visible");
    cy.get(`a[data-toggle="collapse"][data-parent="#accordian"][href="#${id}"]`)
      .should("exist")
      .click();
    cy.get("li a").contains(`${category}`).click();
    cy.get("h2.title").should("have.text", `${title}`).and("be.visible");
    cy.get(".features_items")
      .should("exist")
      .and("not.be.empty")
      .find(".single-products")
      .should("have.length.greaterThan", 0);
  }

  public CartBrandProduct() {
    cy.get(".brands_products").should("be.visible");
    cy.get("a").contains("Polo").should("exist").click();
    cy.url().contains("/brand_products/Polo");
    cy.get("h2.title")
      .should("be.visible")
      .and("have.text", "Brand - Polo Products");
    cy.get(".features_items")
      .should("exist")
      .and("not.be.empty")
      .find(".single-products")
      .should("have.length.greaterThan", 0);
  }

  public ScrollWithArrow() {
    cy.get('footer').scrollIntoView()
    cy.get('.single-widget > h2').should('contain', 'Subscription')
    cy.get('a#scrollUp').should('be.visible').click()
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  }

  public ScrollWithoutArrow() {
    cy.get('footer').scrollIntoView()
        cy.get('.single-widget > h2').should('contain', 'Subscription')
        cy.get('header').scrollIntoView()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  }
}
