const fs=require('fs')
fs.writeFile("read1.txt","Welcome to my company",(err)=>{
    console.log("file created succesfully");
});

//append
fs.appendFile("read1.txt"," I am vivek",()=>{
    console.log("append succesfully");
});
//read
fs.readFile("read1.txt","utf-8",(error,data)=>{
    console.log(data);
});

//rename
fs.rename("read1.txt","read_new.txt",()=>{
    console.log("Rename succesfull");
});

//delete
fs.unlink("index.txt",(err)=>{
    console.log("File deleted succesfully");
});













