import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from "./component/jsFiles/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
