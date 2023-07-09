import { createContext, useReducer } from "react";

export const TravelContext =createContext();

export const travelreducer = (state,action) => {
     switch (action.type) {
       case "SET_TRAVEL":
         return {
           travel: action.payload,
         };
       case "CREATE_TRAVEL":
         return {
           travel: [action.payload, ...state.travel],
         };
       case "DELETE_TRAVEL":
         return {
           travel: state.travel.filter((w) => w._id !== action.payload._id),
         };
       default:
         return state;
     }
}

export const TravelContextProvider =({children}) => {
    const [state, dispatch] = useReducer(travelreducer,{
        travel: null
    });

    // dispatch({type: 'SET_TRAVEL',payload:[{},{}]})

    return(
        <TravelContext.Provider value={{...state, dispatch}}>
            {children}
        </TravelContext.Provider>
    )

}