import React, { useState } from 'react';
import "./hook.css";



// React component= Controlled vs Uncontrolled
// An input form element whose value is controlled by React  =>controlled component


const App=()=>{ 

   const [name,setname]=useState("");
   const [fullname,setfullname]=useState();

   //event pass kro onchange pr 
   const InputEvent=(event)=>{
      // console.log("clicked")
      setname(event.target.value)
      // console.log(event.target.value);//name dikha dega console pr
   }
   const Submit=()=>{
      setfullname(name);
   }
   return(
   <>
      <div>
         <h1>Hello {fullname}</h1>
         {/* value pr lock kr dega input nhi lega */}
         <input type='text' placeholder='Input Your name' onChange={InputEvent}/> 
         <button onClick={Submit}>Click Me</button>

      </div>
   </>
   )

   
}

export default App;