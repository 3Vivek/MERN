//es5
var sum= function(){
    var a=5,b=8;
    return a+b;
}
console.log(sum());

//es6
const add = ()=>{
    var a=5,b=8;
    return a+b;
}
console.log(add());

// without return 

let a=34;
// let b=90;

const addition=(b)=> a+b;
console.log(addition(90));
