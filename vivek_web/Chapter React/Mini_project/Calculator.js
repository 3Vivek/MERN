import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from "./Cont3"

ReactDOM.render(
    <>
        <ul>
            <li>Sum of two number is: {add(40,12)}</li>
            <li>Sub of two number is: {sub(40,45)}</li>
            <li>Mul of two number is: {mul(40,10)}</li>
            <li>Div of two number is: {div(40,4)}</li>

        </ul>
    </>,
    document.getElementById("root")
);

//cont3.jsx

/*import React from 'react';

const add=((a,b)=>{
    return a+b;
})
const sub=((a,b)=>{
    return a-b;
})
const mul=((a,b)=>{
    return (a*b);
})
const div=((a,b)=>{
    return (a/b).toFixed(2);
})


export {add,sub,mul,div};
*/