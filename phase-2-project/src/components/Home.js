import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/query";


function Home() {

    const { query, setQuery } = useContext(QueryContext)
    const [ bathrooms, setBathrooms] = useState([])


   
    useEffect(()=>{
        fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=true&unisex=true&query=${query}`)
        .then(res=>res.json())
        .then(data=>setBathrooms(data))
      },[])

    const handleSearch=(e)=>{
        e.preventDefault();

        console.log(e.value)
        console.log(query)

    }
  

    return (
    <>
        <h1>Santuary Potties</h1>
            <form>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search cities"
                    name="s" 
                />
                <button type="submit" onSubmit={ handleSearch }>Search</button>
            </form>
      
        
    </>
    )
}

export default Home
