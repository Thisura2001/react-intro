import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";


export function DashBoard() {
    const [customers, setCustomers] = useContext(CustomerContext)
    return(
        <div className="p-6 md">
            <h1 className="text-8xl font-bold text-gray-700 mb-6 text-center">Dashboard</h1>
            {/* main section */}
            <div className="grid grid-cols-2">
                {/* left section */}
                <div className="m-3">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Customers</h1>
                <table className="table-auto border border-gray-200 w-full">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone</td>
                        <td>address</td>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer) => (
                        <tr key={customer.email}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            {/* {customer.name + " " + customer.email + " " + customer.phone} */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
                {/* right section */}
                <div className="m-3">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6">Item</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                        {customers.map((customer: Customer) => (
                            <div
                                id={customer.email}
                                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <h2 className="text-lg font-semibold text-blue-600">
                                    {customer.name}
                                </h2>
                                <p className="text-gray-600">{customer.email}</p>
                                <p className="text-gray-600">{customer.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}