import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";
import Cover from "../Shared/Cover/Cover";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Trainer = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data, refetch } = useQuery({
        queryKey: ['trainerData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainer');
            return res.data;
        }
    })
    return (
        <div>
            <Cover title={'Trainer'} />
            <div className="-translate-y-16 lg:mx-6">
                <div className="flex justify-end" >
                    <Link to={'/dashboard/beTrainer'} className="my-4">
                        <Button text={'Be a trainer'} />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;