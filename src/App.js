import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Counter from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="App" style={{overflowX:'hidden'}}>
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/counter" element={<Counter />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
