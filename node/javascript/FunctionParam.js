exports.Test = function(){
	FunctionParam(111);
	
	var objTest = new Object();
	
	objTest.name = "old name";
	ParamScope(objTest);
	console.log("After call ParamScope(), objTest.name = ", objTest.name);
	
	console.log("");
	console.log("Caculate 5 factorial is ", Factorial(5));
}

function FunctionParam(param1) {
	console.log("arguments length = " + arguments.length);
	console.log("arguments[0] = " + arguments[0]);
	
	arguments[1] = 1;
	console.log("arguments[1] = " + arguments[1]);
	arguments[0] = 222;
	console.log("param1 = " + param1);
}

//当参数为对象时，实际传递的是指针，即应用参数
function ParamScope(obj) {
	obj.name = "new name";
	
	var var1 = 11;
	var var2 = var1;
	
	var2 = 22;
	console.log("var1 = " + var1 + ', var2 = ' + var2 );
	
	//当变量为对象时，对象复制后，引用的仍为同一个对象，而基本对象则是各自保存自己的一份
	var obj1 = new Object();
	obj1.name = "obj1";
	var obj2 = obj1;
	obj2.name = "obj2";
	
	console.log("obj2.name = " + obj2.name)
}

function Factorial(num) {
	if (num <= 1) {
		return 1;
	}
	else{
		return num * arguments.callee(num - 1);
	}
}

