import Student from "../Schema/UserSchema.js";

export const addUser=async (request,response)=>{
    const user=request.body;
    //ab new student ko store kro table student me
    const newStudent=new Student(user);
    try{
        await newStudent.save();
        response.status(201).json(newStudent);
    }catch(e){
        response.status(409).json({message:console.error.message});

    }
}

export const getUsers=async(request,response)=>{
    try{
        const Students=await Student.find({}); 
        response.status(200).json(Students);
    }catch(e){
        response.status(404).json({message:e.message})
    }
}

export const getUser=async(request,response)=>{
    try{
        //user ke id ke according uska data DB se find krke dena
        const Students=await Student.findById(request.params.id); 
        response.status(200).json(Students);
    }catch(e){
        response.status(404).json({message:e.message})
    }
}

export const editUser=async(request,response)=>{
    let user=request.body;
    const editUser=new Student(user);
    try{
        await Student.updateOne({_id:request.params.id},editUser);
        response.status(201).json(editUser);

    }catch(e){
        response.status(409).json({message:e.message});
    }
}

export const deleteUser=async(request,response)=>{
    try{
        await Student.deleteOne({_id:request.params.id});
        response.status(200).json({message: `User deleted Successfully`});
    }catch(e){
        response.status(409).json({message:e.message});
    }
}