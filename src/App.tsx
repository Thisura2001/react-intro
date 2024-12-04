import './App.css'
import {ChangeEvent, useState} from "react";
function App() {

    const Customer = {
        firstName: '',
        lastName: ''
    }

    const [customer, setCustomer] = useState(Customer)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCustomer({
            ...customer,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <input name='firstName' type='text' placeholder='FirstName' onChange={handleChange}  />
            <input name='lastName' type='text' placeholder='LastName' onChange={handleChange}  />
            <br/>
            <button>Submit</button><br/>
            <h2>Hello..!  {customer.firstName} {customer.lastName}</h2>
        </>
    )
}



export default App
