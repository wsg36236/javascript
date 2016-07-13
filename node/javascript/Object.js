exports.Test = function(){
	TraversalObject();
	console.log('');
	
	TestObjProperty();
	console.log('');
	TestConstruction();
}

function TraversalObject() {
	var obj = {name : 'viki', age : 20};
	
	for (var key in obj) {
		console.log(key, ' : ', obj[key]);
	}
}

function TestObjProperty() {
	//基本类型不能添加属性
	var name = 'viki';
	name.age = 20;
	console.log(name.age);
	
	var nameObj = new String("viki");
	nameObj.age = 20;
		
	console.log("String object can set property, nameObj.age = ", nameObj.age);
		
	var obj = {};
	obj.age = 20;
	console.log('obj.age = ', obj.age);
	obj = 'viki';
	console.log(obj);
	console.log('After set obj as a string, obj.age = ', obj.age);
}

function TestConstruction() {
	console.log("Test class construction...");
	
	function SayAge() {
		console.log("I am ", this.age, " years old.");
	}
	
	//define object's constructor
	//constructor创建时，会将对象的作用域传递给constructor，所以此时的this就是对象变量
	function Person(name, age) {
		this.name = name;
		this.age = age;
		this.SayAge = SayAge;
		this.IntroduceSelf = function(){
			console.log("My name is ", this.name);
		}
		
		console.log("Contruct Person object completely");
	}	
	
	//Create object of class 'Person'
	var viki = new Person('viki', 30);
	var john = new Person('john', 20);
	viki.IntroduceSelf();
	viki.SayAge();						//调用SayAge()函数时，作用域对象是viki,所以能访问到viki.age属性
	
	//因为函数也是对象，所以在constructor中，实际上是new了一个新的IntroduceSelf对象出来了，每个new出来的对象当然不一样
	if(viki.IntroduceSelf != john.IntroduceSelf){
		console.log("viki's IntroduceSelf() is not same as john's.");
	}
	
	if(viki.SayAge == john.SayAge){
		console.log("viki's SayAge() is same as john's.");
	}
}