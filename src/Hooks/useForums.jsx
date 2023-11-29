import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useForums = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data, refetch } = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forums');
            return res.data;
        }
    })
    return [data, isPending , refetch]
};

export default useForums;