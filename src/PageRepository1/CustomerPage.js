//Read config file
var data = require('../Utility/ConfigData.json');

var CustomerPage = function() {
  var cust = element.all(by.id('userSelect'));
  var login = element(by.buttonText('Login'))
  
  this.selectOption = function() {
	  cust.all(by.repeater('cust in Customers')).then(function(data) {
		    data[1].click();
		    browser.sleep(2000)
		 })
		 return this;
	  
  }

	

//Transition
  this.enterLogin = function() {
	  login.click();
	  return require('./AccountPage.js');  
  }	   
}

module.exports = new CustomerPage();