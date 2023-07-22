//file system

const fs=require("fs");
//creating a new file
// fs.writeFileSync("read.txt","Welcome to my code");

//overwrite the previous data
fs.writeFileSync("read.txt","Hi there welcome to my code");

//appending the data
fs.appendFileSync("read.txt","  I am the extra data");

//read the data from file
const buf_data=fs.readFileSync("read.txt");
//Buffer data= Node.js include additional data type called buffer(not available in browser JS)
//Buffer mainly used to store binary data
//while readi g from a file or exisiting file or reading packet from the network

console.log(buf_data);

// to show in string
const org_data=buf_data.toString();
console.log(org_data);


// rename the file
fs.renameSync("read.txt","index.txt");



