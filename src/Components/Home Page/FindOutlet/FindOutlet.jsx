import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { Rating } from "@mui/material";

const FindOutlet = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const [Outlet, setOutlet] = useState(null)
    // handle search 
    const onSubmit = async data => {
        console.log(data);
        const res = await axiosPublic.get(`/outlet/${data.district}`)
        if(res.data){
            setOutlet(res.data);
            reset()
        }
        else{
            setOutlet(null);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Meta Motion | Gallery</title>
            </Helmet>
            <Cover title={'Our Outlet'} />
            <div className="lg:-translate-y-16 flex items-center justify-between lg:p-4">
                <p className="text-xl lg:ml-5 font-semibold border-l-4 pl-1 border-red-600">Find our outlet near you</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
                        <div className="">
                            <label className="label">
                                <span className="label-text text-black">District</span>
                            </label>

                            <input {...register("district")} type="text" placeholder="District(Ex. Bandarban)" className="input input-bordered w-[200px] h-[50px]" required />
                        </div>
                        <div className="lg:mt-9">
                            <input className="btn Shared_Color  w-[100px] " type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mb-4 flex justify-center items-center py-8">
                {
                    Outlet?  
                    <div className="flex items-center gap-4 w-fit p-4 rounded-md bg-slate-200">
                        <div>
                            <img className="w-96" src={Outlet?.img} alt="" />
                        </div>
                        <div>
                            <p className="text-lg m-1 font-semibold">Owner Name: {Outlet?.owner}</p>
                            <p className="text-lg m-1 font-semibold">DIstrict: {Outlet?.name}</p>
                            <Rating color="red-500" defaultValue={parseInt(Outlet?.rating)} readOnly />
                            <p className="text-lg m-1 font-semibold">location: {Outlet?.location}</p>
                            <p className="text-lg m-1 font-semibold">number: {Outlet?.number}</p>
                        </div>
                    </div>
                    :
                    <p>Nothing To show</p>
                }

            </div>
        </div>
    );
};

export default FindOutlet;