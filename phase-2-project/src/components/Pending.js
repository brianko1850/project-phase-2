import React, { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/query";

function Pending() {

    const { query, setQuery } = useContext(QueryContext)
    const [ pending, setPending ] = useState([])
    const displayPending =  pending.map(data => {
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

    useEffect(()=>{
        fetch(`http://localhost:8000/bathrooms`)
        .then(res=>res.json())
        .then(data=>setPending(data))
    },[])
    console.log(pending)
    return (
    <>    
      { displayPending }
    </>    )
}

export default Pending
