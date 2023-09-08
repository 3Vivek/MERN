import React, { useEffect, useState } from "react";
import axios from "axios"

//API fetch krta h 



const Cont1=()=>{
    const [num,setnum]=useState();
    const [name,setname]=useState();
    const [moves,setmove]=useState();
    const [spMove,setspMove]=useState();
    useEffect(()=>{
        // alert("Hi");
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res);
            setname(res.data.name);
            setmove(res.data.moves.length);
            // console.log(res.data.moves[0].move.name)
            setspMove(res.data.moves[0].move.name)

        }

        getData();
    })
    return (
        <>
        <h1>You choose <span style={{color:'red'}}>{num}</span> value</h1>
        <p>My name  is <span style={{color:'red'}}>{name}</span> </p>
        <p>I have <span style={{color:'red'}}>{moves}</span> move </p>
        <p>My  Special Move  <span style={{color:'red'}}>{spMove}</span> </p>


            <select value={num} onChange={(event)=>{
                setnum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>

            </select>
        </>
    )
}

export default Cont1;