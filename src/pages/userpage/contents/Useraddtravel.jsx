import  { useState } from "react";
import Inputs from "../../../components/Input";
import Buttons from "../../../components/Button";

const Useraddtravel = () => {
  const [place, setPlace] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [experience, setExperience] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const travel = { place, from, to, experience };
    try {
      const response = await fetch("http://localhost:4000/api/travel/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(travel),
      });

      if (response.ok) {
        console.log("POST request successful",travel);
        
      } else {
        console.log("POST request failed");
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  return (
    <div className="flex flex-col ml-[110px]">
      <div className="w-[300px]">
        <h1 className="text-2xl font-[Montserrat] mb-5">Input Your Travel</h1>
        <div className="bg-red-50 rounded-sm p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <Inputs
                id="place"
                value={place}
                label="Place"
                type="text"
                required
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Inputs
                id="from"
                value={from}
                label="From"
                type="text"
                required
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Inputs
                id="to"
                value={to}
                label="To"
                type="text"
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Inputs
                id="experience"
                value={experience}
                label="Experience"
                type="text"
                rows="5"
                required
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <Buttons label="Log" bgcolor="#41644A" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Useraddtravel;
