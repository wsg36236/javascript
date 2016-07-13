exports.Test = function(){
	TestArrayStack();
	console.log('');
	TestArrayQueue();
	console.log('');
	TestArraySort();
	console.log('');
	TestArrayIteration();
}

function TestArrayStack() {
	var stackArray = new Array();
	
	console.log("Test array stack:");
	stackArray.push(1);
	stackArray.push(2);
	stackArray.push(3);
	console.log(stackArray);
	
	stackArray.pop();
	console.log(stackArray);
}

function TestArrayQueue() {
	var queueArray = new Array();
	
	console.log("Test array queue:");
	queueArray.push(1);
	queueArray.push(2);
	queueArray.push(3);
	console.log(queueArray);
	
	queueArray.shift();
	console.log(queueArray);
}

function TestArraySort(){
	var testArray = [3, 1, 5, 10, 12];
	
	console.log("Test array sort:");	
	testArray.sort();					//after sort, testArray = [ 1, 10, 12, 3, 5 ]
	console.log("After sort, testArray :", testArray);
	
	testArray.sort(function(lobj, robj){
		if(lobj >  robj)
			return 1;
		else if(lobj < robj)
			return -1;
		else
			return 0;
	});
	
	console.log("After sort with compare function, testArray :", testArray);
}


function TestArrayIteration(){
	var testArray = [ 1, 3, 5, 10, 12 ];
	
	//每个大于3才为true
	console.log("Every: ", testArray.every(function(item, index, arrayObj) {
		if(item > 3)
			return true;
		else
			return false;
	}));
	
	//只要有一个大于3就为true
	console.log("Some: ", testArray.some(function(item, index, arrayObj) {
		if(item > 3)
			return true;
		else
			return false;
	}));
	
	//返回function为true的item组成的新数组
	console.log("Filter: ", testArray.filter(function(item, index, arrayObj) {
		if(item > 3)
			return true;
		else
			return false;
	}));
	
	//forEach : 循环处理每个item
	//map : 每次function返回的值组成的数组
}