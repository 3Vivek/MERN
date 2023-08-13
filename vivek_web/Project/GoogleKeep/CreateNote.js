import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./KeepNotes.css";

const CreateNote=(props)=>{
    //we can access title and content by setting in useState
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const inputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.value;
        const {name,value}=event.target;
        //jo user type krra isme store hoga

        // console.log(name);
        // console.log(value);

        setNote((Prevdata)=>{
            return {
                ...Prevdata, //get all the prev data
                [name]:value,
            }
        })
        // console.log(note);
    }

    const addEvent=()=>{
        props.passNote(note)
        setNote({
            title:"",
            content:""
        })
    }

    return(
        <>
           <div className="main_note">
                <form>
                    <input 
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}    
                    />
                    <br/>
                    <textarea 
                        rows='' 
                        column='' 
                        placeholder="Write a note...."
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                    >
                    </textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className="add_btn"/>
                    </Button>
                </form>
           </div>
        </>
    )
}

export default CreateNote;