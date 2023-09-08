const express=require("express");
require("./connectionDB");

const studentRouter=require("./main_Route")
const Student=require("./students");

const app=express();






//ek particular port pr run kraega
const port=process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(studentRouter);






// //1: create a new router
// const router=new express.Router();

// //2. We need to define the router
// router.get("/vivek",(req,res)=>{
//     res.send("hello from the other side")
// });

// //3. we need to register the router
// app.use(router);




app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})