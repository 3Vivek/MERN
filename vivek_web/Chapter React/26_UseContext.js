//reduce the line that was more when we used consumer bcz it only works on function

import React, { useContext } from 'react';
import {FirstName,Lastname} from './App';




const Cont3=()=>{
    //usecontext called at top level
    const fname=useContext(FirstName);
    const lname=useContext(Lastname);
    return (
        <>
    
           <h1>My name is: {fname} {lname}</h1>
        </>
    )
    
    
    
}


export default Cont3;