/*Do not use arrow functions for hooks or step_definitions. 
The "this" would be ignored if you do.*/
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ After }) {
  After(function() {
    return this.quit();
  });
});
