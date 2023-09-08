//sending html and json data response to the client
const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    //sending html data
    res.write("<h1>Hello from the home page</h1>");
    res.send();
})
app.get("/about",(req,res)=>{
    res.send("Hello from the about page");
})
app.get("/contact",(req,res)=>{
    res.send("Hello from the contact page");
})
app.get("/temp",(req,res)=>{
    //using json
    //res.send=>The method are identical when an object or array is passed
    //res.json=>will also convert non-objects,such as null and undefined
    //          which are not valid json    
    res.json([
        {
        celcius:25,
        location:"delhi",
        unit:"Celcius",
        },
        {
            celcius:25,
            location:"delhi",
            unit:"Celcius",
        },
        {
            celcius:25,
            location:"delhi",
            unit:"Celcius",
        }
    ]);
    
})

app.listen(8000,()=>{
    console.log("Listening from port no 8000");
})