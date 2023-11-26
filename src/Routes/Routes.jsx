
import {
  createBrowserRouter
} from "react-router-dom";
import OutLet from "../LayOut/Home/Outlet";
import Home from "../LayOut/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import GAllery from "../Components/Gallery/GAllery";
import Trainer from "../Components/TrainerPage/Trainer";
import DashBoard from "../LayOut/DashBoard/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <OutLet />
      },
      {
        path: '/logIn',
        element: <LogIn />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/gallery',
        element: <GAllery />
      },
      {
        path: '/trainer',
        element: <Trainer />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard />
  },
]);
