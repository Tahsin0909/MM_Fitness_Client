import useClass from "../../Hooks/useClass";
import Cover from "../Shared/Cover/Cover";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, EffectCreative } from 'swiper/modules';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleTab from "../Shared/ScheduleTab/ScheduleTab";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const ClassPage = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [data, isPending, refetch] = useClass()
    console.log(data);
    const Monday = data?.filter(items => items.schedule.day === 'Monday')
    const Tuesday = data?.filter(items => items.schedule.day === 'Tuesday')
    const Wednesday = data?.filter(items => items.schedule.day === 'Wednesday')
    const Thursday = data?.filter(items => items.schedule.day === 'Thursday')
    const Friday = data?.filter(items => items.schedule.day === 'Friday')
    const Saturday = data?.filter(items => items.schedule.day === 'Saturday')
    const Sunday = data?.filter(items => items.schedule.day === 'Sunday')

    const navigate = useNavigate()
    const handleJoin = (id) => {
        const stdData = {
            stdName: AuthUser.displayName,
            stdEmail: AuthUser.email,
            stdPhotoURL: AuthUser.photoURL,

        }
        console.log(stdData)
        axiosPublic.put(`/class/${id}`, stdData)
            .then(res => {
                if (!res.data) {
                    Swal.fire({
                        title: "oh!",
                        text: "You already Joined",
                        icon: "info",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
                else if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Joined",
                        text: "Want To Book A Trainer",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#c91b1b",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Book Now!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/trainer')
                        }
                    });
                    refetch()
                }
            })
    }
    return (
        <div className="md:mb-20 mb-6">
            <Cover title={'Trainer CLasses'} />
            <div className="flex flex-col gap-20 md:gap-10 lg:gap-6 lg:flex-row justify-center items-center ">
                <div className="">
                    {!isPending && <Swiper
                        navigation={true}
                        modules={[Navigation, Virtual, EffectCreative]}
                        className="mySwiper md:w-[700px] w-[300px] 4"
                        Virtual
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                opacity: 0,
                                translate: [0, 0, -500],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                    >
                        {
                            data?.map((classData, idx) => <SwiperSlide className="" key={classData._id} virtualIndex={idx}>
                                <div className="md:w-[650px] w-fit md:pl-28 ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <img className="w-10 md:w-16 rounded-full" src={classData.trainerImage} alt="" />
                                            <div>
                                                <p>Trainer: {classData.trainerName}</p>
                                                <p>Email me: {classData.trainerEmail}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Join Member: {classData.joinMember.length}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row  ml-10 md:ml-0 md:items-center md:gap-4  font-semibold">
                                        <p className="md:text-lg shared_text_color">{classData.classTitle}</p>
                                        <p className="border px-2 p-1 w-fit rounded-md Shared_Color">{classData.packages}</p>
                                    </div>
                                    <p className="hidden md:block text-sm px-3 py-1 rounded-md text-white border w-fit bg-slate-500">{classData.category}</p>
                                    <p className="hidden md:block mt-4">{classData.details.slice(0, 250)}</p>
                                    <div className="flex gap-4 flex-col md:flex-row md:items-center justify-between">
                                        <p className="ml-10 md:ml-0 border-[#c91b1b] font-semibold mt-4 border-b-2 border-l-2  w-fit px-2">Regular: {classData.schedule.day} {classData.schedule.time}</p>
                                        {
                                            classData.joinMember.some(like => like.stdEmail === AuthUser.email) ?
                                                <Button text={"Joined"} />
                                                :
                                                <Link onClick={() => handleJoin(classData._id)} className="ml-10 md:ml-0 ">
                                                    <Button text={"Join Now"} />
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>

                            )
                        }
                    </Swiper>}
                </div>
                <div className=" md:w-[650px] mx-auto shadow-lg">
                    <Tabs
                        selectedTabClassName="bg-[#c91b1b] text-white scale-[1.1]"
                    >
                        <TabList>
                            {
                                week.map((data, idx) => <Tab key={idx}>{data}</Tab>)
                            }
                        </TabList>

                        <TabPanel>
                            <ScheduleTab schedule={Monday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Tuesday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Wednesday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Thursday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Friday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Saturday} />
                        </TabPanel>
                        <TabPanel>
                            <ScheduleTab schedule={Sunday} />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ClassPage;