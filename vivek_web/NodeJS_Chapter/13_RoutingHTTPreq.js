

const http=require('http');


const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello from the other side");
    }
    else if(req.url=="/about"){
        res.end("Hello from the aboutUS side");
    }
    else if(req.url=="/contact"){
        res.end("Hello from the contactUS side");
    }else{
        //in inspect it is showing 200 means ok
        //but we want error portno display
        res.writeHead(404,{"content-type":"text/html"}); //dusra parameter bta rgha ki html type ka content h whi window pr dikhega
        
        //html webpage pr dikhao
        res.end("<h1>404 error</h1>");

    }

});
const port=8000;

server.listen(port,"127.0.0.1",()=>{
    console.log("Listening to the port number 8000")
});

