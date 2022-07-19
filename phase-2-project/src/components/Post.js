import React, { useContext } from "react";
import { QueryContext } from "../context/query";

function Post() {

    const [ query, setQuery ] = useContext(QueryContext)
    return (
    <h1>Add a Commode</h1>
    )
}

export default Post
