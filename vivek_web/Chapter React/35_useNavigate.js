//gives you access you to the history instance that you may use to navigate
//maintain the history , you can navigate to prev page
//on current version useHistory replaced by useNavigate()
//it is mutable

// This is a React Router v6 app


import React from "react";
import { useParams,useLocation, useNavigate} from "react-router-dom";

//useParams = parameter given to the URL

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    const navigate=useNavigate();
    // console.log(history);
    return(
    <>
        
        <h1>I am {fname}</h1>
        <p>My current location is : {location.pathname}</p>
        {location.pathname=== `/user/vivek`?
            (<button onClick={()=>{
                navigate(-1);
            }}>Click me</button>):null
        }
    </>
    )
   
}


export default User;



import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>
        Go 2 pages back
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>
        Go forward
      </button>
      <button onClick={() => navigate(2)}>
        Go 2 pages forward
      </button>
    </>
  );
}