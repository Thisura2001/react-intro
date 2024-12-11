import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./Pages/DashBoard.tsx";
import {AddCustomer} from "./Pages/AddCustomer.tsx";
import {DeleteCustomer} from "./Pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./Pages/UpdateCustomer.tsx";
import {RootLayOut} from "./component/RootLayOut.tsx";
import {CustomerProvider} from "./component/CustomerProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:'',
            element:<RootLayOut/>,
            children:[
                {path:'',element:<DashBoard/>},
                {path:'/add',element:<AddCustomer/>},
                {path:'/delete',element:<DeleteCustomer/>},
                {path:'/update',element:<UpdateCustomer/>}
            ]

        },
    ])
    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes}></RouterProvider>
            </CustomerProvider>
        </>
    )
}

export default App
