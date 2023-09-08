const mongoose=require("mongoose");
//it return a promises
mongoose.connect("mongodb://127.0.0.1:27017/songs",{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>console.log("Connection succcessfull"))
.catch((err)=>console.log(err));

//schema =>define the structure of the document,default values,validators
const playListschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        artist:String,
        year:Number,
        views:Number,
        active:Boolean,
        date:{
            type:Date,
            default:Date.now
        }

    }
)
//A mongoose model is a wrapper on the mongoose schema.
//mongoose  schema=>define structure of the document,default value,validators etc
//mongoose model=provides an interface to the database for creating,querying,updating,deleting records,etc.

//it is a class
//collection create
const PlayList=new mongoose.model("PlayList",playListschema);
