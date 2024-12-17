import { HomePage } from "../../pageObject/homePage";
import { LoginPage } from "../../pageObject/loginPage";
import { CartPage } from "../../pageObject/cartPage";

describe("Product into cart", () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const cartPage = new CartPage


    beforeEach(() => {
        homePage.visitHomePage()
        loginPage.visit()
        loginPage.login()
    })

    it("Add a product into cart and verify it", () => {
        cartPage.addProductInCart()
        cartPage.deleteProduct()
    })

    it("Verify Product Quontity in cart", () => {
        cartPage.verifyProductQuntity()
        cartPage.deleteProduct()
    })
});