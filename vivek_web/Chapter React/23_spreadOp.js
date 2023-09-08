import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";

ReactDOM.render(
    <>
        <App/>
    </>,
    document.getElementById("root")
)

//spread op=> ... 
//It expands the array into individual elem. so it can be used tp expand the array in a places
//where zero or more element are expected

const fullname=["vivek","gupta"];
const biodata=[1,...fullname,26,"male"];

//concatenate the array

var shootergame=["COD","COC","MW"];
var racinggame=["BP","ASPHALT","Hill climb"];
var games=[...shootergame,...racinggame];
// console.log(games);

//array destructuring
var[first,...remaining]=games;
// console.log(first);
// console.log(remaining);
// console.log(fullname);
// console.log(biodata);

const fullname2={
    fname:"Vivek",
    lname:"Gupta"
}
const bio={
    id:1,
    ...fullname2,
    age:26,
    gender:"male"
};

console.log(bio);

