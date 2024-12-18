import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers,setCustomers]=useContext(CustomerContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    function UpdateCustomers() {
        const newCustomer = customers.map(
            (customer)=>customer.email=== email?
                {...customer,name:name,phone:phone,address:address,email:email}:customer);
        setCustomers(newCustomer);
        navigate("/");

    }

    return(
        <>
            <h1>Delete Customer</h1>
            <br/>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <br/>
            <button onClick={UpdateCustomers}>Update Customer</button>
        </>
    )
}