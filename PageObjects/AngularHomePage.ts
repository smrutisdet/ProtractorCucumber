import {by, element, ElementFinder} from "protractor";

export class AngularHomePage{
    angularIOLink:ElementFinder;
    searchBox:ElementFinder;
    constructor() {
        this.angularIOLink=element(by.linkText('angular.io'));
        this.searchBox=element(by.css("input[type='search']"));
    }
}