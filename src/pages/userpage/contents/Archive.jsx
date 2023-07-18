import { useEffect } from "react";
import { useTravelcontext } from "../../hooks/UseTravelcontext";
import Traveldetails from "../components/Traveldetails";
import Archivedetails from "../components/Archivedetails";

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
      <div className="">
        <div className="flex  mt-[70px]  px-8 py-3">
          <h1 className="font-[font2] text-[40px] flex">
            Your Travels Archive
          </h1>
        </div>
        <div className="grid gap-5 grid-row overflow-hidden">
          {travel &&
            travel.map((item) => <Archivedetails key={item._id} item={item} />)}
        </div>
      </div>
    </>
  );
}
export default Archive;
