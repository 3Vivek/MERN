import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number
})

//used as a plugin
autoIncrement.initialize(mongoose.connection);
//auto increment the ID on Student Table
userSchema.plugin(autoIncrement.plugin,"student");

const student=mongoose.model("student",userSchema);



export default student;