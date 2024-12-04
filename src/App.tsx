import './App.css'
import {useState} from "react";
function App() {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
    })
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleChange() {
        setCustomer({
            ...customer,
            firstName:firstName,
            lastName: lastName
        })
    }

    return (
        <>
            <input name='firstName' type='text' placeholder='FirstName' onChange={(e) => setFirstName(e.target.value)}  />
            <input name='lastName' type='text' placeholder='LastName' onChange={(e) => setLastName(e.target.value)}  />
            <br/>
            <button onClick={handleChange}>Submit</button><br/>
            <h2>Hello..!  {customer.firstName} {customer.lastName}</h2>
        </>
    )
}



export default App
