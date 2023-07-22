//Stream are object that let you read or write data from a source in continous form.
/* In continous form
Readable-stream which is used for read operation
writeable-stream which is used for write opertaion
Duplex-Both Read and write
Transform-A type of duplex stream where output is computed based on input
*/ 

/*Each type of stream is an EventEmitter instance and throws several events at
different instance of time. Some common used events:-

data- event is fired when data is available to read
end-  event is fired when there is no more data to read
error- event is fired when there is any error recieving or writing data
finish- event is fired when all data has been flushed to underlying system

*/

//Normal ways
const fs=require('fs');
const http=require('http');
const { restart } = require('nodemon');

const server=http.createServer();
server.on("request",(req,res)=>{
    // var fs=require('fs');
    // fs.readFile("read.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    //2nd way Reading from stream
    const rstream=fs.createReadStream("read.txt");
    //data ko chunk by chunk dikhaega
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on("end",()=>{
        res.end();
    });
    //if error in stream
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("File not found");
    })
});

server.listen(8000,"127.0.0.1");

