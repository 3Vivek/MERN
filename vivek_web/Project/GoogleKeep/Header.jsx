import React from "react";
import logo from "./logo.svg";
import "./KeepNotes.css";

const Header=()=>{
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" width="70" height="50"/>
                <h1>Google Keep</h1>
            </div>
        </>
    )
}

export default Header;