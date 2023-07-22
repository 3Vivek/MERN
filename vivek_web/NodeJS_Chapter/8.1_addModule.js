const add=((x,y)=>{
    return x+y;
});

module.exports=add;

const sub=((a,b)=>{
    return a-b;
})

const mul=((a,b)=>{
    return a*b;
})
//to access multiple fucntion
// module.exports.add=add;
// module.exports.sub=sub;

//efficient
module.exports={add,sub,mul};