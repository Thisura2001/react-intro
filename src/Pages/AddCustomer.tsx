import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";

export function AddCustomer(){
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone, address);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate("/");
    }

    return(
        <>
            <header><h1>Add Customer</h1></header>
            <br/>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Add Customer</button>

        </>
    )
}