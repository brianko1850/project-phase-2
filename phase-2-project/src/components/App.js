import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NavBar from "./NavBar";
import About from "./About";



function App() {
  return (
    <div>
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/commodes/new" element={ <Post/>}/>
              <Route path="/commodes/about" element={ <About/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
