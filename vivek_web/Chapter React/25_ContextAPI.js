/*🙂  React hooks provide a concept call Context.
React Context API allows you to easily acccess data at different level of the component Tree,
without passing prop to entry level. 🤯 
*/
//three step => createContext() , Provider, consumer

import React from "react";
import Cont1 from "./Cont1"
import { createContext } from "react";

const FirstName=createContext();
const Lastname=createContext();

const App=()=>{
    return (
    <>
        <FirstName.Provider value={"Arijit"}> 
        <Lastname.Provider value={"singh"}>
            <Cont1/>
        </Lastname.Provider>
        </FirstName.Provider>

        
    </>
    );
};

export default App;
export {FirstName,Lastname};


//component 3
import React from 'react';
import {FirstName,Lastname} from './App';


//Consumer ko bs fucntion chaie
// const Cont3=()=>{
//     return (
//         <>
    
//             <FirstName.Consumer>
//             {(fname,lname)=>{
//                 return(
//                     <Lastname.Consumer>{(lname)=>{
//                         return <h1>my name is : {fname} {lname}</h1>
//                     }}</Lastname.Consumer>
//                 )
//             }}
//             </FirstName.Consumer>
//         </>
//     )
    
    
    
// }


// export default Cont3;