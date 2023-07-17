// var,let and const

// var can be change and declare many time
var name="vivek";
var name="gupta" // redeclaration possible using var keyword of same variable
console.log(name)


// let
let n="dog";
n="cat"; // redelaration not possible using let keyword for the same variable
console.log(name)

//const
const k="kite";
console.log(k);

function check(){
    if(true){
        // let name="vivek";
        // const sname="gupta";
        // console.log(name + " "+sname); //let and const => Block scope

        var name="vivek"; //var =>Global scope 
        var sname="gupta";
    }
    console.log(name + " "+sname);

}




check()