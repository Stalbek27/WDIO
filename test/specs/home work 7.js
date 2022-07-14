describe('Data tables', () => {
        it('data tables open page', async () => {
            await browser.url(`https://the-internet.herokuapp.com/tables`);
            await browser.pause (2000);
        });

        it('click on due first', async () => {
            let element = await browser.$('#table1 > thead > tr').click();
            await browser.pause (2000);
        });

        it('click on due second', async () => {
            let element = await browser.$('#table1 > thead > tr').click();
            await browser.pause (2000);
        });
        
        it('text check', async () => {
            let element = await browser.$('//*[@id="table1"]/tbody/tr[1]/td[4]')
            let text = await element.getText();
            expect(text).toBe('$50.00');
            await browser.pause (2000);
        });
});






// describe('challenging_dom', () => {
//     it('challenging_dom', async () => {
//         await browser.url(`/challenging_dom`);

//         css selector example
//         let element = await browser.$('table tbody > tr:nth-child(3) > td:nth-child(2)')
        
//         xpath example
//         let element = await browser.$('//table/tbody/tr[3]/td[2]')

//         let text = await element.getText();
//         expect(text).toBe('Apeirian2');
//     });
// });