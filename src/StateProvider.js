import React , { createContext , useContext , useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer , initialState , childern }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
        {childern}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);