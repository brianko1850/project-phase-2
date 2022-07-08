import React from "react";
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
      <NavLink className="navbar" exact to="/" style={linkStyles}>
        Santuary Potties
      </NavLink>
      <NavLink className="navbar" exact to="/restroomrater" style={linkStyles}>
        Restroom Rater
      </NavLink>
      <NavLink className="navbar" exact to="/addacommode" style={linkStyles}>
        Add a Commode
      </NavLink>
    </div>
  )
}

export default NavBar;