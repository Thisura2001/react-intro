import {createContext, ReactNode, useState} from "react";
import {Customer} from "../Model/Customer.ts";

export const CustomerContext = createContext()
export function CustomerProvider({ children }) {
    const [cutomers,setCustomers] = useState<Customer[]>([])

    return (
        <>
            <CustomerContext.Provider value={[cutomers,setCustomers]}>
                {children}
            </CustomerContext.Provider>
        </>
    )
}