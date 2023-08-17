import mongoose from "mongoose";


const password = encodeURIComponent("#Mongo4558");

const Connection=async(username)=>{
    const URL=`mongodb+srv://${username}:${password}@PROJECT 0.bxhuaxi.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            
        }) 
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting with the database",error);
    }
}

export default Connection;