// all the code and modules are wrap in a function
//and there scope is local to the function
//private 

(function(exports,require,module,_filename,_dirname){
    const fs=require('fs');
    const name="vivek";
    console.log(name);
});

console.log(__dirname);
console.log(__filename)

// var a="vivek";
// console.log(a);

//IIFE
//anonymous function

(function(){
    var a="vivek gupta";
    console.log(a);
})();

//here a is local to anonymous function even a is declared
//as var still not working bcz a is local and private
//to the anonymous function
// console.log(a);
