import { useState } from "react";
import Boards from "./Userboard";
import Useraddtravel from "./Useraddtravel";
import { motion } from "framer-motion";
import Switches from "../../../components/Switch";
import Buttons from "../../../components/Button";
const NavHome = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const handleSwitch = () => {
    setIsAddVisible(!isAddVisible);
  };
  return (
    <>
      <div>
        <div className="flex mt-[30px] mr-[70px] fixed justify-end right-0">
          <Buttons
            onClick={handleSwitch}
            label={isAddVisible ? "Close" : "Add"}
            bgcolor="#41644A"
          />
        </div>
        <div className="flex mt-[70px]">
          <Boards />

          <motion.div
            className="flex  fixed ml-[450px] bg-slate-100"
            initial={{ opacity: 0 }}
            whileInView={{ y: [200, 0], opacity: 1 }}
            transition={{
              duration: .9,
            }}
            key={isAddVisible ? "show" : "hide"}
          >
            {isAddVisible ? <Useraddtravel /> : ""}
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default NavHome;
