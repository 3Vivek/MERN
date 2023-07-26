import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
//attribute of jsx 

const fname="Vivek";
const img1="https://picsum.photos/id/217/200/200";
const img2="https://picsum.photos/id/238/200/200";
const img3="https://picsum.photos/id/263/200/200";
const imgLocal="/Pic/3.jpg";

//use kro className and link css index.css file

ReactDOM.render(
    <>
        <h1 className='heading'>My name is {fname}</h1>
    <div className='img_div'>
        <img src={img1} alt="image1"/>
        <img src={img2} alt="image1"/>
        <a href='#' target='_blank'>
            <img src={img3} alt="image1"/>
        </a>
    </div>
        
    
    </>,
    document.getElementById("root")
)