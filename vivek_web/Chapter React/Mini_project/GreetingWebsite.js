import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
//adding css
const cssstyle={};


let currDate=new Date(2023,7,25,20);
currDate=currDate.getHours();
let greeting="";

if(currDate>=1 && currDate<12){
    greeting="Good Morning";
    cssstyle.color='Yellow';
}else if(currDate>=12 && currDate<17){
    greeting="Good Evening";
    cssstyle.color='orange';
}else{
    greeting="Good Night";
    cssstyle.color='grey';
}



ReactDOM.render(
    <>
        <div>
        <h1>Hello sir,<span style={cssstyle}> {greeting}</span></h1>
        </div>
        
    </>,
    document.getElementById("root")
);