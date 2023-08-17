import { Table,TableHead,TableBody, TableCell, TableRow,Button,styled } from "@mui/material";
import { getUser ,deleteUser} from "../service/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



//now we want ki jaise hi all user click ho sara data show krdo without any event
//Jaise hi ALLuser component DOM me Mount ho waise hi API call ho jae
//componentDeadMount ki help se kr skte wo tb mount hota h jb cmponent mount hota h DOM pr
//but we are using Functional approach so we will use uesEffect() 

const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
    background:black;
`
const TCell=styled(TableCell)`
    color:white;
    font-size:20px;
`

const TRow=styled(TableRow)`
    
    & > td{
        font-size:18px;
    }
`

const AllUser=()=>{
    const [students,setStudents]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers=async()=>{
        let response=await getUser();
        setStudents(response.data);
    }

    const deleteUserDetails=async(id)=>{
        
        await deleteUser(id);
        getAllUsers();
        
       
    }
    


    return(
        <StyledTable>
                <TableHead>
                    <THead>
                        <TCell>Id</TCell>
                        <TCell>Name</TCell>
                        <TCell>Email</TCell>
                        <TCell>Phone</TCell>
                        <TCell></TCell>
                    </THead>
                </TableHead>
                <TableBody >
                    {
                        students.map((user)=>(

                            <TRow ley={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{marginRight:10}} 
                                        component={Link} to={`/edit/${user._id}`}
                                    >Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TRow>
                        ))
                    }
                </TableBody>
        </StyledTable>
        
        )
}

export default AllUser;