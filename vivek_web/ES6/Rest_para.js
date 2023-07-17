//Indefinite number of argument as an array

// ES5
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(1,4,4,5,2,6,5);


//Es6
function sum(...inputs){
    console.log(inputs); // arrays of inputs
    console.log(...inputs);
    let total=0;
    for(let i of inputs){
        total+=i;
    }
    console.log(total);
}
sum(1,2,3,4,6,7,8) // argument passes as an array


function fun(a,b,...c){
    console.log(`${a} ${b}`); 
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun('Ronandlo','Neymar','Pele','Messi','Edan');