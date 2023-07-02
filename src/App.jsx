import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Loginreg  from "./pages/Mainlogin";
import "./App.css";
import Mainpage from "./pages/Mainpage";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginreg />} />
        <Route path="/travels" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
