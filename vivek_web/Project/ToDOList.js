import React, { useState } from "react";
import "./tofo.css";
import ToDo from "./ToDo";

const App=()=>{

    const [inputlist,setInputList]=useState("");
    const [items,setItems]=useState([]);

    const itemevent=(event)=>{
        setInputList(event.target.value);
    }
    const Addlist=()=>{
        setItems((olditems)=>{
            //return the old data of an array and append the new list in existing array
            return [...olditems,inputlist];
        })
        setInputList('');
    }
    const delitem=(id)=>{
        // console.log("Deleted");
        //delete those elem whose index is matched with id
        
        setItems((olditems)=>{
            console.log(olditems);
            return olditems.filter((arrElem,index)=>
            {
                console.log(arrElem);
                console.log(index);
                // Return those elem whose id is not matched with the index
                return index!==id;
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" 
                    value={inputlist}
                    placeholder="Add a Items" 
                    onChange={itemevent}/>
                    <button onClick={Addlist}> + </button>
                <ol>
                   
                    {
                        items.map((itemVal,index)=>{
                            return  <ToDo 
                            key={index} 
                            id={index} 
                            text = {itemVal} 
                            onSelect={delitem}    
                            />;
                            
                        })
                    }
                </ol>    
                </div>
            </div>
        </>
    );
}




// export default App;

//ToDo.jsx

import React from "react";
// import "./tofo.css"

const ToDo = (props)=>{
    const delitem=()=>{

    }
    return (
        <>
            <div className="todo_style">
                <button className="butt1" 
                    onClick={()=>{
                    props.onSelect(props.id); //delete the particular iD
                }}>- </button><li>{props.text}</li>
                 
            </div>
        </>
    )  
}

export default ToDo;