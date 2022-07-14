// describe("Login", () => {
//     it("open page", async () => {
//         await browser.url('https://the-internet.herokuapp.com/login');
//         await browser.pause (2000);
//     });

//     it("user name", async () => {
//         await $('#username').setValue('123');
//         await browser.pause (2000);
//     });

//     it("password", async () => {
//         await $('#password').setValue('123');;
//         await $('button[type="submit"]').click();
//         await browser.pause (2000);
//     });

//     it("text after login", async () => {
//         await expect($('#flash')).toBeExisting();
//         await expect($('#flash')).toHaveTextContaining(
//             'Your username is invalid!');
//     })
// });


































// // const assert = require('node:assert')

// // describe("My Login application", () => {
// //   it("should login with valid credentials", async () => {
// //     await browser.url(`/login`);
// //     await browser.pause(1000)

// //     let username = await browser.$('#username');
// //     await username.setValue('tomsmith');

// //     let password = await browser.$('#password');
// //     await password.setValue('SuperSecretPassword!');

// //     let loginButton = await browser.$('#login > button');
// //     await loginButton.click();

// //     let flash = await browser.$('#flash')
// //     await browser.waitUntil(async () => {
// //         return flash.isDisplayed();
// //     });

// //     let flashStyle = await flash.getAttribute('class')
// //     if (flashStyle !== 'flash success') {
// //         throw new Error('flash no success!')
// //     }

// //     let expectedText = 'You logged into a secure area!\n×';
// //     let actualText = await flash.getText();

// //     await browser.pause(5000)
// //     assert.equal(actualText, expectedText, "Текст не равняется!!")
// //   });
// // });
