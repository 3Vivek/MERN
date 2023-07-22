const fs=require("fs")
//callback is necessary
fs.writeFile("read.txt","Welcome to the code",(err)=>{
    console.log("File is created");
    console.log(err);
});

//append
fs.appendFile("read.txt","And this is asynchronous ",(err)=>{
    console.log("Task complete");    
})

//read
fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data); //buffer data without utf8 file encoding
})
