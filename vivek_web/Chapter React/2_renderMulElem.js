// var React=require('react');
import React from 'react';
// var ReactDOM=require('react-dom');
import ReactDOM from 'react-dom';

//bs ek argument leta ye 
//to kaise multiple tag dikhae?
//div use kro pack krdo jitna h

//In react V16 its possible for render() to return
//an array of elem
ReactDOM.render(
          // <div>
          //   <h1>Hello world</h1> 
          //   <p>Hello vivek</p>
          //   <h2>My name is vivek</h2>

          // </div>,
          [
            <h1>Hello world</h1> ,
            <p>Hello vivek</p>,
            <h2>My name is vivek</h2>,
          ],
          
          document.getElementById("root"));