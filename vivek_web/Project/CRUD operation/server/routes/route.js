import express from "express";
import { addUser,getUsers ,getUser,editUser,deleteUser} from "../Controller/UserController.js";



const router=express.Router();
//we need router jisko pta chle jana kaha h url ke baad/
//add pe ya alll pr islie yha bnate h aur main index.js pr specify krna pdega kyuki
//asli routing wha se h


//yha pr adduser krnge add wali route pr
//so we need to use callback function adduser wha wo sara data fetch krega
router.post("/add",addUser);
router.get("/all",getUsers);
router.get("/:id",getUser);
router.put("/:id",editUser);
router.delete("/:id",deleteUser);

export default router;