export class loginPage {
  email: string = '[data-qa="login-email"]';
  password: string = '[data-qa="login-password"]';
  loginBtn: string = '[data-qa="login-button"]';

  public visit() {
    cy.visit("/login");
  }

  public login() {
    cy.get(".login-form > h2")
      .should("be.visible")
      .should("contain", "Login to your account");
    cy.fixture("userData.json").then((user) => {
      cy.get(this.email).type(user.email);
      cy.get(this.password).type(user.password);
      cy.get(this.loginBtn).click();
      cy.contains(`Logged in as ${user.username}`).should("be.visible");
    });
  }

  public incorrectLogin(email: string, password: string) {
    cy.get(".login-form > h2")
      .should("be.visible")
      .should("contain", "Login to your account");
    cy.get(this.email).type(email);
    cy.get(this.password).type(password);
    cy.get(this.loginBtn).click();
    cy.get("p")
      .first()
      .should("have.text", "Your email or password is incorrect!");
  }

  public registerUser() {
    cy.get('[data-qa="signup-name"]').type('user')
    cy.get('[data-qa="signup-email"]').type('gosuUser@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.url().should('eq', 'https://automationexercise.com/signup')
  }
}
