
const Testimonials = () => {
    return (
        <div className="max-w-screen-xl border flex mx-auto">
            <div >
                <div>
                    <h1 className="md:text-3xl  font-semibold">What Our Happy Clients Say To us</h1>
                    <p>Discover the Inspiring and Transformative Experiences Shared by Our Esteemed Customers Throughout Their Fitness Journeys with Our Supportive Gym Community</p>
                </div>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-12 bg-neutral text-neutral-content">
                            <span>+99</span>
                        </div>
                    </div>
                </div>
                <img className="w-28" src="https://i.ibb.co/MSPYDxr/image-removebg-preview-16.png" alt="" />
            </div>
        </div>
    );
};

export default Testimonials;