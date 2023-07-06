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
        {data &&
          data.map((item) => (
            <div
              key={item._id}
              className="bg-green-200 w-56 p-5 mt-1 flex flex-col items-start"
            >
              <p>PLACE:{item.place}</p>
              <p>From: {item.from}</p>
              <p>To: {item.to}</p>
              <p>Experience: {item.experience}</p>
            </div>
          ))}
      </div>
    </>
  );
};
export default Boards;
