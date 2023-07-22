/*JSON stands for javascript object notation
JSON is a lightweight format for storing and transporting DataTransfer.
JSON is often used when data is sent from a server*/

const fs=require('fs');

const biodata={
    name:"vivek", //key me  quotes ni h yhi json me double hota
    age:25,
    sports:"Football"
}
// obj to json
// json me dot se value access nhi kr skte

// json to obj
// const objdata=JSON.parse(jsondata);
// console.log(objdata)

//TASK
/*
1: convert to jsondata (done)
2: dusre file me add krna
3: readfile
4: again convert back to json obj original
5: console.log*/

const jsondata=JSON.stringify(biodata);

fs.writeFile("Index.json",jsondata,(err)=>{
    console.log("Done");
})

fs.readFile("index.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgdata=JSON.parse(jsondata);
    console.log(orgdata);
})



