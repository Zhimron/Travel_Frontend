import React, { useState } from "react";
import Pagenotfound from "../../assets/404page.json"
import Lottie from "lottie-react";
import shrek from "../../assets/twerk.gif";
import  Buttons  from "../../components/Button"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const[ishovering,setIsHovering]=useState(false);
  const handleMouseEnter =()=>{
    setIsHovering(true)
  }
  const handleMouseExit = () => {
    setIsHovering(false);
  };
  return (
    <div className="flex flex-col items-center">
      <Lottie animationData={Pagenotfound} className="w-full h-[400px]" />
      {ishovering ? (
        <img src={shrek} alt="" className="absolute w-[300px] h-[300px] mt-4" />
      ) : (
        ""
      )}
      <h1 className="text-[40px]">
        Page{" "}
        <span
          className="text-[#1F8A70] font-semibold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
        >
          Not
        </span>{" "}
        Found
      </h1>
      <motion.div
        className="mt-5 rounded-full overflow-hidden w-[130px] h-[40px]"
        whileInView={{ y: [-10, 10] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() => navigate("/Home")}
      >
        <Buttons label="Home" bgcolor="#41644A" />
      </motion.div>
    </div>
  );
};

export default NotFound;
