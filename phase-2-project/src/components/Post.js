import React, { useContext } from "react";
import { QueryContext } from "../context/query";

function Post() {

    const { query, setQuery } = useContext(QueryContext)
    return (
        <form /*onSubmit={handleSubmit}*/>
        <h2>Add a Commode</h2>
        <label htmlFor="Name">Name:</label>
        <input
            type="text"
            required
            /*id="name"*/
            /*value={name}*/
            /*onChange={(e) => setDescription(e.target.value)}*/
        />
         <label htmlFor="Address">Address:</label>
        <textarea 
            required
        ></textarea>
        <label htmlFor="Directions">Directions</label>
        <textarea></textarea>
        <button type="submit">Add</button>
    </form>
    )
}

export default Post
