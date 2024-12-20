import { HomePage } from "../../pageObject/homePage";
import { ProductPage } from "../../pageObject/productsPage";


describe("A Review on a product", () => {
    const homePage = new HomePage;
    const productsPage = new ProductPage;

    it("Should add a new review", () => {
        homePage.visitHomePage()
        productsPage.visitProductsPage()
        productsPage.getProductDetail()
        productsPage.addReviewOnProduct()
    })
})