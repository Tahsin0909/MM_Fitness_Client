import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const MyActivity = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    console.log(AuthUser);
    const [classData, setClassData] = useState(null)
    const [trainerData, setTrainerData] = useState(null)
    useEffect(() => {
        if (AuthUser) {
            axiosPublic.get(`/myClass/${AuthUser?.email}`)
                .then(res => setClassData(res.data))
            axiosPublic.get(`/cashIn/${AuthUser?.email}`)
                .then(res => setTrainerData(res.data))
        }
    }, [AuthUser])

    return (
        <div>
            <Helmet>
                <title>Mm Dashboard | My Activity</title>
            </Helmet>
            <div className="flex  gap-6 mt-10">
                <div className="border w-[500px] p-4 rounded-md shadow-lg">
                    <p className="text-lg font-semibold ">Total Class: {classData?.length}</p>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Trainer</th>
                                    <th>Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    classData?.map(data => <tr key={data._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={data?.trainerImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{data?.trainerName}</div>
                                                    <div className="text-sm opacity-50">{data?.trainerEmail}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {data?.classTitle}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{data?.category}</span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="border w-[500px] p-4 rounded-md shadow-lg">
                    <p className="text-lg font-semibold ">Trainer Booked: {trainerData?.length}</p>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Trainer</th>
                                    <th>Slots</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    trainerData?.map(data => <tr key={data._id}>
                                        <td>
                                            <p>{data.trainer}</p>
                                        </td>
                                        <td>
                                            {data?.trainerSlots}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{data?.time}</span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyActivity;