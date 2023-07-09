import { TravelContext } from "../context/TravelContext";
import { useContext } from "react";

export const useTravelcontext = ()=>{
    
    const context =useContext(TravelContext)

    if(!context){
        throw Error('Somethings not right')
    }

    return context

}