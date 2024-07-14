import { createBrowserRouter } from "react-router-dom";
import { Home, Notfound } from "./pages";
import Layout from "./layout/Layout";


const router=createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            
           
        ],
        

    },
    {
        path:'*',
        element:<Notfound/>
    }

   
])



export default router