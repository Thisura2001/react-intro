import './App.css';
import { useState } from "react";
import { Customer } from "./Model/Customer.ts";

function App() {
    const [customers, setCustomer] = useState<Customer[]>([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer([...customers, newCustomer]);
    }

    return (
        <>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />

            <br />

            <button onClick={addCustomer}>Add Customer</button>

            <br />
                {customers.map((customer, index) => (
                       <div key={index}>{"name: "+ customer.name+  ' '+"  email: "+customer.email+' '+"  Phone: "+customer.phone}</div>
                ))}
        </>
    );
}

export default App;
