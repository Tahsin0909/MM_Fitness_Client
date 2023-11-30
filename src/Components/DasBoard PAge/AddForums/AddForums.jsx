import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUser from "../../../Hooks/useUser";
import { Helmet } from "react-helmet";



const AddForums = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm();
    const [UserData] = useUser()
    //Date When post
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getUTCMonth()
    const realMonth = parseInt(month) + 1;
    const date = currentDate.getDate()
    console.log(month);
    //handle post
    const onSubmit = data => {
        const postData = {
            email: AuthUser?.email,
            name: AuthUser?.displayName,
            authorImage: AuthUser?.photoURL,
            postImage: data.image,
            category: data.category,
            title: data.title,
            content: data.content,
            role: UserData.role,
            dateTime: `${date}/${realMonth}/${year}`,
            likes: [],
            dislikes: []
        }
        axiosPublic.post('/forums', postData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Successful",
                        text: "Your Post Added To Forums",
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
        <div className="py-10 flex justify-center items-center h-screen">
            <Helmet>
                <title>Mm Dashboard | Add Forums</title>
            </Helmet>
            <div className=" w-fit p-4 bg-neutral-content rounded-md">
                <p className="text-xl font-semibold">We value your review the most:</p>
                <div className="w-[40vw]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex  gap-6">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>

                                <textarea placeholder="Content" {...register("content")} className="input text-start input-bordered w-[24vw] h-[20vh]"></textarea>
                            </div>
                            <div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input {...register("title")} type="text" placeholder="Title" className="input input-bordered h-[7vh]" required />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input {...register("category")} type="text" placeholder="Category" className="input input-bordered h-[8vh]" required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-fll">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="image url" className="input w-full input-bordered h-[8vh]" required />
                            </div>
                        </div>
                        <div className="mt-6 ">
                            <input className="btn Shared_Color w-full" type="submit" value="Post" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddForums;