
import {
  createBrowserRouter
} from "react-router-dom";
import OutLet from "../LayOut/Home/Outlet";
import Home from "../LayOut/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import GAllery from "../Components/Gallery/GAllery";
import Trainer from "../Components/TrainerPage/Trainer";
import BeATrainer from "../Components/DasBoard PAge/BeATrainer";
import DashBoardHome from "../LayOut/DashBoard/Home/DashBoardHome";
import Applied_Trainer from "../Components/DasBoard PAge/Applied Trainer/Applied_Trainer";
import AllTrainer from "../Components/DasBoard PAge/AllTrainer/Alltrainer";
import TrainerDetail from "../Components/TrainerDetail/TrainerDetail";
import Reviews from "../Components/DasBoard PAge/Reviews/Reviews";
import AddForums from "../Components/DasBoard PAge/AddForums/AddForums";

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
      {
        path: '/trainerDetails',
        element: <TrainerDetail />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoardHome />,
    children: [
      {
        path:'beTrainer',
        element:<BeATrainer/>
      },
      {
        path:'appliedTrainer',
        element:<Applied_Trainer/>
      },
      {
        path:'trainer',
        element:<AllTrainer/>
      },
      {
        path:'myReviews',
        element:<Reviews/>
      },
      {
        path:'addForum',
        element:<AddForums/>
      },
    ]
  },
]);
