import React, { useState } from 'react';
import "./hook.css";


// const state=useState();//used inside a function






const App=()=>{
   const blue="Blue";
   const [bg,setBg]=useState(blue);

   const name1="click me";
   const [name,setname]=useState(name1);

   const bgChange=()=>{
      let newbg="yellow";
      let newname="Dont you stupid";
      setBg(newbg);
      setname(newname);
      // console.log('clcickede');
   }
   return (
      <>
         <div style={{ backgroundColor: bg }}>
            <button onClick={bgChange}>{name} </button>
         </div>
         
      </>

   )
}

export default App;