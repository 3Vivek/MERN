//DESTRUCTURING ARRAY=> unpack values from arrays , or properties from Object, into distinct variable

const lang=['js','c','c++','java'];
//es5
// var a=lang[0];
// var b=lang[1];
// var c=lang[2];
// console.log(a);

//es6

// let [a,b,c,d]=lang;
// OR

let a,b,c,d;
// [a,b,c,d]=lang;
// console.log(d)

//first and last elem

[a,,,d]=lang;
console.log(`My fav is ${a} and least fav is ${d}. `)


//swap without third var
let x=43;
let y=45;

[x,y]=[y,x];
console.log(`${x} and ${y}`)
