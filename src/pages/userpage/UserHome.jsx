import { useState } from "react";
import Usernav from "./usernav/UserNav";
import Useraddtravel from "./contents/Useraddtravel";
import Boards from "./contents/Userboard";
import Buttons from "../../components/Button";
import Switches from "../../components/Switch";
const Home = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const handleSwitch = () => {
    setIsAddVisible(!isAddVisible);
  };
  return (
    <>
      <div className="fixed top-0 left-0 shadow-md  z-10 bg-white w-screen">
        <Usernav />
      </div>
      <div className="flex justify-end mt-[70px] mr-5 ">
        <Switches
          onClick={handleSwitch}
          label={isAddVisible ? "Close" : "Add"}
          textcolor="#808080"
        />
      </div>
      <div className="flex mt-[20px]">
        <Boards />

        <div className="flex">{isAddVisible ? <Useraddtravel /> : ""}</div>
      </div>
    </>
  );
};

export default Home;
