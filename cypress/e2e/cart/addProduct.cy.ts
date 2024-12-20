import { HomePage } from "../../pageObject/homePage";
import { LoginPage } from "../../pageObject/loginPage";
import { CartPage } from "../../pageObject/cartPage";
import { ProductPage } from "../../pageObject/productsPage";

describe.only("Should add product into cart", () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const cartPage = new CartPage
    const productsPage = new ProductPage


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

    it("Add a recommended item", () => {
        productsPage.addRecommendedItem()
        cartPage.deleteProduct()
    })
});