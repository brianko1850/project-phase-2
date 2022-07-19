import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NavBar from "./NavBar";
import Rate from "./Rate";



function App() {
  return (
    <div>
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/commodes/new" element={ <Post/>}/>
              <Route path="/commodes/:id" element={ <Rate/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
