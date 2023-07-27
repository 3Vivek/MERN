import React, { useState } from 'react';
import "./hook.css";






const App=()=>{ 
//baar baar hooks na bnao ek object bnao usi se sb kaam chlao
//hooks as a object
   const [fullname,setfullname]=useState({
      fname:"",
      lname:"",
   });
   

   const onSubmits=(event)=>{
      event.preventDefault();//by deafualt page load hota h refresh hota baar baar thats why we need to prevent
      alert("Form submitted")
   }

   //event pass kro onchange pr 
   const InputEvent=(event)=>{

      console.log(event.target.value);
      console.log(event.target.name);

      const value=event.target.value;
      const name=event.target.name;

      setfullname((preVal)=>{
         // console.log(preVal);
         if(name=="fname"){
            return{
               fname:value,
               name:preVal.lname,
            }
         }else if(name=="lname"){
            return{
               fname:preVal.fname,
               lname:value,
            }
         }
      })

   }
   
   
   return(
   <>
      <div className='main_div'>
         <form onSubmit={onSubmits}>
               <div>
                  <h1>Hello {fullname.fname} {fullname.lname}</h1>
                  {/* value pr lock kr dega input nhi lega */}
                  <input 
                     type='text' 
                     placeholder='Enter Your name' 
                     name="fname"
                     onChange={InputEvent} 
                     value={fullname.fname}
                  /> 
                  <input 
                     type='text' 
                     placeholder='Enter Your Roll Number'
                     name="lname" 
                     onChange={InputEvent} 
                     value={fullname.lname}
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