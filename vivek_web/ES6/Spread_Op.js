// 1.where 0+ argument are expected
// 2.Mostly used o=in variable array where there is more that 1 vales are expected
// 3.allows us the privilage to obtain a list of parameter from an array
// 4.syntax same as (rest parameter) but work is different 

// 1)replace apply

function sum(a,b,c){
    console.log(a+b+c);
}
// var arr=[4,6,2];
// sum(...arr);

// sum.apply(null,arr);



var arr=[4,5,5];
console.log(arr);
sum(...arr)

//--------------------------------

//2) replace concat
let arr1=[1,2,3];
let arr2=[4,5,6];

// arr1=arr1.concat(arr2);
arr1=[...arr1,...arr2];

console.log(arr1);

//----------------------------------

//replace copy

let arrc1=[4,8,6];
let arrc3=[9,5,3];
// let arrc2=arrc1;
// arrc2.push(10,20);
// arr1 also copied 

let arrc2=[...arrc1,4,5,...arrc3];



console.log(arrc2)
console.log(arrc1);


