import React, { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/query";


function Pending({ pendings }) {

    const { query, setQuery } = useContext(QueryContext) 
    const displayPending =  pendings.map(data => {
      return (
        <>
          <ul>
            <h2>{data.name}</h2>
            <h3>{data.city}</h3>
            <li>{data.street}</li>
            <li>{data.directions}</li>
            <br/>
          </ul>
        </>
      )
    })

    // useEffect(()=>{
    //     fetch(`http://localhost:8000/bathrooms`)
    //     .then(res=>res.json())
    //     .then(data=>setPending(data))
    // },[])
    console.log(pendings)
    return (
    <>    
      { displayPending }
    </>    )
}

export default Pending
