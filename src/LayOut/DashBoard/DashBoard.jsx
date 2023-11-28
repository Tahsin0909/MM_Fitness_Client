import {  NavLink } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import './Dashboard.css'
import { IoLogOut } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Components/ContextApi/ContextApi";
import toast, { Toaster } from "react-hot-toast";


const DashBoard = () => {
    const { LogOut } = useContext(AuthContext)
    return (
        <>
            <div className="fixed ">
                <div className="hero h-[100vh] md:w-[20vw]  dashboard">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="h-full flex flex-col justify-start items-start pt-10">
                        <NavLink
                            to={`/dashboard/home`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                        >
                            <div className="flex items-center lg:gap-4 gap-1">
                                <MdDashboard size={20} />
                                <p>DashBoard</p>
                            </div>

                        </NavLink>
                        <NavLink
                            to={`/dashboard/appliedTrainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[20vw] lg:text-base text-sm rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white lg:text-base text-sm"}
                        >
                            <div className="flex items-center lg:gap-4 gap-1">
                                <FaFileAlt size={20} />
                                <p>Applied Trainer</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/dashboard/trainer`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active  Shared_Color py-2 pl-6 w-[18vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[18vw]  text-white lg:text-base text-md"}
                        >
                            <div className="flex items-center lg:gap-4 gap-1">
                                <BsFillPersonBadgeFill size={20} />
                                <p>All Trainer</p>
                            </div>

                        </NavLink>
                        <NavLink
                            to={`/dashboard/beTrainer`}
                            className={({ isActive, isPending }) =>
                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                    >
                        <div className="flex items-center lg:gap-4 gap-1">
                                <AiFillReconciliation size={25} />
                                <p>Be a Trainer</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/dashboard/addForum`}
                            className={({ isActive, isPending }) =>
                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                    >
                        <div className="flex items-center lg:gap-4 gap-1">
                                <BiAddToQueue size={25} />
                                <p>Add Forum</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/dashboard/myReviews`}
                            className={({ isActive, isPending }) =>
                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                    >
                        <div className="flex items-center lg:gap-4 gap-1">
                                <MdOutlineReviews size={25} />
                                <p>My Review</p>
                            </div>
                        </NavLink>
                        <div className="divider divider-error"></div>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[18vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[18vw]  text-white"}
                        >
                            <div className="flex items-center lg:gap-4 gap-1">
                                <IoMdHome size={25} />
                                <p>Home</p>
                            </div>
                        </NavLink>
                        <NavLink
                            onClick={() => { LogOut(), toast.success('Log Out Successful') }}
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive ? "active Shared_Color py-2 pl-6 w-[18vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[18vw]  text-white"}
                        >
                            <div className="flex items-center lg:gap-3 gap-1">
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