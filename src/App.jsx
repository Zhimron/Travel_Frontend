import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Loginreg  from "./pages/Mainlogin";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import NotFound from "./pages/content/Page404";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/LoginRegister" element={<Loginreg />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/Home" element={<Mainpage />} />
        <Route path="/About" element={<Mainpage />} />
        <Route path="/Contact" element={<Mainpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
