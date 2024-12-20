export class CartPage {
  public SubscriptionIncartPage(email: string) {
    cy.get("a").contains("Cart").click({ force: true });
    cy.get(".single-widget").should("be.visible");
    cy.get(".single-widget h2")
      .should("exist")
      .and("contain.text", "Subscription");
    cy.get("#susbscribe_email").type(email);
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed").should("be.visible");
  }

  public visitCartPage() {
    cy.get("a").contains("Cart");
  }

  public addProductInCart() {
    cy.get("a").contains("Product").click();
    cy.get(".single-products").first().trigger("mouseover");
    cy.get("a.btn.btn-default.add-to-cart")
      .first()
      .should("be.visible")
      .click();
    cy.get("button.btn.btn-success.close-modal.btn-block").click();
    cy.get(".single-products").first().trigger("mouseover");
    cy.wait(2000);
    cy.get("a.btn.btn-default.add-to-cart")
      .first()
      .should("be.visible")
      .click();
    cy.get("a").contains("View Cart").click();
    cy.get("#cart_info_table").within(() => {
      cy.get("td.cart_price p").should("have.text", "Rs. 500");
      cy.get("td.cart_quantity button").should("have.text", "2");
      cy.get("td.cart_total p.cart_total_price").should(
        "have.text",
        "Rs. 1000"
      );
    });
  }

  public verifyProductQuntity() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
    cy.url().should("contain", "/product_details/1");
    cy.get("#quantity").should("be.visible").clear().type("4");
    cy.get("button.btn.btn-default.cart").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("a").contains("View Cart").click();
    cy.get("#cart_info_table").within(() => {
      cy.get("td.cart_quantity button").should("have.text", "4");
    });
  }

  public deleteProduct() {
    cy.get(".cart_quantity_delete").click();
    cy.get("tbody tr").should("have.length", 0);
    cy.contains("Cart is empty!");
  }

  public checkOutWithoutLogin() {
    cy.get("a.btn.btn-default.check_out").click();
    cy.get("#checkoutModal")
      .should("be.visible")
      .and("contain", "Register / Login account to proceed on checkout.");
    cy.get("button.btn.btn-success.close-checkout-modal.btn-block").click();
    cy.get("#checkoutModal").should("not.be.visible");
  }

  public checkOutWithLogin(
    nameOFCart: string,
    cardNumber: number,
    cvc: number,
    month: number,
    year: number
  ) {
    cy.get("a.btn.btn-default.check_out").click();
    cy.get("ul#address_delivery li")
      .eq(3)
      .should("contain.text", "New-York Beach Plaza, 2d");
    cy.get("ul#address_invoice li")
      .eq(3)
      .should("contain.text", "New-York Beach Plaza, 2d");
    cy.get("textarea.form-control").type("My order");
    cy.get("a.btn.btn-default.check_out").click();
    cy.url().should("contain", "/payment");
    cy.get("h2").should("be.visible").should("contain.text", "Payment");
    cy.get('[data-qa="name-on-card"]').type(nameOFCart);
    cy.get('[data-qa="card-number"]').type(cardNumber.toString());
    cy.get('[data-qa="cvc"]').type(cvc.toString());
    cy.get('[data-qa="expiry-month"]').type(month.toString());
    cy.get('[data-qa="expiry-year"]').type(year.toString());
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"]')
      .should("be.visible")
      .and("contain", "Order Placed!");
    cy.get("p").should(
      "contain.text",
      "Congratulations! Your order has been confirmed!"
    );
  }

  public downloadInvoice() {
    cy.get('a.btn.btn-default.check_out').click()
    cy.get('a[href^="/download_invoice"]').then(($link) => {
        const invoiceUrl = $link.attr('href');
        if (!invoiceUrl) {
          throw new Error('Invoice URL not found.');
        }
        cy.get(`a[href="${invoiceUrl}"]`).click();
        cy.request(invoiceUrl).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.headers['content-type']).to.include('text/plain');
        });
        const downloadFolderPath = 'cypress/downloads';
        cy.readFile(`${downloadFolderPath}/invoice.txt`).should('exist');
      });
  }
}
