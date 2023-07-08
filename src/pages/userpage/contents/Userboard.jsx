import React, { useEffect, useState } from "react";
import Buttons from "../../../components/Button";
import deleteTravel from "../../../api/DeleteTravel";
import Traveldetails from "../components/Traveldetails"

const Boards = () => {
  const [data, setData] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (e) => {
    try {
      await deleteTravel(e)
      setDeleted(true);
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/travel");
        const jsonData = await response.json();

        if (response.ok) {
          setData(jsonData);
        } else {
          console.log("Request failed with status:", response.status);
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };
    const fetchInterval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    setIntervalId(fetchInterval);

    return () => {
      clearInterval(fetchInterval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <>
      <div className="flex ">
        <div className="ml-[50px]">
          <h1 className="font-[font2] text-[40px] flex">
            Your Travel Experience
          </h1>
          <div className="grid gap-5 grid-row grid-rows-3 ">
            {data &&
              data.map((item) => <Traveldetails key={item._id} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Boards;
