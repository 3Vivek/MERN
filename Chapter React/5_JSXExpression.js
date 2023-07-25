import React from 'react';
import ReactDOM from 'react-dom';

const name="GOT";
const name2="Loki";
//replace krdo using {}
//work only for expression not statement
ReactDOM.render(
    <>
        <h1>Vivek Webseries pick</h1>
        <p>Here are the top 5 picks</p>
        <ol>
            <li>Breaking Bad</li>
            <li>Mr.Robot</li>
            <li>Dark</li>
            <li>{name}</li>
            <li>{name2}</li>
        </ol>
        <p>Total view is {152*12} lakhs</p>
        <p>generate number is: {Math.random()*1000}</p>
    </>,
    document.getElementById("root")
);