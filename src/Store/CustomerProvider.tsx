import {createContext, useReducer} from "react";
import {customersReducer, initialState} from "../Reducers/CustomerReducer.ts";

export const CustomerContext = createContext()
export function CustomerProvider({ children }) {
    const [customers,dispatch] = useReducer(customersReducer,initialState);//customersReducer: A reducer function that defines how the state changes based on dispatched actions.

    return (
        <>
            <CustomerContext.Provider value={[customers,dispatch]}>
                {children}
            </CustomerContext.Provider>
        </>
    );
}