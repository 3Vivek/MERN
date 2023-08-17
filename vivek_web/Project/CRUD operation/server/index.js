import  express  from "express";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
const app=express();

import cors from 'cors';
// cors=>cross origin resource sharing
//3000pr frontend hora and 8000pr backend hora islie wo resource share nhi krne deta
//thats why we need cors

import dotenv  from "dotenv"; 
dotenv.config();
const username=process.env.DB_USERNAME;

import Routes from "./routes/route.js";
//now to use this router we have to use app.use
//use default endpoint

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/",Routes);
















Connection(username);

const port=8000;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})