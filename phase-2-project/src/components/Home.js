import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/query";
import './style.css'


function Home({ bathrooms }) {

    const { query, setQuery } = useContext(QueryContext)
    const disiplayBathroom = bathrooms.map(bathroom=> {
        return (
        <div className="home" >
            <ul className="home">
                <h2 className="home">{bathroom.name}</h2>
                <li className="home">{bathroom.street}</li>
                <li className="home">{bathroom.directions}</li>
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
        <h1 className="home">Santuary Potties</h1>
            <form className="home" onSubmit={ handleSearch }>
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
