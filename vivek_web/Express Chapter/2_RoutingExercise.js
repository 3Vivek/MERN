const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello from the home page");
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