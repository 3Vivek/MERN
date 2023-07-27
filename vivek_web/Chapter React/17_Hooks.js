//Hooks=>Allow you to use state and other React feature without writing inside a class.
//Hooks are the function which "hook into" React state and lifecycle feature from fucntion components.
//2> Doesnt work inside a class
//3>Always usead at the top level of react function

//state change krta h
import React, { useState } from 'react';
import "./hook.css";


// const state=useState();//used inside a function




const App=()=>{
   const state=useState(); //ye ek array h jo two value return krta i.e [undefined, ƒ] 
   // console.log(state);
   const [count,setCount]=useState(0);



  
   const IncNum=()=>{
      setCount(count+1);

   // count++; //ise change nhi hoga state change isse nhi ho skta
   // console.log('clicked '+ count++);
}
    
   return (
      <>
         <h1>{count}</h1>
         <button onClick={IncNum}>Click me to increase</button>
     

      </>

   )
}

export default App;