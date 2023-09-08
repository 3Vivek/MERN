//serve HTML CSS AND JS file in express
//sending html and json data response to the client
const path=require('path');
const express=require('express');
const app=express();

//using builtin middleware
const staticpath=path.join(__dirname,"/public");

app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    //sending html data
    res.write("Hello from the home page");
})

app.get("/about",(req,res)=>{
    res.send("Hello from the about page");
})
app.get("/contact",(req,res)=>{
    res.send("Hello from the contact page");
})
app.get("/temp",(req,res)=>{
    res.send("Hello from the temperature page");

})

app.listen(8000,()=>{
    console.log("Listening from port no 8000");
})