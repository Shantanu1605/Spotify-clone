import React, {createContext,useContext,useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({
    initialState,reducer,children
})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
)

//anytime if we want to get the value from data layer or dispatch a value to the data layer we want some kind of way to access data layer:
// we will use a special type of hook--> useContext()
export const useDataLayerValue = () => useContext(DataLayerContext);