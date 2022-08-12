import React, { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/query";

function Pending() {

    const { query, setQuery } = useContext(QueryContext)
    const [ pending, setPending ] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8000/bathrooms`)
        .then(res=>res.json())
        .then(data=>setPending(data))
    },[])
    console.log(pending)
    return (
    <>    
      { pending }
    </>    )
}

export default Pending
