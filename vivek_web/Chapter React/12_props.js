//props = khud ka property create krna jaise hr ek html element ka hota
// eg <input type="text" value="vivek">
// tha input tag ka attrubute = type and value
//waise  hi khud ka bnana h

import React  from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cont1";
import "./index.css"

ReactDOM.render(
    <>
        <Card 
            imgsrc="http://m.gettywallpapers.com/wp-content/uploads/2020/06/Dark-Netflix-Wallpaper-1.jpg"
            title="A Netflix Original Series"
            sname="DARK"
            link=""
        />
        <Card 
            imgsrc="https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg?w=1200"
            title="A Netflix Original Series"
            sname="Stranger Things"
            link=""
        />
        <Card 
            imgsrc="https://m.media-amazon.com/images/M/MV5BZWUwNDU1NDQtNjgyZC00YjNkLWJkNDYtM2E4YjBiYTNiZGZiXkEyXkFqcGdeQXVyMTU2Mjg2NjE2._V1_.jpg"

            title="A Netflix Original Series"
            sname="1899"
            link=""
        />
    </>,
    document.getElementById("root")
)

//container file
/*
import React from 'react';

function Card(props){
    console.log(props);
    return (
        
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='mypic' className='card_img'/>
                    <div className='card_info'>
                        <span className='card_category'>{props.title}</span>
                        <h3 className='card_title'>{props.sname}</h3>
                        <a href='{props.link}' target='_blank'>
                            <button>Watch Now</button>
                        </a>
        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;

*/