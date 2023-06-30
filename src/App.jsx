import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Loginreg  from "./pages/Mainlogin";
import "./App.css";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginreg />} />
      </Routes>
    </Router>
  );
}

export default App;
