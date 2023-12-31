import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Shared/Navbar/NavBar";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div className="">
                <NavBar></NavBar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Home;