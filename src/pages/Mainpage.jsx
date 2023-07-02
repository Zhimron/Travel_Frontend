import { useState } from "react";
import Navigation from "./navbar/Navbar";
import Dashboard from "./content/Userdashboard";



const Mainpage = () =>{

    return (
      <>
        <div className="flex">
            <Navigation />
          <div className="mt-14">
            <Dashboard />
          </div>
        </div>
      </>
    );
};
export default Mainpage;