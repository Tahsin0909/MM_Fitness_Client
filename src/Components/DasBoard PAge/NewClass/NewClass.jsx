import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const NewClass = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const ClassData = {
            trainerEmail: AuthUser?.email,
            trainerName: AuthUser?.displayName,
            trainerImage: AuthUser?.photoURL,
            classTitle: data.classTitle,
            category: data.category,
            details: data.details,
            packages: data.packages,
            joinMember: [],
            schedule: { day: data.day, time: data.time },
        }
        axiosPublic.post('/class', ClassData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Successful",
                        text: "Your Class Added SuccessFull",
                        icon: "success",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                    reset()
                }
                else {
                    Swal.fire({
                        title: "oh!",
                        text: "Some Error Occurred",
                        icon: "error",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Mm Dashboard | Add Class</title>
            </Helmet>
            <div className="py-10 flex justify-center items-center h-screen">
                <div className=" w-fit p-4 bg-neutral-content rounded-md">
                    <p className="text-xl font-semibold">We value your review the most:</p>
                    <div className="w-[40vw]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row-reverse gap-6">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>

                                    <textarea placeholder="Details" {...register("details")} className="input p-2 text-start input-bordered w-[24vw] h-[20vh]"></textarea>
                                </div>
                                <div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Class Title</span>
                                        </label>
                                        <input {...register("classTitle")} type="text" placeholder="CLass Title" className="input input-bordered h-[7vh]" required />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input {...register("category")} type="text" placeholder="Category" className="input input-bordered h-[8vh]" required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="ml-4">
                                    <label className="label">
                                        <span className="label-text">Packages</span>
                                    </label>
                                    <input {...register("packages")} type="text" placeholder="Packages" className="input  input-bordered h-[8vh]" required />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Schedule</span>
                                    </label>
                                    <select {...register("day")} className="input input-bordered h-[8vh]" style={{ width: '10vw' }} required>
                                        <option value="">Select a day</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Time</span>
                                    </label>
                                    <input {...register("time")} type="text" placeholder="9 am -10am" className="input  input-bordered h-[8vh]" required />
                                </div>
                            </div>

                            <div className="mt-6 ">
                                <input className="btn Shared_Color w-full" type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewClass;