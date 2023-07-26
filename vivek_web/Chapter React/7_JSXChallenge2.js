import React from 'react';
import ReactDOM from 'react-dom';
/*
1.  Create a react app from scratch
2.  Add one h1 elem ex.your name
3.  Add one p elem in it with current date
4.  Add one p elem in it with current time
*/
const name="Vivek";
const currdate=new Date().toLocaleDateString;
const currtime=new Date().toLocaleTimeString;
ReactDOM.render(
    <>
        <h1>My name is {name}</h1>
        <p>Current Date is = {currdate}</p>
        <p>Current time is = {currtime}</p>
    </>,
    document.getElementById("root")
);