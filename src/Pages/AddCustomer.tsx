import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { Customer } from "../Model/Customer.ts";

export function AddCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone, address);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate("/");
    }

    return (
        <>
            <div className="grid md:grid-cols-2 gap-6 m-10">
                {/* Left side */}
                <div>
                    <header>
                        <h1 className="font-extrabold text-4xl text-green-500">Add Customer</h1>
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
                            onClick={handleSubmit}
                            className="mt-6 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                        >
                            Add Customer
                        </button>
                    </div>
                </div>

                {/* Right side */}
                <div>
                    <header>
                        <h1 className="font-extrabold text-4xl text-green-500">Add Items</h1>
                    </header>
                    <div className="mt-6">
                        <input type="text" placeholder="Enter the item Name" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>
                        <input type="text" placeholder="Enter the item price" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>
                        <input type="text" placeholder="Enter the item Quntity" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"/>

                        <button className="mt-6 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
