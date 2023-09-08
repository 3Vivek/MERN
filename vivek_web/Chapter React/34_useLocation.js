//With the help of location you can find current path of page

import React from "react";
import { useParams,useLocation } from "react-router-dom";

//useParams = parameter given to the URL

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    console.log(location);
    return(
    <>
        
        <h1>I am {fname}</h1>
        <p>My current location is : {location.pathname}</p>
        {location.pathname=== `/user/vivek`?
            (<button onClick={()=>{
                alert("You are awesome")
            }}>Click me</button>):null
        }
    </>
    )
   
}


export default User;