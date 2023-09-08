import React, { useState } from 'react';
import "./temp.css";
import Button from '@mui/material/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App=()=>{ 

   const [fullname,setfullname]=useState({
      fname:"",
      lname:"",
      phone:"",
   });
   

   const onSubmits=(event)=>{
      //by deafualt page load hota h refresh hota baar baar thats why we need to prevent
      event.preventDefault();
      alert("Form submitted")
   }

   //event pass kro onchange pr 
   const InputEvent=(event)=>{

      // console.log(event.target.value);
      // console.log(event.target.name);

      // const value=event.target.value;
      // const name=event.target.name;
      const {value,name}=event.target;
      // ---------------------------------
      // setfullname((preVal)=>{
      //    // console.log(preVal);
      //    if(name=="fname"){
      //       return{
      //          fname:value,
      //          lname:preVal.lname,
      //          phone:preVal.lname,
      //       }
      //    }else if(name=="lname"){
      //       return{
      //          fname:preVal.fname,
      //          lname:value,
      //          phone:preVal.lname
      //       }
      //    }
      //    else if(name=="phone"){
      //       return{
      //          fname:preVal.fname,
      //          lname:preVal.lname,
      //          phone:value
      //       }
      //    }
      // })
      //--------------------------------------------
      //This all code can be written using spread operator
      setfullname((preVal)=>{
         return{
            ...preVal,
            [name]:value,
         };
      })
   }
   
   
   return(
   <>
      <div className='main_div'>
         <form onSubmit={onSubmits}>
               <div>
                  <h1 >Hello {fullname.fname} {fullname.lname}</h1>
                  {/* value pr lock kr dega input nhi lega */}
                  <h2>{fullname.phone}</h2>

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
                  <input 
                     type='number' 
                     placeholder='Enter Your Phone Number'
                     name="phone" 
                     onChange={InputEvent} 
                     value={fullname.phone}
                  />
                  <br/>
                  <Button type='submit' className='Button_div'>
                     Submit :
                  </Button>
               </div>
         </form>
      </div>
   </>
   )

   
}

export default App;