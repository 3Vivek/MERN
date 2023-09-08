const express=require("express");
require("./connectionDB");

const app=express();
const Student=require("./students");

//ek particular port pr run kraega
const port=process.env.PORT || 3000;
app.use(express.json());




//post to create students collection
app.post('/students',async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})



app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})