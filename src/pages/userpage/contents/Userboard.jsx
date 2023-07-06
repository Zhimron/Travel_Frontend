import { useEffect, useState } from "react";

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
      <div className=" bg-red-500 ">
        <div className="bg-green-200">
          {data && data.map((item) => <p key={item._id}>{item.place}</p>)}
        </div>
      </div>
    </>
  );
};
export default Boards;
