import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'



function NavBar() {
  return (
    <div>
      <NavLink className="navbar" to="/">
        Santuary Potties
      </NavLink>
      <NavLink className="navbar" to="/commodes/pending">
        Pending
      </NavLink>
      <NavLink className="navbar" to="/commodes/new">
        Add a Commode
      </NavLink>
    </div>
  )
}

export default NavBar;