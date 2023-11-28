import Banner from "../../Components/Home Page/Banner/Banner";
import FeaturedServices from "../../Components/Home Page/FeaturedServices/FeaturedServices";
import LatestArticles from "../../Components/Home Page/LatestArticles.jsx/LatestArticles";
import NewsLetter from "../../Components/Home Page/NewsLetter/NewsLetter";
import Team from "../../Components/Home Page/Team/Team";
import Testimonials from "../../Components/Home Page/Testimonials/Testimonials";

const OutLet = () => {
    return (
        <div className="">
            <Banner />
            <div className="lg:mx-6 mx-2">
                <FeaturedServices/>
                <Testimonials/>
                <LatestArticles/>
                <NewsLetter />
                <Team />
            </div>
        </div>
    );
};

export default OutLet;