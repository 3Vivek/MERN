import React from 'react';
import ReactDOM from 'react-dom';
// import { Picks,Show,Heading } from './Picks';
//if you want to import whole modules from a jsx file
import * as ques from "./Picks";

ReactDOM.render(
    // <>
    //     <Picks/>
    //     <Show/>
    //     <Heading/>
    // </>,document.getElementById("root")
    <>
        <ques.Picks/>
        <ques.Show/>
        <ques.Heading/>
        <ques.Picks/>
        <ques.Show/>
        <ques.Heading/>
    </>,document.getElementById("root")
);


//Picks.jsx file jo export krna h index.js me
/*import React from 'react';

function Picks(){
    return <h1>Here are my top picks</h1>
}

function Show(){
    return (
        <ol>
            <li>Breaking Bad</li>
            <li>Mr.Robot</li>
            <li>Dark</li>
            <li>GOT</li>
            <li>The vampire diaries</li>
        </ol>
    )
}


function Heading(){
    return <h1>Vivek Webseries pick</h1>
}


export {Picks,Show,Heading};
*/

