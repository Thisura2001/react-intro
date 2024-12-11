import './App.css'
import {Customer} from "./Model/Customer.ts";
import {useState} from "react";

function App() {
    const [customers, setCustomer] = useState<Customer[]>([]);
    const [name, setname]=useState('')
    const [email, setemail]=useState('')
    const [phone, setphone]=useState('')
    const [address, setaddress]=useState('')

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone, address);

        setCustomer((customers)=>[...customers, newCustomer]);
    }

    function deleteCustomer() {
        setCustomer((customers)=>customers.slice(0,-1))
    }

    function deleteCustomerByName() {
        setCustomer((customers)=> customers.filter((customer) => customer.email!==email));
    }

    function updateCustomer() {
        const newCustomer = customers.map(
            (customer)=>customer.email=== email?
                {...customer,name:name,phone:phone,address:address,email:email}:customer);
        setCustomer(newCustomer);
    }

    return (
        <>
            <input type="text" placeholder='name' onChange={(e) => setname(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)}/>
            <input type="number" placeholder='phone' onChange={(e) => setphone(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e) => setaddress(e.target.value)}/>
            <br/><br/>
            <button onClick={addCustomer}>Add</button>
            <button onClick={deleteCustomer}>Delete</button>
            <button onClick={deleteCustomerByName}>DeleteByEmail</button>
            <button onClick={updateCustomer}>Update</button>
            <br/>
            {customers.map((customer, index) => (
                <div key={index}>
                    <p>Name: {customer.name}</p>
                    <p>Email: {customer.email}</p>
                    <p>Phone: {customer.phone}</p>
                    <p>Phone: {customer.address}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default App
