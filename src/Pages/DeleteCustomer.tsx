import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";
import {useNavigate} from "react-router";


export function DeleteCustomer(){
    const navigate = useNavigate();
    const [customers,setCustomers]=useContext(CustomerContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    function DeleteCustomers() {
        setCustomers((customers)=>customers.slice(0,-1))
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
            <button onClick={DeleteCustomers}>Delete Customer</button>
        </>
    )
}