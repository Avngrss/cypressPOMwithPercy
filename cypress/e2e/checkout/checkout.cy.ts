import { HomePage } from "../../pageObject/homePage";
import { LoginPage } from "../../pageObject/loginPage";
import { CartPage } from "../../pageObject/cartPage";
import { ProductPage } from "../../pageObject/productsPage";


describe.only("ChecOut the order", () => {

    const homePage = new HomePage
    const loginPage = new LoginPage
    const productsPage = new ProductPage
    const cartPage = new CartPage

    it("CheckOut without loginning into the site", () => {
        homePage.visitHomePage()
        productsPage.visitProductsPage()
        cartPage.addProductInCart()
        cartPage.checkOutWithoutLogin()
        cartPage.deleteProduct()
    })

    it("CheckOut after login", () => {
        homePage.visitHomePage()
        loginPage.visit()
        loginPage.login()
        productsPage.visitProductsPage()
        cartPage.addProductInCart()
        cartPage.checkOutWithLogin('My card', 8888-9999-3543-6666, 999, 10, 2025)
        cartPage.visitCartPage()
    })
})