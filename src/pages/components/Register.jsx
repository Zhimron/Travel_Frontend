import React from "react";
import Inputs from "../../components/Input";
import Buttons from "../../components/Button";
import Checkboxs from "../../components/Checkbox";

const Register = () => {
  return (
    <>
      <div className="mt-[5em]">
        <h1 className="text-[3em] font-bold font-[font2]">Quest</h1>
      </div>
      <div className="mt-[1em]">
        <h1 className="text-lg ">Create an account to Quest</h1>
      </div>
      <div className="mt-7 flex flex-col items-center">
        <div className="w-[300px] h-[50px]">
          <Inputs id="username" label="Username" type="text" />
        </div>
        <div className="mt-5 w-[300px] h-[50px]">
          <Inputs id="Password" label="Password" type="password" />
        </div>
        <div className="w-[300px] mt-5 flex justify-start">
          <Checkboxs label={"Show Password"} />
        </div>
        <div className="mt-5 h-[50px] w-[250px] rounded-full overflow-hidden">
          <Buttons label="Register" bgcolor="#171717" />
        </div>
       
      </div>
    </>
  );
};
export default Register;
