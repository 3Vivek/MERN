const mongoose=require("mongoose");
//it return a promises
mongoose.connect("mongodb://127.0.0.1:27017/sports",{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>console.log("Connection succcessfull"))
.catch((err)=>console.log(err));