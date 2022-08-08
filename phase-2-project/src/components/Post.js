import React, { useContext } from "react";
import { useState } from "react";
import { QueryContext } from "../context/query";

function Post() {

    const { query, setQuery } = useContext(QueryContext)
    const [ name, setName ] = useState("")
    const [ address, setAddress ] =useState("")
    const [ directions, setDirections ] = useState("")

    return (
        <form /*onSubmit={handleSubmit}*/>
        <h2>Add a Commode</h2>
        <label htmlFor="Name">Name:</label>
        <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
         <label htmlFor="Address">Address:</label>
        <textarea 
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <label htmlFor="Directions">Directions</label>
        <textarea
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
        <p>
            {name}
            {address}
            {directions}
        </p>
    </form>
    )
}

export default Post
