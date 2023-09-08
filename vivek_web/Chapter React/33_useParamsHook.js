import React from "react";
import { useParams } from "react-router-dom";

//useParams = parameter given to the URL

const User=()=>{
    const {fname}=useParams();
    return <h1>I am {fname}</h1>
}


// export default User;
//App.js
import React from "react";
import { Route ,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Menu from "./NavBar";
import User from "./User";

const App=()=>{
    return(
    <>
    {/* Switch is used to switch to the particular component else it shows by 
    default home page  */}
    {/* Switch replaced by ROUTES */}
    <Menu/>
        <Routes>
            <Route exact path='/' Component={()=><About name="About"/>}/>
            <Route path='/contact' Component={Contact}/>
            <Route path='/services' Component={Services}/>
            <Route path='/user/:fname' Component={User}/>

        </Routes>


       {/* <About/>
       <Contact/> */}
    </>
    );
};

export default App;