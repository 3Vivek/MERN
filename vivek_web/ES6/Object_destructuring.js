const bioData = {
    name:"vivek",
    age:45,
    deg:"Btech",
    hobbi:{
        first:"playing",
        second:"coding"
    }
}
// console.log(`${bioData.age}`)

// let {name,age,deg}=bioData;
// console.log(name)

// OR

let name,age,deg;
// ({name,age,deg}=bioData);
// console.log(name);


//Renaming Prop
({name:fname,age,deg:degree,hobbi}=bioData);
console.log(degree);

console.log(hobbi.first);

