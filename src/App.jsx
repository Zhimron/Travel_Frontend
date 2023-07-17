import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginreg from "./pages/Mainlogin";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import NotFound from "./pages/content/Page404";
import Home from "./pages/userpage/UserHome";
import Usernav from "./pages/userpage/usernav/UserNav";
import Archive from "./pages/userpage/contents/Archive";
import NavHome from "./pages/userpage/contents/Navhome";
import Delete from "./pages/userpage/contents/Deletes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/LoginRegister" element={<Loginreg />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/Home" element={<Mainpage />} />
          <Route path="/About" element={<Mainpage />} />
          <Route path="/Contact" element={<Mainpage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/deleted" element={<Delete />} />
          <Route path="/User" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
