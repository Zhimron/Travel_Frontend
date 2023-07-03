import { useState } from "react";
import Inputs from "../../components/Input";
import Buttons from "../../components/Button";
import Checkboxs from "../../components/Checkbox";
import { motion } from "framer-motion";
const Register = () => {
  const [isShowPassword, SetIsShowPassword] = useState(false);
  const handleChange = (event) => {
    SetIsShowPassword(event.target.checked);
  };
  return (
    <>
      <div className="mt-[2em]">
        <h1 className="text-[5em] font-bold font-[font2] text-[#41644A]">
          Quest
        </h1>
      </div>
      <div className="mt-[1em]  text-[#609966]">
        <h1 className="text-lg ">
          Create an account to{} <span className="font-[font2]">Quest</span>
        </h1>
      </div>
      <div className="mt-7 flex flex-col items-center">
        <div className="w-[300px] h-[50px]">
          <Inputs id="username" label="Username" type="text" />
        </div>
        <div className="mt-5 w-[300px] h-[50px]">
          <Inputs
            id="Password"
            label="Password"
            type={isShowPassword ? "text" : "password"}
          />
        </div>
        <div className="w-[300px] mt-5 flex justify-start">
          <Checkboxs
            label={"Show Password"}
            checked={isShowPassword}
            onChange={handleChange}
          />
        </div>
        <motion.div
          className="mt-5 h-[50px] w-[250px] rounded-full overflow-hidden"
          whileTap={{ scale: 0.5 }}
        >
          <Buttons label="Register" bgcolor="#41644A" />
        </motion.div>
      </div>
    </>
  );
};
export default Register;
