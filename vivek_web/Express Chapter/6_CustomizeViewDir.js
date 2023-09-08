//to change the view name in directory
//adding dynamic content to the webpage


const path=require('path');
const express=require('express');
const app=express();

//using builtin middleware
const staticpath=path.join(__dirname,"/views");
const templatepath=path.join(__dirname,"/template");

app.set("view engine","hbs");
app.set("views",templatepath);

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
    res.render("about",{
        variable:"Click here"
    });
})


app.listen(8000,()=>{
    console.log("Listening from port no 8000");
})