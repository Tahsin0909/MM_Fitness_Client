import Banner from "../../Components/Home Page/Banner/Banner";
import NewsLetter from "../../Components/Home Page/NewsLetter/NewsLetter";
import Team from "../../Components/Home Page/Team/Team";

const OutLet = () => {
    return (
        <div className="">
            <Banner />
            <div className="lg:mx-6">
                <NewsLetter />
                <Team />
            </div>
        </div>
    );
};

export default OutLet;