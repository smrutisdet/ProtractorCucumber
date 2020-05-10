import {Given, Then, When} from "cucumber";
import {calculator} from "../PageObjects/calculator";
import {browser} from "protractor";
import {AngularHomePage} from "../PageObjects/AngularHomePage";
import chai from "chai";
var expect=chai.expect;
let calc = new calculator();
let ahp = new AngularHomePage();
Given('User Navigates to {string} Application', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    if (string == 'Calculator') {
        await browser.get('https://juliemr.github.io/protractor-demo/');
    } else if (string == 'Angularjs') {
        await browser.get('https://angularjs.org/');
    }
    await browser.manage().window().maximize();

});
When('User adds two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.goButton.click();
});
When('User subtracts two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.subtraction.click();
    await calc.goButton.click();
});
When('User multiplies two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.multiplication.click();
    await calc.goButton.click();
});
When('User divides two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.division.click();
    await calc.goButton.click();
});



Then('output displayed should be {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.getResult.getText().then(function (result) {
        expect(result).to.equal(string);
    });
});
When('User Clicked on header Angular Io link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await ahp.angularIOLink.click();
});
Then('user navigates to angular page', async () => {
    // Write code here that turns the phrase above into concrete actions
    await console.log(browser.getTitle());
});
Then('User Enters {string} in the search box', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await ahp.searchBox.sendKeys(string);
});
