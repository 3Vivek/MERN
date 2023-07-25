// var React=require('react');
import React from 'react';
// var ReactDOM=require('react-dom');
import ReactDOM from 'react-dom';

////prb ye h ki div jb bnare h to index.html me bhi ek extra div bnjara aur uske andr ye sb h (h1,p,h2)
//wo extra div problem  krega hmko htana h islie use:
//React.Fragment
//faster and consume less memory

//agr react.frament hta do to still chlega bs <> ye use kren se
ReactDOM.render(
          // <React.Fragment>
          //   <h1>Hello world</h1> 
          //   <p>Hello vivek</p>
          //   <h2>My name is vivek</h2>

          // </React.Fragment>,
           <>
           <h1>Hello world</h1> 
           <p>Hello vivek</p>
           <h2>My name is vivek</h2>

            </>,
          
          
            document.getElementById("root"));