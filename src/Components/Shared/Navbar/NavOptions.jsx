import { NavLink } from "react-router-dom";

const NavOptions = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:items-center  gap-2"  >
            <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                    isActive ? "active  border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : " py-2 px-4 "}
            >
                Home
            </NavLink>
            <NavLink
                to={`/trainer`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color  text-white rounded-lg " : isPending ? "pending" : "py-2 px-4 "}
            >
               Trainer
            </NavLink>
            <NavLink
                to={`/gallery`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "py-2 px-4 "}
            >
                Gallery
            </NavLink>
            <NavLink
                to={`/forum`}
                className={({ isActive, isPending }) =>
                    isActive ? "active border py-2 px-4 Shared_Color text-white rounded-lg " : isPending ? "pending" : "py-2 px-4 "}
            >
                Forums
            </NavLink>
        </div>
    )
};

export default NavOptions;