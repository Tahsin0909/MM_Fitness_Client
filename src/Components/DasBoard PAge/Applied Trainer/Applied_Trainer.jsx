import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Button from "../../Shared/Button/Button";

const Applied_Trainer = () => {
    const axiosSecure = useAxiosSecure()

    const { isPending, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedTrainer');
            return res.data;
        }
    })
    console.log(data);

    return (
        <div className=" px-10 py-4  w-full">
            <div >
                <p className="text-xl font-semibold  uppercase mb-4">Total Application : {data?.length} </p>
                {
                    isPending ? <div className="grid lg:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-4 w-[370px] ">
                            <div className="flex gap-4 items-center">
                                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-[500px] w-full"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-[370px] ">
                            <div className="flex gap-4 items-center">
                                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-[500px] w-full"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-[370px] ">
                            <div className="flex gap-4 items-center">
                                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-[500px] w-full"></div>
                        </div>
                        <div className="flex flex-col gap-4 w-[370px] ">
                            <div className="flex gap-4 items-center">
                                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                </div>
                            </div>
                            <div className="skeleton h-[500px] w-full"></div>
                        </div>
                    </div>
                        :
                        <div className="grid lg:grid-cols-3 gap-8 ">
                            {
                                data?.map(apply => <div key={apply._id} className="w-[370px] rounded-lg bg-neutral-content">
                                    <div className="flex justify-start items-center gap-2 glass Shared_Color rounded-t-lg p-3">
                                        <img className="w-16 h-16 object-cover rounded-full" src={apply.photo_url} alt="" />
                                        <div>
                                            <p>Name: {apply.name}</p>
                                            <p>Email: {apply.email}</p>
                                            <p>Age: {apply.age}</p>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <p className="">{apply.details.slice(0, 200)}...</p>
                                        <p className="my-4 font-semibold">Expected Salary: ${apply.salary}</p>
                                        <div className="h-32">
                                            <div className="grid grid-cols-2 mt-2 gap-2 w-[300px] my-4">
                                                {
                                                    apply.skill.map((data, idx) => <p className="border p-1 pl-2 bg-sky-100 rounded-md" key={idx}>{data}</p>)
                                                }
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4  flex-wrap">
                                            {
                                                apply.timeSlots.map((data, idx) => <div key={idx} className="border-2 ">
                                                    <div>
                                                        <p className="text-center p-1 bg-gray-400 text-white rounded-sm">{data.slot}</p>
                                                        <hr />
                                                        <p className="p-1 bg-white">{data.time}</p>
                                                    </div>
                                                </div>)
                                            }
                                        </div>
                                        <div className="my-3 flex  justify-end items-center gap-4">
                                            <Button text={'Hire'} />
                                            <Button text={'Reject'} />
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Applied_Trainer;