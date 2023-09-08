//Express is a nodeJS framework
// web app framework that provide you with a simple api to build website,web apps and back ends

// why we need express expressJS?
// take you 5-10x less time and code than Nodejs

const express=require('express');
const { get } = require('http');
//creating express application
var app=express();
/*API
get-read
post-create
put-update
delete-delete
*/
// "/" is root page
/*req=> request object represent the http request and has property for the request
    query string,parameter,body,http headers,etc
  res=>represent the http response that the express app sends when it recieve an HTTP req.    
*/
app.get("/",(req,res)=>{
    res.send("Hello world  from the express");
});
app.get("/about",(req,res)=>{
    res.send("Hello from the about us")
})

app.listen(8000,()=>{
    console.log("listening to port 8000");
})
