/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";
import Cover from "../Shared/Cover/Cover";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useTrainer from "../../Hooks/useTrainer";

const Trainer = () => {
    const [data, isPending] = useTrainer()
    return (
        <div>
            <Cover title={'Trainer'} />
            <div className="-translate-y-16 lg:mx-6">
                <div className="flex justify-end" >
                    <Link to={'/dashboard/beTrainer'} className="my-4">
                        <Button text={'Be a trainer'} />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    {
                        isPending ? <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse lg:w-[450px] w-[300px] h-[300px]"></div>
                        </div>
                            :
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                                {
                                    data &&
                                    data?.map(trainer => <div key={trainer._id}>
                                        <div className="w-[300px] h-full rounded-lg shadow-lg">
                                            <div className=" h-[500px] absolute opacity-0 hover:opacity-100 ease-out duration-300 ">
                                                <div className="grid grid-cols-2 gap-4 p-4 w-[300px] h-[300px] bg-black bg-opacity-50">
                                                    {
                                                        trainer.timeSlots?.map((data, idx) => <div key={idx} className=" ">
                                                            <div>
                                                                <p className="text-center p-1 bg-gray-400 text-white rounded-sm">{data.slot}</p>
                                                                <hr />
                                                                <p className="p-1 bg-white text-center">{data.time}</p>
                                                            </div>
                                                        </div>)
                                                    }
                                                    <Link to={`/trainerDetails/${trainer.email}`}>
                                                        <Button text={'Know More'} />
                                                    </Link>
                                                </div>
                                            </div>
                                            <img className="w-[300px] h-[300px] rounded-t-lg object-cover " src={trainer.photo_url} alt="" />
                                            <div className="p-2 bg-neutral-content rounded-b-lg">
                                                <p>Name: {trainer.name}</p>
                                                <div className="flex items-center gap-6">
                                                    <p>Experience: {trainer.experience} years</p>
                                                    <p>Age: {trainer.age}</p>
                                                </div>
                                                <div className="">
                                                    <div className="grid grid-cols-2 mt-2 gap-2 w-[280px] my-4">
                                                        {
                                                            trainer.skill?.slice(0, 4).map((data, idx) => <p className="border p-1 pl-2 bg-sky-100 rounded-md" key={idx}>{data}</p>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex justify-around mt-4 mb-4">
                                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png" alt="" />
                                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="" />
                                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Trainer;