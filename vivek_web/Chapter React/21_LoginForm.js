import React, { useState } from 'react';
import "./hook.css";



// React component= Controlled vs Uncontrolled
// An input form element whose value is controlled by React  =>controlled component


const App=()=>{ 

   const [name,setname]=useState("");
   const [fullname,setfullname]=useState();

   const [roll,setRoll]=useState();
   const [finalroll,setfinalroll]=useState();

   const onSubmits=(event)=>{
      event.preventDefault();//by deafualt page load hota h refresh hota baar baar thats why we need to prevent
      setfullname(name);
      setfinalroll(roll);
      
   }

   //event pass kro onchange pr 
   const InputEvent=(event)=>{
      // console.log("clicked")
      setname(event.target.value)
      // console.log(event.target.value);//name dikha dega console pr

   }
   const RollEvent=(rollEvent)=>{
      setRoll(rollEvent.target.value);
   }
   
   return(
   <>
      <div className='main_div'>
         <form onSubmit={onSubmits}>
               <div>
                  <h1>Hello {fullname} {finalroll}</h1>
                  {/* value pr lock kr dega input nhi lega */}
                  <input 
                     type='text' 
                     placeholder='Enter Your name' 
                     onChange={InputEvent} 
                     value={name}
                  /> 
                  <input 
                     type='text' 
                     placeholder='Enter Your Roll Number' 
                     onChange={RollEvent} 
                     value={roll}
                  /> 
                  <br/>
                  <button type='submit'>Submit Me</button>
               </div>
         </form>
      </div>
   </>
   )

   
}

export default App;