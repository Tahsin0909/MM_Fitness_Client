import { NavLink } from "react-router-dom";
import './Dashboard.css'


const DashBoard = () => {
    return (
        <>
            <div className="">
                <div className="  h-screen w-[300px] dashboard">
                    <div className="lg:px-6 py-2 h-full flex flex-col  "  >
                        <NavLink
                            to={`/appliedTrainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active  border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4 lg:text-white"}
                        >
                            Applied Trainer
                        </NavLink>
                        <NavLink
                            to={`/dashboard`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active border py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white"}
                        >
                            All Trainer
                        </NavLink>
                        <NavLink
                            to={`/appliedTrainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4 lg:text-white"}
                        >
                            Be a Trainer
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;