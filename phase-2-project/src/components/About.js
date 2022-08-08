import React, { useContext } from "react";
import { QueryContext } from "../context/query";

function About() {

    const { query, setQuery } = useContext(QueryContext)
    return (
    <>    
        <h1>About</h1>
        <h2>{query}</h2>
    </>    )
}

export default About
