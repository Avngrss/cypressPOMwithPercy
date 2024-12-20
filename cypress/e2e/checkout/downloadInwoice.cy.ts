import { HomePage } from "../../pageObject/homePage";
import { LoginPage } from "../../pageObject/loginPage";
import { CartPage } from "../../pageObject/cartPage";
import { ProductPage } from "../../pageObject/productsPage";

describe("Should Download Invoice after purchase order", () => {

    const homePage = new HomePage
    const loginPage = new LoginPage
    const productsPage = new ProductPage
    const cartPage = new CartPage
    it("Download a invoice", () => {
        homePage.visitHomePage()
        loginPage.visit()
        loginPage.login()
        productsPage.visitProductsPage()
        cartPage.addProductInCart()
        cartPage.checkOutWithLogin('My card', 8888-9999-3543-6666, 999, 10, 2025)
        cartPage.downloadInvoice()
    })
})