import React from "react";
import NavBar from "./components/NavBar";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Interview from "./components/Interview";
import EditUser from "./components/EditUser";



const App=()=>{
    return(
        <>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Interview/>} />
                    <Route path="/all" element={<AllUser/>} />
                    <Route path="/add" element={<AddUser/>} />
                    {/* only edit those user at particular ID */}
                    <Route path="/edit/:id" element={<EditUser/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
