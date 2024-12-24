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
            <div className="grid md:grid-cols-2 gap-9 m-10">
                <div className="border rounded-lg p-6 shadow-lg">
                    <header className="mb-6">
                        <h1 className="font-extrabold text-4xl text-cyan-500">Update Customer</h1>
                    </header>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button
                            onClick={UpdateCustomers}
                            className="mt-6 w-full bg-amber-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-500 transition duration-200"
                        >
                            Update Customer
                        </button>
                    </div>
                </div>
                {/* Right side */}
                <div className="border rounded-lg p-6 shadow-lg">
                    <header className="mb-6">
                        <h1 className="font-extrabold text-4xl text-cyan-500">Update Items</h1>
                    </header>
                    <div className="mt-6">
                        <input type="text" placeholder="Enter the item Name" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>
                        <input type="text" placeholder="Enter the item price" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>
                        <input type="text" placeholder="Enter the item Quntity" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>

                        <button  className="mt-6 w-full bg-amber-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-500 transition duration-200">Update Items</button>
                    </div>
                </div>
            </div>
        </>
    )
}