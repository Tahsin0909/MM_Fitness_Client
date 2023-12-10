import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Settings = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser, UpdateUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: AuthUser?.displayName,
            email: AuthUser?.email,
            Image: AuthUser?.photoURL,
        }
    });
    const onSubmit = data => {
        console.log(data);
        UpdateUser(data.name, data.Image)
        axiosPublic.patch(`/UpdateUsers/${AuthUser.email}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId || res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Profile Updated Successfully",
                        icon: "success",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
            })

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Helmet>
                <title>Mm Dashboard | Settings</title>
            </Helmet>
            <div className="md:p-16 p-10 rounded-lg glass md:mt-4 mt-20 w-[800px] shadow-lg">
                <h1 className="text-center text-2xl  font-bold mb-4">Update Now:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>

                            <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Profile Image</span>
                            </label>

                            <input {...register("Image")} type="text" placeholder="URL..." className="input input-bordered" />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>

                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" readOnly />

                        </div>
                    </div>
                    <div className="mt-6 ">
                        <input className="btn Shared_Color w-full" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;