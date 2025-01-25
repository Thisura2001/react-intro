import {useState} from "react";
import { useNavigate } from "react-router";
import {useDispatch} from "react-redux";
import {deleteCustomer} from "../Slicers/CustomerSlice.ts";
import {deleteItem} from "../Slicers/ItemSlice.ts";
import {AppDispatch} from "../Store/Store.ts";

export function Delete() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState("");

    const itemDispatch = useDispatch<AppDispatch>();


    const [itemName, setItemName] = useState("");

    function DeleteCustomers() {
        dispatch(deleteCustomer(email))
        navigate("/");
    }

    function DeleteItems() {
        itemDispatch(deleteItem(itemName))
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
                               placeholder="Enter the item Name"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                               onChange={(e) => setItemName(e.target.value)}
                        />
                        <input type="text"
                               placeholder="Enter the item price"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
                        />
                        <input type="text"
                               placeholder="Enter the item Quntity"
                               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
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
