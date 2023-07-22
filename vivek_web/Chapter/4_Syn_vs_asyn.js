const fs=require("fs");

//synchronous
// const data=fs.readFileSync("read.txt","utf8");
// console.log(data);
// console.log("Here is the fast data");

//Asynchronous
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("Here is the fast data");