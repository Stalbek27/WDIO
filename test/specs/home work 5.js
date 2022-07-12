describe("Add/Remove Element", () => {
    it("open page", async () => {
        await browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
    });

    it("click on button", async () => {
        await $("#content > div > button").click();
    });

    it("delet button", async () => {
        await $("#elements > button").click();
    });
});
    