exports.Test = function(){
	TestMax();
}

function TestMax() {
	var numArray = [3, 5, 2, 7, 3];
	
	var maxNum = Math.max.apply(Math, numArray);
	console.log("Max num is : ", maxNum, "in", numArray);
}