import React, { useEffect, useState } from "react";
import Traveldetails from "../components/Traveldetails";
import { useTravelcontext } from "../../hooks/UseTravelcontext";

const Boards = () => {
  const { travel, dispatch } = useTravelcontext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/travel");
      const jsonData = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TRAVEL", payload: jsonData });
      } else {
        console.log("Request failed with status:", response.status);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="flex px-8 py-3 ">
          <h1 className="font-[font2] text-[40px] flex">
            Your Travel Experience
          </h1>
        </div>
        <div className="grid gap-5 grid-row overflow-hidden">
          {travel &&
            travel.map((item) => <Traveldetails key={item._id} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default Boards;
