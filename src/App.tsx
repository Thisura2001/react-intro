import './App.css';
import { useState } from "react";
import { Customer } from "./Model/Customer.ts";

function App() {
    const [customers, setCustomer] = useState<Customer[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailToDelete, setEmailToDelete] = useState('');

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer([...customers, newCustomer]);
    }

    function deleteCustomer() {
        setCustomer((customers) => customers.slice(0, -1));
    }

    function deleteByEmail() {
        setCustomer((customers) => customers.filter((customer) => customer.email !== emailToDelete));
    }

    return (
        <>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />

            <br />

            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>

            <br />
            {/* Input field for email to delete */}
            <input
                type="text"
                placeholder="Enter email to delete"
                value={emailToDelete}
                onChange={(e) => setEmailToDelete(e.target.value)}
            />
            <button onClick={deleteByEmail}>Delete By Email</button>

            <br />
            {customers.map((customer, index) => (
                <div key={index}>
                    <p>Name: {customer.name}</p>
                    <p>Email: {customer.email}</p>
                    <p>Phone: {customer.phone}</p>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default App;
