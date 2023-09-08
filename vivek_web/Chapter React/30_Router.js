//page ko on server side reload ni krta =>server routing
//page pr clent side pr hi reload krta => client routing

//index.js
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>    
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
    
    
)


//app.jsx


import React from "react";
import { Route ,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";


const App=()=>{
    return(
    <>
    {/* Switch is used to switch to the particular component else it shows by 
    default home page  */}
    {/* Switch replaced by ROUTES */}
        <Routes>
            <Route exact path='/' Component={About}/>
            <Route path='/contact' Component={Contact}/>
            <Route Component={Error}/>

        </Routes>


       {/* <About/>
       <Contact/> */}
    </>
    );
};

export default App;