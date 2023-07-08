const Traveldetails = ({item}) =>{
    return (
      <div className="flex flex-col items-start m-3 bg-slate-400 h-52">
        <h1>{item.place}</h1>
        <h1>{item.from}</h1>
        <h1>{item.to}</h1>
        <h1>{item.experience}</h1>
        <h1>{item.createdAt}</h1>
      </div>
    );
}
export default Traveldetails;