

 const useTravelSubmit = () => {
  const submitTravel = async (travelData) => {
    try {
      const response = await fetch("http://localhost:4000/api/travel/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(travelData),
      });

      if (response.ok) {
        console.log("POST request successful", travelData);
      } else {
        console.log("POST request failed");
      }
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  return submitTravel;
};

export default useTravelSubmit;
