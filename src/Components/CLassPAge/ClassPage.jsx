import useClass from "../../Hooks/useClass";
import Cover from "../Shared/Cover/Cover";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'react-tabs/style/react-tabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@mui/material';
import { Navigation, Virtual, EffectCreative } from 'swiper/modules';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const ClassPage = () => {
    const [data, isPending, refetch] = useClass()
    console.log(data);
    // trainerEmail: AuthUser?.email,
    // trainerName: AuthUser?.displayName,
    // trainerImage: AuthUser?.photoURL,
    // classTitle: data.classTitle ,
    // category: data.category ,
    // details: data.details ,
    // packages: data.packages ,
    // joinMember: [],
    // schedule: { day: data.day  ,time: data.time  },
    return (
        <div>
            <Cover title={'Trainer CLasses'} />
            <div className="flex justify-center items-center gap-8">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Virtual, EffectCreative]}
                    className="mySwiper md:w-[750px]"
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
                        data?.map((classData, idx) => <SwiperSlide className="" key={classData._id} virtualIndex={idx}>
                            <div className="md:w-[650px] md:pl-28">
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <img className="w-10 md:w-16 rounded-full" src={classData.trainerImage} alt="" />
                                    <div>
                                        <p>Trainer: {classData.trainerName}</p>
                                        <p>Email me: {classData.trainerEmail}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row  ml-10 md:ml-0 md:items-center md:gap-4  font-semibold">
                                    <p className="md:text-lg shared_text_color">{classData.classTitle}</p>
                                    <p className="border px-2 p-1 rounded-md Shared_Color">{classData.packages}</p>
                                </div>
                                <p className="hidden md:block text-sm px-3 py-1 rounded-md text-white border w-fit bg-slate-500">{classData.category}</p>
                                <p className="hidden md:block mt-4">{classData.details.slice(0, 250)}</p>
                                <div>
                                    <p className="ml-10 md:ml-0 border-[#c91b1b] font-semibold mt-4 border-b-2 border-l-2  w-fit px-2">Regular: {classData.schedule.day} {classData.schedule.time}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        )
                    }
                </Swiper>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ClassPage;