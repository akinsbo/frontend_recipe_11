/* Do not use arrow functions for hooks or step_definitions. 
The "this" would be ignored if you do.*/
require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
  var By = seleniumWebdriver.By;
  var until = seleniumWebdriver.until;

  this.visit = url => {
    this.driver.get(url);
  };

  this.quit = element => {
    this.driver.quit();
  };

  this.find = element => {
    this.driver.quit();
    this.driver.wait(until.elementLocated(By.css(element), 5000));
    return this.driver.findElement(By.css(element));
  };

  this.write = (element, text) => {
    return this.find(element).sendKeys(text);
  };
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld);
});
