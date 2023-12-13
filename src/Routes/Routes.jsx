
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
import Forums from "../Components/Forums/Forums";
import NewClass from "../Components/DasBoard PAge/NewClass/NewClass";
import ClassPage from "../Components/CLassPAge/ClassPage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllSubscriber from "../Components/DasBoard PAge/AllSubscribers/AllSubscriber";
import ManageMember from "../Components/DasBoard PAge/ManageMEmber/ManageMember";
import BookedPage from "../Components/BookedPAge/BookedPage";
import PrivateRoutes from "./PrivetRoutes";
import MyActivity from "../Components/MyActivity/Myactivity";
import ResomendedClass from "../Components/DasBoard PAge/RecommendedClasses/ResomendedClass";
import Settings from "../Components/DasBoard PAge/Settings/Settings";
import ManageSlots from "../Components/DasBoard PAge/ManageSlots/ManageSlots";
import Balance from "../Components/DasBoard PAge/Balance/Balance";
import FindOutlet from "../Components/Home Page/FindOutlet/FindOutlet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>,
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
        path: '/forum',
        element: <Forums />
      },
      {
        path: '/trainerDetails',
        element: <TrainerDetail />
      },
      {
        path: '/class',
        element: <ClassPage />
      },
      {
        path: '/booked',
        element: <PrivateRoutes><BookedPage /></PrivateRoutes>
      },
      {
        path: '/outlet',
        element: <FindOutlet/>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashBoardHome />,</PrivateRoutes>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'beTrainer',
        element: <PrivateRoutes><BeATrainer/></PrivateRoutes>
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
      {
        path:'addClass',
        element:<NewClass/>
      },
      {
        path:'subscriber',
        element:<AllSubscriber/>
      },
      {
        path:'member',
        element:<ManageMember/>
      },
      {
        path:'myActivity',
        element:<MyActivity/>
      },
      {
        path:'classes',
        element:<ResomendedClass/>
      },
      {
        path:'settings',
        element:<Settings/>
      },
      {
        path:'slots',
        element:<ManageSlots/>
      },
      {
        path:'balance',
        element:<Balance/>
      },
    ]
  },
]);
