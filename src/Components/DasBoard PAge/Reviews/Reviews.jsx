import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const Reviews = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm();

    //handle review
    const onSubmit = data => {
        const reviewData = {
            email: AuthUser?.email,
            name: AuthUser?.displayName,
            image: AuthUser?.photoURL,
            rating: data.rating,
            comment: data.comment,
            review: data.review,
        }
        axiosPublic.post('/review', reviewData)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Successful",
                    text: "Thanks For your review",
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
            <div className=" w-fit p-4 bg-neutral-content rounded-md">
                <p className="text-xl font-semibold">We value your review the most:</p>
                <div className="w-[40vw]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex  gap-6">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>

                                <textarea placeholder="Review" {...register("review")} className="input text-start input-bordered w-[24vw] h-[20vh]"></textarea>
                            </div>
                            <div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <input {...register("comment")} type="text"  placeholder="Comment" className="input input-bordered h-[7vh]" required />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input {...register("rating")} type="number" placeholder="rating" className="input input-bordered h-[8vh]" required />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 ">
                            <input className="btn Shared_Color w-full" type="submit" value="Review" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;