import { FormControl, FormGroup, InputLabel,Input, Typography,styled ,Button} from "@mui/material";
import { useEffect, useState } from "react";
import { editUser } from "../service/Api";
import {useNavigate, useParams } from "react-router-dom";
import { getUserDetails } from "../service/Api";


const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
`
const FControl=styled(FormControl)`
    margin-top:5%;
`

//formgroup=parent
//formcontrol=child


const EditUser=()=>{


    
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
    })
    
    const {id} = useParams();
    

    useEffect(()=>{
        loadUserDetails();
        
    },[]);
    
    const loadUserDetails=async()=>{
        const response=await getUserDetails(id);
        setUser(response.data);
      
    }




    const changeValue=(event)=>{
        console.log(event.target.name , event.target.value);
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
        console.log(user);
    }
    const EditUserDetails=async()=>{
        //on clicking button editUser API is called
        await editUser(user,id);
        alert("updated successfully");
    }
    
    return(

        <>
            <Container>
            <Typography variant="h4">Edit or Update the User detail</Typography>
                <FControl>
                    <InputLabel >Name</InputLabel>
                    <Input onChange={(e)=>changeValue(e)} name="name" value={user.name}/>    
                </FControl>
                <FControl>
                    <InputLabel >Email</InputLabel>
                    <Input onChange={(e)=>changeValue(e)} name="email" value={user.email}/>    
                </FControl>
                <FControl>
                    <InputLabel >Phone</InputLabel>
                    <Input onChange={(e)=>changeValue(e)} name="phone" value={user.phone}/>    
                </FControl>
                <FControl>
                    <Button variant="contained" onClick={()=>EditUserDetails()}>Update</Button>
                </FControl>
            </Container>
        </>
    )
}

export default EditUser;