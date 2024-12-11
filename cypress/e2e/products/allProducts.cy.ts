import Allproduct from '../../pageObject/productsPage'
import { loginPage } from '../../pageObject/loginPage'

describe('Test for the Products Page', () => {
    const allProduct = new Allproduct()
    const LoginPage = new loginPage()

    beforeEach(() => {
        LoginPage.visit()
    })

    it.only('Products list is visible', () => {
        allProduct.AllProduct()
    })
    it('Get product detail', () => {
        allProduct.AllProduct()
        allProduct.getProductDetail()
    })
})