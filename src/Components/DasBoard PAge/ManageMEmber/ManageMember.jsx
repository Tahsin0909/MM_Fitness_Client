import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Button from "../../Shared/Button/Button";


const ManageMember = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data, isPending } = useQuery({
        queryKey: ['classesMember'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/class/${AuthUser?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <div className="ml-20 ">
                <div className="overflow-x-auto">
                    {
                        isPending ? (
                            <div className="flex gap-4 items-center">
                                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-10"></div>
                                    <div className="skeleton h-4 w-6"></div>
                                </div>
                            </div>
                        )
                            :
                            data?.length == 0 ? <div className="h-screen flex justify-center items-center"><p>No One Enrolled</p></div>
                                :
                                data?.map(member => <div key={member._id} className=" items-center gap-3 ">
                                    {member?.joinMember.length > 0 &&
                                        member?.joinMember.map((memberDAta, idx) =>
                                            <div key={idx} className="border mt-4 w-[400px] p-4 bg-gray-300 rounded-lg">
                                                <div className="p-4" >
                                                    <div className="flex items-center gap-4 mb-2">
                                                        <div className="avatar">
                                                            <div className=" w-20 rounded-full ">
                                                                <img src={memberDAta.stdPhotoURL} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-xl"><p>{memberDAta.stdName}</p></div>
                                                            <div className="text-sm opacity-50"><p>{memberDAta.stdEmail}</p></div>
                                                            <p className="border px-2 my-2 p-1 w-fit rounded-md Shared_Color">{member.packages}</p>
                                                        </div>
                                                    </div>
                                                    <div className="my-2">
                                                        <p className="font-semibold">Class: {member.classTitle}</p>
                                                        <p>Day: {member.schedule.day} <span className="mx-4">Time: {member.schedule.time}</span></p>
                                                    </div>
                                                    <Button text={'Email'}></Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageMember;