import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard";

const DashBoardHome = () => {
    return (
        <div className="flex">
            <DashBoard></DashBoard>
            <div className="lg:ml-72 lg:w-[80vw] ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardHome;