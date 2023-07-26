import React from 'react';
import ReactDOM from 'react-dom';

//attribute of jsx 

const fname="Vivek";
const img1="https://picsum.photos/id/217/200/200";
const img2="https://picsum.photos/id/238/200/200";
const img3="https://picsum.photos/id/263/200/200";
const imgLocal="/Pic/3.jpg";

//Inline css ke lie style tag andr nhi kaam krega kyuki wo jsx fromat h
//every attribute of css = camelcase me change kro
//jo style name h usko object ki trh pass krna pdega

const heading={
    color:'#fa3191',
    textTransform:'capitalize',
    textAlign:'center',
    textShadow:"0px 2px 8px #ffe9c5",
    margin:"70px 0px"
};

ReactDOM.render(
    <>
    {/* <h1 style={{
            color: '#fa3191',
            textTransform: 'capitalize'
        }}> My name is {fname}</h1> */}
        <h1 style={heading}> My name is {fname}</h1>
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