import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NavBar from "./NavBar";
import Rate from "./Rate";
import { QueryProvider } from "../context/query"


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <QueryProvider>
            <Route path="/" element={ <Home/>}/>
            <Route path="/addacommode" element={ <Post/>}/>
            <Route path="/restroomrater" element={ <Rate/>}/>
          </QueryProvider>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
