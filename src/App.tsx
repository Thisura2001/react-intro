import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./Pages/DashBoard.tsx";
import {Add} from "./Pages/Add.tsx";
import {Delete} from "./Pages/Delete.tsx";
import {Update} from "./Pages/Update.tsx";
import {RootLayOut} from "./component/RootLayOut.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:'',
            element:<RootLayOut/>,
            children:[
                {path:'',element:<DashBoard/>},
                {path:'/add',element:<Add/>},
                {path:'/delete',element:<Delete/>},
                {path:'/update',element:<Update/>}
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
