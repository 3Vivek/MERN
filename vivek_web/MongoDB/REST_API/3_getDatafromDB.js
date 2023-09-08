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


//read the data of registered students
app.get('/students',async(req,res)=>{
    try{
       const studentDB=await Student.find();
       res.send(studentDB);
    }catch(e){
        res.send(e);
    }

    
})
//to get the data of a particular students by id
app.get("/students/:id",async(req,res)=>{
    try{
        //to get the id of students using params 
        const _id=req.params.id;
        // console.log(req.params.id);
        // res.send(req.params.id);

        const studentdata=await Student.findById({_id:_id}); //key value pair same
        if(!studentdata){
            return res.status(404).send();
        }
        res.send(studentdata);

    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})