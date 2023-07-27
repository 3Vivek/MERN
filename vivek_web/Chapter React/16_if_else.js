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
const favseries="amazon";
const FavS=()=>{
    if(favseries==="netflix"){
        
            return(
                <Card 
                imgsrc={Show[1].imgsrc}
                title={Show[1].title}
                sname={Show[1].sname}
                link={Show[1].link}
                />
            );
    }else{
        return(
            <Card 
            imgsrc={Show[2].imgsrc}
            title={Show[2].title}
            sname={Show[2].sname}
            link={Show[2].link}
            />
        );

    }
}

ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 5 Netflix series</h1>
        {/* {Show.map(ncard)} */}
        {/* Or using fat arrow function */}
        <FavS/>
        
    </>,
    document.getElementById("root")
)