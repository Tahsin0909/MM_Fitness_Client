import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";

const BookedPage = () => {
    return (
        <div>
            <Cover title={"Booking Trainer"} />
            <Helmet>
                <title>Meta Motion | Booking</title>
            </Helmet>
            <div className="flex justify-center items-center mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-lg">
                    {/* pacakege 1 */}
                    <div
                        className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
                        <div
                            className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                Silver
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-4xl">$</span>99
                                <span className="self-end text-4xl">/mo</span>
                            </h1>
                        </div>
                        <div className="p-0 flex-1">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        2 Class Per Week
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        5 Hours/week GYM access
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Limited Facilities
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12 text-center">
                            <Link> <Button text={'Book Now'} /> </Link>
                        </div>
                    </div>
                    {/* pacakege 2 */}
                    <div
                        className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
                        <div
                            className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                Gold
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-4xl">$</span>299
                                <span className="self-end text-4xl">/mo</span>
                            </h1>
                        </div>
                        <div className="p-0 flex-1">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        5 Class Per Week
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        10 Hours/week GYM Access
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Parking Facilities
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Limited Supplements
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12">
                            <div className="p-0 mt-12 text-center">
                                <Link> <Button text={'Book Now'} /> </Link>
                            </div>
                        </div>
                    </div>
                    {/* pacakege 3 */}
                    <div
                        className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
                        <div
                            className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                standard
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-4xl">$</span>499
                                <span className="self-end text-4xl">/mo</span>
                            </h1>
                        </div>
                        <div className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        20 Class Per Week
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Unlimited GYM Access
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Unlimited Facilities
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        1 year free Supplements
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                    </svg></span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Locker Room Service
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12">
                            <div className="p-0 mt-12 text-center">
                                <Link> <Button text={'Book Now'} /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedPage;