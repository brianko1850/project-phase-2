import React, { useContext, useState, useEffect }  from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NavBar from "./NavBar";
import Pending from "./Pending";
import { QueryContext } from "../context/query";



function App() {
  
  
  const [ bathrooms, setBathrooms] = useState([])
  const [ pendings, setPendings ] = useState([])
  const { query, setQuery } = useContext(QueryContext)

  useEffect(()=>{
      fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=true&unisex=true&query=${query}`)
      .then(res=>res.json())
      .then(data=>setBathrooms(data))
    },[ query ])

    useEffect(()=>{
      fetch(`http://localhost:8000/bathrooms`)
      .then(res=>res.json())
      .then(data=>setPendings(data))
    },[])
  

  return (
    <div className="nav">
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={ <Home bathrooms={bathrooms}/>}/>
              <Route path="/commodes/new" element={ <Post onPendings={setPendings}/>}/>
              <Route path="/commodes/pending" element={ <Pending pendings={ pendings }/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
