import { HomePage } from "../../pageObject/homePage";

describe.only("Should Scroll Up 'Arrow' button", () => {

    const homePage = new HomePage

    beforeEach(() => {
        homePage.visitHomePage()
    })
    it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
        homePage.ScrollWithArrow()
    })

    it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
        homePage.ScrollWithoutArrow()
    })
})