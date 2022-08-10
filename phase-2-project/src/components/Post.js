import React, { useContext } from "react";
import { useState } from "react";
import { QueryContext } from "../context/query";

function Post() {

    const { query, setQuery } = useContext(QueryContext)
    const [ name, setName ] = useState("")
    const [ address, setAddress ] =useState("")
    const [ directions, setDirections ] = useState("")
    const bathroom = 
        {
          "id": 0,
          "name": name,
          "street": address,
          "city": query,
          "state": "",
          "accessible": true,
          "unisex": true,
          "directions": directions,
          "comment": "",
          "latitude": 47.5826887,
          "longitude": -122.3846954,
          "created_at": Date.now(),
          "updated_at": Date.now(),
          "downvote": 0,
          "upvote": 0,
          "country": "",
          "changing_table": false,
          "edit_id": 0,
          "approved": false
        }

    return (
        <form onSubmit={console.log(bathroom)}>
        <h2>Add a Commode</h2>
        <label htmlFor="Name">Name:</label>
        <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br/>
         <label htmlFor="Address">Address:</label>
        <textarea 
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br/>
        <label htmlFor="Directions">Directions</label>
        <textarea
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
        <p>
            {name}
            <br/>
            {address}
            <br/>
            {directions}
        </p>
    </form>
    )
}

export default Post
