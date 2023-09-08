const express=require("express");
require("./connectionDB");

const app=express();
const Student=require("./students");

//ek particular port pr run kraega
const port=process.env.PORT || 3000;
app.use(express.json());




//post to create students collection
app.post("/students",(req,res)=>{
    //post,man me jo body me likhe ho usko fetch kro with the help of
    console.log(req.body)
    const user=new Student(req.body);
    //ab save krlo isko database me aur browsear pr dikkhao
    user.save().then(()=>{
        //status dikhao whether it is ok or error
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    // res.send("hello from the other side");
})



app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})