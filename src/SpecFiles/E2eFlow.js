var data = require(process.cwd() + '/src/Utility/ConfigData.json');

var loginPage = require(process.cwd() + '/src/PageRepository1/loginPage.js');

describe('Banking Project Test',function(){
   it('e2eflow-transaction',function(){
		browser.get(data.url);
		browser.sleep(3000)
		var customerPage = loginPage.customerLogin();
		
		customerPage.selectOption();
		var accountPage = customerPage.enterLogin();
		
		
		
		accountPage.selectDesiredAccount();
		browser.sleep(2000)
		
	
		accountPage.clickDeposit();
		accountPage.enterDepositAmount();
		accountPage.clickDepositButton();
		browser.sleep(2000)
		accountPage.clickTransactionButton();
		browser.sleep(2000)
		var postTransactionPage = accountPage.submitDeposit();

		postTransactionPage.verifyTransaction();
			
  });  
	
	
it('e2eflow-withdrawal-correct amount',function(){
		browser.get(data.url);
		browser.sleep(3000)
		var customerPage = loginPage.customerLogin();
	    customerPage.selectOption();
		var accountPage = customerPage.enterLogin();
		accountPage.selectDesiredAccount();
		browser.sleep(2000)
		accountPage.clickWithdrawlTab();
		accountPage.enterWithrawlAmountRight();
		accountPage.clickWithdrawlButton();
		accountPage.verifyTransactionSuccessMessage();		
  }); 
	
it('e2eflow-withdrawal-wrong amount',function(){
	browser.get(data.url);
	browser.sleep(3000)
	var customerPage = loginPage.customerLogin();
    customerPage.selectOption();
	var accountPage = customerPage.enterLogin();
	accountPage.selectDesiredAccount();
	browser.sleep(2000)
	accountPage.clickWithdrawlTab();
	accountPage.enterWithrawlAmountWrong();
	accountPage.clickWithdrawlButton();
	accountPage.verifyTransactionFailMessage();		
}); 

	
	
});
	
	