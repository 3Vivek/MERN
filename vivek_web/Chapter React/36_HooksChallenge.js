import React, { useEffect, useState } from "react";

const App=()=>{
    const [num,setnum]=useState(1);

    const change=()=>{
        setnum(num+1);
    }
    useEffect(()=>{
        document.title=`you clicked me ${num} times`
    });
    return <button onClick={change}>Click me {num}</button>
}




// export default App;