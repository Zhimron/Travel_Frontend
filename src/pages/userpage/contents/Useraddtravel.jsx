import { useState } from "react";
import Buttons from "../../../components/Button";
import InputsTravel from "../../../components/InputsTravel";
import { useTravelcontext } from "../../hooks/UseTravelcontext";

const Useraddtravel = () => {
  const { dispatch } = useTravelcontext();
  const [place, setPlace] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [experience, setExperience] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!place.trim()) {
      errors.place = "Place is required";
    }

    if (!from.trim()) {
      errors.from = "From is required";
    }

    if (!to.trim()) {
      errors.to = "To is required";
    }

    if (!experience.trim()) {
      errors.experience = "Experience is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const travel = { place, from, to, experience };
      const response = await fetch("http://localhost:4000/api/travel/", {
        method: "POST",
        body: JSON.stringify(travel),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "CREATE_TRAVEL", payload: json });
        setPlace("");
        setFrom("");
        setTo("");
        setExperience("");
      }
      if (!response.ok) {
        console.log(json.error);
      }
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="w-[300px] mt-3">
        <h1 className="text-2xl font-[Montserrat] mb-2">Input Your Travel</h1>
        <div className="rounded-sm p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <InputsTravel
                id="place"
                value={place}
                label="Place"
                type="text"
                required // Add the required attribute
                onChange={(e) => setPlace(e.target.value)}
                error={formErrors.place}
              />
              {formErrors.place && (
                <span className="text-red-600">{formErrors.place}</span>
              )}
            </div>
            <div className="mt-5">
              <InputsTravel
                id="from"
                value={from}
                label="From"
                type="text"
                required
                onChange={(e) => setFrom(e.target.value)}
                error={formErrors.from}
              />
              {formErrors.from && (
                <span className="text-red-600">{formErrors.from}</span>
              )}
            </div>
            <div className="mt-5">
              <InputsTravel
                id="to"
                value={to}
                label="To"
                type="text"
                required
                onChange={(e) => setTo(e.target.value)}
                error={formErrors.to}
              />
              {formErrors.to && (
                <span className="text-red-600">{formErrors.to}</span>
              )}
            </div>
            <div className="mt-5">
              <InputsTravel
                id="experience"
                value={experience}
                label="Experience"
                type="text"
                maxRows="5"
                required // Add the required attribute
                onChange={(e) => setExperience(e.target.value)}
                error={formErrors.experience}
              />
              {formErrors.experience && (
                <span className="text-red-600">{formErrors.experience}</span>
              )}
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
