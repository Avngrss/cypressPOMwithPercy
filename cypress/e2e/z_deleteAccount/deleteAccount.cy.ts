import { LoginPage } from "../../pageObject/loginPage";
import { HomePage } from "../../pageObject/homePage";

describe("Should Delete account", () => {
    const loginPage = new LoginPage
    const homePage = new HomePage
    it('delete account', () => {
        homePage.visitHomePage()
        loginPage.visit()
        loginPage.login()
        loginPage.deleteAccount()
    })
})