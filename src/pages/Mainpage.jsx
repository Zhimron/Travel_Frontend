import { useState } from "react";
import Navigation from "./navbar/Navbar";
import Dashboard from "./content/Userdashboard";

const Mainpage = () => {
  return (
    <>
      <div className="flex ">
        <Dashboard />
        <div className="relative">
          <Navigation />
        </div>
      </div>
    </>
  );
};
export default Mainpage;
