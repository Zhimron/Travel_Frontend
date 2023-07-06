import { useState } from "react";
import Mountain from "../../assets/mountain.jpg";
import { motion } from "framer-motion";
import Buttons from "../../components/Button";
import { useNavigate } from "react-router";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div></div>
      <div className="">
        <img
          src={Mountain}
          alt="Mountain"
          className="fixed top-0 left-0 h-screen w-full object-cover"
        />
      </div>

      <div className="z-0 mt-10 w-screen flex flex-col items-center">
        <motion.h1
          className=" font-semibold font-[font2] text-[15rem] text-transparent bg-clip-text bg-gradient-to-r from-[#609966] to-[#1F8A70]"
          initial={{ opacity: 0 }}
          whileInView={{ y: [200, 0], opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          Welcome
        </motion.h1>
        <motion.p
          className="text-white text-[2rem]"
          initial={{ opacity: 0 }}
          whileInView={{ y: [200, 0], opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          To{" "}
          <span className="text-transparent font-[font2] bg-clip-text bg-gradient-to-r from-[#609966] to-[#1F8A70]">
            Quest,
          </span>{" "}
          a notes of your every Destination
        </motion.p>
        <motion.div
          className="h-[50px] w-[150px] rounded-full overflow-hidden mt-5 "
          whileInView={{ y: [-10, 10] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() => navigate("/LoginRegister")}
        >
          <Buttons label="Lets Start" bgcolor="#41644A" />
        </motion.div>
      </div>
    </>
  );
};
export default Dashboard;
