exports.Test = function(){
	var testVar = 11;
	
	function TestVarAceess(){
		console.log(testVar);			//这样是可以访问的，作用域链是包含在Test()中的
	}
	
	TestVarAceess();
	TestVarScope();
	
	CallFunc(function(){
		console.log("");
		console.log("Test call function scope");
		console.log(testVar);			//这样是可以访问的，作用域链是包含在Test()中的
		//console.log(testVar2);		//访问testVar2 = undefined
	});
	
	//Test function prototype
	var obj = {color : 'red'};
	console.log("");
	
	function TestPrototype() {
		console.log("Color in obj = ", this.color);
	}
	
	TestPrototype();					//未延长作用域之前，TestPrototype()访问不到color变量，会报undefined
	TestPrototype.call(obj);			//本次延长作用域，将obj对象的作用域延长到TestPrototype(),如果要永久延长，则可用bind()绑定
	TestPrototype();					//此次不再延长作用域
	var newTestPrototype = TestPrototype.bind(obj);
	newTestPrototype();
}

function TestVarScope() {
	for(var i = 0; i < 3; i++){
		
	}
	
	//仍然能访问到i，js的变量作用域仅局限于function
	console.log('i = ', i);
	//console.log("testVar = ", testVar);	//访问testVar = undefined
}

function CallFunc(func) {
	var testVar2 = 22;
	func();
}