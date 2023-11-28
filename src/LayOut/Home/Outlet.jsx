import Banner from "../../Components/Home Page/Banner/Banner";
import FeaturedServices from "../../Components/Home Page/FeaturedServices/FeaturedServices";
import NewsLetter from "../../Components/Home Page/NewsLetter/NewsLetter";
import Team from "../../Components/Home Page/Team/Team";

const OutLet = () => {
    return (
        <div className="">
            <Banner />
            <div className="lg:mx-6 mx-2">
                <FeaturedServices/>
                <NewsLetter />
                <Team />
            </div>
        </div>
    );
};

export default OutLet;