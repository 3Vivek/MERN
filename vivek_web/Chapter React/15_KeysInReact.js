//Keys help react identify which item have changed(add/removed/re-order).
//To give a unique identity to every element inside the array, a key is required

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
                key={val.id}
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

//container
/*
import React from 'react';

const Show=[
    {
        id:1,
        imgsrc:"http://m.gettywallpapers.com/wp-content/uploads/2020/06/Dark-Netflix-Wallpaper-1.jpg",
        title:"A Netflix Original Series",
        sname:"DARK",
        link:""
    },
    {
        id:2,
        imgsrc:"https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg?w=1200",
        title:"A Netflix Original Series",
        sname:"Stranger Things",
        link:""
    },
    {
            id:3,
            imgsrc:"https://m.media-amazon.com/images/M/MV5BZWUwNDU1NDQtNjgyZC00YjNkLWJkNDYtM2E4YjBiYTNiZGZiXkEyXkFqcGdeQXVyMTU2Mjg2NjE2._V1_.jpg",
            title:"A Netflix Original Series",
            sname:"1899",
            link:""
    }
]

export default Show;

*/