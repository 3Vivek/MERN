//to access webpage of any web app,we need web server
//web server handles all the http req from the web app

//nodejs provide capabilities to create your own web server which handle HTTP
//request asynchrnously.

const http=require('http');

//The http.createServer() method includes req and res parameter which is supplies
//by nodeJs.

//Request object can be used to get info about the current HTTP req
//eg..url,request header and data
const server=http.createServer((req,res)=>{
    //giving response on particular port defined by us
    //response de rha hu main 
    res.end("Hello from the other side");
});
const port=8000;
// request or listen 
//kaha se main listen krra aur request kaha se aara
server.listen(port,"127.0.0.1",()=>{
    console.log("Listening to the port number 8000")
});

