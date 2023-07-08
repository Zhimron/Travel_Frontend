import { useState } from "react";
import Inputs from "../../../components/Input";
import Buttons from "../../../components/Button";
import useTravelSubmit from "../../../api/UserTravelsubmit";


const Useraddtravel = () => {
  const [place, setPlace] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [experience, setExperience] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const submitTravel = useTravelSubmit();
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
      submitTravel(travel)
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
                required // Add the required attribute
                onChange={(e) => setPlace(e.target.value)}
                error={formErrors.place}
              />
              {formErrors.place && (
                <span className="text-red-600">{formErrors.place}</span>
              )}
            </div>
            <div className="mt-5">
              <Inputs
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
              <Inputs
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
              <Inputs
                id="experience"
                value={experience}
                label="Experience"
                type="text"
                rows="5"
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
