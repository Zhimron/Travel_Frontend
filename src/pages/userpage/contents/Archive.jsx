import { useEffect } from "react";
import { useTravelcontext } from "../../hooks/UseTravelcontext";
import Traveldetails from "../components/Traveldetails";

function Archive() {
  const { travel, dispatch } = useTravelcontext();
  const archive = true;

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
      <div className="flex  mt-[70px] p-3">
        <h1 className="font-[font2] text-[40px] flex">
           Archive Travel Experience
        </h1>
      </div>
      <div>
        {" "}
        {travel &&
          travel.map((item) => <Traveldetails key={item._id} item={item} archive={archive}/>)}
      </div>
    </>
  );
}
export default Archive;
