import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


//styled component used for css
//kis component pr lgana h (iske andr)
//AppBar now replaces with Header
const Header=styled(AppBar)`
    background:black
`
//p kyuki html ka tag h islie ('isme likho')
//ab p tag ko NavLink bna do kyuki usko ab Navgiate krna h between pages
// ye jo tab h wo Navlink hi h
const Tab=styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    text-decoration:none;
    color:white
`

const NavBar=()=>{
    return(
        <>
           <Header position='static'>
            <Toolbar>
                <Tab to="/">Interview</Tab>
                <Tab to="/all">All user</Tab>
                <Tab to="/add">Add user</Tab>
            </Toolbar>
           </Header>
        </>
    )
}

export default NavBar;