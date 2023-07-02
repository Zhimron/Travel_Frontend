import { useState } from "react";



const Navigation = () =>{

    return (
      <>
        <div className="bg-slate-200 fixed w-full h-[80px] p-4 shadow-xl top-0 left-0">
          <div className="flex justify-between">
            <div>
              <h1 className=" text-cyan-500 font-[Font2] text-[30px] font-bold">
                QUEST
              </h1>
            </div>
            <div className="flex gap-5 p-[10px]">
              <h1 className=" text-cyan-500 font-[Montserrat] text-[20px] font-bold">
                Home
              </h1>
              <h1 className=" text-cyan-500 font-[Montserrat] text-[20px] font-bold">
                Travels
              </h1>
              <h1 className=" text-cyan-500 font-[Montserrat] text-[20px] font-bold">
                Account
              </h1>
            </div>
          </div>
        </div>
      </>
    );
};
export default Navigation;