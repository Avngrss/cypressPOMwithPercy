import Allproduct from '../../pageObject/productsPage'
import { loginPage } from '../../pageObject/loginPage'

describe('Test for the Products Page', () => {
    const allProduct = new Allproduct()
    const LoginPage = new loginPage()

    it('Products list is visible', () => {
        LoginPage.visit()
        allProduct.AllProduct()
    })
    it('Product detail', () => {
        LoginPage.visit()
        allProduct.AllProduct()
        allProduct.getProductDetail()
    })
})