import React from 'react';
import ReactDOM from 'react-dom';

//attribute of jsx 

const fname="Vivek";
const img1="https://picsum.photos/id/237/200/200";
const img2="https://picsum.photos/id/238/200/200";
const img3="https://picsum.photos/id/233/200/200";
const imgLocal="/Pic/3.jpg";

ReactDOM.render(
    <>
        <h1 contentEditable="true">My name is {fname}</h1>
        <img src={img1} alt="image1"/>
        <img src={img2} alt="image1"/>
        <a href='#' target='_blank'>
            <img src={img3} alt="image1"/>
        </a>
        <img src={imgLocal} alt="image1"/>
    
    </>,
    document.getElementById("root")
)