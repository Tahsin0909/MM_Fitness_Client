import { Link } from "react-router-dom";
import NavOptions from "./NavOptions";
import Button from "../Button/Button";

const NavBar = () => {
    return (
        <div className="relative w-full z-50 bg-transparent lg:px-6 ">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                            {
                                <NavOptions />
                            }
                        </ul>
                    </div>
                    <img className="w-24" src="https://i.ibb.co/MSPYDxr/image-removebg-preview-16.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            <NavOptions />
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/logIn'}> <Button text={"Log In"}></Button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;