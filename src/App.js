import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Pages/Home";
import EnrollPage from "./components/Pages/EnrollPage";

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/enroll' element={<EnrollPage />} />
    </Routes>
    </Router>
  );
}

export default App;