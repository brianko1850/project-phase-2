import React, { useEffect, useContext } from "react";
import { QueryContext } from "../context/query";

function Pending() {

    const { query, setQuery } = useContext(QueryContext)
    const [ pending, setPending] = []

       useEffect(()=>{
        fetch(`http://localhost:8000/bathrooms`)
        .then(res=>res.json())
        .then(data=>console.log(data))
      },[])
    return (
    <>    
      {pending}
    </>    )
}

export default Pending
