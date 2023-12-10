import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher, FaFileAlt } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md"
import { IoMdHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { MdHotelClass } from "react-icons/md";
import './Dashboard.css'
import { IoLogOut } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Components/ContextApi/ContextApi";
import toast, { Toaster } from "react-hot-toast";
import { FaUsers } from "react-icons/fa6";
import useAdmin from "../../Hooks/useAdmin";
import { VscLayoutActivitybarLeft } from "react-icons/vsc"
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const { LogOut } = useContext(AuthContext)
    const [data, isPending] = useAdmin()
    return (
        <>
            <Helmet>
                <title>Mm Dashboard | Dashboard</title>
            </Helmet>
            <div className="fixed ">
                <div className="hero h-[100vh] md:w-[20vw]  dashboard">
                    <div className="hero-overlay bg-opacity-60"></div>
                    {isPending ? <div><p>Loading....</p></div> :
                        data?.admin ? <div className="h-full flex flex-col justify-start items-start pt-10">
                            <NavLink
                                to={`/dashboard/subscriber`}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active Shared_Color py-2 pl-6 w-[20vw] lg:text-base text-sm rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white lg:text-base text-sm"}
                            >
                                <div className="flex items-center lg:gap-4 gap-1">
                                    <FaUsers size={20} />
                                    <p>All Subscriber</p>
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
                                to={`/dashboard/balance`}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active Shared_Color py-2 pl-6 w-[20vw] lg:text-base text-sm rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white lg:text-base text-sm"}
                            >
                                <div className="flex items-center lg:gap-4 gap-1">
                                    <FaFileAlt size={20} />
                                    <p>Balance</p>
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
                            : data?.trainer ?
                                <div className="h-full flex flex-col justify-start items-start pt-10">
                                    <NavLink
                                        to={`/dashboard/slots`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] lg:text-base text-sm rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white lg:text-base text-sm"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <FaUsers size={20} />
                                            <p>Manage Slots</p>
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        to={`/dashboard/member`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] lg:text-base text-sm rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white lg:text-base text-sm"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <FaUsers size={20} />
                                            <p>Manage Member</p>
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
                                        to={`/dashboard/addClass`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <FaChalkboardTeacher size={25} />
                                            <p>Add New CLass</p>
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
                                :
                                <div className="h-full flex flex-col justify-start items-start pt-10">
                                    <NavLink
                                        to={`/dashboard/myActivity`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <VscLayoutActivitybarLeft size={20} />
                                            <p>Activity Log</p>
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
                                        to={`/dashboard/myReviews`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <MdOutlineReviews size={25} />
                                            <p>My Review</p>
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        to={`/dashboard/settings`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <MdOutlineSettings size={25} />
                                            <p>Profile Settings</p>
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        to={`/dashboard/classes`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active Shared_Color py-2 pl-6 w-[20vw] rounded-lg text-white font-semibold " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 pl-6 w-[20vw]  text-white"}
                                    >
                                        <div className="flex items-center lg:gap-4 gap-1">
                                            <MdHotelClass size={25} />
                                            <p>Recommended Class</p>
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
                    }
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default DashBoard;