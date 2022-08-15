import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/query";


function Home({ bathrooms }) {

    const { query, setQuery } = useContext(QueryContext)
    // const [ bathrooms, setBathrooms] = useState([])


   
    // useEffect(()=>{
    //     fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=true&unisex=true&query=${query}`)
    //     .then(res=>res.json())
    //     .then(data=>setBathrooms(data))
    //   },[ query ])
  
    

    const disiplayBathroom = bathrooms.map(bathroom=> {
        return (
        <div>
            <ul class="list">
                <h2>{bathroom.name}</h2>
                <li>{bathroom.street}</li>
                <li>{bathroom.directions}</li>
            </ul>
            <br/>
        </div>
            )
    })

    const handleSearch=(e)=>{
        e.preventDefault();
        setQuery(e.target.querySelector("#header-search").value)
        

    }
  

    return (
    <>
        <h1>Santuary Potties</h1>
            <form onSubmit={ handleSearch }>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search cities"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
           {disiplayBathroom}
      
        
    </>
    )
}

export default Home
