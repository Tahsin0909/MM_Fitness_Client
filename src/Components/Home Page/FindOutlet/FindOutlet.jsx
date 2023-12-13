import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import { useForm } from "react-hook-form";
const FindOutlet = () => {
    const { register, handleSubmit, reset } = useForm();

    // handle search 
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <Helmet>
                <title>Meta Motion | Gallery</title>
            </Helmet>
            <Cover title={'Our Outlet'} />
            <div className="lg:-translate-y-16 flex items-center justify-between lg:p-4 border">
                <p className="text-xl lg:ml-5 font-semibold border-l-4 pl-1 border-red-600">Find our outlet near you</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
                        <div className="">
                            <label className="label">
                                <span className="label-text text-black">District</span>
                            </label>

                            <input {...register("district")} type="text" placeholder="District" className="input input-bordered w-[200px] h-[50px]" required />
                        </div>
                        <div className="lg:mt-9">
                            <input className="btn Shared_Color  w-[100px] " type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FindOutlet;