import { useNavigate } from "react-router";
import {  useState } from "react";
import {useDispatch} from "react-redux";
import {saveCustomer} from "../Slicers/CustomerSlice.ts";
import {AppDispatch} from "../Store/Store.ts";
import {Customer} from "../Model/Customer.ts";
import {Items} from "../Model/Items.ts";
import {saveItem} from "../Slicers/ItemSlice.ts";

export function Add() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const itemDispatch = useDispatch<AppDispatch>();

    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch(saveCustomer(newCustomer));
        navigate("/");
    }

    function addItems() {
        const newItem = new Items(itemName,price,quantity);
        itemDispatch(saveItem(newItem))
        navigate("/");
    }

    return (
        <>
            <div className="grid md:grid-cols-2 gap-9 m-10">
                {/* Left side */}
                <div className="border rounded-lg p-6 shadow-lg">
                    <header className="mb-6">
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
                        <button
                            onClick={handleSubmit}
                            className="mt-6 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                        >
                            Add Customer
                        </button>
                    </div>
                </div>

                {/* Right side */}
                <div className="border rounded-lg p-6 shadow-lg">
                    <header className="mb-6">
                        <h1 className="font-extrabold text-4xl text-green-500">Add Items</h1>
                    </header>
                    <div className="mt-6">
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

                        <button className="mt-6 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200" onClick={addItems}>Add Items</button>
                    </div>
                </div>
            </div>
        </>
    );
}
