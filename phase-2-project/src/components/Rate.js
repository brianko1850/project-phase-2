import React, { useContext } from "react";
import { QueryContext } from "../context/query";

function Rate() {

    const [ query, setQuery ] = useContext(QueryContext)
    return (
    <h1>Restroom Rater</h1>
    )
}

export default Rate
