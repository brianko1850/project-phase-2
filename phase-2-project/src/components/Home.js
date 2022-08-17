import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/query";


function Home({ bathrooms }) {

    const { query, setQuery } = useContext(QueryContext)
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
