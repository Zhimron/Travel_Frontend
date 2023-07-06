import React from "react";
import Usernav from "./usernav/UserNav";
import Boards from "./contents/Userboard";
const Home = () => {
  return (
    <>
      <div className="mt-20">
        <Usernav />
      </div>
      <div>
        <Boards />
      </div>
    </>
  );
};

export default Home;
