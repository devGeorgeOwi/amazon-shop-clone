// import various Context API Methods from react
import React, { createContext, useContext, useReducer } from "react";

// This method prepares the datalayer
export const StateContext = createContext();

// This wraps the app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// This pulls the information from the data layer
export const useStateValue = () => useContext(StateContext);
