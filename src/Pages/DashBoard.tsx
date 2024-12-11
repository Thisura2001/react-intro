import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";


export function DashBoard() {
    const [customers, setCustomers] = useContext(CustomerContext)
    return(
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone + ' ' +customer.address}</div>))}
        </>
    )
}