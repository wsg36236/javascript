exports.Test = function(){
	TestRegExp();
	console.log('');
}

function TestRegExp() {
	var str = "ttt aa ab ac aaa aab aac abb abc";
	
	var reg = new RegExp("a(b[a-z])", "g");
	var matchResult = reg.exec(str);
	
	while(matchResult){
		console.log("Match index : ", matchResult.index);
		console.log("Left context : ", RegExp.leftContext);
		console.log("Right context : ", RegExp.rightContext);
		matchResult.forEach(function(item, index, arrayObj) {
			console.log("Match result ", index, " : ", item);	
		});	
		
		matchResult = reg.exec(str);
	}
}