/* eslint-disable react/prop-types */
import './Cover.css'
const Cover = ({title}) => {
    return (
        <div className="-translate-y-20 ">
            <div className="hero h-[30vh]" style={{ backgroundImage: 'url(https://images.yourstory.com/cs/7/1da9ec3014cc11e9a1b2b928167b6c62/gymsafetyinside1-1606219434225.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-md demo-text" >
                        <h1 className="mb-5 mt-6 md:mt-4 uppercase text-transparent text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;