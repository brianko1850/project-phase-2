import React, { useContext } from "react";
import { QueryContext } from "../context/query";

function Home() {

    const query = useContext(QueryContext)

    console.log(query)

    return (
    <h1>Santuary Potties</h1>
    )
}

export default Home
