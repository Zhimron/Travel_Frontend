import { useEffect } from "react";
import { useTravelcontext } from "../../hooks/UseTravelcontext";
import Traveldetails from "../components/Traveldetails";

function Archive() {
  const { travel, dispatch } = useTravelcontext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/travel/archive");
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
      <div className="flex bg-red-200 mt-[70px]">Archive</div>
      <div>
        {" "}
        {travel &&
          travel.map((item) => <Traveldetails key={item._id} item={item} />)}
      </div>
    </>
  );
}
export default Archive;
