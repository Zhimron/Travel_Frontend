import { useEffect, useState } from "react";
import Buttons from "../../../components/Button";

const Boards = () => {
  const [data, setData] = useState(null);

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

    fetchData();
  }, []);

  return (
    <>
      <div className="flex ">
        <div className="ml-[115px]">
          <h1 className="font-[font2] text-[40px] flex">Your Travel Experience</h1>
          <div className="flex justify-start ">
            {data &&
              data.map((item) => (
                <div key={item._id} className="flex m-3 bg-slate-400">
                  <div className="p-5 inline-block text-left">
                    <p className="font-[font2] font-bold text-lg">
                      {item.place}
                    </p>
                    <p className="mt-2">
                      <span className="font-[font2] font-bold text-lg">From:</span> {item.from} <span className="font-[font2] font-bold text-lg">To:</span> {item.to}
                    </p>
                    <span className="font-[font2] font-bold text-lg mt-4">Experience:</span>
                    <p className="mt-2">{item.experience}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Boards;
