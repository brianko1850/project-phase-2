import React from "react";

function Pending({ pendings }) {

    const displayPending =  pendings.map(data => {
      return (
        <>
          <ul>
            <h2>{data.name}</h2>
            <h3>{data.city}</h3>
            <li>{data.street}</li>
            <li>{data.directions}</li>
            <br/>
          </ul>
        </>
      )
    })

    return (
      <>    
        { displayPending }
      </>    
    )
}

export default Pending
