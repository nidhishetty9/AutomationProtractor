var data = require('../Utility/ConfigData.json');

var loginPage = function() {
	
	var custLogin = element(by.buttonText('Customer Login'));

	   
  this.customerLogin=function() {
	  custLogin.click();
	  return require('./CustomerPage.js');  
  }
  
}

module.exports = new loginPage();