import React  from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cont1";
import "./index.css"
import Show from "./Cont2";

// function ncard(val){
//     console.log(val);
//     return(
//         <Card 
//             imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.link}
//         />
//     )
// }

ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 5 Netflix series</h1>
        {/* {Show.map(ncard)} */}
        {/* Or using fat arrow function */}
        {Show.map((val)=>{
            return(
                <Card 
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
                />
            );
        })}
    </>,
    document.getElementById("root")
)