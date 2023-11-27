/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Cover from "../Shared/Cover/Cover";
import Button from "../Shared/Button/Button";

const TrainerDetail = () => {
    const DetailOf = useParams()
    const email = DetailOf.email
    const axiosPublic = useAxiosPublic()
    const { isPending,error,isFetching, isLoading, data } = useQuery({
        queryKey: ['trainerDetails', email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trainer/${email}`);
            return res.data;
        }
    })

    return (
        <div>
            <Cover title={'Trainer Details'} />
            {
                isPending ?
                    < div >
                        <div className="flex flex-col lg:flex-row  justify-center items-center gap-8">
                            <div>
                                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                                    <div>
                                        <div className="skeleton w-[300px] h-[300px] rounded-lg"></div>
                                    </div>
                                    <div>
                                        <div className="skeleton h-8 w-28 mb-1"></div>
                                        <div className="skeleton h-8 w-28 mb-1"></div>
                                        <div className="flex gap-4 items-center mb-4">
                                            <div className="skeleton h-8 w-20"></div>
                                            <div className="skeleton h-8 w-20"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[350px] md:w-[70vw] mx-2">
                                <div className="skeleton lg:w-[350px] md:w-[70vw] h-48 mx-2"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:gap-8 gap-2 p-8">
                            <div className="skeleton w-32 h-20 md:w-40"></div>
                            <div className="skeleton w-32 h-20 md:w-40"></div>
                            <div className="skeleton w-32 h-20 md:w-40"></div>
                            <div className="skeleton w-32 h-20 md:w-40"></div>
                            <div className="skeleton w-32 h-20 md:w-40"></div>
                        </div>
                    </div>
                    :
                    < div >
                        <div className="flex flex-col lg:flex-row  justify-center items-center gap-8">
                            <div>
                                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                                    <div>
                                        <img className="w-[300px] h-[300px] object-cover rounded-lg" src={data?.photo_url} alt="" />
                                    </div>
                                    <div>
                                        <p className=" text-xl font-semibold">Name: {data?.name}</p>
                                        <p className="text-lg ">Email: <span className="hover:underline">{data?.email}</span></p>
                                        <div className="flex gap-4 items-center mb-4">
                                            <p>Age: {data?.age}</p>
                                            <p>Experience: {data?.experience} years</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {
                                                data?.skill?.map((skill, idx) => <p className="border p-1 pl-2 bg-sky-100 rounded-md" key={idx}>{skill}</p>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[350px] md:w-[70vw] mx-2">
                                <p>{data?.details}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:gap-8 gap-2 p-8">
                            {
                                data?.timeSlots?.map((data, idx) => <div key={idx} className=" ">
                                    <div className="border md:w-40">
                                        <p className="text-center py-4 px-8 font-semibold text-lg bg-gray-400 text-white rounded-sm">{data?.slot}</p>
                                        <hr />
                                        <p className="p-2 bg-white text-center">{data?.time}</p>
                                        <div className="flex justify-center py-2">
                                            {
                                                data?.available ? <Link> <Button text={"Book Now"} /> </Link> : <button disabled className="border py-2 px-4 rounded-md bg-slate-400">Booked</button>
                                            }
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
            }

        </div >
    );
};

export default TrainerDetail;