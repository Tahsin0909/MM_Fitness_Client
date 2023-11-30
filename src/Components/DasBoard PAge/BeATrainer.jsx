import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../ContextApi/ContextApi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BeATrainer = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: AuthUser?.displayName,
            email: AuthUser?.email,
            Image: AuthUser?.photoURL,
        }
    });
    const [skills, setSkills] = useState({
        skill: [],
    });

    //check box event handler
    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { skill } = skills;


        // Case 1 : The user checks the box
        if (checked) {
            setSkills({
                skill: [...skill, value],
            });
        }

        // Case 2  : The user unchecks the box
        else {
            setSkills({
                skill: skill.filter(
                    (e) => e !== value
                ),
            });
        }
    };

    // form data
    const onSubmit = data => {
        const appliedData = {
            name: data.name,
            email: data.email,
            photo_url: data.Image,
            age: data.age,
            skill: skills.skill,
            salary: data.salary,
            experience: data.experience,
            details: data.detail,
            timeSlots: [
                { slot: "Slot 1", time: data.slot1, available: true },
                { slot: "Slot 2", time: data.slot2, available: true },
                { slot: "Slot 3", time: data.slot3, available: true },
                { slot: "Slot 4", time: data.slot4, available: true },
                { slot: "Slot 5", time: data.slot5, available: true },

            ],
            role: "user"
        }
        axiosPublic.post('/appliedTrainer', appliedData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Application Sent Successfully",
                        icon: "success",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
                else {
                    Swal.fire({
                        title: "Sorry",
                        text: "Oh! You already applied for the job",
                        icon: "error",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
            })
        reset()
    }

    return (
        <div className="flex justify-center items-center  h-screen">
            <Helmet>
                <title>Mm Dashboard | Be a Trainer</title>
            </Helmet>
            <div className="lg:p-10 md:p-4 rounded-lg bg-neutral-content">
                <h1 className="text-start mb-4 text-2xl font-bold">Apply Now:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>

                            <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-[250px]" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Profile Image</span>
                            </label>

                            <input {...register("Image")} type="text" placeholder="URL..." className="input input-bordered w-[250px]" />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>

                            <input {...register("email")} type="email" placeholder="email" readOnly className="input input-bordered w-[250px]" />

                        </div>
                        <div className="flex items-center gap-4">
                            <div className="">
                                <label className="label">
                                    <span className="label-text ">Age</span>
                                </label>

                                <input {...register("age")} type="number" placeholder="age" className="input input-bordered w-[115px]" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text ">Experience</span>
                                </label>

                                <input {...register("experience")} type="number" placeholder="experience" className="input input-bordered w-[115px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        {/* checkbox */}
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Skills</span>
                            </label>
                            <div className="grid grid-cols-2 ">
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Body Building"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm "
                                        htmlFor="flexCheckDefault"
                                    >
                                        Body Building
                                    </label>
                                </div>
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Musculation"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Musculation
                                    </label>
                                </div>
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Fitness running"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Fitness running
                                    </label>
                                </div>
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Classic Yoga"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Classic Yoga
                                    </label>
                                </div>
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Weight Lifting"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Weight Lifting
                                    </label>
                                </div>
                                <div className="form-check mt-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="skill"
                                        value="Strength Training"
                                        id="flexCheckDefault"
                                        onChange={
                                            handleChange
                                        }
                                    />
                                    <label
                                        className="form-check-label text-sm"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Strength Training
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* checkbox */}
                        <div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text ">Salary</span>
                                </label>

                                <input {...register("salary")} type="number" placeholder="expected salary" className="input input-bordered w-[250px]" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text ">Detail</span>
                                </label>

                                <input {...register("detail")} type="text" placeholder="About Yourself" className="input input-bordered w-[250px]" />
                            </div>
                        </div>
                    </div>
                    {/* time Slot */}
                    <div className="flex items-center gap-1">
                        <div className="">
                            <label className="label">
                                <span className="label-text ">1st Slot</span>
                            </label>

                            <input {...register("slot1")} type="text" placeholder="1st Slot" className="input input-bordered w-[100px]" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">2nd Slot</span>
                            </label>

                            <input {...register("slot2")} type="text" placeholder="2nd Slot" className="input input-bordered w-[100px]" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">3rd Slot</span>
                            </label>

                            <input {...register("slot3")} type="text" placeholder="3rd Slot" className="input input-bordered w-[100px]" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">4th Slot</span>
                            </label>

                            <input {...register("slot4")} type="text" placeholder="4th Slot" className="input input-bordered w-[100px]" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">5th Slot</span>
                            </label>

                            <input {...register("slot5")} type="text" placeholder="5th Slot" className="input input-bordered w-[100px]" />

                        </div>
                    </div>
                    {/* submit button */}
                    <div className="mt-6">
                        <input className="btn Shared_Color w-full" type="submit" value="Apply" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeATrainer;