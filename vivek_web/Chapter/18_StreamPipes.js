//stream.pipe(), the method used to take a readable stream and connect it to 
//writable stream.
//2nd way to read write stream data

//utna likhne ki jrurat nhi h jitna pichle step me kie ho
//bs pipe module use kro

const fs=require('fs');
const http=require('http');
const server=http.createServer();

server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("read.txt");
    rstream.pipe(res);
})

server.listen(8000,"127.0.0.1")