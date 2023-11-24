import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Shared/Navbar/NavBar";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div className="lg:mx-6">
                <NavBar></NavBar>
            </div>
            <div className="mx-2 lg:mx-6">
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Home;