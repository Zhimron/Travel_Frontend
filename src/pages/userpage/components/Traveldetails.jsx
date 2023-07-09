import { useTravelcontext } from "../../hooks/UseTravelcontext";

const Traveldetails = ({ item }) => {
  
  const {dispatch} =useTravelcontext();

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/api/travel/"+ item._id,{
      method:'DELETE'
    });
    const json = await response.json();

    if (response.ok){
      dispatch({type:'DELETE_TRAVEL', payload: json});
    }
  }
  return (
    <div className="flex flex-col text-left m-3 h-[300px] rounded-md px-8 py-3 overflow-hidden hover:overflow-scroll bg-[#EEEEEE]">
      <h1 className="font-extrabold text-[30px] capitalize">
        <span className="text-[#1F8A70]">{item.place}</span>
      </h1>
      <h1 className="text-[17px] font-[font2] capitalize mt-5">
        <span className="font-semibold">From:</span> {item.from}
      </h1>
      <h1 className="text-[17px] font-[font2] capitalize">
        <span className="font-semibold">To:</span> {item.to}
      </h1>

      <div className="mt-5">
        <h1 className="text-[17px] font-[font2] capitalize ">
          <span className="font-semibold">Experience:</span> {item.experience}
        </h1>
      </div>

      <h1 className="font-[font2]">
        <span className="font-semibold">Created At:</span> {item.createdAt}
      </h1>
      <span className="text-right" onClick={handleClick}>
        DELETE
      </span>
    </div>
  );
};

export default Traveldetails;
