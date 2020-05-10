"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const protractor_1 = require("protractor");
const AngularHomePage_1 = require("../PageObjects/AngularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ahp = new AngularHomePage_1.AngularHomePage();
cucumber_1.Given('User Navigates to {string} Application', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == 'Calculator') {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == 'Angularjs') {
        yield protractor_1.browser.get('https://angularjs.org/');
        yield protractor_1.browser.manage().window().maximize();
    }
}));
cucumber_1.When('User adds two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.goButton.click();
}));
cucumber_1.When('User subtracts two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.subtraction.click();
    yield calc.goButton.click();
}));
cucumber_1.When('User multiplies two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.multiplication.click();
    yield calc.goButton.click();
}));
cucumber_1.When('User divides two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.division.click();
    yield calc.goButton.click();
}));
cucumber_1.Then('output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.getResult.getText().then(function (result) {
        expect(result).to.equal(string);
    });
}));
cucumber_1.When('User Clicked on header Angular Io link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ahp.angularIOLink.click();
}));
cucumber_1.Then('user navigates to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield console.log(protractor_1.browser.getTitle());
}));
cucumber_1.Then('User Enters {string} in the search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ahp.searchBox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywwREFBcUQ7QUFDckQsMkNBQW1DO0FBQ25DLG9FQUErRDtBQUMvRCxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNoQyxnQkFBSyxDQUFDLHdDQUF3QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDN0Qsb0VBQW9FO0lBQ3BFLElBQUksTUFBTSxJQUFJLFlBQVksRUFBRTtRQUN4QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDbkU7U0FBTSxJQUFJLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5QztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsNkNBQTZDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDMUUsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNI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