/*Do not use arrow functions for hooks or step_definitions. 
The "this" would be ignored if you do.*/
var HomePage = require('../page_objects/HomePage');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Before, Given, When, Then }) {
  // Before({timeout: 10 * 1000}, function() {
  //   // Does some slow browser/filesystem/network actions
  //   this.visit(HomePage.url)
  // });
  Given('I am on the playlista.mfm page', function() {
    // Write code here that turns the phrase above into concrete actions
    this.visit(HomePage.url);
  });

  When('I sign up', function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I should get a notification', function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
});
