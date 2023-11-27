import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data } = useQuery({
        queryKey: ['trainerData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainer');
            return res.data;
        }
    })
    return [data, isPending]
};

export default useTrainer;