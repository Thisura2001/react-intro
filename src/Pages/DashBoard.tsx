import { useContext } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { Customer } from "../Model/Customer.ts";

export function DashBoard() {
    const [customers] = useContext(CustomerContext);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">
                Dashboard
            </h1>
            {/* Main Section */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Left Section */}
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Customers</h1>
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Phone</th>
                            <th className="border border-gray-300 px-4 py-2">Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer: Customer) => (
                            <tr key={customer.email} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                    {customer.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {customer.email}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {customer.phone}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {customer.address}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Right Section */}
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Items</h1>
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Item Name</th>
                            <th className="border border-gray-300 px-4 py-2">Item Price</th>
                            <th className="border border-gray-300 px-4 py-2">Item Quantity</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
