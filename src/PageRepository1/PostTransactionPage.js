var data = require('../Utility/ConfigData.json');

var postTransactionPage = function() {
	
	
	var data = element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end').row(0));
	
	  this.verifyTransaction=function() {
		  for(i= 0;i<data.length;i++){
				data[i].getText().then(function(text){
					console.log(text);
				});
	  }
	  }
	  
	  
	  
}

module.exports = new postTransactionPage();