import React from "react";
import Usernav from "./usernav/UserNav";
import Useraddtravel from "./contents/Useraddtravel";
import Boards from "./contents/Userboard";
const Home = () => {
  return (
    <>
      <div className="mt-20">
        <Usernav />
      </div>
      <div className="flex">
       <Useraddtravel/>
       
        <Boards/>
       
      </div>
    </>
  );
};

export default Home;
