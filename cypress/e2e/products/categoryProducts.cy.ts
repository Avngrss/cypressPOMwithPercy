import { HomePage } from "../../pageObject/homePage";


describe.only("Check Category Products", () => {
    const homePage = new HomePage

    beforeEach(() => {
        homePage.visitHomePage()
    })
    it("Check woman category", () => {
        homePage.ViewCategoryProduct('Women','Dress', 'Women - Dress Products')
        homePage.ViewCategoryProduct('Men','Tshirts', 'Men - Tshirts Products')
        homePage.ViewCategoryProduct('Kids','Tops & Shirts', 'Kids - Tops & Shirts Products')
    })
})