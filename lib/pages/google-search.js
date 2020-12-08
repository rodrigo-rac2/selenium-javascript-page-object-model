// The contact page allows users to contact sweet light studios
"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');

//var SpaPageBase = require('../spa-page-base');

class GoogleSearchPage { // extends SpaPageBase {
    constructor(
        webdriver,
        driver,
        targetUrl = 'https://www.google.com',
        waitTimeout = 10000
    ) {
        this.webdriver = webdriver;
        this.driver = driver;
        this.targetUrl = targetUrl;
        this.waitTimeout = waitTimeout;
    }

    async navigate() {
        await this.driver.navigate().to(this.targetUrl);
        await this.driver.wait(
            this.webdriver.until.titleContains('Google'),
            this.waitTimeout,
        );
    }

    async clickSearchButton() {
        const element = await this.driver.findElement(By.name("btnK"));
        await this.driver.wait(this.webdriver.until.elementIsEnabled(element), this.waitTimeout);
        //element.click()
        await this.driver.executeScript("arguments[0].click();", element)
    }

    async enterSearchText(searchString) {
        // fill out form
        await this.driver.findElement(By.name("q")).sendKeys(searchString)//, Key.ENTER);
    };

    async waitForElementByXpath(selector, elementXpath, waitTimeout) {
        let result;
        await this.driver.wait(() =>
            this.driver.findElement(selector)
                .then(
                    (element) => {
                        result = element;
                        return true;
                    },
                    (err) => {
                        if (err.name === 'NoSuchElementError') {
                            return false;
                        }
                        return true;
                    },
                ), waitTimeout, `Unable to find element: ${elementXpath}`);
        return result;
    }
}

module.exports = GoogleSearchPage;