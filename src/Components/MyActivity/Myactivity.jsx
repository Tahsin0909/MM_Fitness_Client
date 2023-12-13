import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const MyActivity = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
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
    // handle bmi
    const [bmi, setBMI] = useState(null);
    const [tips, setTips] = useState('Please Provide Us Your Weight in KG and Height In Meter So TAHt We can Guide You');
    const [BmiColor, setBmiColor] = useState('');
    const onSubmit = data => {
        const weight = data.weight
        const height = data.height
        const heightSqr = parseFloat(height) * parseFloat(height)
        const BMI = parseInt(weight) / heightSqr
        setBMI(BMI.toFixed(2))
        switch (true) {
            case BMI < 18.5:
              setTips('You are underweight. Consider increasing calorie intake.');
              setBmiColor("blue")
              break;
            case BMI >= 18.5 && BMI <= 24.9:
              setTips('You are in the normal weight range. Maintain a balanced diet and exercise regularly.');
              setBmiColor("green")
              break;
            case BMI >= 25 && BMI <= 29.9:
              setTips('You are overweight. Focus on portion control and exercise regularly.');
              setBmiColor("orange")
              break;
            default:
              setTips('You are in the obese range. Consider consulting a healthcare professional for guidance.');
              setBmiColor("red")
              break;
          }
          reset()
    }

    return (
        <div>
            <Helmet>
                <title>Mm Dashboard | My Activity</title>
            </Helmet>
            <div className="flex  gap-6 mt-10">
                {/* class JOined */}
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
                {/* booked trainer */}
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
            {/* Calculate Your BMI */}
            <div className="mt-6 border w-[700px] p-4 rounded-md shadow-lg flex gap-10">
                <div>
                    <p className="text-lg font-semibold ">Calculate Your BMI:</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="flex gap-4">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-black">Weight</span>
                                </label>

                                <input {...register("weight")} type="number" placeholder="kg" className="input input-bordered w-[100px] h-[40px] " required />

                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-black">Height</span>
                                </label>

                                <input {...register("height")} type="text" placeholder="meter" className="input input-bordered w-[100px] h-[40px] " required />
                            </div>
                        </div>
                        <div className="mt-2">
                            <input className="btn Shared_Color w-[216px] h-[40px]" type="submit" value="Calculate" />
                        </div>
                    </form>
                </div>
                <div className="">
                    <p style={{ color: `${BmiColor}` }} className="text-lg font-semibold">Your BMI: {bmi}</p>
                    <p style={{ color: `${BmiColor}` }}  className="mt-6 text-lg">{tips}</p>
                </div>
            </div>
        </div>
    );
};

export default MyActivity;