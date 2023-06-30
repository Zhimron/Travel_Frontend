import { useRef } from "react";
import Lottie from "lottie-react";
import traveller from "../assets/travellerAnimation.json";
import Inputs from "../components/Input";
import Buttons from "../components/Button";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-blue-200 w-[30rem] h-[35rem] flex justify-center flex-col items-center">
          <h1 className="font-extrabold text-[3em]">Travel More</h1>
          <h1 className="font-bold text-lg mt-1">
            Hi! Let's track the destinations you've been to.
          </h1>
          <div className="w-[20rem] mt-4">
            <Lottie animationData={traveller} />
          </div>
        </div>
        <div className="bg-white w-[30rem] h-[35rem] flex flex-col items-center border ">
          <div className="mt-[5em] flex justify-center items-center">
            <h1 className="text-[2em] font-bold">Quest</h1>
          </div>
          <div className="mt-[1em] flex justify-center items-center">
            <h1 className="text-lg ">Welcome to Quest</h1>
          </div>
          <div className="mt-7 flex flex-col items-center">
            <div className="w-[300px] h-[50px]">
              <Inputs id="username" label="Username" type="text" />
            </div>
            <div className="mt-5 w-[300px] h-[50px]">
              <Inputs id="Password" label="Password" type="password" />
            </div>
            <div className="mt-11 h-[50px] w-[250px] rounded-full overflow-hidden">
              <Buttons label="Log-In" bgcolor="#171717" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
