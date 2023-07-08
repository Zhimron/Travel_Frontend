const deleteTravel = async (travelData) => {
  try {
    const response = await fetch("http://localhost:4000/api/travel/"+travelData._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(travelData),
    });

    if (response.ok) {
      console.log("Delete request successful", travelData);
    } else {
      console.log("Delete request failed");
    }
  } catch (error) {
    console.error("ERROR", error);
  }
};

export default deleteTravel;
