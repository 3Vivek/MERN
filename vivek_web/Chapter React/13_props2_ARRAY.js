//props = khud ka property create krna jaise hr ek html element ka hota
// eg <input type="text" value="vivek">
// tha input tag ka attrubute = type and value
//waise  hi khud ka bnana h

import React  from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cont1";
import "./index.css"
import Show from "./Cont2";

ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 5 Netflix series</h1>
        <Card 
            // className="kuchbhi" //ye jsx ke andr css prop ka kaam krta tha to yha use na kro already reserverd keyword h 
            imgsrc={Show[0].imgsrc}
            title={Show[0].title}
            sname={Show[0].sname}
            link={Show[0].link}
        />
        <Card 
            imgsrc={Show[1].imgsrc}
            title={Show[1].title}
            sname={Show[1].sname}
            link={Show[1].link}
        />
        <Card 
            imgsrc={Show[2].imgsrc}
            title={Show[2].title}
            sname={Show[2].sname}
            link={Show[2].link}
        />
    </>,
    document.getElementById("root")
)
//array pass kro ab
//container file
/*
import React from 'react';

const Show=[
    {
        imgsrc:"http://m.gettywallpapers.com/wp-content/uploads/2020/06/Dark-Netflix-Wallpaper-1.jpg",
        title:"A Netflix Original Series",
        sname:"DARK",
        link:""
    },
    {
        imgsrc:"https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg?w=1200",
        title:"A Netflix Original Series",
        sname:"Stranger Things",
        link:""
    },
    {
            imgsrc:"https://m.media-amazon.com/images/M/MV5BZWUwNDU1NDQtNjgyZC00YjNkLWJkNDYtM2E4YjBiYTNiZGZiXkEyXkFqcGdeQXVyMTU2Mjg2NjE2._V1_.jpg",
            title:"A Netflix Original Series",
            sname:"1899",
            link:""
    }
]

export default Show;
*/