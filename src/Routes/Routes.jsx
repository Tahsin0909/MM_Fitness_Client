
import {
  createBrowserRouter
} from "react-router-dom";
import OutLet from "../LayOut/Home/Outlet";
import Home from "../LayOut/Home/Home";
import LogIn from "../Components/LogIn/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
        {
            path:'/',
            element:<OutLet/>
        },
        {
            path:'/logIn',
            element:<LogIn/>
        }
    ]
  },
]);
