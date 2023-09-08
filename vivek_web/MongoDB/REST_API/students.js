const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

//creating model
const Student=new mongoose.model("Student",studentSchema);

module.exports=Student;