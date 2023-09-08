const { PlaylistAdd } = require("@material-ui/icons");
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

//create document or insert

//method-1 without async await
const PlayList1=new PlayList({
    name:"Wakka wakka",
    artist:"shakira",
    year:2010,
    views:7152632,
    active:true
})

PlayList1.save();


//method 2 //with async await
const createdoc=async()=>{
    try{
        const PlayList2=new PlayList({
            name:"Heartbreak",
            artist:"Enrique",
            year:2006,
            views:4752120,
            active:true
        })
        const PlayList3=new PlayList({
            name:"Starboy",
            artist:"The Weekend",
            year:2015,
            views:3652142,
            active:true
        })
        const PlayList4=new PlayList({
            name:"Alone",
            artist:"alan Walker",
            year:2018,
            views:985632,
            active:true
        })
        const PlayList5=new PlayList({
            name:"Symphony",
            artist:"zara larson",
            year:2020,
            views:3755520,
            active:true
        })
        //abhi samy lega insert krne me to wait kr lera using await function

        const res=await PlayList.insertMany([PlayList2,PlayList3,PlayList4,PlayList5]);
        console.log(res);
        
    }catch(err){
        console.log(err);
    }
}
// createdoc();

const getdoc=async()=>{
    const res=await PlayList.find({name:"Symphony"});
    const res2=await PlayList.find({year:2009}).limit(1);
    console.log(res);
    console.log(res2);

}

getdoc();

