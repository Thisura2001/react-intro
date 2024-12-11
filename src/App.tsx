import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./Pages/DashBoard.tsx";
import {AddCustomer} from "./Pages/AddCustomer.tsx";
import {DeleteCustomer} from "./Pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./Pages/UpdateCustomer.tsx";
import {RootLayOut} from "./component/RootLayOut.tsx";

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
            <RouterProvider router={routes}></RouterProvider>
        </>
    )
}

export default App
