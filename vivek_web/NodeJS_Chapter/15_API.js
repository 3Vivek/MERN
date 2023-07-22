

const http=require('http');
const fs=require('fs');
//baar baar ye operation perform na ho islie bahr krdo
//baar baar page pr call hora tha to api baar baar call krra tha
// islie ek baar wo call kre web page pr aur ek result api bheje
const data=fs.readFileSync("Football.json","utf-8");
const objdata=JSON.parse(data);


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
    }
    else if(req.url=="/userAPI"){
        // fs.readFile("Football.json","utf-8",(err,data)=>{
        //     console.log(data);
        //     // res.end(data);
        //     const objdata=JSON.parse(data);
        //     res.end(objdata.name);

        // })
        res.writeHead(200,{"content-type":"application/json"});
        res.end(objdata.name);
    }
    
    else{
     
        res.writeHead(404,{"content-type":"text/html"}); //dusra parameter bta rgha ki html type ka content h whi window pr dikhega

        res.end("<h1>404 error</h1>");

    }

});
const port=8000;

server.listen(port,"127.0.0.1",()=>{
    console.log("Listening to the port number 8000")
});

