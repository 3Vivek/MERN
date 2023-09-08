//reusing the component by defining once using partials

const path=require('path');
const express=require('express');
const app=express();
const hbs=require('hbs');

//using builtin middleware
const staticpath=path.join(__dirname,"/views");
const templatepath=path.join(__dirname,"/template/views");
const partialpath=path.join(__dirname,"/template/partials");

app.set("view engine","hbs");
app.set("views",templatepath);
//registering the partials
hbs.registerPartials(partialpath);


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
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops this about us page not found"
    })
})

app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops 404 not found"
    })
})

app.listen(8000,()=>{
    console.log("Listening from port no 8000");
})