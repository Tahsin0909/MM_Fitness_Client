
const Banner = () => {
    return (
        <div className="-translate-y-20">
            <div className="hero md:min-h-screen min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/Tkg8h4R/64ae17f2b8a56c3c66047362-machines-1200px.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div 
                    data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    className="max-w-lg ">
                        <h1 className="mb-5 md:text-6xl text-4xl font-bold">
                            <span className="shared_text_color relative bottom-4">Health </span>
                            <span className="">& </span>
                            <span className="text-white relative -bottom-4">Fitness</span>
                        </h1>
                        <p className="mb-5">Empowering You to Build Stronger Bodies and Cultivate Healthier, More Resilient Minds</p>
                        <div className="flex items-center justify-center gap-2">
                            <input type="text" placeholder="Get Started" className="input input-bordered input-md w-full max-w-xs" />
                            <button className="shared_Btn md:text-base  text-xs">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;