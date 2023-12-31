import { useState } from "react";
import { motion } from "framer-motion";
import Buttons from "../../components/Button";
import { Navlinks } from "./components/Navlinks";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed flex justify-center w-full h-[80px] p-4 top-0 left-0  text-[#41644A] ">
        <div className="flex justify-between w-[61.5rem] ">
          <div>
            <h1 className=" font-[Font2] text-[35px] font-bold">QUEST</h1>
          </div>
          <div className="flex gap-5 md:gap-7 py-3 ">
            {Navlinks.map((link) => (
              <motion.div
                key={link.id}
                className="h-[30px] w-[100px] rounded-full overflow-hidden hover:bg-slate-950 hover:bg-opacity-10"
                whileHover={{ scale: 1.2 }}
                onClick={() => navigate(link.links)}
              >
                <Buttons
                  className=""
                  label={link.title}
                  bgcolor="transparent"
                  textcolor="#41644A"
                  fontsize="18px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
