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
      cy.request({
        url: "https://automationexercise.com/api/getUserDetailByEmail",
        method: "GET",
        qs: {
          email: "testuser1731315476086@example.com",
        },
      }).then((response) => {
        const responseBody = JSON.parse(response.body);
        if (responseBody && responseBody.responseCode && responseBody.user) {
          expect(responseBody.responseCode).to.eq(200);
          expect(responseBody.user.email).to.eq("testuser1731315476086@example.com");
        } else {
          throw new Error('user not found');
        }
      });
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
    const userData = {
      name: "user",
      email: "gosuUser1@gmail.com",
      password: "password123",
      title: "Mr",
      birth_date: 11,
      birth_month: 6,
      birth_year: "2000",
      firstname: "Gena",
      lastname: "Petrov",
      company: "Google",
      address1: "New-York Beach Plaza, 2d",
      address2: "Boston,  St.Mil, 999/2",
      country: "United States",
      state: "Washington",
      city: "New-York",
      zipcode: "999333",
      mobile_number: "+99933310",
    };

    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.url().should("eq", "https://automationexercise.com/signup");
    cy.get(`input#id_gender1[value="${userData.title}"]`).check();
    cy.get('[data-qa="name"]').should("have.value", `${userData.name}`);
    cy.get('[data-qa="email"]').should("have.value", `${userData.email}`);
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get("#days").select(userData.birth_date);
    cy.get("#months").select(userData.birth_month);
    cy.get("#years").select(userData.birth_year);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get('[data-qa="first_name"]').type(userData.firstname);
    cy.get('[data-qa="last_name"]').type(userData.lastname);
    cy.get('[data-qa="company"]').type(userData.company);
    cy.get('[data-qa="address"]').type(userData.address1);
    cy.get('[data-qa="address2"]').type(userData.address2);
    cy.get('[data-qa="country"]').select(userData.country);
    cy.get('[data-qa="state"]').type(userData.state);
    cy.get('[data-qa="city"]').type(userData.city);
    cy.get('[data-qa="zipcode"]').type(userData.zipcode);
    cy.get('[data-qa="mobile_number"]').type(userData.mobile_number);
    cy.get('[data-qa="create-account"]').click();
    cy.contains("Account Created!");
  }            
}
