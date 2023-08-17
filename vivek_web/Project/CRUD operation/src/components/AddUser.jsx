import { FormControl, FormGroup, InputLabel,Input, Typography,styled ,Button} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/Api";


const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
`
const FControl=styled(FormControl)`
    margin-top:5%;
`

//formgroup=parent
//formcontrol=child

const AddUser=()=>{

    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
    })

    const changeValue=(event)=>{
        console.log(event.target.name , event.target.value);
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
        console.log(user);
    }
    const addUserDetails=async()=>{
        //on clicking button addUser API is called
        await addUser(user);
        alert("Student data submitted successfully");
        
    }
    
    return(

        <>
            <Container>
            <Typography variant="h4">Add User</Typography>
                <FControl>
                    <InputLabel name="name">Name</InputLabel>
                    <Input onChange={(name)=>changeValue(name)} name="name"/>    
                </FControl>
                <FControl>
                    <InputLabel name="email">Email</InputLabel>
                    <Input onChange={(email)=>changeValue(email)} name="email"/>    
                </FControl>
                <FControl>
                    <InputLabel name="phone">Phone</InputLabel>
                    <Input onChange={(phone)=>changeValue(phone)} name="phone"/>    
                </FControl>
                <FControl>
                    <Button variant="contained" onClick={()=>addUserDetails()}>Submit</Button>
                </FControl>
            </Container>
        </>
    )
}

export default AddUser;