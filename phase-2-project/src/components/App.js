import React, { useContext, useState, useEffect }  from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NavBar from "./NavBar";
import About from "./About";
import { QueryContext } from "../context/query";



function App() {

  const [ bathrooms, setBathrooms] = useState([])
  
  const { query, setQuery } = useContext(QueryContext)
  const addBathrooms = (newBathroom)=>{
    const updatedBathrooms = [...bathrooms, newBathroom]
    setBathrooms(updatedBathrooms)
  }


   
  useEffect(()=>{
      fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=true&unisex=true&query=${query}`)
      .then(res=>res.json())
      .then(data=>setBathrooms(data))
    },[ query ])

  return (
    <div>
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={ <Home bathrooms={bathrooms}/>}/>
              <Route path="/commodes/new" element={ <Post bathrooms={ bathrooms } onAdd={addBathrooms}/>}/>
              <Route path="/commodes/about" element={ <About/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
