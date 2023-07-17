// stage:
// 1. Pending
// 2. Resolve
// 3. Reject

// task :
//1. 2s rollNo;
//2. 2s name and age;

// for succesfull task
// executer
//promise produce
 const pobj1=new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        let rollNo=[1,2,3,4,5];
        Resolve(rollNo);
        // Reject("Error while communication");
    },2000);
 });

const getBiodata=(indexdata)=>{
    return new Promise((Resolve,Reject)=>{
        setTimeout((indexdata)=>{
            let biodata={
                name:'Vivek',
                age:26
            }
            Resolve(`My roll number is ${indexdata}. My name is ${biodata.name}
                and I am ${biodata.age} years old `);
        },2000,indexdata)
    })
}


//promise consume = use .then
//if error occur(reject)= .catch

pobj1.then((rollNo)=>{
    console.log(rollNo);
    return getBiodata(rollNo[1]);
 }).then((kuchbhi)=>{
    console.log(kuchbhi);
 }).catch((error)=>{
    console.log(error);
 })