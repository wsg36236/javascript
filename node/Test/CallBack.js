exports.Test = function()
{
    TestCallBack(CallBack);
}


function CallBack(oCaller) 
{
    oCaller.name = "Motify";    
}

function TestCallBack(fn) 
{
    this.name = "TestCallBack";
    fn(this);
    console.log(this.name);
}