const path=require("path");

console.log(path.dirname("C:/Users/Vivek Gupta/Desktop/NodeJS/7_Path_module.js"));
console.log(path.extname("C:/Users/Vivek Gupta/Desktop/NodeJS/7_Path_module.js"));
console.log(path.basename("C:/Users/Vivek Gupta/Desktop/NodeJS/7_Path_module.js"));

console.log(path.parse("C:/Users/Vivek Gupta/Desktop/NodeJS/7_Path_module.js"));

const mypath=path.parse("C:/Users/Vivek Gupta/Desktop/NodeJS/7_Path_module.js");
console.log(mypath.name); //file name
console.log(mypath.ext); //extension name
console.log(mypath.base); //file name with ext
console.log(mypath.dir);// path