//es5
function mul(a,b){
    b=(typeof b=='undefined')?2:b;
    console.log(a*b);
}
mul(4);

//es6
const mult=(a,b=6)=> a*b;
console.log(mult(4))