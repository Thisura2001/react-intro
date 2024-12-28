import {useContext, useReducer, useState} from "react";
import { CustomerContext } from "../Store/CustomerProvider.tsx";
import { useNavigate } from "react-router";
import {Customer} from "../Model/Customer.ts";
import {Items} from "../Model/Items.ts";
import {itemContext} from "../Store/ItemProvider.tsx";

export function Delete() {
    const navigate = useNavigate();
    const [customers, disptch] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [items,itemDispatch] = useContext(itemContext);
    const [id, setId] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function DeleteCustomers() {
        const deleteCustomer =new Customer(name,email,phone,address);
        disptch({type:'DELETE_CUSTOMER',payload:deleteCustomer});
        navigate("/");
    }

    function DeleteItems() {
        const deleteItem = new Items(id,itemName,price,quantity);
        itemDispatch({type:'DELETE_ITEM',payload:deleteItem});
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
                        <input type="text"
                               placeholder="Enter the item Id"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                               onChange={(e) => setId(e.target.value)}
                        />
                        <input type="text"
                               placeholder="Enter the item Name"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                               onChange={(e) => setItemName(e.target.value)}
                        />
                        <input type="text"
                               placeholder="Enter the item price"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                               onChange={(e) => setPrice(e.target.value)}
                        />
                        <input type="text"
                               placeholder="Enter the item Quntity"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                               onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button
                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                            onClick={DeleteItems}
                        >
                            Delete Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
