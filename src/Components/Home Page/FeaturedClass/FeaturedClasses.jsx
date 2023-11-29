import useClass from "../../../Hooks/useClass";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FeaturedClasses = () => {
    const [data] = useClass()
    console.log(data);
    return (
        <div className="">
            <SectionTitle title={'Featured Classes'} subtitle={'Our Skilled Trainer will take Classes as well '} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6 my-6">
                {
                    data?.slice(0, 6).map(classData => <div key={classData._id}>
                        <div className="border lg:w-[500px] md:w-[350px] w-[300px] lg:h-fit h-[420px] rounded-t-md shadow-xl m-2 hover:scale-105 duration-500">
                            <div className="p-3 bg-slate-50">
                                <div className="flex flex-col md:flex-row md:items-center md:gap-4  font-semibold">
                                    <p className="lg:text-lg  text-base">{classData.classTitle}</p>
                                    <p className="border px-2 p-1 w-fit rounded-md Shared_Color">{classData.packages}</p>
                                </div>
                                <p className="hidden md:block text-sm px-3 py-1 rounded-md text-white border w-fit bg-slate-500">{classData.category}</p>
                                <div className="lg:h-[120px] h-[180px]">
                                    <p className=" mt-4">{classData.details.slice(0, 250)}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className=" border-[#c91b1b] font-semibold mt-4 border-b-2 border-l-2 text-sm lg:text-base w-fit px-2">Regular: {classData.schedule.day} {classData.schedule.time}</p>
                                    <p className="test-sm lg:text-lg font-semibold">Join Member: {classData.joinMember.length}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 Shared_Color mt-2 p-4 h-[100px] rounded-b-md">
                                <img className="w-10 md:w-16 rounded-full" src={classData.trainerImage} alt="" />
                                <div>
                                    <p>Trainer: {classData.trainerName}</p>
                                    <p>Email me: <span className="hover:underline">{classData.trainerEmail}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedClasses;