var data = require('../Utility/ConfigData.json');

var AccountPage = function() {
	
	var selectDeposit = element(by.buttonText('Deposit'));
	var depositButton = element(by.className('btn btn-default'));
	var transactionButton = element(by.buttonText('Transactions'));
	var withdrawlTab = element(by.buttonText('Withdrawl'));
	var amountModel = element(by.model('amount'));
	var withdrawalButton =element(by.className('btn btn-default'));
	var errorBindng =element(by.className('error ng-binding'));
	var textToFailVerify = 'Transaction Failed. You can not withdraw amount more than the balance.';
	var textToSuccessVerify = 'Transaction successful';
	
	
	  this.selectDesiredAccount=function() {
		  element.all(by.options('account for account in Accounts')).then(function(data){
			    data[2].click();
			    }) 
			    return this;
	  }
	  
	  this.clickDeposit=function() {
		  selectDeposit.click();
		  return this;
	  }
	  
	  this.enterDepositAmount=function() {
		  amountModel.sendKeys('2000');
		  return this;
	  }
	  
	this.enterWithrawlAmountWrong=function() {
		amountModel.sendKeys('10000');
		return this;
	}
		 
	this.enterWithrawlAmountRight=function() {
		amountModel.sendKeys('1400');
		return this;
	}
	  
	  this.clickDepositButton=function() {
		  depositButton.click();
		  return this;
	  }
	  
	  this.clickTransactionButton=function() {
		  transactionButton.click();
		  return this;
	  }
	    
	  
	  //transaction
	  this.submitDeposit=function() {
		  element(by.buttonText('Transactions')).click();
		  return require('./postTransactionPage.js'); 
	  }
	  
	 this.clickWithdrawlTab = function(){
		 withdrawlTab.click();
		 return this;
	 }
	 

	 
	 this.clickWithdrawlButton=function() {
		  withdrawlButton.click();
		  return this;
		  
	 }		  
	  
   this.verifyTransactionFailMessage=function(){
	   errorBindng.getText().then(function(text){
		    expect(textToFailVerify).toEqual('Transaction Failed. You can not withdraw amount more than the balance.');
		    });
	}
   
   this.verifyTransactionSuccessMessage=function(){
	   errorBindng.getText().then(function(text){
		    expect(textToSuccessVerify).toEqual('Transaction successful');
		    });
	}
	

	this.clickWithdrawlButton=function() {
		withdrawalButton.click();
	    return this;
	}
		 	 
}


module.exports = new AccountPage();