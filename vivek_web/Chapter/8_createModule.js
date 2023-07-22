const { default: chalk } = require('chalk');
const oper=require('./8.1_addModule')
console.log(oper); //treated as obejct
console.log(oper.add(10,7));
console.log(oper.sub(10,6));

//Object destrucutor
//position not matter in NodeJS
const {add,sub,mul}=require('./8.1_addModule');
console.log(add(10,7));
console.log(sub(10,6));
console.log(mul(10,6));
