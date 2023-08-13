import React, { useState } from "react";
import Menu from "./ImagesGallery";

const Gallery = () => {
    const [items, setItems] = useState(Menu);
    const filterItem=(categItem)=>{
        const updateItem=Menu.filter((currElem)=>{
            return currElem.categories===categItem;
        })
        setItems(updateItem);
    }
    return (
        <>
            <h1 className="heading">Order Your favourite Food</h1>
            <hr />
            <div className="button_menu">
                <button onClick={()=>filterItem('breakfast')}> Breakfast</button>
                <button onClick={()=>filterItem('lunch')}>Lunch</button>
                <button onClick={()=>filterItem('evening')}>Evening</button>
                <button onClick={()=>filterItem('dinner')}>Dinner</button>
                <button onClick={()=>setItems(Menu)}>All</button>
            </div>
            {
                items.map((elem) => {
                    const { id, name, image, price, description } = elem;
                    return (
                        <div className="Item">
                            <div className="food">
                                <img src={image} alt="MyImg" width="150px" height="200px" />
                            </div>
                            <div className="title">
                                <h1>{name}</h1>
                                <p>{description}</p>


                                <div className="price">
                                    <h2>{price} </h2>
                                    <a href="#"> Order now</a>
                                </div>

                                <p>Price may vary on selected Item</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Gallery;