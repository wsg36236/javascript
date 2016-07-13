exports.Test = function(){
	NullType();
}

function NullType() {
	var testVar;
	
	console.log(typeof(xxx));
	console.log(typeof(testVar));
	console.log(typeof(null));
	
	if (null == undefined) {
		console.log("null is equal undefined");
	}
}