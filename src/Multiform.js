describe('Banking Project Test',function(){
//	it('e2eflow',function(){
//		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
//		browser.sleep(3000)
//		element(by.buttonText('Customer Login')).click();
//		browser.sleep(2000)
//        var cust = element.all(by.id('userSelect'));
//	    cust.all(by.repeater('cust in Customers')).then(function(data){
//	    data[1].click();
//	    browser.sleep(2000)
//	   })
//	   
//	    element(by.buttonText('Login')).click();
//	    browser.sleep(1000)
//	    
//	    var text = element(by.className('center'));
//	    console.log(text);
//	    
//	    expect(text).toContain('Currency : ')

	    
//	    element.all(by.options('account for account in Accounts')).then(function(data){
//	    data[1].click();
//	    browser.sleep(2000)
//	    })
//	    element.all(by.options('account for account in Accounts')).then(function(data){
//	    data[2].click();
//	    browser.sleep(2000)
//	    })
	    
	    
//	    
//	 
//	   
//	   Acct1.all(by.repeater('cust in Customers')).then(function(data){
//	    data[1].click();
//	    browser.sleep(2000)
//	   })
//	    element(by.buttonText('Transactions')).click();
//	    browser.sleep(2000)
// 
//	   });
//
	/******************************************/
	
	   it('Deposit',function(){
		   browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			browser.sleep(3000)
			element(by.buttonText('Customer Login')).click();
			browser.sleep(2000)
			
	        var cust = element.all(by.id('userSelect'));
		    cust.all(by.repeater('cust in Customers')).then(function(data){
		    data[1].click();
		    browser.sleep(2000)
		   })
		   
		    element(by.buttonText('Login')).click();
		    browser.sleep(1000)
		    
		    
		element.all(by.options('account for account in Accounts')).then(function(data){
	    data[2].click();
	    browser.sleep(2000)
	    })
//	    element(by.buttonText('Deposit')).click();
//		    browser.sleep(2000)
//		    
//		    element(by.model('amount')).sendKeys('2000');
//		    
//		    element(by.className('btn btn-default')).click();
//		    browser.sleep(2000)
//		    
//		    element(by.buttonText('Transactions')).click();
//		    browser.sleep(2000)
	
//	element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end')).then(function(data){
//		data[0].getText().then(function(text){
//			console.log(text);
		    
		    
		    
		    element(by.buttonText('Withdrawl')).click();
		    browser.sleep(2000)
		    element(by.model('amount')).sendKeys('100000');
		    
		    var textToVerify = 'Transaction Failed. You can not withdraw amount more than the balance.'
		    var meaasge =  element(by.className('error ng-binding')).getText().then(function(text){
		    
		    expect(textToVerify).toEqual('Transaction Failed. You can not withdraw amount more than the balance.');
		    })
		    
		    
		    
		});
	});

 
	
	
		
		
	
	


