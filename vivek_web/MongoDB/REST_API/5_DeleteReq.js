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

//update the students by id
app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateData=await Student.findByidAndUpdate({_id:_id},req.body,{
            new:true //current updated data show hoga
        });
        res.send(updateData);
    }catch(e){
        res.status(400).send(e);
    }
})

//Delete the students by id
app.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deldata=await Student.findByIdAndDelete({_id:_id});
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deldata);
    }catch(e){
        res.status(500).send(e);
    }
})




app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})