import React, { useContext } from "react";
import { QueryContext } from "../context/query";
import { NavLink } from "react-router-dom";

const linkStyles = {    
  display: "inline-block",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "50px",
  padding: "12px",
  margin: "auto",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <div>
      <NavLink className="navbar" to="/" style={linkStyles}>
        Santuary Potties
      </NavLink>
      <NavLink className="navbar" to="/commode/:id" style={linkStyles}>
        Restroom Rater
      </NavLink>
      <NavLink className="navbar" to="/commode/new" style={linkStyles}>
        Add a Commode
      </NavLink>
    </div>
  )
}

export default NavBar;