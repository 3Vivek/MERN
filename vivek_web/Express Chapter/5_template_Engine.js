//adding dynamic content to the webpage


const path=require('path');
const express=require('express');
const app=express();

//using builtin middleware
const staticpath=path.join(__dirname);
console.log(staticpath);
//you cant change the name views in hbs file
//to set the view engine

app.set("view engine","hbs");


app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    //sending html data
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("index",{
        variable:"Click me"
    });
})
app.get("/contact",(req,res)=>{
    res.send("Hello from the contact page");
})


app.listen(8000,()=>{
    console.log("Listening from port no 8000");
})