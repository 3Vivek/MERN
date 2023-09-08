import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return (
    <>
        {/* <a href="/">About Us</a>
        <br></br>
        <a href="/contact">contact Us</a> */}

        {/* Link does not refresh the page */}
        {/* It reload the page on client page*/}

        <Link to='/'>About us</Link>
        <br></br>
        <Link to='/contact'>Contact us</Link>
        <br></br>
        <br></br>
        <NavLink exact activeClassName='active_class' to='/'>About us</NavLink>
        <br></br>
        <NavLink exact activeClassName='active_class' to='/contact'>Contact us</NavLink>


    </>
    )

}
// export default Menu;

//app.js
import React from "react";
import { Route ,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./NavBar";

const App=()=>{
    return(
    <>
    {/* Switch is used to switch to the particular component else it shows by 
    default home page  */}
    {/* Switch replaced by ROUTES */}
    <Menu/>
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