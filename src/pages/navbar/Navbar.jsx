import { useState } from "react";
import { motion } from "framer-motion";
import Buttons from "../../components/Button";
const Navigation = () => {
  return (
    <>
      <div className="fixed flex justify-center w-full h-[80px] p-4 top-0 left-0  text-[#41644A] ">
        <div className="flex justify-between w-[61.5rem]">
          <div>
            <h1 className=" font-[Font2] text-[35px] font-bold">QUEST</h1>
          </div>
          <div className="flex gap-7 p-1 mt-4">
            <motion.div
              className="h-[30px] w-[100px] rounded-full overflow-hidden hover:bg-slate-950 hover:bg-opacity-10"
              whileHover={{ scale: 1.2 }}
            >
              <Buttons
                className=""
                label="Home"
                bgcolor="transparent"
                textcolor="#41644A"
                fontsize="18px"
              />
            </motion.div>
            <motion.div
              className="h-[30px] w-[100px] rounded-full overflow-hidden hover:bg-slate-950 hover:bg-opacity-10"
              whileHover={{ scale: 1.2 }}
            >
              <Buttons
                label="Travel"
                bgcolor="transparent"
                textcolor="#41644A"
                fontsize="18px"
              />
            </motion.div>
            <motion.div
              className="h-[30px] w-[100px] rounded-full overflow-hidden hover:bg-slate-950 hover:bg-opacity-10"
              whileHover={{ scale: 1.2 }}
            >
              <Buttons
                label="Account"
                bgcolor="transparent"
                textcolor="#41644A"
                fontsize="18px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
