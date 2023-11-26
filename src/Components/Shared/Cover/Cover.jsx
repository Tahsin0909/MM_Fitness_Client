/* eslint-disable react/prop-types */
import './Cover.css'
const Cover = ({title}) => {
    return (
        <div>
            <div className="hero h-[30vh]" style={{ backgroundImage: 'url(https://images.yourstory.com/cs/7/1da9ec3014cc11e9a1b2b928167b6c62/gymsafetyinside1-1606219434225.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md demo-text" >
                        <h1 className="mb-5 mt-6 md:mt-0 uppercase text-transparent text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;