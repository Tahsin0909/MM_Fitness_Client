import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/effect-creative';
// import required modules
import { Navigation, Virtual, EffectCreative, Pagination } from 'swiper/modules';
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";



const Testimonials = () => {
    const [ratings, setRatings] = useState(null)
    const axiosPublic = useAxiosPublic()
    const { isPending, data } = useQuery({
        queryKey: ['reviewData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/review');
            return res.data;
        }
    })
    useEffect(() => {
        const totalRating = data?.reduce((acc, value) => acc + parseFloat(value.rating), 0)
        const RatingsValue = totalRating / data?.length
        setRatings(RatingsValue)
    }, [data])
        if(isPending){
        return <p>Loading</p>
    }
    return (
        <div className="max-w-screen-xl flex flex-col-reverse md:flex-row  mx-auto my-20 shadow-lg p-6 rounded-lg">
            <div >
                <div>
                    <h1 className="md:text-5xl text-xl font-semibold md:max-w-xl">What Our Happy Clients Say About us</h1>
                    <p className="md:max-w-lg my-6">Discover the Inspiring and Transformative Experiences Shared by Our Esteemed Customers Throughout Their Fitness Journeys with Our Supportive Gym Community</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse py-4">
                        {
                            data?.slice(0, 4).map(img => <div key={img._id} className="avatar">
                                <div className="w-12">
                                    <img src={img.image} />
                                </div>
                            </div>)
                        }
                        <div className="avatar placeholder">
                            <div className="w-12 Shared_Color ">
                                <Link to={'/dashboard/myReviews'}><span className="text-3xl">+</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMdStar size={40} color="#f3b310" />
                        <p className="text-sm md:text-lg">{ratings} {`(${data?.length} reviews)`}</p>
                    </div>
                </div>
                <img className="w-28" src="https://i.ibb.co/MSPYDxr/image-removebg-preview-16.png" alt="" />
            </div>
            <Swiper
                navigation={true}
                keyboard={true}
                modules={[Navigation, Virtual, EffectCreative, Pagination]}
                className="mySwiper md:max-w-lg max-w-[280px] md:p-2"
                Virtual
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        opacity: 0,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
            >
                {
                    data?.map((review, idx) =>
                        <SwiperSlide key={review._id} virtualIndex={idx}>
                            <div className="lg:mx-12 md:mx-10 p-4 rounded-md shadow-lg  border">
                                <div className="flex items-center  gap-4">
                                    <img className="md:w-20 w-12 rounded-full object-fill" src={review.image} alt="" />
                                    <div>
                                        <p className="text-lg font-semibold">{review.name}</p>
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                                <div className="py-2 ">
                                    <Rating color="red-500" defaultValue={parseInt(review.rating)} readOnly />
                                </div>
                                <div className="-w-[250px] md:w-full">
                                    <p className="text-xs md:text-base tesTimonial">{review.review?.slice(0, 300)}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    )
                }
            </Swiper>
        </div>
    )
}

export default Testimonials;