import React from "react";
import Usernav from "./usernav/UserNav";
import Useraddtravel from "./contents/Useraddtravel";
const Home = () => {
  return (
    <>
      <div className="mt-20">
        <Usernav />
      </div>
      <div>
       <Useraddtravel/>
      </div>
    </>
  );
};

export default Home;
