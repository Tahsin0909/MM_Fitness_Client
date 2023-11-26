import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard";

const DashBoardHome = () => {
    return (
        <div className="flex">
            <DashBoard></DashBoard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardHome;