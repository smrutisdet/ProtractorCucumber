import {element, ElementFinder,by} from "protractor";

export class calculator{
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    subtraction:ElementFinder;
    multiplication:ElementFinder;
    division:ElementFinder;
    goButton:ElementFinder;
    getResult:ElementFinder;
    constructor(){
        this.firstEditBox=element(by.model('first'));
        this.secondEditBox=element(by.model('second'));
        this.subtraction=element(by.css("select[ng-model='operator'] option[value='SUBTRACTION']"));
        this.multiplication=element(by.css("select[ng-model='operator'] option[value='MULTIPLICATION']"));
        this.division=element(by.css("select[ng-model='operator'] option[value='DIVISION']"));
        this.goButton=element(by.id('gobutton'));
        this.getResult=element(by.repeater('result in memory')).element(by.css('td:nth-child(3)'));
    }
}
