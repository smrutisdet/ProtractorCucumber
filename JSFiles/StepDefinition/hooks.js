"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.After(function (scenarioResult) {
    let self = this;
    if (scenarioResult.result.status === cucumber_1.Status.FAILED) {
        return protractor_1.browser.takeScreenshot()
            .then(function (screenshot) {
            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUErQztBQUMvQywyQ0FBbUM7QUFDbkMsZ0JBQUssQ0FBQyxVQUFTLGNBQWM7SUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7UUFDaEQsT0FBTyxvQkFBTyxDQUFDLGNBQWMsRUFBRTthQUMxQixJQUFJLENBQUMsVUFBVSxVQUFVO1lBQ3RCLE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7S0FDVjtBQUNMLENBQUMsQ0FBQyxDQUFDIn0=