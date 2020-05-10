import {After, Before, Status} from "cucumber";
import {browser} from "protractor";
After(function(scenarioResult) {
    let self = this;
    if (scenarioResult.result.status === Status.FAILED) {
        return browser.takeScreenshot()
            .then(function (screenshot) {
                const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
                self.attach(decodedImage, 'image/png');
            });
    }
});
