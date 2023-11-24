import { NavLink } from "react-router-dom";

const NavOptions = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:items-center  "  >
            <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "py-2 px-4 lg:text-white "}
            >
                Home
            </NavLink>
            <NavLink
                to={`/trainer`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "py-2 px-4 lg:text-white "}
            >
               Trainer
            </NavLink>
            <NavLink
                to={`/gallery`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "py-2 px-4  lg:text-white"}
            >
                Gallery
            </NavLink>
            <NavLink
                to={`/forum`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "py-2 px-4  lg:text-white"}
            >
                Forums
            </NavLink>
        </div>
    )
};

export default NavOptions;