/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="">
            <footer className="footer px-6 py-8 bg-base-200 text-base-content ">
                <aside>
                    <div className="">
                        <img className="w-20" src="https://i.ibb.co/MSPYDxr/image-removebg-preview-16.png" alt="" />
                        <p>Empowering Lives Through Fitness Excellence. <br />Reliably Serving You Since 2020</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png" alt="" />
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="" />
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="" />
                    </div>
                </aside>
                <nav className="flex flex-col">
                    <h1 className="text-gray-400">Company</h1>
                    <a className="link link-hover">Go to Home</a>
                    <a className="link link-hover">Top Trainer</a>
                    <a className="link link-hover">Your Classes</a>
                    <a className="link link-hover">Gallery</a>
                </nav>
                <nav className="flex flex-col">
                    <h1 className="text-gray-400">Services</h1>
                    <a className="link link-hover">Personal Training</a>
                    <a className="link link-hover">Fitness Classes</a>
                    <a className="link link-hover">Fitness Assessments</a>
                    <a className="link link-hover">Recovery Services</a>
                </nav>
                <nav className="flex flex-col border">
                    <h1 className="text-gray-400">Legal</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex flex-col border">
                    <h1 className="text-gray-400">Contact Us</h1>
                    <a className="link link-hover">Email: ghost@gmail.com</a>
                    <a className="link link-hover">Phone: 01970199189</a>
                    <a className="link link-hover">Kawla, Dakshin khan <br /> Dhaka-1200</a>
                </nav>
            </footer>
            <div className="text-center py-2 px-4 bg-base-200 ">
                <p className="text-md">Copyright © {year} - All right reserved by JobLancer EnterPrice.</p>
            </div>
        </div>
    );
};

export default Footer;