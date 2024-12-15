import { ProductPage } from '../../pageObject/productsPage'
import { LoginPage } from '../../pageObject/loginPage'
import { HomePage } from '../../pageObject/homePage'

describe('Search product', () => {
    const homePage = new HomePage
    const productPage = new ProductPage
    const loginPage = new LoginPage

    beforeEach(() => {
        homePage.visitHomePage()
        loginPage.visit()
        productPage.visitProductsPage()
    })

    it('Search product is existed', () => {
        productPage.searchProduct('blue')
    })
    it('Search do not exist product', () => {
        productPage.searchNotExistedProduct('smth')
    })
})