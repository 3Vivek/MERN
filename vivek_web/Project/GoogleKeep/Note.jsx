import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

const Note=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
   return(
    <>
        <div className="note">
            <h3>{props.title}</h3>
            <br/>
            <p>{props.content}</p>
            <Button onClick={deleteNote}>
                <DeleteOutlineIcon/>
            </Button>
        </div>
    </>
   )
}


export default Note;