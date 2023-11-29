import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaDumbbell, FaPersonBreastfeeding, FaWpforms } from "react-icons/fa6";
import { IoFitness } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiBrokenHeartZone } from "react-icons/gi";
import { Pagination } from 'swiper/modules';
import { Rating } from '@mui/material';

const FeaturedServices = () => {
    return (
        <div className='mb-10 md:my-40'>
            <SectionTitle title={'Our Featured Services'} subtitle={'The Services We provide At low Cost '} />
            <div className='mt-4'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        426: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        769: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px] object-fill' src="https://t4.ftcdn.net/jpg/02/52/90/75/360_F_252907556_KLgfnaiDROoVeoj1kH7eXuAmDJgJu185.jpg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <FaPersonBreastfeeding size={20} />
                                            <span className="text-2xl font-bold">Personal Training</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={4.5} precision={0.5} readOnly />
                                            <p>Packages: $100 - $500/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px] object-fill' src="https://i.ibb.co/NpYLRGN/istockphoto-615284982-612x612.jpg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <FaDumbbell size={20} />
                                            <span className="text-2xl font-bold">Body Building</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={4}  readOnly />
                                            <p>Packages: $100 - $300/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px]' src="https://i.ibb.co/Yhg6t7S/rawImage.jpg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <FaWpforms size={20} />
                                            <span className="text-2xl font-bold">Nutritional Counseling</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={5} readOnly />
                                            <p>Packages: $50 - $200/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px]' src="https://i.ibb.co/XytTdyz/1920-1662117740-fungroupfitnessideas.jpg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <IoFitness size={20} />
                                            <span className="text-2xl font-bold">Fitness Classes</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={4} readOnly />
                                            <p>Packages: $200-$800/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px]' src="https://i.ibb.co/nRSLnLf/clases-yoga-barcelona.jpg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <GrYoga size={20} />
                                            <span className="text-2xl font-bold">Yoga Sessions</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={3} readOnly />
                                            <p>Packages: $100-$300/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-10'>
                            <div className="relative rounded-lg group cursor-pointer overflow-hidden duration-500 md:w-[350px] w-[300px] h-[350px] md:h-[400px] bg-zinc-800 text-gray-50 ">
                                <div className="">
                                    <div className="group-hover:scale-110  duration-500">
                                        <img className='md:w-[350px] w-[300px] h-[350px] md:h-[400px]' src="https://i.ibb.co/Y7HQmNT/Recovery-Studios.jpgg" alt="" />
                                    </div>
                                    <div className="absolute md:w-[350px] w-[300px] left-0 p-5 -bottom-14 duration-500 group-hover:-translate-y-12">
                                        <div className="absolute -z-10 left-0  md:w-[350px] w-[300px] h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900">

                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <GiBrokenHeartZone size={20} />
                                            <span className="text-2xl font-bold">Recovery Services</span>
                                        </div>
                                        <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                                            <Rating defaultValue={5} readOnly />
                                            <p>Packages: $500-$1000/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default FeaturedServices;