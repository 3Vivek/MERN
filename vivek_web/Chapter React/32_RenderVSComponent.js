//component => baar baar usi chiz ko dubara bna kr laata
//render=> usi ko use krta jo bn chuka h aur props ki help bs jo change krna hota wo krta
// example = I am Vivek
//           I am Vikki
//           I am Varun
//Component baar baar bnata agr koi call krta 
//render I am ko constant rkh deta aur bs  vivek,vikki,varun ko update krta with help of props   

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
        <br></br>
        <NavLink exact activeClassName='active_class' to='/services'>Services</NavLink>


    </>
    )

}
export default Menu;