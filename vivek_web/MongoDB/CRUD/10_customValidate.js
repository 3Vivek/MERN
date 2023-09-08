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
            required:true,
            // lowercase:true
            uppercase:true,
            minlength:[2,"Minimum 2 lentgh allowed"],
            maxlength:20
        },
        artist:{
            type:String,
            trim:true,
            
        },
        year:Number,
        views:{
            type:Number,
            validate(value){
                if(value<0){
                    throw new Error("View cant be negative");
                }
            }
            //OR
            // validate:{
            //     validator:function(val){
            //         return val.length<0
            //     },
            //     message:"Views cant be negative"
            // }
        },
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
        // const PlayList2=new PlayList({
        //     name:"HeArtbreak",
        //     artist:"Enrique",
        //     year:2006,
        //     views:4752120,
        //     active:true
        // })
        // const PlayList3=new PlayList({
        //     name:"starboy",
        //     artist:"The Weekend",
        //     year:2015,
        //     views:3652142,
        //     active:true
        // })
        // const PlayList4=new PlayList({
        //     name:"Alone",
        //     artist:"alan Walker",
        //     year:2018,
        //     views:985632,
        //     active:true
        // })
        const PlayList5=new PlayList({
            name:"symphony",
            artist:"Pitbull",
            year:2020,
            views:54656,
            active:true
        })
        

        const res=await PlayList.insertMany([PlayList5]);
        console.log(res);
        
    }catch(err){
        console.log(err);
    }
}
createdoc();





