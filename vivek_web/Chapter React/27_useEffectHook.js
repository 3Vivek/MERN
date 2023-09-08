//You tell react that your component needs to do something after render
//React will remember the function you passed and call it after performing the DOM updates.

import React, { useEffect, useState } from "react";


const App=()=>{
  const [num,setnum]=useState(0);
  const [nums,setnums]=useState(0);
  useEffect(()=>{
    alert("I am clicked");
  },[num]);
   //passing [] =>empty arr means alert will only show whenever refresh occur
   //passsing [num] means refresh occurs only when you click on nums (button1)
    return (
    <>
        <button onClick={()=>{
          setnum(num+1);
        }}>
          Click Me {num}
        </button>
        <br/>
        <button onClick={()=>{
          setnums(nums+1);
        }}>
          Click Me {nums}
        </button>
        
    </>
    );
};

export default App;
