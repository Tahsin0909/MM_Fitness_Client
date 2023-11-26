import { Link, NavLink } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import './Dashboard.css'
import { IoLogOut } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Components/ContextApi/ContextApi";
import toast, { Toaster } from "react-hot-toast";


const DashBoard = () => {
    const { AuthUser, LogOut } = useContext(AuthContext)
    return (
        <>
            <div className="">
                <div className="hero h-[750px] w-[300px] dashboard">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="h-full flex flex-col justify-start items-start pt-10">
                        <NavLink
                            to={`/dashboard/home`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px]  lg:text-white"}
                        >
                            <div className="flex items-center gap-4">
                                <MdDashboard size={20} />
                                <p>DashBoard</p>
                            </div>

                        </NavLink>
                        <NavLink
                            to={`/dashboard/appliedTrainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px] lg:text-white"}
                        >
                            <div className="flex items-center gap-4">
                                <FaFileAlt size={20} />
                                <p>Applied Trainer</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/dashboard/trainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px]  lg:text-white"}
                        >
                            <div className="flex items-center gap-4">
                                <BsFillPersonBadgeFill size={20} />
                                <p>All Trainer</p>
                            </div>

                        </NavLink>
                        <NavLink
                            to={`/dashboard/beTrainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px] lg:text-white"}
                        >
                            <div className="flex items-center gap-4">
                                <AiFillReconciliation size={25} />
                                <p>Be a Trainer</p>
                            </div>
                        </NavLink>
                        <div className="divider divider-error"></div>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px] lg:text-white"}
                        >
                            <div className="flex items-center gap-4">
                                <IoMdHome size={25} />
                                <p>Home</p>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => { LogOut(), toast.success('Log Out Successful') }}
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[250px] rounded-lg lg:text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[250px] lg:text-white"}
                        >
                            <div className="flex items-center gap-3">
                                <IoLogOut size={25} />
                                <p>Log Out</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
};

export default DashBoard;