import { useContext } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Button from "../../Shared/Button/Button";

const ManageSlots = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    console.log(AuthUser);
    const [slotData, setSlotData] = useState(null)
    useEffect(() => {
        if (AuthUser) {
            axiosPublic.get(`/bookTrainer/${AuthUser?.email}`)
                .then(res => setSlotData(res.data))
        }
    }, [AuthUser])
    return (
        <div className="mt-10">
            <div className="border w-[700px] p-4 rounded-md shadow-lg">
                <p className="text-lg font-semibold ">Total Member: {slotData?.length}</p>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Slots</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                slotData?.map(data => <tr key={data._id}>
                                    <td>
                                        <p>{data.userEmail}</p>
                                    </td>
                                    <td>
                                        {data?.trainerSlots}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{data?.time}</span>
                                    </td>
                                    <td>
                                        <Button text={'Email'}/>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageSlots;