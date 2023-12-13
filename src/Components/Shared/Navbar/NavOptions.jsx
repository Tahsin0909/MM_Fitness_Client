import { NavLink } from "react-router-dom";

const NavOptions = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:items-center  "  >
            <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                    isActive ? "active   py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4 lg:text-white"}
            >
                Home
            </NavLink>
            <NavLink
                to={`/trainer`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4 lg:text-white"}
            >
               Trainer
            </NavLink>
            <NavLink
                to={`/gallery`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white" }
            >
                Gallery
            </NavLink>
            <NavLink
                to={`/class`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white" }
            >
                Classes
            </NavLink>
            <NavLink
                to={`/dashboard`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white" }
            >
                Dashboard
            </NavLink>
            <NavLink
                to={`/forum`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white" }
            >
                Forums
            </NavLink>
            <NavLink
                to={`/outlet`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "hover:scale-[1.1] duration-300 py-2 px-4  lg:text-white" }
            >
                Outlet
            </NavLink>
        </div>
    )
};

export default NavOptions;