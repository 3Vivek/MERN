import axios from "axios";


const URL='http://localhost:8000';
// const URL = 'http://localhost:8080';
export const addUser=async (data)=>{
    try{
        //post method call hoga aur data add hoga at a particular location
        //jo url me hoga with specific path
        return await axios.post(`${URL}/add`,data);
    }
    catch(e){
        console.log("Error while calling add user API ",e);
    }
}


export const getUser=async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }
    catch(e){
        console.log("Error while calling getUser API",e);
    }
}

export const getUserDetails=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(e){
        console.log("Error while calling getUserDetail api the single User details",e);
    }
}
export const editUser=async (user,id)=>{
    
    try{
        return await axios.put(`${URL}/${id}`,user);
    }
    catch(e){
        console.log("Error while calling editUser API",e);
    }
}

export const deleteUser=async(id)=>{
    console.log(`${URL}/${id}`);
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling deleteUser API:  ",error);
    }
}