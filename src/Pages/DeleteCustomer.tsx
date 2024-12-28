import { useContext, useState } from "react";
import { CustomerContext } from "../Store/CustomerProvider.tsx";
import { useNavigate } from "react-router";

export function DeleteCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function DeleteCustomers() {
        setCustomers((customers) => customers.slice(0, -1));
        navigate("/");
    }

    return (
        <div className="container mx-auto p-10">
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Delete Customer Section */}
                <div className="border rounded-lg p-6 shadow-lg">
                        <header className="mb-6">
                        <h1 className="text-purple-600 font-extrabold text-3xl">Delete Customer</h1>
                    </header>
                    <div className="grid gap-6">
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
                            onClick={DeleteCustomers}
                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                        >
                            Delete Customer
                        </button>
                    </div>
                </div>

                {/* Delete Items Section */}
                <div className="border rounded-lg p-6 shadow-lg">
                    <header className="mb-6">
                        <h1 className="text-purple-600 font-extrabold text-3xl">Delete Items</h1>
                    </header>
                    <div className="grid gap-6">
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Item Price"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Item Quantity"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                        >
                            Delete Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
