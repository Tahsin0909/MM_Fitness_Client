import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data, refetch } = useQuery({
        queryKey: ['trainerData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainer');
            return res.data;
        }
    })
    return [data, isPending, refetch]
};

export default useTrainer;