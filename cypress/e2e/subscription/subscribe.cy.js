import { HomePage } from "../../pageObject/homePage";
import { CartPage } from "../../pageObject/cartPage";

describe("Subscribe block", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it("Subscribe in the home page", () => {
    homePage.SubscriptionInHomePage("testuser@gmail.com");
  });

  it.only("Subscribe in the cart page", () => {
    cartPage.SubscriptionIncartPage("user22@gmail.com");
  });
});
