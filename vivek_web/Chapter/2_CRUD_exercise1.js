const fs=require('fs');
fs.mkdirSync("Exercise");

//creating file
fs.writeFileSync("bio.txt","Hello my name is vivek");

//append
fs.appendFileSync("bio.txt","My age is 20");

//read
const data=fs.readFileSync("bio.txt","utf8");
console.log(data);

//rename 
fs.renameSync("bio.txt","bioData.txt");

//delete
fs.unlinkSync("bioData.txt");

//remove folder/directory
fs.rmdirSync("Exercise");