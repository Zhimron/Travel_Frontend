import { useState } from "react";
import Lottie from "lottie-react";
import traveller from "../assets/travellerAnimation.json";
import loading from "../assets/loading.json";
import Login from "./userLog/Login";
import Register from "./userLog/Register";
import { useNavigate } from "react-router";

const Loginreg = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoginVisible(!isLoginVisible);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-[9rem]">
        <div className="bg-[#9DC08B] hidden md:block md:w-[25rem] md:h-[35rem] p-14  justify-center flex-col items-center ">
          <h1 className="font-extrabold  text-[3em] font-[font2] text-transparent bg-clip-text bg-gradient-to-r from-[#609966] to-[#1F8A70]">
            Travel More
          </h1>
          <h1 className="font-bold md:text-lg mt-1 ">
            Hi! Let's track the destinations you've been to.
          </h1>

          <div className="w-[20rem] md:mt-4">
            <Lottie animationData={traveller} />
          </div>
        </div>
        <div className="bg-white sm:w-[30rem] sm:h-[35rem] w-[30rem] h-[35rem] flex flex-col border ">
          {isLoading ? (
            <div className="flex justify-center items-center md:h-full">
              <Lottie animationData={loading} />
            </div>
          ) : (
            <>
              {isLoginVisible ? <Login /> : <Register />}
              <div className="mt-3">
                <p
                  onClick={handleSwitch}
                  className="font-[Montserrat] text-[#41644A]"
                >
                  {isLoginVisible ? "Register?" : "Login?"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Loginreg;
