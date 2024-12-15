import { ProductPage } from '../../pageObject/productsPage'
import { LoginPage } from '../../pageObject/loginPage'
import { HomePage } from '../../pageObject/homePage'

describe('Test for the Products Page', () => {
    const productPage = new ProductPage
    const loginPage = new LoginPage
    const homePage = new HomePage

    beforeEach(() => {
        homePage.visitHomePage()
        loginPage.visit()
    })

    it('Products list is visible', () => {
        productPage.AllProduct()
    })
    it('Get product detail', () => {
        productPage.AllProduct()
        productPage.getProductDetail()
    })
})