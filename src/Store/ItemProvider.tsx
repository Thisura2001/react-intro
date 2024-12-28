import {createContext, useReducer} from "react";
import {initialState, itemReducer} from "../Reducers/ItemReducers.ts";

export const itemContext = createContext();
export function ItemProvider({ children }) {
    const [items,dispatch] = useReducer(itemReducer, initialState);

    return(
        <>
            <itemContext.Provider value={[items,dispatch]}>
                {children}
            </itemContext.Provider>
        </>
    )
}