import { useState } from "react";
import Boards from "./Userboard";
import Useraddtravel from "./Useraddtravel";
import Switches from "../../../components/Switch";
const NavHome = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const handleSwitch = () => {
    setIsAddVisible(!isAddVisible);
  };
  return (
    <>
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
export default NavHome;
